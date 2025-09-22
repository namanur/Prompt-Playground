import { NextResponse } from "next/server";

/**
 * ENV REQUIRED:
 *  - OPENROUTER_API_KEY
 * Optional:
 *  - NEXT_PUBLIC_SITE_URL (improves OpenRouter dashboard context)
 */
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

type Mode = "images" | "writing" | "emails";

function buildSystem(mode: Mode) {
  const baseJsonGuide = `
Return STRICT JSON with keys:
{
  "subject": string,             // short headline or 'N/A'
  "environment": string,         // short scene/env summary (or 'N/A')
  "style": string,
  "lighting": string,
  "camera": string,
  "composition": string,
  "postprocess": string,
  "negatives": string,
  "final_prompt": string,        // the final result (email/writing/image prompt)
  "score": number,               // 0-100
  "technical_params": {          // optional for images
    "steps"?: number,
    "cfg_scale"?: number,
    "sampler"?: string
  }
}
NO extra commentary, code fences, or trailing text. Only JSON.
`;

  if (mode === "images") {
    return `
You are an IMAGE PROMPT writer.
- Output a single, high-quality image-generation prompt in "final_prompt".
- Respect any FaceLock/identity-preservation instructions.
- Keep the prompt concise but information-dense (composition, lighting, lens).
${baseJsonGuide}`.trim();
  }
  if (mode === "emails") {
    return `
You are an EMAIL writer.
- "final_prompt" must be a ready-to-send email with a 'Subject:' line followed by the body.
- No camera/lens or [aspect]/[seed] tokens.
${baseJsonGuide}`.trim();
  }
  // writing
  return `
You are a PROSE writer.
- "final_prompt" must be clean, structured prose (no image tokens or email 'Subject:').
${baseJsonGuide}`.trim();
}

function selectModel(mode: Mode) {
  // Pick whatever you prefer; these are safe defaults
  if (mode === "images") return "deepseek/deepseek-chat"; // writing image prompts
  if (mode === "emails") return "deepseek/deepseek-chat";
  return "deepseek/deepseek-chat";
}

function buildUserPrompt(userIdea: string, mode: Mode, extras: any) {
  const { aspect, quality, seed } = extras || {};
  const tail =
    mode === "images"
      ? `\n\nHINTS: aspect=${aspect ?? "free"}, quality=${quality ?? "8/10"}, seed=${seed ?? "auto"}`
      : "";
  // Ask for the JSON shape explicitly
  return `TASK INPUT:\n${userIdea}\n${tail}\n\nRespond with STRICT JSON as instructed in the system prompt.`;
}

function safeJsonExtract(s: string) {
  // strip code fences if model returns ```json … ```
  const m = s.match(/\{[\s\S]*\}/);
  return m ? m[0] : s;
}

export async function POST(req: Request) {
  try {
    const { userIdea, aspect, quality, seed, mode } = await req.json() as {
      userIdea: string;
      aspect?: string;
      quality?: string;
      seed?: string;
      mode?: Mode;
    };

    const m: Mode = (mode ?? "images");
    const system = buildSystem(m);
    const user = buildUserPrompt(userIdea, m, { aspect, quality, seed });

    const res = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "Prompt Playground Studio"
      },
      body: JSON.stringify({
        model: selectModel(m),
        messages: [
          { role: "system", content: system },
          { role: "user", content: user }
        ],
        temperature: 0.5,
        response_format: { type: "json_object" } // helps some models stay in JSON
      })
    });

    if (!res.ok) {
      const t = await res.text();
      throw new Error(`OpenRouter error: ${res.status} ${res.statusText} — ${t}`);
    }

    const data = await res.json();
    const content: string = data?.choices?.[0]?.message?.content || "";
    const jsonText = safeJsonExtract(content);
    let parsed: any;
    try {
      parsed = JSON.parse(jsonText);
    } catch {
      // fallback minimal shape
      parsed = {
        subject: "N/A",
        environment: "N/A",
        style: "N/A",
        lighting: "N/A",
        camera: "N/A",
        composition: "N/A",
        postprocess: "N/A",
        negatives: "N/A",
        final_prompt: content || userIdea,
        score: 85,
        technical_params: {}
      };
    }

    return NextResponse.json({ success: true, result: parsed });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_MODEL = process.env.OPENROUTER_MODEL || "deepseek/deepseek-chat";
const APP_URL = process.env.OPENROUTER_APP_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const PromptJSON = z.object({
  subject: z.string(),
  environment: z.string(),
  style: z.string(),
  lighting: z.string(),
  camera: z.string(),
  composition: z.string(),
  postprocess: z.string(),
  negatives: z.string(),
  final_prompt: z.string(),
  score: z.number().min(0).max(100),
});
type PromptJSON = z.infer<typeof PromptJSON>;

const SYSTEM_GEN = `You are a world-class prompt engineer for image generation (MJ/SDXL/FLUX).
Output ONE JSON object with keys:
{
  "subject": string,
  "environment": string,
  "style": string,
  "lighting": string,
  "camera": string,
  "composition": string,
  "postprocess": string,
  "negatives": string,
  "final_prompt": string,
  "score": number
}
Rules:
- Audience: general; Tone: professional; Complexity: intermediate.
- "final_prompt" MUST be a single paragraph combining all elements.
- Include concrete subject, environment, style/art direction, lighting, camera (lens/aperture/shot/angle), composition, post-process, and negatives.
- Self-score 0–100 across 10 criteria; if score < 92, silently revise and output ONLY the superior JSON.
- No backticks. No commentary outside JSON.
`;

async function callOpenRouter(messages: any[], model: string, temperature = 0.6) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENROUTER_API_KEY");
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": APP_URL,
      "X-Title": "Prompt Playground",
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
      top_p: 0.9,
      repetition_penalty: 1.05,
      response_format: { type: "json_object" },
      max_tokens: 900,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenRouter error ${res.status}: ${text}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "{}";
}

function ok(body: any, status = 200) {
  return NextResponse.json(body, { status });
}
function fail(message: string, status = 500) {
  return NextResponse.json({ success: false, error: message }, { status });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      prompt = "",
      model = DEFAULT_MODEL,
      params = {},
    } = body || {};

    if (!prompt || typeof prompt !== "string") {
      return fail("Missing 'prompt' string in body", 400);
    }

    if (req.nextUrl.searchParams.get("mock") === "1") {
      const mock: PromptJSON = {
        subject: "ceramic vase with geometric patterns",
        environment: "minimalist studio, soft grey backdrop, polished concrete",
        style: "professional product photography",
        lighting: "softbox from left, gentle natural shadows",
        camera: "85mm, f/2.8, medium shot, slight downward tilt",
        composition: "rule of thirds, vase off-center, natural floral cascade",
        postprocess: "gentle vibrancy, clarity boost, minimal retouch",
        negatives: "blurry, cropped vase, text, watermark, extra objects, oversaturation",
        final_prompt: "Professional product photo of a ceramic vase...",
        score: 95,
      };
      return ok({ success: true, result: mock, output: mock.final_prompt });
    }

    const genRaw = await callOpenRouter(
      [
        { role: "system", content: SYSTEM_GEN },
        { role: "user", content: `User Prompt: ${prompt}\nAdditional Params: ${JSON.stringify(params)}` },
      ],
      model,
      0.6
    );

    let parsed: unknown;
    try {
      parsed = JSON.parse(genRaw);
    } catch (e: any) {
      return fail("Model returned non-JSON content");
    }

    const result = PromptJSON.parse(parsed);

    return ok({ success: true, result, output: result.final_prompt });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return fail("Validation failed: " + JSON.stringify(error.issues), 422);
    }
    if (error instanceof SyntaxError) {
      return fail("Invalid JSON from model: " + error.message, 500);
    }
    return fail(error?.message || "Unexpected error", 500);
  }
}

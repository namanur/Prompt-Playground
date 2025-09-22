import { Template, TemplateMode } from "./types";
import { buildFaceLock } from "./faceLock";

function tabToMode(tab: "emails" | "writing" | "images"): TemplateMode {
  return tab === "emails" ? "email" : tab === "writing" ? "writing" : "image";
}

export function assemblePrompt({
  activeTab,  // "emails" | "writing" | "images"
  builder,
  quality,
  seed,
  tone,
  complexity,
  length,
  audience,
  industry,
  format,
  hasAttachment,     // NEW: boolean (any image uploaded)
  extraPresetText    // NEW: string (e.g., pose preset)
}: {
  activeTab: "emails" | "writing" | "images";
  builder: any;
  quality?: number;
  seed?: number;
  tone?: string;
  complexity?: string;
  length?: string;
  audience?: string;
  industry?: string;
  format?: string;
  hasAttachment?: boolean;
  extraPresetText?: string;
}) {
  const t = builder.template as Template | undefined;
  if (!t) return "";

  const expected = tabToMode(activeTab);
  if (t.mode !== expected) {
    // refuse to assemble a mismatched template
    return "";
  }

  const userBits =
    t.fields?.map((f) => builder.values?.[f.key]).filter(Boolean).join(", ") || "";
  const base = t.prompt || `${t.title} — ${t.subtitle ?? "template"}`;

  // Per-mode envelope
  const modeHeader =
    t.mode === "email"
      ? "TASK: Write a professional EMAIL.\nOUTPUT: Provide a 'Subject:' line and an email body only."
      : t.mode === "writing"
      ? "TASK: Write structured PROSE only.\nOUTPUT: Plain text (no code blocks unless content requires)."
      : "TASK: Write an IMAGE-GENERATION PROMPT only.\nOUTPUT: A single prompt string; no explanations.";

  // Image-only controls
  const imageOpts =
    t.mode === "image"
      ? `[quality:${quality ?? 8}/10] [seed:${seed ?? 0}] [aspect:4:3]`
      : "";

  // Universal control tokens (non-intrusive)
  const controls = `[Tone:${tone ?? "neutral"}] [Complexity:${complexity ?? "medium"}] [Length:${length ?? "medium"}] [Audience:${audience ?? "general"}] [Industry:${industry ?? "general"}] [Format:${format ?? t.mode}]`;

  // FaceLock if a real image is attached
  const faceLock = t.mode === "image" ? buildFaceLock(!!hasAttachment) : "";

  // Extra per-template rules
  const rulesBlock = (t.rules && t.rules.length)
    ? `\nRULES:\n- ${t.rules.join("\n- ")}`
    : "";

  // Negative guidance for images to fight artifacts
  const negatives = t.mode === "image"
    ? `
NEGATIVE:
- No extra fingers/hands/limbs; no warped limbs.
- No plastic skin, no excessive smoothing, no doll eyes.
- No changes to identity when a reference face is present.`
    : "";

  // Composition help (optional)
  const extras = t.mode === "image" && extraPresetText ? `\n${extraPresetText}` : "";

  return [
    modeHeader,
    `\nTITLE: ${t.title}`,
    `\nINSTRUCTIONS: ${base}`,
    userBits ? `\nDETAILS: ${userBits}` : "",
    imageOpts ? `\n${imageOpts}` : "",
    `\n${controls}`,
    rulesBlock,
    faceLock,
    negatives,
    extras
  ].join("");
}

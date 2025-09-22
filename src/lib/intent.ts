export type Intent = "email" | "writing" | "image";

const EMAIL_HINTS = [
  "email", "mail", "subject:", "inbox", "outreach", "invoice", "renewal",
  "partnership", "cta", "signature", "regards"
];
const WRITING_HINTS = [
  "article", "blog", "press note", "press release", "landing hero",
  "ad copy", "social thread", "case study", "write about", "prose"
];
const IMAGE_HINTS = [
  "image", "photo", "render", "poster", "manga", "panel", "make a graphic",
  "generate picture", "shot on", "lens", "lighting", "composition", "4:3", "seed:"
];

export function detectIntent(raw: string, hasAttachment: boolean): Intent {
  const q = (raw || "").toLowerCase();

  // If a real image is attached, bias to image mode
  if (hasAttachment) return "image";

  const score = { email: 0, writing: 0, image: 0 } as Record<Intent, number>;

  EMAIL_HINTS.forEach(h => { if (q.includes(h)) score.email += 2; });
  WRITING_HINTS.forEach(h => { if (q.includes(h)) score.writing += 2; });
  IMAGE_HINTS.forEach(h => { if (q.includes(h)) score.image += 2; });

  // tie-break: long prose → writing, presence of “subject” → email, aspect/seed → image
  if (q.includes("subject:")) score.email += 3;
  if (q.includes("aspect:") || q.includes("seed:")) score.image += 2;
  if (q.length > 400) score.writing += 1;

  const best = (Object.entries(score).sort((a,b)=>b[1]-a[1])[0] ?? ["writing"])[0] as Intent;
  return best;
}

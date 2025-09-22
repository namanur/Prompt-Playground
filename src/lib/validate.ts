export function validateEmailOutput(text: string) {
  // Must contain Subject and at least one line break in body
  const ok = /^subject\s*:/i.test(text) && text.trim().split("\n").length > 2;
  return ok ? null : "Expected email with 'Subject:' and a body.";
}

export function validateWritingOutput(text: string) {
  // Should not contain typical prompt controls or "Subject:"
  if (/subject\s*:/i.test(text)) return "Writing should not include an email subject.";
  if (/\[aspect:|seed:|quality:\]/i.test(text)) return "Writing must not contain image prompt controls.";
  return null;
}

export function validateImageOutput(text: string) {
  // Should not be an email or long prose; should be single-line-ish prompt
  if (/subject\s*:/i.test(text)) return "Image prompt should not include email structures.";
  if (text.split("\n").length > 20) return "Image prompt looks too long; keep it concise.";
  return null;
}

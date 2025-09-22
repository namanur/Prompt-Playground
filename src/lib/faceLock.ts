export function buildFaceLock(hasAttachment: boolean) {
  if (!hasAttachment) return "";
  return `
# FACELOCK (applies because a reference image is attached)
- Preserve the person’s exact identity and facial structure (no age, jawline, eye, or skin tone change).
- No face-swaps or morphing. No cartoonification. No beautification filters.
- Maintain skin texture, moles/scars/freckles, and hairstyle silhouette.
- Match perspective and focal length for realism; avoid plastic skin and AI artifacts.
- If realism conflicts with stylization, choose realism.`;
}

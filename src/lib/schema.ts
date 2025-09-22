import { z } from "zod";

export const ImagePromptSchema = z.object({
  subject: z.string().min(10),
  environment: z.string().min(10),
  mood_style: z.string().min(10),
  lighting: z.string().min(5),
  camera: z.string().min(5),
  composition: z.string().min(5),
  postprocess: z.string().min(5),
  negatives: z.string().min(5),
  final_prompt: z.string().min(80),
  score: z.number().min(0).max(100),
});

export type ImagePrompt = z.infer<typeof ImagePromptSchema>;

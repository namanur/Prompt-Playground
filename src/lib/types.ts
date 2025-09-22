export type TemplateMode = "email" | "writing" | "image";

export type Template = {
  id: string;
  title: string;
  subtitle?: string;
  tags: string[];
  preview: string;
  fields?: Array<{ key: string; label: string; placeholder?: string }>;
  prompt?: string;
  mode: TemplateMode;       // NEW
  rules?: string[];         // NEW - extra guardrails
};

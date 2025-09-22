import "./globals.css";

export const metadata = {
  title: "Prompt Playground",
  description: "Craft 10/10 image prompts — consistent, clear, art-director approved.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}

"use client";

import { useState } from "react";
import StudioTabsClient from "@/components/studio/StudioTabsClient";

export default function Page() {
  const [output, setOutput] = useState<string>("");

  async function handleOptimize() {
    try {
      const res = await fetch("/api/llm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider: "auto", // "grok" | "deepseek" | "auto"
          messages: [
            {
              role: "user",
              content: "Write a 3-line product blurb about steel bowls.",
            },
          ],
          max_tokens: 1200,
          temperature: 0.7,
          top_p: 1,
        }),
      });

      const data = await res.json();
      const text = data?.choices?.[0]?.message?.content || "No output";
      setOutput(text);
    } catch (err: any) {
      setOutput("Error: " + (err?.message || "unknown"));
    }
  }

  return (
    <div className="p-6">
      {/* your existing studio UI */}
      <StudioTabsClient />

      {/* Optimize button */}
      <button
        onClick={handleOptimize}
        className="mt-6 px-4 py-2 rounded bg-blue-500 text-white"
      >
        Optimize
      </button>

      {/* Output area */}
      {output && (
        <div className="mt-4 p-3 border rounded bg-gray-50 whitespace-pre-wrap">
          {output}
        </div>
      )}
    </div>
  );
}

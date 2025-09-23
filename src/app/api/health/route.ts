// src/app/api/health/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Check if OpenRouter API key is present
    const hasApiKey = !!process.env.OPENROUTER_API_KEY;
    
    // Test a simple request to OpenRouter to check connectivity
    let openRouterStatus = "unknown";
    if (hasApiKey) {
      try {
        const response = await fetch("https://openrouter.ai/api/v1/models", {
          headers: {
            "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          },
          signal: AbortSignal.timeout(5000), // 5 second timeout
        });
        openRouterStatus = response.ok ? "healthy" : "error";
      } catch {
        openRouterStatus = "timeout";
      }
    } else {
      openRouterStatus = "no_api_key";
    }

    // Check environment variables
    const envCheck = {
      OPENROUTER_API_KEY: !!process.env.OPENROUTER_API_KEY,
      OPENROUTER_SITE_URL: !!process.env.OPENROUTER_SITE_URL,
      LLM_PRIMARY_MODEL: !!process.env.LLM_PRIMARY_MODEL,
      LLM_SECONDARY_MODEL: !!process.env.LLM_SECONDARY_MODEL,
    };

    const healthStatus = {
      status: openRouterStatus === "healthy" ? "healthy" : "degraded",
      timestamp: new Date().toISOString(),
      services: {
        openrouter: openRouterStatus,
        environment: envCheck,
      },
      uptime: process.uptime(),
      memory: process.memoryUsage(),
    };

    return NextResponse.json(healthStatus, {
      status: healthStatus.status === "healthy" ? 200 : 503
    });

  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        error: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
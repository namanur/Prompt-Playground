// src/app/api/llm/route.ts
import { NextResponse } from "next/server";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

// Enhanced model configuration
const MODEL_CONFIGS = {
  primary: {
    model: process.env.LLM_PRIMARY_MODEL || "x-ai/grok-4-fast:free",
    priority: 1,
    maxRetries: 2
  },
  secondary: {
    model: process.env.LLM_SECONDARY_MODEL || "deepseek/deepseek-chat",
    priority: 2,
    maxRetries: 3
  },
  tertiary: {
    model: "meta-llama/llama-3.1-8b-instruct:free",
    priority: 3,
    maxRetries: 1
  }
};

const MAX_TOKENS_DEFAULT = 1200;
const MAX_TOKENS_HARD_CAP = 2000;
const FALLBACK_STATUS = new Set([402, 429, 500, 502, 503, 504]);

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

// Model health tracking
const modelHealth = new Map<string, {
  lastSuccess: number;
  failures: number;
  avgResponseTime: number;
}>();

function updateModelHealth(model: string, success: boolean, responseTime?: number) {
  const health = modelHealth.get(model) || { lastSuccess: 0, failures: 0, avgResponseTime: 0 };
  
  if (success) {
    health.lastSuccess = Date.now();
    health.failures = Math.max(0, health.failures - 1);
    if (responseTime) {
      health.avgResponseTime = (health.avgResponseTime + responseTime) / 2;
    }
  } else {
    health.failures++;
  }
  
  modelHealth.set(model, health);
}

function getHealthyModels() {
  const now = Date.now();
  return Object.values(MODEL_CONFIGS)
    .filter(config => {
      const health = modelHealth.get(config.model);
      if (!health) return true;
      
      const recentFailures = health.failures > 3;
      const oldLastSuccess = (now - health.lastSuccess) > 300000; // 5 minutes
      
      return !(recentFailures && oldLastSuccess);
    })
    .sort((a, b) => a.priority - b.priority);
}

async function callOpenRouter(model: string, payload: any, timeout: number = 30000) {
  const startTime = Date.now();
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const res = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": process.env.OPENROUTER_SITE_URL || "",
        "X-Title": process.env.OPENROUTER_SITE_NAME || "Prompt Playground",
      },
      body: JSON.stringify({ ...payload, model }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const responseTime = Date.now() - startTime;
    const raw = await res.text();
    
    let data: any = undefined;
    try {
      data = JSON.parse(raw);
    } catch {
      /* keep raw string */
    }

    updateModelHealth(model, res.ok, responseTime);
    return { ok: res.ok, status: res.status, data, raw, responseTime };

  } catch (error: any) {
    clearTimeout(timeoutId);
    updateModelHealth(model, false);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      messages = [],
      max_tokens,
      temperature,
      top_p,
      provider = "auto",
      timeout = 30000
    } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: true, message: "messages[] is required and must not be empty" },
        { status: 400 }
      );
    }

    const finalMaxTokens = Math.min(
      Math.max(1, typeof max_tokens === "number" ? max_tokens : MAX_TOKENS_DEFAULT),
      MAX_TOKENS_HARD_CAP
    );

    const basePayload: any = {
      messages,
      max_tokens: finalMaxTokens,
    };

    if (typeof temperature === "number") basePayload.temperature = temperature;
    if (typeof top_p === "number") basePayload.top_p = top_p;

    // Get healthy models based on provider preference
    const availableModels = provider === "auto" 
      ? getHealthyModels()
      : Object.values(MODEL_CONFIGS).filter(config => {
          if (provider === "grok") return config.model.includes("grok");
          if (provider === "deepseek") return config.model.includes("deepseek");
          return true;
        });

    if (availableModels.length === 0) {
      return NextResponse.json(
        { error: true, message: "No healthy models available" },
        { status: 503 }
      );
    }

    let lastError: any = null;
    
    for (const modelConfig of availableModels) {
      for (let attempt = 0; attempt < modelConfig.maxRetries; attempt++) {
        try {
          const result = await callOpenRouter(modelConfig.model, basePayload, timeout);

          if (result.ok && result.data) {
            return NextResponse.json({
              model_used: modelConfig.model,
              response_time: result.responseTime,
              attempt: attempt + 1,
              health_status: "healthy",
              ...result.data,
            });
          }

          // Check for fallback conditions
          const shouldFallback = FALLBACK_STATUS.has(result.status) ||
            (result.data?.error?.code && [
              "insufficient_quota",
              "insufficient_provider_quota", 
              "payment_required",
              "rate_limited"
            ].includes(result.data.error.code));

          if (!shouldFallback) {
            return NextResponse.json(
              {
                error: true,
                model_attempted: modelConfig.model,
                status: result.status,
                attempt: attempt + 1,
                details: result.data || result.raw,
              },
              { status: result.status || 500 }
            );
          }

          lastError = { 
            model: modelConfig.model, 
            status: result.status, 
            details: result.data || result.raw,
            attempt: attempt + 1
          };

          // Exponential backoff between retries
          if (attempt < modelConfig.maxRetries - 1) {
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
          }

        } catch (error: any) {
          lastError = { 
            model: modelConfig.model, 
            error: error.message, 
            attempt: attempt + 1 
          };
          
          if (attempt < modelConfig.maxRetries - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        }
      }
    }

    return NextResponse.json(
      { 
        error: true, 
        message: "All providers failed after retries", 
        lastError,
        healthStatus: Object.fromEntries(modelHealth.entries())
      },
      { status: 502 }
    );

  } catch (err: any) {
    return NextResponse.json(
      { 
        error: true, 
        message: err?.message ?? "Unknown server error",
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

// Add health check endpoint
export async function GET() {
  return NextResponse.json({
    healthy: true,
    models: Object.fromEntries(modelHealth.entries()),
    configs: Object.keys(MODEL_CONFIGS),
    timestamp: new Date().toISOString()
  });
}
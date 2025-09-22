import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  const dir = path.join(process.cwd(), "public", "images");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter(f=>!f.startsWith(".")).filter(f=>/\.(png|jpg|jpeg|webp|gif|bmp)$/i.test(f));
  } catch {}
  return NextResponse.json({ images: files });
}

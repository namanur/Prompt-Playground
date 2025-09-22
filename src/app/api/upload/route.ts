import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    const name = (form.get("name") as string | null) || "";
    if(!file) return NextResponse.json({error:"No file"}, {status:400});

    const buf = Buffer.from(await file.arrayBuffer());
    const ext = path.extname((file as any).name || "").toLowerCase() || ".png";
    const safe = (name || (file as any).name || "image").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"").slice(0,60);
    const filename = `${safe||"image"}-${Date.now()}${ext}`;

    const outDir = path.join(process.cwd(), "public", "images");
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, filename), buf);

    return NextResponse.json({ ok:true, filename });
  } catch(e:any){
    return NextResponse.json({ error: e?.message || "Upload failed" }, { status: 500 });
  }
}

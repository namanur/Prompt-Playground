"use client";
import Image from "next/image";

export function Thumb({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
      <Image 
        src={src} 
        alt={alt ?? ""} 
        fill 
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

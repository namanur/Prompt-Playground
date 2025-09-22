"use client";

const PRESETS = ["free","1:1","3:2","4:3","16:9","9:16"];

export function AspectSelector({
  value, onChange
}:{ value: string; onChange:(v:string)=>void }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {PRESETS.map(p => (
        <button
          key={p}
          onClick={()=>onChange(p)}
          className={`px-3 py-1 rounded-full border text-sm ${value===p ? "bg-white text-black" : "bg-transparent"}`}
        >
          {p}
        </button>
      ))}
      <input
        placeholder="custom e.g. 21:9"
        className="px-3 py-1 rounded-md border text-sm"
        onBlur={(e)=> e.currentTarget.value && onChange(e.currentTarget.value)}
      />
    </div>
  );
}

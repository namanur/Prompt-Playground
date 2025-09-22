import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs",
        "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
        className
      )}
    >
      {children}
    </span>
  );
}

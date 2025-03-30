import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 250,
  duration = 12,
  anchor = 80,
  borderWidth = 3,
  colorFrom = "#ff6a00",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "absolute inset-[0] rounded-[inherit] border-[calc(var(--border-width)*1px)] border-transparent",
        "[mask-composite:intersect] [mask-image:linear-gradient(to right, white, white)]",
        "after:absolute after:w-[calc(var(--size)*1px)] after:aspect-square after:animate-border-beam after:[animation-delay:var(--delay)]",
        "after:[background:linear-gradient(to left,var(--color-from),var(--color-to),transparent)]",
        "after:[offset-anchor:calc(var(--anchor)*1%)_50%]",
        "after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        "after:opacity-[0.9]", // Higher visibility
        className
      )}
    />
  );
};

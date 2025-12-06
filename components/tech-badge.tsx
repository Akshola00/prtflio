import { cn } from "@/lib/utils"

interface TechBadgeProps {
  name: string
  className?: string
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border transition-colors",
        className,
      )}
    >
      {name}
    </span>
  )
}

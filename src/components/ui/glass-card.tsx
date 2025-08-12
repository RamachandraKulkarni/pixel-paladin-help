import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-2xl bg-glass border border-glass-border rounded-2xl shadow-2xl",
        "transition-all duration-500 hover:shadow-3xl hover:border-white/30",
        "hover:bg-glass/60 hover:backdrop-blur-3xl",
        "relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-50",
        "after:absolute after:inset-0 after:bg-gradient-to-t after:from-primary/5 after:to-transparent after:opacity-30",
        className
      )}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
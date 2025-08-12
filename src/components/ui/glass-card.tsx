import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-glass border border-glass-border rounded-2xl shadow-2xl",
        "transition-all duration-300 hover:shadow-3xl hover:border-white/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
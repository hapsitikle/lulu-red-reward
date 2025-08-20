import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        // tighter on mobile, same feel on desktop
        "bg-card border border-border rounded-lg p-3 sm:p-6 md:p-6 text-center",
        "shadow-card hover:shadow-glow transition-all duration-300",
        "group cursor-default",
        className
      )}
    >
      <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 mx-auto mb-3 sm:mb-3.5 md:mb-4 rounded-full bg-charcoal-lighter flex items-center justify-center text-gold-accent group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
        {title}
      </h3>

      <p className="text-muted-foreground text-[13px] sm:text-sm leading-snug">
        {description}
      </p>
    </div>
  )
}


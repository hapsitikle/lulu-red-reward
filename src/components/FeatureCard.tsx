import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-card border border-border rounded-lg p-6 text-center",
      "shadow-card hover:shadow-glow transition-all duration-300",
      "group cursor-default",
      className
    )}>
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-charcoal-lighter flex items-center justify-center text-gold-accent group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}
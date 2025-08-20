import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { FeatureCard } from "@/components/FeatureCard"
import { CheckCircle, User, Send, ArrowRight, Users, Star } from "lucide-react"

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClaimClick = () => {
    window.open("https://rewarrdsgiant.com/aff_c?offer_id=389&aff_id=134431", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-radial text-foreground relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lulu-red/5 to-transparent pointer-events-none" />
      
      {/* Top bar */}
      <header className="relative z-10 flex justify-end p-6">
        <Button 
          variant="pill" 
          size="pill"
          onClick={() => setIsModalOpen(true)}
          className="animate-fade-in"
        >
          See Live
        </Button>
      </header>

      {/* Main hero content */}
      <main className="relative z-10 container mx-auto px-6 pt-8 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Hero headline */}
          <div className="space-y-2 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <div className="text-foreground">Lululemon is</div>
              <div className="text-lulu-red animate-glow-pulse" style={{ textShadow: '0 0 30px hsl(var(--lulu-red) / 0.5)' }}>
                Rewarding Shoppers in Australia
              </div>
              <div className="text-foreground">Claim in 1 Minute</div>
            </h1>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <FeatureCard
              icon={<CheckCircle size={24} />}
              title="Check eligibility"
              description="Answer a few quick questions to match the offer."
            />
            <FeatureCard
              icon={<User size={24} />}
              title="Enter real details"
              description="Use your real name, email, and postcode to avoid being blocked."
            />
            <FeatureCard
              icon={<Send size={24} />}
              title="Submit"
              description="See available rewards and get contacted."
            />
          </div>

          {/* Primary CTA */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={handleClaimClick}
              className="group"
            >
              Claim Your Gift Card
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
            
            <p className="text-muted-foreground text-sm">
              Next: Check eligibility → complete a short form with your real details.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 text-muted-foreground text-sm animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-gold-accent" />
              <span>12,000+ users helped</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <Star size={16} className="text-gold-accent fill-gold-accent" />
              <span>4.8★ average rating</span>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.8s' }}>
            Australia only. By proceeding, you agree to receive relevant communications about this reward.
          </p>
        </div>
      </main>

      {/* Live Activity Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Live Activity</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-foreground">Online Now</span>
              </div>
              <span className="text-lulu-red font-semibold">38</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold-accent rounded-full" />
                <span className="text-foreground">Claims Today</span>
              </div>
              <span className="text-lulu-red font-semibold">120</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Index
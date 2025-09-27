import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [variant, setVariant] = useState(null);

  // Randomly select variant on component mount (50/50 split)
  useEffect(() => {
    const isHalloween = Math.random() < 0.5;
    setVariant(isHalloween ? 'halloween' : 'reviewer');
  }, []);

  // Affiliate links for each variant
  const affiliateLinks = {
    reviewer: "https://uplevelrewarded.com/aff_c?offer_id=1224&aff_id=134431",
    halloween: "https://uplevelrewarded.com/aff_c?offer_id=1141&aff_id=134431"
  };

  // Content for each variant
  const content = {
    reviewer: {
      title: "Shein shoppers - Limited Time",
      steps: [
        "1. Enter email & basic info.",
        "2. Complete 4+ deals.",
        "3. Complete a product review to get additional $750.",
        "4. Claim your voucher and start shopping."
      ]
    },
    halloween: {
      title: "Shein shoppers - Halloween Special",
      steps: [
        "1. Click the button below to start.",
        "2. Complete deals to earn reward points. 1 extra deal can get you 100 extra dollars.",
        "3. Claim your voucher and start shopping."
      ]
    }
  };

  const handleClaimClick = () => {
  if (variant) {
    window.location.href = affiliateLinks[variant];
  }
};

  // Don't render until variant is selected
  if (!variant) {
    return <div className="min-h-screen bg-gradient-radial"></div>;
  }

  const currentContent = content[variant];

  return (
    <div className="min-h-screen bg-gradient-radial text-foreground relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lulu-red/5 to-transparent pointer-events-none" />

      {/* Main hero - compressed spacing */}
      <main className="relative z-10 container mx-auto px-4 pt-8 pb-2">
        <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-4">
          {/* Headline - smaller and more compact */}
          <div className="animate-fade-in">
            <h1 className="font-bold leading-none tracking-tight text-center">
              {/* Line 1 - slightly bigger text */}
              <span className="block text-[8vw] sm:text-5xl md:text-6xl text-foreground">
                Exclusive Rewards for
              </span>

              {/* Line 2 - dynamic title based on variant */}
              <span
                className="block text-[9vw] sm:text-6xl md:text-7xl text-lulu-red animate-glow-pulse"
                style={{ textShadow: "0 0 24px #E01E3780" }}
              >
                {currentContent.title}
              </span>
            </h1>
          </div>

          {/* Steps - dynamic based on variant */}
          <div
            className="text-left max-w-2xl mx-auto space-y-2 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {currentContent.steps.map((step, index) => {
              // Check if this step contains the "1 extra deal" text for special styling
              const isExtraDealStep = step.includes("1 extra deal can get you 100 extra dollars");
              
              if (isExtraDealStep) {
                // Split the step to highlight the extra deal part
                const parts = step.split("1 extra deal can get you 100 extra dollars");
                return (
                  <p key={index} className="text-sm md:text-base text-foreground">
                    <span className="font-semibold">
                      {parts[0]}
                      <span 
                        className="text-lulu-red animate-glow-pulse font-bold"
                        style={{ textShadow: "0 0 12px #E01E3780" }}
                      >
                        1 extra deal can get you 100 extra dollars
                      </span>
                      {parts[1]}
                    </span>
                  </p>
                );
              }
              
              return (
                <p key={index} className="text-sm md:text-base text-foreground">
                  <span className="font-semibold">{step}</span>
                </p>
              );
            })}
          </div>

          {/* Proof image */}
          <div
            className="animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <img 
              src="images/shein notification.jpeg" 
              alt="Proof of rewards" 
              className="mx-auto w-48 md:w-64 h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Primary CTA - reduced spacing */}
          <div
            className="space-y-2 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={handleClaimClick}
              className="group"
            >
              Claim Your Reward
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </Button>

            <p className="text-muted-foreground text-sm">
              Next: Complete some deals and receieve your voucher
            </p>
          </div>

          {/* Trust indicators - more compact */}
          <div
            className="flex items-center justify-center gap-4 md:gap-6 text-muted-foreground text-sm animate-slide-up"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="flex items-center gap-2">
              <Users size={14} className="text-lulu-red" />
              <span className="text-xs md:text-sm">25,000+ Vouchers Claimed</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <Star size={14} className="text-lulu-red fill-lulu-red" />
              <span className="text-xs md:text-sm">4.8★ average rating</span>
            </div>
          </div>

          {/* Footer note - smaller and more compact */}
          <p
            className="text-[10px] md:text-xs text-muted-foreground max-w-2xl mx-auto leading-tight animate-slide-up"
            style={{ animationDelay: "0.9s" }}
          >
            This is a promotional experience and is not
            affiliated with or endorsed by Shein. By proceeding, you agree
            to receive relevant communications about this reward.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;

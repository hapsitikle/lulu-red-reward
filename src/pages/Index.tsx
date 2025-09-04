import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
// import { Modal } from "@/components/ui/modal";
import { ArrowRight, Users, Star } from "lucide-react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Live Activity numbers
  const [onlineNow, setOnlineNow] = useState(83);     // start at 83
  const [claimsToday, setClaimsToday] = useState(463); // start at 463

  useEffect(() => {
    // Online Now: random walk within [75, 85]
    const onlineInterval = setInterval(() => {
      setOnlineNow((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2..+2
        const next = Math.max(75, Math.min(85, prev + delta));
        return next;
      });
    }, 3500); // ~ every 3.5s

    // Claims Today: steadily increments by 1 (slight jitter on cadence)
    const base = 6000; // 6s
    const jitter = Math.floor(Math.random() * 3000); // +0–3s
    const claimsInterval = setInterval(() => {
      setClaimsToday((prev) => prev + 1);
    }, base + jitter);

    return () => {
      clearInterval(onlineInterval);
      clearInterval(claimsInterval);
    };
  }, []);

  const handleClaimClick = () => {
    window.open(
      "https://glitchy.go2cloud.org/aff_c?offer_id=1139&aff_id=134431"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-radial text-foreground relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lulu-red/5 to-transparent pointer-events-none" />

      {/* Top bar - minimal padding */}
      <header className="relative z-10 flex justify-end p-2 md:p-3">
        <Button
          variant="pill"
          size="pill"
          onClick={() => setIsModalOpen(true)}
          className="animate-fade-in"
        >
          See Live
        </Button>
      </header>

      {/* Main hero - compressed spacing */}
      <main className="relative z-10 container mx-auto px-4 py-2">
        <div className="max-w-4xl mx-auto text-center space-y-3 md:space-y-4">
          {/* Headline - smaller and more compact */}
          <div className="animate-fade-in">
            <h1 className="font-bold leading-none tracking-tight text-center">
              {/* Line 1 - slightly bigger text */}
              <span className="block text-[8vw] sm:text-5xl md:text-6xl text-foreground">
                Exclusive Rewards for
              </span>

              {/* Line 2 - combined into single line, slightly bigger */}
              <span
                className="block text-[9vw] sm:text-6xl md:text-7xl text-lulu-red animate-glow-pulse"
                style={{ textShadow: "0 0 24px #E01E3780" }}
              >
                Lululemon shoppers - Limited Time
              </span>
            </h1>
          </div>

          {/* Steps - simple text format */}
          <div
            className="text-left max-w-2xl mx-auto space-y-2 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-sm md:text-base text-foreground">
              <span className="font-semibold">1. Click to Start:</span> Click the button below to access our reward platform.
            </p>
            <p className="text-sm md:text-base text-foreground">
              <span className="font-semibold">2. Complete deals:</span> Finish simple deals to earn reward points. The more you do, the more you earn.
            </p>
            <p className="text-sm md:text-base text-foreground">
              <span className="font-semibold">3. Unlock Reward:</span> Receive your voucher and start shopping.
            </p>
          </div>

          {/* Proof image */}
          <div
            className="animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <img 
              src="images/proof.jpg" 
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
              <span className="text-xs md:text-sm">12,000+ users helped</span>
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
            affiliated with or endorsed by Lululemon. By proceeding, you agree
            to receive relevant communications about this reward.
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
              <span className="text-lulu-red font-semibold">{onlineNow}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-lulu-red rounded-full" />
                <span className="text-foreground">Claims Today</span>
              </div>
              <span className="text-lulu-red font-semibold">{claimsToday.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Index;

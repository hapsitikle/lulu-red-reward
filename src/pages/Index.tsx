import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star } from "lucide-react";
import { useState, useEffect } from "react";
import './index.css';


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

  const handleClaimClick = () => {
    if (variant) {
      window.location.href = affiliateLinks[variant];
    }
  };

  // Don't render until variant is selected
  if (!variant) {
    return <div className="min-h-screen bg-gray-50"></div>;
  }

  const isHalloween = variant === 'halloween';

  return (
    <div className={`min-h-screen ${isHalloween ? 'halloween-gradient' : 'reviewer-gradient-pink'} flex flex-col items-center justify-center px-4 py-4 fade-in-up`}>
      {/* Dollar icon */}
      <div className={`w-16 h-16 ${isHalloween ? 'bg-white' : 'bg-white'} rounded-full flex items-center justify-center mb-4 relative shadow-lg`}>
        <span className="text-2xl font-bold text-black">$</span>
        <div className="absolute -top-2 -right-2 sparkle-animation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z" fill={isHalloween ? "#ec4899" : "#ec4899"}/>
            <path d="M5 3L6 6L9 7L6 8L5 11L4 8L1 7L4 6L5 3Z" fill={isHalloween ? "#f9a8d4" : "#fbbf24"}/>
          </svg>
        </div>
      </div>

      {/* Main headline */}
      <h1 className={`text-2xl md:text-3xl font-bold text-center mb-3 ${isHalloween ? 'text-pink-400 halloween-text-glow' : 'text-pink-500'}`}>
        Claim Your Gift Card Now!
      </h1>

      <p className={`text-center mb-6 ${isHalloween ? 'text-gray-300' : 'text-gray-600'}`}>
        Higher value deals = faster rewards!
      </p>

      {/* Shein CTA Button */}
      <button
  onClick={handleClaimClick}
  className={`w-full max-w-md ${isHalloween ? 'bg-pink-500 hover:bg-pink-600' : 'bg-pink-500 hover:bg-pink-600'} text-white font-medium py-3 px-4 rounded-full mb-6 shein-cta-button cta-pump-enhanced flex items-center justify-center gap-2 shadow-lg ${!isHalloween ? 'cta-glow-pink' : ''}`}
>
  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
    <span className="text-pink-500 font-bold text-xs">S</span>
  </div>
  <div className="text-left">
    <div className="font-bold text-sm">$750 SHEIN Gift Card</div>
    <div className="text-xs opacity-90">(Enter Email & Complete Deals)</div>
  </div>
</button>


      {/* Steps */}
      <div className={`w-full max-w-lg ${isHalloween ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-6 shadow-lg step-card ${isHalloween ? 'halloween' : ''} mb-6`}>
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number">
              1
            </div>
            <div>
              <h3 className={`font-semibold ${isHalloween ? 'text-white' : 'text-gray-900'} mb-1`}>
                Click A Button Above 👆
              </h3>
              <p className={`text-sm ${isHalloween ? 'text-gray-400' : 'text-gray-600'}`}>
                Start your gift card claim process
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number">
              2
            </div>
            <div>
              <h3 className={`font-semibold ${isHalloween ? 'text-white' : 'text-gray-900'} mb-1`}>
                Enter Your Email & Basic Info
              </h3>
              <p className={`text-sm ${isHalloween ? 'text-gray-400' : 'text-gray-600'}`}>
                We need this to send your gift card
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number">
              3
            </div>
            <div>
              <h3 className={`font-semibold ${isHalloween ? 'text-white' : 'text-gray-900'} mb-1`}>
                Complete Recommended Deals
              </h3>
              <p className={`text-sm ${isHalloween ? 'text-gray-400' : 'text-gray-600'}`}>
                (Higher value deals = faster rewards!)
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number">
              4
            </div>
            <div>
              <h3 className={`font-semibold ${isHalloween ? 'text-white' : 'text-gray-900'} mb-1`}>
                Claim Your Gift Card!
              </h3>
              <p className={`text-sm ${isHalloween ? 'text-gray-400' : 'text-gray-600'}`}>
                Your reward is waiting for you!
              </p>
            </div>
          </div>
        </div>

        <p className={`text-xs ${isHalloween ? 'text-gray-500' : 'text-gray-500'} text-center mt-6`}>
          * Terms and conditions apply. Gift card values may vary based on completed offers.
        </p>
      </div>

      {/* Shein Top Claims Section */}
      <div className="w-full max-w-lg mb-6">
        <h2 className={`text-2xl font-bold text-center mb-2 ${isHalloween ? 'text-pink-400' : 'text-pink-500'}`}>
          SHEIN Top Claims of the Week
        </h2>
        <p className={`text-center text-sm mb-4 ${isHalloween ? 'text-gray-300' : 'text-gray-600'}`}>
          Real results from real people! 💕
        </p>
        
        {/* Mobile swipe indicator */}
        <div className="flex items-center justify-center mb-4">
          <div className={`flex items-center gap-2 text-xs ${isHalloween ? 'text-gray-400' : 'text-gray-500'}`}>
            <div className="w-3 h-3 rounded-full bg-pink-400"></div>
            <span>Swipe to see more</span>
          </div>
        </div>

{/* Proof images carousel */}
<div className="infinite-carousel overflow-x-auto scrollbar-hide snap-x snap-mandatory">
  <div className="flex">
    {/* Original set */}
    <div className="flex-shrink-0 w-60 snap-center mr-4">
      <img 
        src="images/proof1.jpg" 
        alt="Proof of Shein reward claim 1" 
        className="w-full h-auto max-h-72 object-contain rounded-lg shadow-md"
      />
    </div>
    <div className="flex-shrink-0 w-60 snap-center mr-4">
      <img 
        src="images/proof2.jpg" 
        alt="Proof of Shein reward claim 2" 
        className="w-full h-auto max-h-72 object-contain rounded-lg shadow-md"
      />
    </div>
    <div className="flex-shrink-0 w-60 snap-center mr-4">
      <img 
        src="images/proof3.jpg" 
        alt="Proof of Shein reward claim 3" 
        className="w-full h-auto max-h-72 object-contain rounded-lg shadow-md"
      />
    </div>
  </div>
</div>
      </div>

      {/* Trust indicators */}
        
      {/* Trust indicators */}
      <div className={`flex items-center justify-center gap-4 md:gap-6 text-sm mt-6 ${isHalloween ? 'text-gray-400' : 'text-gray-600'}`}>
        <div className="flex items-center gap-2">
          <Users size={14} className="text-pink-500" />
          <span className="text-xs md:text-sm">25,000+ Vouchers Claimed</span>
        </div>
        <div className="w-1 h-1 bg-gray-400 rounded-full" />
        <div className="flex items-center gap-2">
          <Star size={14} className="text-pink-500 fill-pink-500" />
          <span className="text-xs md:text-sm">4.8★ average rating</span>
        </div>
      </div>

      {/* Footer note */}
      <p className={`text-xs ${isHalloween ? 'text-gray-500' : 'text-gray-500'} max-w-2xl mx-auto text-center mt-4 leading-tight`}>
        This is a promotional experience and is not affiliated with or endorsed by Shein. 
        By proceeding, you agree to receive relevant communications about this reward.
      </p>
    </div>
  );
  </div>
  );
};

export default Index;

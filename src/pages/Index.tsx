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
    <div className={`min-h-screen ${isHalloween ? 'bg-black' : 'bg-gray-50'} flex flex-col items-center justify-center px-4 py-8`}>
      {/* Dollar icon */}
      <div className={`w-16 h-16 ${isHalloween ? 'bg-white' : 'bg-white'} rounded-full flex items-center justify-center mb-8 relative shadow-lg`}>
        <span className="text-2xl font-bold text-black">$</span>
        {isHalloween && (
          <div className="absolute -top-2 -right-2 text-pink-400 text-xl">✨</div>
        )}
      </div>

      {/* Main headline */}
      <h1 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isHalloween ? 'text-pink-400' : 'text-pink-500'}`}>
        Claim Your Gift Card Now!
      </h1>

      <p className={`text-center mb-8 ${isHalloween ? 'text-gray-300' : 'text-gray-600'}`}>
        Higher value deals = faster rewards!
      </p>

      {/* Shein CTA Button */}
      <button
        onClick={handleClaimClick}
        className={`w-full max-w-md ${isHalloween ? 'bg-pink-500 hover:bg-pink-600' : 'bg-pink-500 hover:bg-pink-600'} text-white font-semibold py-4 px-6 rounded-full mb-8 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg`}
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-pink-500 font-bold text-sm">S</span>
        </div>
        <div className="text-left">
          <div className="font-bold">$750 SHEIN Gift Card</div>
          <div className="text-sm opacity-90">(Enter Email & Complete Deals)</div>
        </div>
      </button>

      {/* Steps */}
      <div className={`w-full max-w-lg ${isHalloween ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-6 shadow-lg`}>
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
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

        {/* Disclaimer */}
        <p className={`text-xs ${isHalloween ? 'text-gray-500' : 'text-gray-500'} text-center mt-6`}>
          * Terms and conditions apply. Gift card values may vary based on completed offers.
        </p>
      </div>

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
};

export default Index;

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star } from "lucide-react";
import { useState, useEffect } from "react";
import "../index.css";

type ProofVariant = "dms" | "email" | "cart";

const Index = () => {
  const [variant, setVariant] = useState<ProofVariant>("dms");

  // Randomly pick which proof variant to show on each page load
  useEffect(() => {
    const variants: ProofVariant[] = ["dms", "email", "cart"];
    const chosen = variants[Math.floor(Math.random() * variants.length)];
    setVariant(chosen);
  }, []);

  const baseUrl = "https://trkfy.org/aff_c?offer_id=3630&aff_id=134431";

  const getSourceParam = (v: ProofVariant) => {
    if (v === "email") return "email";
    if (v === "cart") return "cart";
    return "dm";
  };

  const handleClaimClick = () => {
    const source = getSourceParam(variant);
    window.location.href = `${baseUrl}&source=${source}`;
  };

  return (
    <div className="min-h-screen halloween-gradient flex flex-col items-center justify-center px-4 py-4 fade-in-up">
      {/* Dollar icon */}
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 relative shadow-lg">
        <span className="text-2xl font-bold text-black">$</span>
        <div className="absolute -top-2 -right-2 sparkle-animation">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
              fill="#ec4899"
            />
            <path
              d="M5 3L6 6L9 7L6 8L5 11L4 8L1 7L4 6L5 3Z"
              fill="#f9a8d4"
            />
          </svg>
        </div>
      </div>

      {/* Main headline */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-3 text-pink-400 halloween-text-glow">
        Claim Your Gift Card Now!
      </h1>

      <p className="text-center mb-6 text-gray-300">
        Higher value deals = faster rewards!
      </p>

      {/* Shein CTA Button */}
      <button
        onClick={handleClaimClick}
        className="w-full max-w-md bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded-full mb-6 shein-cta-button cta-pump-enhanced flex items-center justify-center gap-2 shadow-lg"
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
      <div className="w-full max-w-lg bg-gray-900 rounded-2xl p-6 shadow-lg step-card halloween mb-6">
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number">
              1
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">
                Click The Button Above 👆
              </h3>
              <p className="text-sm text-gray-400">
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
              <h3 className="font-semibold text-white mb-1">
                Enter Your Email & Basic Info
              </h3>
              <p className="text-sm text-gray-400">
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
              <h3 className="font-semibold text-white mb-1">
                Complete Recommended Deals
              </h3>
              <p className="text-sm text-gray-400">
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
              <h3 className="font-semibold text-white mb-1">
                Claim Your Gift Card!
              </h3>
              <p className="text-sm text-gray-400">
                Your reward is waiting for you!
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          * Terms and conditions apply. Gift card values may vary based on
          completed offers.
        </p>
      </div>

      {/* Shein Proof Section (variant-based) */}
      <div className="w-full max-w-lg mb-6">
        {/* Titles & subtitles depend on variant */}
        {variant === "dms" && (
          <>
            <h2 className="text-2xl font-bold text-center mb-2 text-pink-400">
              SHEIN Top Claims of the Week
            </h2>
            <p className="text-center text-sm mb-4 text-gray-300">
              Real results from real people! 💕
            </p>
          </>
        )}

        {variant === "email" && (
          <>
            <h2 className="text-2xl font-bold text-center mb-2 text-pink-400">
              Receive Your Voucher By Email
            </h2>
            <p className="text-center text-sm mb-4 text-gray-300">
              Complete deals and receive your voucher. ✨
            </p>
          </>
        )}

        {variant === "cart" && (
          <>
            <h2 className="text-2xl font-bold text-center mb-2 text-pink-400">
              Cover Your Christmas Shopping and More
            </h2>
            <p className="text-center text-sm mb-4 text-gray-300">
              Hot offer not to be missed this Christmas. 🎁
            </p>
          </>
        )}

        {/* Mobile swipe indicator - ONLY for DMs */}
        {variant === "dms" && (
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div className="w-3 h-3 rounded-full bg-pink-400"></div>
              <span>Swipe to see more</span>
            </div>
          </div>
        )}

        {/* Proof images */}
        <div className="w-full px-4">
          {/* Variant: DMs (existing carousel) */}
          {variant === "dms" && (
            <>
              {/* Desktop view - show all 3 images side by side */}
              <div className="hidden md:flex md:justify-center md:gap-6">
                <div className="w-80">
                  <img
                    src="/images/proof1.jpeg"
                    alt="Proof of Shein reward claim 1"
                    className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
                  />
                </div>
                <div className="w-80">
                  <img
                    src="/images/proof2.jpeg"
                    alt="Proof of Shein reward claim 2"
                    className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
                  />
                </div>
                <div className="w-80">
                  <img
                    src="/images/proof3.jpeg"
                    alt="Proof of Shein reward claim 3"
                    className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>

              {/* Mobile view - scrollable carousel */}
              <div className="md:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                <div className="flex gap-4 px-2">
                  <div className="flex-shrink-0 w-72 snap-center">
                    <img
                      src="/images/proof1.jpeg"
                      alt="Proof of Shein reward claim 1"
                      className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-shrink-0 w-72 snap-center">
                    <img
                      src="/images/proof2.jpeg"
                      alt="Proof of Shein reward claim 2"
                      className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-shrink-0 w-72 snap-center">
                    <img
                      src="/images/proof3.jpeg"
                      alt="Proof of Shein reward claim 3"
                      className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Variant: Email proof (single centered image) */}
          {variant === "email" && (
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <img
                  src="/images/proof-email.jpeg"
                  alt="Sample email confirming a SHEIN voucher"
                  className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
                />
              </div>
            </div>
          )}

          {/* Variant: Cart proof (single centered image) */}
          {variant === "cart" && (
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <img
                  src="/images/proof-cart.jpeg"
                  alt="Sample SHEIN cart with voucher discount applied"
                  className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
                />
              </div>
            </div>
          )}
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-4 md:gap-6 text-sm mt-6 text-gray-400">
          <div className="flex items-center gap-2">
            <Users size={14} className="text-pink-500" />
            <span className="text-xs md:text-sm">
              25,000+ Vouchers Claimed
            </span>
          </div>
          <div className="w-1 h-1 bg-gray-400 rounded-full" />
          <div className="flex items-center gap-2">
            <Star size={14} className="text-pink-500 fill-pink-500" />
            <span className="text-xs md:text-sm">4.8★ average rating</span>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-xs text-gray-500 max-w-2xl mx-auto text-center mt-4 leading-tight">
        This is a promotional experience and is not affiliated with or endorsed
        by Shein. By proceeding, you agree to receive relevant communications
        about this reward.
      </p>
    </div>
  );
};

export default Index;

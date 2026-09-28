import { useState } from "react";
import { ChevronRight } from "lucide-react";

function PropertyDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="
        w-full
        border-b
        border-[var(--neutral-03)]
        py-[28px]
      "
    >
      {/* Translation notice */}
      <div
        className="
          rounded-[14px]
          bg-[var(--neutral-01)]
          px-[20px]
          py-[18px]
          text-[16px]
          leading-[22px]
          text-[var(--shade-02)]
        "
      >
        Some info has been automatically translated.{" "}
        <button
          type="button"
          className="
            border-0
            bg-transparent
            p-0
            font-semibold
            text-[var(--shade-02)]
            underline
            underline-offset-[2px]
          "
        >
          Show original
        </button>
      </div>

      {/* Description */}
      <div
        className="
          mt-[18px]
          text-[18px]
          leading-[30px]
          text-[var(--shade-02)]
        "
      >
        {isExpanded ? (
          <>
            <p className="m-0">
              🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya
              Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim,
              featuring a private jacuzzi 🛁 for the perfect unwind.
            </p>

            <p className="m-0 mt-[2px]">
              Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly
              comfort 🐾, and stylish interiors.
            </p>

            <p className="m-0 mt-[2px]">
              Just minutes from Candolim Beach 🏖️, popular cafés,
              restaurants, and nightlife 🍹, it’s ideal for couples
              seeking romance, relaxation, and a touch of luxury in
              North Goa. ❤️🌴
            </p>
          </>
        ) : (
          <p className="m-0">
            🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya
            Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim,
            featuring a private jacuzzi 🛁 for the perfect unwind.
            Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly
            comfort 🐾, and stylish interiors. Just minutes from
            Candolim Beach 🏖️, popular cafés, restaurants, and
            nightlife 🍹, it’s
          </p>
        )}
      </div>

      {/* Show more / less */}
      <button
        type="button"
        onClick={() => setIsExpanded((value) => !value)}
        className="
          mt-[16px]
          flex
          items-center
          gap-[5px]
          border-0
          bg-transparent
          p-0
          text-[16px]
          font-semibold
          text-[var(--shade-02)]
          underline
          underline-offset-[3px]
        "
      >
        {isExpanded ? "Show less" : "Show more"}

        <ChevronRight
          size={20}
          strokeWidth={1.8}
          className={`
            transition-transform
            duration-200
            ${isExpanded ? "rotate-90" : ""}
          `}
        />
      </button>
    </section>
  );
}

/* =========================================================
   SLEEPING ARRmxANGEMENTS
========================================================= */

export default PropertyDescription;

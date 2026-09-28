import {Tag} from "lucide-react";
function DiscountBanner() {
  return (
    <div
      className="
        mb-[28px]
        flex
        h-[78px]
        w-full
        items-center
        justify-between
        rounded-[16px]
        border
        border-[var(--neutral-03)]
        bg-[var(--shade-01)]
        px-[28px]
      "
    >
      <div className="flex items-center gap-[18px]">
        {/* Discount tag */}

        <div
          className="
            flex
            h-[34px]
            w-[34px]
            rotate-45
            items-center
            justify-center
          "
        >
          <Tag className="rotate-315 text-[#65a84a]" />
        </div>

        <div className="flex flex-col">
          <span
            className="
              text-[16px]
              leading-[22px]
              text-[var(--shade-02)]
            "
          >
            Get 10% off your next stay.
          </span>

          <button
            type="button"
            className="
              w-fit
              border-0
              bg-transparent
              p-0
              text-[16px]
              font-medium
              leading-[22px]
              text-[var(--shade-02)]
              underline
              underline-offset-[2px]
            "
          >
            Terms apply
          </button>
        </div>
      </div>

      <button
        type="button"
        className="
          flex
          h-[44px]
          min-w-[82px]
          items-center
          justify-center
          rounded-[12px]
          border-0
          bg-[var(--neutral-01)]
          px-[18px]
          text-[16px]
          font-semibold
          text-[var(--shade-02)]
          hover:bg-[var(--neutral-02)]
        "
      >
        Claim
      </button>
    </div>
  );
}

/* =========================================================
   BOOKING CARD
========================================================= */

export default DiscountBanner;

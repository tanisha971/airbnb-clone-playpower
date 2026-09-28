import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

function BookingCard({ reserved, onReserve }) {
  const [showToast, setShowToast] = useState(false);

  const handleReserve = () => {
    onReserve();
    setShowToast(true);
  };

  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <>
      <div
        className="
          w-full
          rounded-[16px]
          border
          border-[var(--neutral-03)]
          bg-[var(--shade-01)]
          p-[24px]
          shadow-[0_6px_18px_rgba(0,0,0,0.10)]
        "
      >
        {/* PRICE */}

        <div
          className="
            flex
            items-baseline
            gap-[6px]
            text-[14px]
            leading-[20px]
            text-[var(--shade-02)]
          "
        >
          <strong
            className="
              text-[26px]
              font-semibold
              leading-[32px]
              underline
              underline-offset-[3px]
            "
          >
            ₹28,499
          </strong>

          <span>for 5 nights</span>
        </div>

        {/* DATE + GUESTS */}

        <div
          className="
            mt-[24px]
            overflow-hidden
            rounded-[10px]
            border
            border-[var(--neutral-03)]
          "
        >
          {/* CHECK-IN / CHECKOUT */}

          <div className="grid grid-cols-2">
            <div
              className="
                min-h-[70px]
                border-r
                border-[var(--neutral-03)]
                px-[14px]
                py-[12px]
              "
            >
              <b
                className="
                  block
                  text-[11px]
                  font-semibold
                  uppercase
                  leading-[15px]
                  text-[var(--shade-02)]
                "
              >
                Check-in
              </b>

              <span
                className="
                  mt-[4px]
                  block
                  text-[14px]
                  leading-[20px]
                  text-[var(--shade-02)]
                "
              >
                10/18/2026
              </span>
            </div>

            <div
              className="
                min-h-[70px]
                px-[14px]
                py-[12px]
              "
            >
              <b
                className="
                  block
                  text-[11px]
                  font-semibold
                  uppercase
                  leading-[15px]
                  text-[var(--shade-02)]
                "
              >
                Checkout
              </b>

              <span
                className="
                  mt-[4px]
                  block
                  text-[14px]
                  leading-[20px]
                  text-[var(--shade-02)]
                "
              >
                10/23/2026
              </span>
            </div>
          </div>

          {/* GUESTS */}

          <button
            type="button"
            className="
              flex
              min-h-[70px]
              w-full
              items-center
              justify-between
              border-0
              border-t
              border-[var(--neutral-03)]
              bg-[var(--shade-01)]
              px-[14px]
              py-[12px]
              text-left
              transition-colors
              duration-150
              hover:bg-[var(--neutral-01)]
            "
          >
            <span className="flex flex-col">
              <b
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  leading-[15px]
                  text-[var(--shade-02)]
                "
              >
                Guests
              </b>

              <span
                className="
                  mt-[4px]
                  text-[14px]
                  leading-[20px]
                  text-[var(--shade-02)]
                "
              >
                2 guests
              </span>
            </span>

            <ChevronDown
              size={18}
              strokeWidth={1.7}
              className="text-[var(--shade-02)]"
            />
          </button>
        </div>

        {/* CANCELLATION */}

        <div
          className="
            mt-[16px]
            flex
            min-h-[42px]
            items-center
            justify-center
            rounded-[10px]
            bg-[var(--neutral-01)]
            px-[12px]
            text-[13px]
            leading-[18px]
            text-[var(--neutral-07)]
          "
        >
          Free cancellation before{" "}
          <strong className="ml-[4px] font-semibold text-[var(--shade-02)]">
            17 October
          </strong>
        </div>

        {/* RESERVE */}

        <button
          type="button"
          onClick={handleReserve}
          className="
            mt-[18px]
            flex
            h-[56px]
            w-full
            items-center
            justify-center
            rounded-full
            border-0
            bg-[var(--primary-02)]
            px-[20px]
            text-[16px]
            font-semibold
            leading-[20px]
            text-[var(--shade-01)]
            transition-all
            duration-150
            hover:brightness-95
            active:scale-[0.99]
          "
        >
          Reserve
        </button>
        <p className=" mb-0 mt-[16px] text-center text-[14px] leading-[20px] text-[var(--neutral-07)] " > You won&apos;t be charged yet </p>
      </div>

      {/* RESERVE TOAST */}

      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="
            fixed
            bottom-[48px]
            left-1/2
            z-[500]
            flex
            min-h-[46px]
            -translate-x-1/2
            items-center
            justify-center
            rounded-[8px]
            bg-[var(--shade-02)]
            px-[20px]
            py-[12px]
            text-[13px]
            font-semibold
            leading-[20px]
            text-[var(--shade-01)]
            shadow-[0_4px_12px_rgba(0,0,0,0.20)]
          "
        >
          You won&apos;t be charged yet
        </div>
      )}
    </>
  );
}

export default BookingCard;
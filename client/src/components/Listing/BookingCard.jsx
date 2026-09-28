import { ChevronDown } from "lucide-react";

function BookingCard({ reserved, onReserve }) {
  return (
    <div
      className="
        w-full
        rounded-[16px]
        border
        border-[var(--neutral-03)]
        bg-[var(--shade-01)]
        p-[30px]
        shadow-[0_6px_18px_rgba(0,0,0,0.10)]
      "
    >
      {/* PRICE */}

      <div
        className="
          flex
          items-baseline
          gap-[6px]
          text-[16px]
          text-[var(--shade-02)]
        "
      >
        <strong
          className="
            text-[28px]
            font-semibold
            leading-[34px]
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
          mt-[28px]
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
              min-h-[72px]
              border-r
              border-[var(--neutral-03)]
              px-[16px]
              py-[13px]
            "
          >
            <b
              className="
                block
                text-[12px]
                font-semibold
                uppercase
                leading-[16px]
                text-[var(--shade-02)]
              "
            >
              Check-in
            </b>

            <span
              className="
                mt-[5px]
                block
                text-[16px]
                leading-[20px]
                text-[var(--shade-02)]
              "
            >
              10/18/2026
            </span>
          </div>

          <div
            className="
              min-h-[72px]
              px-[16px]
              py-[13px]
            "
          >
            <b
              className="
                block
                text-[12px]
                font-semibold
                uppercase
                leading-[16px]
                text-[var(--shade-02)]
              "
            >
              Checkout
            </b>

            <span
              className="
                mt-[5px]
                block
                text-[16px]
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
            min-h-[72px]
            w-full
            items-center
            justify-between
            border-0
            border-t
            border-[var(--neutral-03)]
            bg-[var(--shade-01)]
            px-[16px]
            py-[13px]
            text-left
          "
        >
          <span className="flex flex-col">
            <b
              className="
                text-[12px]
                font-semibold
                uppercase
                leading-[16px]
                text-[var(--shade-02)]
              "
            >
              Guests
            </b>

            <span
              className="
                mt-[5px]
                text-[16px]
                leading-[20px]
                text-[var(--shade-02)]
              "
            >
              2 guests
            </span>
          </span>

          <ChevronDown
            size={20}
            strokeWidth={1.6}
            className="text-[var(--shade-02)]"
          />
        </button>
      </div>

      {/* CANCELLATION */}

      <div
        className="
          mt-[20px]
          flex
          h-[44px]
          items-center
          justify-center
          rounded-[10px]
          bg-[var(--neutral-01)]
          px-[12px]
          text-[14px]
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
        onClick={onReserve}
        className="
          mt-[22px]
          flex
          h-[60px]
          w-full
          items-center
          justify-center
          rounded-full
          border-0
          bg-[var(--primary-02)]
          px-[20px]
          text-[18px]
          font-semibold
          text-[var(--shade-01)]
          transition-all
          duration-150
          hover:brightness-95
          active:scale-[0.99]
        "
      >
        {reserved ? "Reserved" : "Reserve"}
      </button>

      <p
        className="
          mt-[20px]
          mb-0
          text-center
          text-[16px]
          text-[var(--neutral-07)]
        "
      >
        You won&apos;t be charged yet
      </p>
    </div>
  );
}

/* =========================================================
   MAIN LISTING COMPONENT
========================================================= */

export default BookingCard;

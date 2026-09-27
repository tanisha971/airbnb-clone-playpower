import {
  CalendarDays,
  ChevronRight,
  CircleUserRound,
} from "lucide-react";

function BookingCard({ listing, reserved, onReserve }) {
  return (
    <aside
      className="
        w-[380px]
        shrink-0
        rounded-[12px]
        border
        border-[var(--neutral-03)]
        bg-[var(--shade-01)]
        p-[24px]
        shadow-[0_6px_20px_rgba(0,0,0,0.12)]
      "
    >
      {/* Price + Rating */}
      <div
        className="
          mb-[20px]
          flex
          flex-wrap
          items-baseline
          gap-x-[4px]
          text-[14px]
          text-[var(--shade-02)]
        "
      >
        <strong
          className="
            text-[22px]
            font-semibold
            leading-[28px]
          "
        >
          {listing.price}
        </strong>

        <span>
          for {listing.nights} nights
        </span>

        <span
          className="
            mt-[6px]
            w-full
            text-[13px]
            text-[var(--neutral-07)]
          "
        >
          ★ {listing.rating} · {listing.reviewCount} reviews
        </span>
      </div>

      {/* Check-in / Checkout */}
      <div
        className="
          flex
          min-h-[72px]
          items-center
          gap-[14px]
          rounded-[8px]
          border
          border-[var(--neutral-03)]
          px-[16px]
          py-[12px]
        "
      >
        <CalendarDays
          size={20}
          strokeWidth={1.7}
          className="
            shrink-0
            text-[var(--shade-02)]
          "
        />

        <div className="grid flex-1 grid-cols-2 gap-[16px]">
          <div className="flex flex-col">
            <b
              className="
                text-[11px]
                font-semibold
                uppercase
                leading-[14px]
                text-[var(--shade-02)]
              "
            >
              Check-in
            </b>

            <span
              className="
                mt-[4px]
                text-[13px]
                text-[var(--neutral-07)]
              "
            >
              10/18/2026
            </span>
          </div>

          <div className="flex flex-col">
            <b
              className="
                text-[11px]
                font-semibold
                uppercase
                leading-[14px]
                text-[var(--shade-02)]
              "
            >
              Checkout
            </b>

            <span
              className="
                mt-[4px]
                text-[13px]
                text-[var(--neutral-07)]
              "
            >
              10/23/2026
            </span>
          </div>
        </div>
      </div>

      {/* Guests */}
      <div
        className="
          mt-[-1px]
          flex
          min-h-[64px]
          items-center
          gap-[14px]
          rounded-[8px]
          border
          border-[var(--neutral-03)]
          px-[16px]
          py-[12px]
        "
      >
        <CircleUserRound
          size={20}
          strokeWidth={1.7}
          className="
            shrink-0
            text-[var(--shade-02)]
          "
        />

        <div className="flex flex-1 flex-col">
          <b
            className="
              text-[11px]
              font-semibold
              uppercase
              leading-[14px]
              text-[var(--shade-02)]
            "
          >
            Guests
          </b>

          <span
            className="
              mt-[4px]
              text-[13px]
              text-[var(--neutral-07)]
            "
          >
            2 guests
          </span>
        </div>

        <ChevronRight
          size={17}
          strokeWidth={1.8}
          className="text-[var(--shade-02)]"
        />
      </div>

      {/* Reserve */}
      <button
        type="button"
        onClick={onReserve}
        className="
          mt-[20px]
          h-[48px]
          w-full
          rounded-[8px]
          border-0
          bg-[var(--primary-02)]
          px-[24px]
          text-[16px]
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

      {/* Note */}
      <p
        className="
          mt-[12px]
          mb-0
          text-center
          text-[12px]
          text-[var(--neutral-07)]
        "
      >
        You won&apos;t be charged yet
      </p>
    </aside>
  );
}

export default BookingCard;
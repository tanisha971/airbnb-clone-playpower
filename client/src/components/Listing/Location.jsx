import {
  ChevronDown,
  LocateFixed,
  MapPin,
  Minus,
  Plus,
} from "lucide-react";

function Location() {
  return (
    <section
      id="location"
      className="
        mx-auto
        w-[calc(100%-180px)]
        max-w-[1120px]
        border-b
        border-[var(--neutral-03)]
        py-[36px]
      "
    >
      {/* Heading */}
      <h2
        className="
          m-0
          text-[16px]
          font-semibold
          leading-[22px]
          text-[var(--shade-02)]
        "
      >
        Where you'll be
      </h2>

      <p
        className="
          m-0
          mt-[6px]
          text-[12px]
          leading-[18px]
          text-[var(--shade-02)]
        "
      >
        Candolim, Goa, India
      </p>

      {/* Map */}
      <div
        className="
          relative
          mt-[20px]
          h-[350px]
          w-full
          overflow-hidden
          rounded-[8px]
          border
          border-[var(--neutral-03)]
          bg-[#e8efe3]
        "
      >
        {/* Water area */}
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-[38%]
            bg-[#b8dce8]
          "
        />

        {/* Land shapes */}
        <div
          className="
            absolute
            left-[30%]
            top-[-15%]
            h-[130%]
            w-[18%]
            rotate-[27deg]
            bg-[#e8efe3]
          "
        />

        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-[65%]
            bg-[#e8efe3]
          "
        />

        {/* Map grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.35]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(120, 130, 120, 0.2) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(120, 130, 120, 0.2) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "120px 90px",
          }}
        />

        {/* Map circles / neighbourhood areas */}
        <div
          className="
            absolute
            left-[25%]
            top-[28%]
            h-[70px]
            w-[70px]
            rounded-full
            bg-[#c8dfb8]
            opacity-80
          "
        />

        <div
          className="
            absolute
            right-[25%]
            top-[48%]
            h-[90px]
            w-[90px]
            rounded-full
            bg-[#c8dfb8]
            opacity-70
          "
        />

        {/* Locate button */}
        <button
          type="button"
          aria-label="Locate"
          className="
            absolute
            left-[12px]
            top-[12px]
            flex
            h-[32px]
            w-[32px]
            items-center
            justify-center
            rounded-[6px]
            border
            border-[var(--neutral-03)]
            bg-[var(--shade-01)]
            text-[var(--shade-02)]
            shadow-[0_1px_4px_rgba(0,0,0,0.12)]
          "
        >
          <LocateFixed
            size={16}
            strokeWidth={1.8}
          />
        </button>

        {/* Zoom controls */}
        <div
          className="
            absolute
            right-[12px]
            top-[12px]
            flex
            flex-col
            overflow-hidden
            rounded-[6px]
            border
            border-[var(--neutral-03)]
            bg-[var(--shade-01)]
            shadow-[0_1px_4px_rgba(0,0,0,0.12)]
          "
        >
          <button
            type="button"
            aria-label="Zoom in"
            className="
              flex
              h-[32px]
              w-[32px]
              items-center
              justify-center
              border-0
              bg-[var(--shade-01)]
              text-[var(--shade-02)]
              hover:bg-[var(--neutral-01)]
            "
          >
            <Plus
              size={15}
              strokeWidth={1.8}
            />
          </button>

          <div className="h-px bg-[var(--neutral-03)]" />

          <button
            type="button"
            aria-label="Zoom out"
            className="
              flex
              h-[32px]
              w-[32px]
              items-center
              justify-center
              border-0
              bg-[var(--shade-01)]
              text-[var(--shade-02)]
              hover:bg-[var(--neutral-01)]
            "
          >
            <Minus
              size={15}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* Property marker */}
        <div
          className="
            absolute
            left-[49%]
            top-[48%]
            flex
            h-[34px]
            w-[34px]
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[var(--shade-02)]
            text-[var(--shade-01)]
            shadow-[0_2px_6px_rgba(0,0,0,0.25)]
          "
        >
          <MapPin
            size={18}
            fill="currentColor"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Location disclaimer */}
      <p
        className="
          m-0
          mt-[12px]
          text-[10px]
          leading-[15px]
          text-[var(--neutral-07)]
        "
      >
        Exact location will be provided after booking.
      </p>

      {/* Neighbourhood */}
      <div className="mt-[28px]">
        <h3
          className="
            m-0
            text-[14px]
            font-semibold
            leading-[20px]
            text-[var(--shade-02)]
          "
        >
          Neighbourhood highlights
        </h3>

        <p
          className="
            m-0
            mt-[8px]
            max-w-[760px]
            text-[12px]
            leading-[19px]
            text-[var(--shade-02)]
          "
        >
          Located in the heart of Candolim, Anjuna and Goa
          offers a peaceful stay with easy access to beaches,
          cafés, shops and popular attractions.
        </p>

        <button
          type="button"
          className="
            mt-[5px]
            flex
            items-center
            gap-[3px]
            border-0
            bg-transparent
            p-0
            text-[11px]
            font-semibold
            text-[var(--shade-02)]
            underline
            underline-offset-[2px]
          "
        >
          Show more

          <ChevronDown
            size={12}
            strokeWidth={2}
          />
        </button>
      </div>
    </section>
  );
}

export default Location;
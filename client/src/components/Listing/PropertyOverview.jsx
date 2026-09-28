import { CircleUserRound, Star } from "lucide-react";

function PropertyOverview() {
  return (
    <section
      className="
        w-full
        border-b
        border-[var(--neutral-03)]
        py-[28px]
      "
    >
      {/* Property title */}
      <h2
        className="
          m-0
          text-[18px]
          font-semibold
          leading-[24px]
          tracking-[-0.01em]
          text-[var(--shade-02)]
        "
      >
        Entire serviced apartment in Candolim, India
      </h2>

      <p
        className="
          m-0
          mt-[6px]
          text-[14px]
          leading-[20px]
          text-[var(--shade-02)]
        "
      >
        3 guests · 1 bedroom · 1 bed · 1 bathroom
      </p>

      {/* Guest Favourite */}
      <div
        className="
          mt-[28px]
          flex
          min-h-[100px]
          items-center
          rounded-[16px]
          border
          border-[var(--neutral-03)]
          px-[28px]
          py-[18px]
        "
      >
        {/* Guest favourite image */}
        <div
          className="
            flex
            w-[180px]
            shrink-0
            items-center
            justify-center
            border-r
            border-[var(--neutral-03)]
            pr-[24px]
          "
        >
          <img
            src="/assets/logo/Guest-Favorite.png"
            alt="Guest favourite"
            className="
              block
              h-[58px]
              w-[150px]
              object-contain
            "
          />
        </div>

        {/* Description */}
        <div
          className="
            flex
            flex-1
            items-center
            px-[28px]
          "
        >
          <p
            className="
              m-0
              max-w-[310px]
              text-[16px]
              leading-[22px]
              text-[var(--shade-02)]
            "
          >
            One of the most loved homes on Airbnb,
            according to guests
          </p>
        </div>

        {/* Rating */}
        <div
          className="
            flex
            w-[110px]
            flex-col
            items-center
            justify-center
            border-l
            border-[var(--neutral-03)]
          "
        >
          <span
            className="
              text-[24px]
              font-semibold
              leading-[28px]
              text-[var(--shade-02)]
            "
          >
            4.95
          </span>

          <div className="mt-[4px] flex items-center gap-[2px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={12}
                fill="currentColor"
                strokeWidth={0}
                className="text-[var(--shade-02)]"
              />
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div
          className="
            flex
            w-[100px]
            flex-col
            items-center
            justify-center
            border-l
            border-[var(--neutral-03)]
          "
        >
          <span
            className="
              text-[24px]
              font-semibold
              leading-[28px]
              text-[var(--shade-02)]
            "
          >
            19
          </span>

          <span
            className="
              mt-[4px]
              text-[14px]
              leading-[18px]
              text-[var(--shade-02)]
              underline
              underline-offset-[2px]
            "
          >
            Reviews
          </span>
        </div>
      </div>

      {/* Host */}
      <div className="mt-[28px] flex items-center gap-[14px]">
        <div
          className="
            flex
            h-[58px]
            w-[58px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-[var(--neutral-02)]
          "
        >
          <img
            src="/assets/logo/Mirashya.png"
            alt="Mirashya Homes"
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <CircleUserRound
            size={32}
            strokeWidth={1.5}
            className="text-[var(--neutral-07)]"
          />
        </div>

        <div className="flex flex-col">
          <span
            className="
              text-[16px]
              leading-[22px]
              text-[var(--shade-02)]
            "
          >
            Hosted by{" "}
            <strong className="font-semibold">
              Mirashya Homes
            </strong>
          </span>

          <span
            className="
              mt-[3px]
              text-[14px]
              leading-[20px]
              text-[var(--neutral-07)]
            "
          >
            2 years hosting
          </span>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROPERTY HIGHLIGHTS
========================================================= */

export default PropertyOverview;

import { CircleUserRound, Star } from "lucide-react";
import { useState } from "react";

function PropertyOverview({ listing }) {
  const [hostImageError, setHostImageError] = useState(false);

  return (
    <section
      className="
        w-full
        border-b
        border-[var(--neutral-03)]
        pb-[28px]
      "
    >
      {/* =====================================================
          PROPERTY TITLE
      ===================================================== */}

      <h2
        className="
          m-0
          text-[24px]
          font-semibold
          leading-[30px]
          tracking-[-0.02em]
          text-[var(--shade-02)]
        "
      >
        {listing.propertyType}
      </h2>

      {/* =====================================================
          PROPERTY METADATA
      ===================================================== */}

      <p
        className="
          m-0
          mt-[4px]
          text-[16px]
          font-normal
          leading-[24px]
          text-[var(--shade-02)]
        "
      >
        {listing.guests} guests · {listing.bedrooms} bedroom ·{" "}
        {listing.beds} bed · {listing.bathrooms} bathroom
      </p>

      {/* =====================================================
          GUEST FAVOURITE CARD
      ===================================================== */}

      <div
        className="
          mt-[36px]
          flex
          h-[78px]
          w-full
          items-stretch
          overflow-hidden
          rounded-[16px]
          border
          border-[var(--neutral-03)]
          bg-[var(--shade-01)]
        "
      >
        {/* GUEST FAVOURITE + DESCRIPTION */}

        <div
          className="
            flex
            min-w-0
            flex-1
            items-center
            gap-[20px]
            px-[18px]
          "
        >
          <img
            src="/assets/logo/Guest-Favorite.png"
            alt="Guest favourite"
            className="
              block
              h-[50px]
              w-[110px]
              shrink-0
              object-contain
            "
          />

          <p
            className="
              m-0
              min-w-0
              max-w-[300px]
              text-[16px]
              font-normal
              leading-[22px]
              text-[var(--shade-02)]
            "
          >
            One of the most loved homes on Airbnb,
            according to guests
          </p>
        </div>

        {/* RATING */}

        <div
          className="
            flex
            w-[112px]
            shrink-0
            flex-col
            items-center
            justify-center
          "
        >
          <span
            className="
              text-[24px]
              font-semibold
              leading-[28px]
              tracking-[-0.02em]
              text-[var(--shade-02)]
            "
          >
            {listing.rating}
          </span>

          <div
            className="
              mt-[4px]
              flex
              items-center
              gap-[1px]
            "
          >
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

        {/* DIVIDER */}

        <div
          className="
            my-[24px]
            w-px
            shrink-0
            bg-[var(--neutral-03)]
          "
        />

        {/* REVIEWS */}

        <div
          className="
            flex
            w-[125px]
            shrink-0
            flex-col
            items-center
            justify-center
          "
        >
          <span
            className="
              text-[24px]
              font-semibold
              leading-[28px]
              tracking-[-0.02em]
              text-[var(--shade-02)]
            "
          >
            {listing.reviewCount}
          </span>

          <span
            className="
              mt-[4px]
              text-[14px]
              font-normal
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

      {/* =====================================================
          HOST
      ===================================================== */}

      <div
        className="
          mt-[28px]
          flex
          items-center
          gap-[20px]
        "
      >
        {/* HOST AVATAR */}

        <div
          className="
            flex
            h-[56px]
            w-[56px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-[var(--neutral-02)]
          "
        >
          {!hostImageError && listing.host?.image ? (
            <img
              src={listing.host.image}
              alt={listing.host.name}
              className="
                block
                h-full
                w-full
                object-cover
              "
              onError={() => setHostImageError(true)}
            />
          ) : (
            <CircleUserRound
              size={30}
              strokeWidth={1.5}
              className="text-[var(--neutral-07)]"
            />
          )}
        </div>

        {/* HOST INFORMATION */}

        <div
          className="
            flex
            flex-col
          "
        >
          <span
            className="
              text-[16px]
              font-normal
              leading-[22px]
              text-[var(--shade-02)]
            "
          >
            Hosted by{" "}
            <strong className="font-semibold">
              {listing.host?.name}
            </strong>
          </span>

          <span
            className="
              mt-[2px]
              text-[14px]
              font-normal
              leading-[20px]
              text-[var(--neutral-07)]
            "
          >
            {listing.host?.yearsHosting} years hosting
          </span>
        </div>
      </div>
    </section>
  );
}

export default PropertyOverview;
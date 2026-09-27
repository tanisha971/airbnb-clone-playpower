import {
  Award,
  CircleUserRound,
  Star,
} from "lucide-react";

function PropertyOverview() {
  return (
    <section
      className="
        mx-auto
        w-[calc(100%-180px)]
        max-w-[1120px]
        border-b
        border-[var(--neutral-03)]
        py-[24px]
      "
    >
      {/* Property description */}
      <div>
        <h2
          className="
            m-0
            text-[16px]
            font-semibold
            leading-[22px]
            text-[var(--shade-02)]
          "
        >
          Entire serviced apartment in Candolim, India
        </h2>

        <p
          className="
            mt-[6px]
            mb-0
            text-[13px]
            leading-[20px]
            text-[var(--shade-02)]
          "
        >
          2 guests · 1 bedroom · 1 bed · 1 bathroom
        </p>
      </div>

      {/* Guest favourite + rating */}
      <div
        className="
          mt-[22px]
          flex
          min-h-[72px]
          items-center
          rounded-[8px]
          border
          border-[var(--neutral-03)]
          px-[18px]
          py-[14px]
        "
      >
        {/* Guest favourite */}
        <div
          className="
            flex
            flex-1
            items-center
            gap-[12px]
            border-r
            border-[var(--neutral-03)]
            pr-[20px]
          "
        >
          <Award
            size={25}
            strokeWidth={1.6}
            className="text-[var(--shade-02)]"
          />

          <div className="flex flex-col">
            <span
              className="
                text-[13px]
                font-semibold
                leading-[18px]
                text-[var(--shade-02)]
              "
            >
              Guest favourite
            </span>

            <span
              className="
                mt-[2px]
                text-[11px]
                leading-[15px]
                text-[var(--neutral-07)]
              "
            >
              One of the most loved homes on Airbnb
            </span>
          </div>
        </div>

        {/* Rating */}
        <div
          className="
            flex
            w-[90px]
            flex-col
            items-center
            justify-center
            px-[12px]
          "
        >
          <span
            className="
              text-[16px]
              font-semibold
              leading-[20px]
              text-[var(--shade-02)]
            "
          >
            4.95
          </span>

          <div className="mt-[3px] flex items-center gap-[2px]">
            <Star
              size={10}
              fill="currentColor"
              strokeWidth={0}
              className="text-[var(--shade-02)]"
            />
            <Star
              size={10}
              fill="currentColor"
              strokeWidth={0}
              className="text-[var(--shade-02)]"
            />
            <Star
              size={10}
              fill="currentColor"
              strokeWidth={0}
              className="text-[var(--shade-02)]"
            />
            <Star
              size={10}
              fill="currentColor"
              strokeWidth={0}
              className="text-[var(--shade-02)]"
            />
            <Star
              size={10}
              fill="currentColor"
              strokeWidth={0}
              className="text-[var(--shade-02)]"
            />
          </div>
        </div>

        {/* Reviews */}
        <div
          className="
            flex
            w-[90px]
            flex-col
            items-center
            justify-center
            border-l
            border-[var(--neutral-03)]
            px-[12px]
          "
        >
          <span
            className="
              text-[16px]
              font-semibold
              leading-[20px]
              text-[var(--shade-02)]
            "
          >
            19
          </span>

          <span
            className="
              mt-[3px]
              text-[11px]
              leading-[15px]
              text-[var(--shade-02)]
              underline
              underline-offset-[2px]
            "
          >
            reviews
          </span>
        </div>
      </div>

      {/* Host */}
      <div
        className="
          mt-[22px]
          flex
          items-center
          gap-[12px]
        "
      >
        <div
          className="
            flex
            h-[40px]
            w-[40px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-[var(--neutral-02)]
          "
        >
          <CircleUserRound
            size={25}
            strokeWidth={1.5}
            className="text-[var(--neutral-07)]"
          />
        </div>

        <div className="flex flex-col">
          <span
            className="
              text-[12px]
              leading-[17px]
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
              mt-[2px]
              text-[11px]
              leading-[15px]
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

export default PropertyOverview;
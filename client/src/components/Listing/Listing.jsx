import { useState } from "react";
import {
  Accessibility,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  Car,
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevronRightSmall,
  CircleUserRound,
  CookingPot,
  DoorOpen,
  Dog,
  Flame,
  Heart,
  Home,
  Images,
  PawPrint,
  Share,
  ShieldCheck,
  Sparkles,
  Star,
  Waves,
} from "lucide-react";

/* =========================================================
   SHARED GALLERY DATA
========================================================= */

export const galleryPhotos = [
  {
    src: "/assets/gallery/01_Living_Room_1.avif",
    alt: "Living room",
  },
  {
    src: "/assets/gallery/10.avif",
    alt: "Dining area",
  },
  {
    src: "/assets/gallery/jacuzzi.avif",
    alt: "Jacuzzi",
  },
  {
    src: "/assets/gallery/18.avif",
    alt: "Bedroom",
  },
  {
    src: "/assets/gallery/04.avif",
    alt: "Property exterior",
  },
];

/* =========================================================
   LISTING HEADER
========================================================= */

function ListingHeader() {
  const title =
    "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10";

  return (
    <section
      className="
        mx-auto
        flex
        w-[calc(100%-180px)]
        max-w-[1120px]
        items-center
        justify-between
        py-[18px]
      "
    >
      <h1
        className="
          m-0
          text-[18px]
          font-semibold
          leading-[24px]
          tracking-[-0.01em]
          text-[var(--shade-02)]
        "
      >
        {title}
      </h1>

      <div className="flex items-center gap-[16px]">
        <button
          type="button"
          className="
            flex
            h-[36px]
            items-center
            gap-[6px]
            rounded-full
            border-0
            bg-transparent
            px-[8px]
            text-[13px]
            font-medium
            text-[var(--shade-02)]
            transition-colors
            duration-150
            hover:bg-[var(--neutral-01)]
          "
        >
          <Share size={15} strokeWidth={1.8} />

          <span className="underline underline-offset-[2px]">
            Share
          </span>
        </button>

        <button
          type="button"
          className="
            flex
            h-[36px]
            items-center
            gap-[6px]
            rounded-full
            border-0
            bg-transparent
            px-[8px]
            text-[13px]
            font-medium
            text-[var(--shade-02)]
            transition-colors
            duration-150
            hover:bg-[var(--neutral-01)]
          "
        >
          <Heart size={15} strokeWidth={1.8} />

          <span className="underline underline-offset-[2px]">
            Save
          </span>
        </button>
      </div>
    </section>
  );
}

/* =========================================================
   PHOTO GRID
========================================================= */

function PhotoGrid({ onShowAllPhotos }) {
  return (
    <section
      id="photos"
      className="
        relative
        mx-auto
        w-[calc(100%-180px)]
        max-w-[1120px]
      "
    >
      <div
        className="
          grid
          h-[405px]
          grid-cols-[2fr_1fr_1fr]
          grid-rows-[1fr_1fr]
          gap-[4px]
          overflow-hidden
          rounded-[12px]
        "
      >
        {/* Main image */}

        <button
          type="button"
          onClick={onShowAllPhotos}
          className="
            group
            relative
            row-span-2
            overflow-hidden
            border-0
            bg-[var(--neutral-01)]
            p-0
          "
        >
          <img
            src={galleryPhotos[0].src}
            alt={galleryPhotos[0].alt}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-[1.01]
            "
          />
        </button>

        {/* Image 2 */}

        <button
          type="button"
          onClick={onShowAllPhotos}
          className="
            group
            relative
            overflow-hidden
            border-0
            bg-[var(--neutral-01)]
            p-0
          "
        >
          <img
            src={galleryPhotos[1].src}
            alt={galleryPhotos[1].alt}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-[1.01]
            "
          />
        </button>

        {/* Image 3 */}

        <button
          type="button"
          onClick={onShowAllPhotos}
          className="
            group
            relative
            overflow-hidden
            border-0
            bg-[var(--neutral-01)]
            p-0
          "
        >
          <img
            src={galleryPhotos[2].src}
            alt={galleryPhotos[2].alt}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-[1.01]
            "
          />
        </button>

        {/* Image 4 */}

        <button
          type="button"
          onClick={onShowAllPhotos}
          className="
            group
            relative
            overflow-hidden
            border-0
            bg-[var(--neutral-01)]
            p-0
          "
        >
          <img
            src={galleryPhotos[3].src}
            alt={galleryPhotos[3].alt}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-[1.01]
            "
          />
        </button>

        {/* Image 5 + Show all */}

        <button
          type="button"
          onClick={onShowAllPhotos}
          className="
            group
            relative
            overflow-hidden
            border-0
            bg-[var(--neutral-01)]
            p-0
          "
        >
          <img
            src={galleryPhotos[4].src}
            alt={galleryPhotos[4].alt}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-[1.01]
            "
          />

          <span
            className="
              absolute
              bottom-[12px]
              right-[12px]
              flex
              h-[34px]
              items-center
              gap-[7px]
              rounded-[7px]
              border
              border-[var(--shade-02)]
              bg-[var(--shade-01)]
              px-[12px]
              text-[12px]
              font-semibold
              text-[var(--shade-02)]
              shadow-[0_1px_3px_rgba(0,0,0,0.15)]
              transition-colors
              duration-150
              group-hover:bg-[var(--neutral-01)]
            "
          >
            <Images size={15} strokeWidth={1.8} />
            Show all photos
          </span>
        </button>
      </div>
    </section>
  );
}

/* =========================================================
   PROPERTY OVERVIEW
========================================================= */

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

      {/* Guest favourite */}

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
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={10}
                fill="currentColor"
                strokeWidth={0}
                className="text-[var(--shade-02)]"
              />
            ))}
          </div>
        </div>

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

      <div className="mt-[22px] flex items-center gap-[12px]">
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

/* =========================================================
   PROPERTY HIGHLIGHTS
========================================================= */

function PropertyHighlights() {
  const highlights = [
    {
      icon: Waves,
      title: "Outdoor entertainment",
      description:
        "The pool is shared with other guests and is open year-round.",
    },
    {
      icon: Accessibility,
      title: "Designated workspace",
      description:
        "A private room with a desk or table where you can work.",
    },
    {
      icon: DoorOpen,
      title: "Self check-in",
      description:
        "You can check in with the building staff.",
    },
  ];

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
      <div className="flex flex-col">
        {highlights.map(
          ({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`
                flex
                items-start
                gap-[14px]
                py-[14px]
                ${
                  index !== highlights.length - 1
                    ? "border-b border-[var(--neutral-02)]"
                    : ""
                }
              `}
            >
              <div
                className="
                  flex
                  w-[24px]
                  shrink-0
                  items-start
                  justify-center
                  pt-[1px]
                  text-[var(--shade-02)]
                "
              >
                <Icon size={18} strokeWidth={1.7} />
              </div>

              <div className="flex flex-col">
                <span
                  className="
                    text-[13px]
                    font-semibold
                    leading-[18px]
                    text-[var(--shade-02)]
                  "
                >
                  {title}
                </span>

                <span
                  className="
                    mt-[2px]
                    text-[12px]
                    leading-[17px]
                    text-[var(--neutral-07)]
                  "
                >
                  {description}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

/* =========================================================
   SLEEPING ARRANGEMENTS
========================================================= */

function SleepingArrangements() {
  const sleepingArrangements = [
    {
      room: "Bedroom",
      description: "1 double bed",
      image: "/assets/sleeping/bedroom.jpg",
    },
    {
      room: "Living room",
      description: "1 sofa",
      image: "/assets/sleeping/living-room.jpg",
    },
  ];

  return (
    <section
      className="
        mx-auto
        w-[calc(100%-180px)]
        max-w-[1120px]
        border-b
        border-[var(--neutral-03)]
        py-[28px]
      "
    >
      <h2
        className="
          m-0
          mb-[18px]
          text-[16px]
          font-semibold
          leading-[22px]
          text-[var(--shade-02)]
        "
      >
        Where you'll sleep
      </h2>

      <div className="flex gap-[12px]">
        {sleepingArrangements.map(
          ({ room, description, image }) => (
            <div
              key={room}
              className="w-[220px] shrink-0"
            >
              <div
                className="
                  h-[150px]
                  w-full
                  overflow-hidden
                  rounded-[8px]
                  bg-[var(--neutral-01)]
                "
              >
                <img
                  src={image}
                  alt={room}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-[10px]">
                <p
                  className="
                    m-0
                    text-[12px]
                    font-semibold
                    leading-[17px]
                    text-[var(--shade-02)]
                  "
                >
                  {room}
                </p>

                <p
                  className="
                    m-0
                    mt-[2px]
                    text-[11px]
                    leading-[16px]
                    text-[var(--neutral-07)]
                  "
                >
                  {description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

/* =========================================================
   AMENITIES
========================================================= */

function Amenities() {
  const amenities = [
    [CookingPot, "Kitchen"],
    [BriefcaseBusiness, "Dedicated workspace"],
    [Waves, "Pool"],
    [Car, "Free parking on premises"],
    [PawPrint, "Pets allowed"],
    [ShieldCheck, "TV"],
    [Home, "Carbon monoxide alarm"],
    [Sparkles, "Exterior security cameras on property"],
    [Flame, "Smoke alarm"],
    [Dog, "Essentials"],
  ];

  return (
    <section
      id="amenities"
      className="
        mx-auto
        w-[calc(100%-180px)]
        max-w-[1120px]
        border-b
        border-[var(--neutral-03)]
        py-[28px]
      "
    >
      <h2
        className="
          m-0
          mb-[20px]
          text-[16px]
          font-semibold
          leading-[22px]
          text-[var(--shade-02)]
        "
      >
        What this place offers
      </h2>

      <div
        className="
          grid
          max-w-[620px]
          grid-cols-2
          gap-x-[72px]
          gap-y-[18px]
        "
      >
        {amenities.map(([Icon, label]) => (
          <div
            key={label}
            className="
              flex
              min-h-[24px]
              items-center
              gap-[12px]
              text-[13px]
              leading-[18px]
              text-[var(--shade-02)]
            "
          >
            <Icon
              size={17}
              strokeWidth={1.6}
              className="shrink-0 text-[var(--shade-02)]"
            />

            <span>{label}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="
          mt-[24px]
          h-[40px]
          rounded-[7px]
          border
          border-[var(--shade-02)]
          bg-[var(--shade-01)]
          px-[16px]
          text-[12px]
          font-semibold
          text-[var(--shade-02)]
          transition-colors
          duration-150
          hover:bg-[var(--neutral-01)]
        "
      >
        Show all 50 amenities
      </button>
    </section>
  );
}

/* =========================================================
   AVAILABILITY CALENDAR
========================================================= */

function AvailabilityCalendar() {
  const octoberWeeks = [
    ["", "", "", "", "1", "2", "3"],
    ["4", "5", "6", "7", "8", "9", "10"],
    ["11", "12", "13", "14", "15", "16", "17"],
    ["18", "19", "20", "21", "22", "23", "24"],
    ["25", "26", "27", "28", "29", "30", "31"],
  ];

  const novemberWeeks = [
    ["1", "2", "3", "4", "5", "6", "7"],
    ["8", "9", "10", "11", "12", "13", "14"],
    ["15", "16", "17", "18", "19", "20", "21"],
    ["22", "23", "24", "25", "26", "27", "28"],
    ["29", "30", "", "", "", "", ""],
  ];

  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  const renderCalendar = (month, weeks) => (
    <div className="w-[245px]">
      <div
        className="
          mb-[14px]
          text-center
          text-[13px]
          font-semibold
          text-[var(--shade-02)]
        "
      >
        {month}
      </div>

      <div className="grid grid-cols-7">
        {weekdays.map((day, index) => (
          <div
            key={`${day}-${index}`}
            className="
              flex
              h-[28px]
              items-center
              justify-center
              text-[10px]
              font-medium
              text-[var(--neutral-07)]
            "
          >
            {day}
          </div>
        ))}
      </div>

      <div>
        {weeks.map((week, weekIndex) => (
          <div
            key={weekIndex}
            className="grid grid-cols-7"
          >
            {week.map((day, dayIndex) => {
              const isCheckIn =
                month === "October 2026" &&
                day === "18";

              const isCheckOut =
                month === "October 2026" &&
                day === "23";

              const isBetween =
                month === "October 2026" &&
                ["19", "20", "21", "22"].includes(day);

              const isSelected =
                isCheckIn || isCheckOut;

              return (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className="
                    relative
                    flex
                    h-[34px]
                    items-center
                    justify-center
                  "
                >
                  {day && isBetween && (
                    <span
                      className="
                        absolute
                        inset-y-0
                        left-0
                        right-0
                        bg-[var(--neutral-01)]
                      "
                    />
                  )}

                  {day && (
                    <span
                      className={`
                        relative
                        z-10
                        flex
                        h-[30px]
                        w-[30px]
                        items-center
                        justify-center
                        rounded-full
                        text-[11px]
                        ${
                          isSelected
                            ? "bg-[var(--shade-02)] font-semibold text-[var(--shade-01)]"
                            : "text-[var(--shade-02)]"
                        }
                      `}
                    >
                      {day}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className="
        w-full
        border-b
        border-[var(--neutral-03)]
        py-[32px]
      "
    >
      <div className="flex items-start justify-between">
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
            5 nights in Candolim
          </h2>

          <p
            className="
              m-0
              mt-[4px]
              text-[11px]
              text-[var(--neutral-07)]
            "
          >
            Oct 18, 2026 – Oct 23, 2026
          </p>
        </div>

        <div className="flex items-center gap-[6px]">
          <button
            type="button"
            aria-label="Previous month"
            className="
              flex
              h-[32px]
              w-[32px]
              items-center
              justify-center
              rounded-full
              border-0
              bg-transparent
              text-[var(--shade-02)]
              hover:bg-[var(--neutral-01)]
            "
          >
            <ChevronLeft size={16} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label="Next month"
            className="
              flex
              h-[32px]
              w-[32px]
              items-center
              justify-center
              rounded-full
              border-0
              bg-transparent
              text-[var(--shade-02)]
              hover:bg-[var(--neutral-01)]
            "
          >
            <ChevronRight size={16} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div
        className="
          mt-[24px]
          flex
          items-start
          justify-center
          gap-[48px]
        "
      >
        {renderCalendar(
          "October 2026",
          octoberWeeks
        )}

        {renderCalendar(
          "November 2026",
          novemberWeeks
        )}
      </div>

      <div
        className="
          mt-[18px]
          flex
          items-center
          justify-between
        "
      >
        <div
          className="
            flex
            items-center
            gap-[8px]
            text-[11px]
            text-[var(--neutral-07)]
          "
        >
          <CalendarDays size={13} strokeWidth={1.6} />
          <span>Dates are available</span>
        </div>

        <button
          type="button"
          className="
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
          Clear dates
        </button>
      </div>
    </section>
  );
}

/* =========================================================
   BOOKING CARD
========================================================= */

function BookingCard({ reserved, onReserve }) {
  return (
    <aside
      className="
        sticky
        top-[90px]
        w-full
        rounded-[12px]
        border
        border-[var(--neutral-03)]
        bg-[var(--shade-01)]
        p-[20px]
        shadow-[0_4px_16px_rgba(0,0,0,0.10)]
      "
    >
      <div
        className="
          mb-[18px]
          flex
          flex-wrap
          items-baseline
          gap-x-[4px]
          text-[13px]
          text-[var(--shade-02)]
        "
      >
        <strong
          className="
            text-[20px]
            font-semibold
            leading-[26px]
          "
        >
          ₹28,499
        </strong>

        <span>for 5 nights</span>

        <span
          className="
            mt-[5px]
            w-full
            text-[12px]
            text-[var(--neutral-07)]
          "
        >
          ★ 4.95 · 19 reviews
        </span>
      </div>

      <div
        className="
          flex
          min-h-[68px]
          items-center
          gap-[12px]
          rounded-[8px]
          border
          border-[var(--neutral-03)]
          px-[12px]
          py-[10px]
        "
      >
        <CalendarDays
          size={18}
          strokeWidth={1.7}
          className="shrink-0 text-[var(--shade-02)]"
        />

        <div className="grid flex-1 grid-cols-2 gap-[10px]">
          <div className="flex flex-col">
            <b
              className="
                text-[10px]
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
                mt-[3px]
                text-[11px]
                text-[var(--neutral-07)]
              "
            >
              10/18/2026
            </span>
          </div>

          <div className="flex flex-col">
            <b
              className="
                text-[10px]
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
                mt-[3px]
                text-[11px]
                text-[var(--neutral-07)]
              "
            >
              10/23/2026
            </span>
          </div>
        </div>
      </div>

      <div
        className="
          mt-[-1px]
          flex
          min-h-[58px]
          items-center
          gap-[12px]
          rounded-[8px]
          border
          border-[var(--neutral-03)]
          px-[12px]
          py-[10px]
        "
      >
        <CircleUserRound
          size={18}
          strokeWidth={1.7}
          className="shrink-0 text-[var(--shade-02)]"
        />

        <div className="flex flex-1 flex-col">
          <b
            className="
              text-[10px]
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
              mt-[3px]
              text-[11px]
              text-[var(--neutral-07)]
            "
          >
            2 guests
          </span>
        </div>

        <ChevronRightSmall
          size={16}
          strokeWidth={1.8}
          className="text-[var(--shade-02)]"
        />
      </div>

      <button
        type="button"
        onClick={onReserve}
        className="
          mt-[18px]
          h-[46px]
          w-full
          rounded-[8px]
          border-0
          bg-[var(--primary-02)]
          px-[20px]
          text-[14px]
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
          mt-[10px]
          mb-0
          text-center
          text-[11px]
          text-[var(--neutral-07)]
        "
      >
        You won&apos;t be charged yet
      </p>
    </aside>
  );
}

/* =========================================================
   MAIN LISTING COMPONENT
========================================================= */

function Listing({ onShowAllPhotos }) {
  const [reserved, setReserved] = useState(false);

  return (
    <main>
      <ListingHeader />

      <PhotoGrid
        onShowAllPhotos={onShowAllPhotos}
      />

      <PropertyOverview />

      <PropertyHighlights />

      <SleepingArrangements />

      <Amenities />

      {/* Calendar + Booking */}

      <section
        className="
          mx-auto
          grid
          w-[calc(100%-180px)]
          max-w-[1120px]
          grid-cols-[minmax(0,1fr)_330px]
          items-start
          gap-[48px]
        "
      >
        <AvailabilityCalendar />

        <BookingCard
          reserved={reserved}
          onReserve={() => setReserved(true)}
        />
      </section>
    </main>
  );
}

export default Listing;
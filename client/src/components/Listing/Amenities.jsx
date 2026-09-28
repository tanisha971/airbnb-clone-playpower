import { useState } from "react";
import {
  Accessibility,
  BriefcaseBusiness,
  Car,
  CookingPot,
  DoorOpen,
  Flame,
  Home,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

function Amenities() {
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const amenities = [
    [CookingPot, "Kitchen"],
    [BriefcaseBusiness, "Dedicated workspace"],
    [Waves, "Pool"],
    [Car, "Free parking on premises"],
    [PawPrint, "Pets allowed"],
    [ShieldCheck, "TV"],
    [Home, "Carbon monoxide alarm", true],
    [Sparkles, "Exterior security cameras on property"],
    [Flame, "Smoke alarm", true],
  ];

  const amenityCategories = [
    {
      title: "Bathroom",
      items: [
        [Accessibility, "Hairdryer"],
        [Home, "Cleaning products"],
        [Sparkles, "Shampoo"],
        [Waves, "Hot water"],
        [Flame, "Shower gel"],
      ],
    },
    {
      title: "Bedroom and laundry",
      items: [
        [Home, "Washing machine"],
        [Home, "Hangers"],
        [Home, "Bed linen"],
        [Home, "Room-darkening blinds"],
        [Home, "Iron"],
        [Home, "Clothes storage"],
        [Home, "Cot"],
      ],
    },
    {
      title: "Entertainment",
      items: [
        [Home, "TV"],
      ],
    },
    {
      title: "Family",
      items: [
        [Home, "Cot"],
      ],
    },
    {
      title: "Heating and cooling",
      items: [
        [Waves, "Air conditioning"],
        [Sparkles, "Ceiling fan"],
      ],
    },
    {
      title: "Home safety",
      items: [
        [ShieldCheck, "Exterior security cameras on property"],
        [Home, "Carbon monoxide alarm", true],
        [Flame, "Smoke alarm", true],
      ],
    },
    {
      title: "Internet and office",
      items: [
        [Waves, "Wifi"],
        [BriefcaseBusiness, "Dedicated workspace"],
      ],
    },
    {
      title: "Kitchen and dining",
      items: [
        [CookingPot, "Kitchen"],
        [Home, "Fridge"],
        [Home, "Freezer"],
        [Home, "Microwave"],
        [CookingPot, "Cooking basics"],
        [CookingPot, "Crockery and cutlery"],
        [Home, "Kettle"],
        [Home, "Coffee"],
        [Home, "Wine glasses"],
        [Home, "Toaster"],
        [CookingPot, "Blender"],
        [CookingPot, "Cooker"],
      ],
    },
    {
      title: "Location features",
      items: [
        [Home, "Private entrance"],
      ],
    },
    {
      title: "Outdoor",
      items: [
        [Home, "Patio or balcony"],
        [Waves, "Outdoor dining area"],
      ],
    },
    {
      title: "Parking and facilities",
      items: [
        [Car, "Free parking on premises"],
        [Waves, "Pool"],
        [Waves, "Hot tub"],
        [Accessibility, "Gym"],
      ],
    },
    {
      title: "Services",
      items: [
        [PawPrint, "Pets allowed"],
        [Sparkles, "Cleaning available during stay"],
        [Home, "Long-term stays allowed"],
        [DoorOpen, "Self check-in"],
      ],
    },
  ];

  return (
    <>
      {/* Main amenities section */}
      <section
        id="amenities"
        className="
          w-full
    border-b
    border-[var(--neutral-03)]
    py-[28px]
        "
      >
        <h2
          className="
            m-0
            mb-[28px]
            text-[28px]
            font-semibold
            leading-[34px]
            tracking-[-0.02em]
            text-[var(--shade-02)]
          "
        >
          What this place offers
        </h2>

        <div
          className="
            grid
            max-w-[760px]
            grid-cols-2
            gap-x-[80px]
            gap-y-[24px]
          "
        >
          {amenities.map(([Icon, label, unavailable]) => (
            <div
              key={label}
              className={`
                flex
                min-h-[28px]
                items-center
                gap-[18px]
                text-[18px]
                leading-[24px]
                ${
                  unavailable
                    ? "text-[var(--neutral-07)] line-through"
                    : "text-[var(--shade-02)]"
                }
              `}
            >
              <Icon
                size={26}
                strokeWidth={1.5}
                className="shrink-0"
              />

              <span>{label}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setShowAllAmenities(true)}
          className="
            mt-[32px]
            h-[52px]
            rounded-[10px]
            border
            border-[var(--shade-02)]
            bg-[var(--shade-01)]
            px-[28px]
            text-[16px]
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

      {/* All amenities modal */}
      {showAllAmenities && (
        <div
          className="
            fixed
            inset-0
            z-[300]
            flex
            items-center
            justify-center
            bg-[rgba(0,0,0,0.48)]
            px-[24px]
            py-[32px]
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowAllAmenities(false);
            }
          }}
        >
          <div
            className="
              relative
              flex
              h-[745px]
              w-full
              max-w-[915px]
              flex-col
              overflow-hidden
              rounded-[16px]
              bg-[var(--shade-01)]
              shadow-[0_12px_40px_rgba(0,0,0,0.20)]
            "
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setShowAllAmenities(false)}
              aria-label="Close amenities"
              className="
                absolute
                left-[24px]
                top-[24px]
                z-20
                flex
                h-[40px]
                w-[40px]
                items-center
                justify-center
                rounded-full
                border-0
                bg-transparent
                text-[var(--shade-02)]
                transition-colors
                hover:bg-[var(--neutral-01)]
              "
            >
              <span className="text-[30px] font-light leading-none">
                ×
              </span>
            </button>

            {/* Scrollable content */}
            <div
              className="
                h-full
                overflow-y-auto
                px-[56px]
                pb-[60px]
                pt-[86px]
              "
            >
              <h2
                className="
                  m-0
                  mb-[34px]
                  text-[28px]
                  font-semibold
                  leading-[34px]
                  tracking-[-0.02em]
                  text-[var(--shade-02)]
                "
              >
                What this place offers
              </h2>

              {amenityCategories.map(
                ({ title, items }) => (
                  <section
                    key={title}
                    className="mb-[34px]"
                  >
                    <h3
                      className="
                        m-0
                        mb-[12px]
                        text-[20px]
                        font-semibold
                        leading-[26px]
                        text-[var(--shade-02)]
                      "
                    >
                      {title}
                    </h3>

                    <div>
                      {items.map(
                        ([Icon, label, unavailable]) => (
                          <div
                            key={`${title}-${label}`}
                            className="
                              flex
                              min-h-[66px]
                              items-center
                              gap-[18px]
                              border-b
                              border-[var(--neutral-02)]
                            "
                          >
                            <Icon
                              size={27}
                              strokeWidth={1.5}
                              className={`
                                shrink-0
                                ${
                                  unavailable
                                    ? "text-[var(--neutral-06)]"
                                    : "text-[var(--shade-02)]"
                                }
                              `}
                            />

                            <span
                              className={`
                                text-[18px]
                                leading-[24px]
                                ${
                                  unavailable
                                    ? "text-[var(--neutral-07)] line-through"
                                    : "text-[var(--shade-02)]"
                                }
                              `}
                            >
                              {label}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </section>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================================
   AVAILABILITY CALENDAR
========================================================= */

export default Amenities;

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
  ShieldOff,
  Sparkles,
  Waves,
} from "lucide-react";

function Amenities({ listing }) {
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const availableAmenities = listing?.amenities || [];

  /*
   * These amenities are present in the listing data,
   * but are reported as unavailable / not reported.
   */
  const unavailableAmenities = new Set([
    "Carbon monoxide alarm",
    "Smoke alarm",
  ]);

  /*
   * Icon mapping for amenities coming from MongoDB.
   */
  const amenityIcons = {
    Kitchen: CookingPot,
    "Dedicated workspace": BriefcaseBusiness,
    Pool: Waves,
    "Free parking on premises": Car,
    "Pets allowed": PawPrint,
    TV: Home,

    "Carbon monoxide alarm": ShieldOff,
    "Exterior security cameras on property": ShieldCheck,
    "Smoke alarm": ShieldOff,

    Hairdryer: Accessibility,
    "Cleaning products": Sparkles,
    Shampoo: Sparkles,
    "Hot water": Waves,
    "Shower gel": Sparkles,
    "Washing machine": Home,
    Hangers: Home,
    "Bed linen": Home,
    "Room-darkening blinds": Home,
    Iron: Home,
    "Clothes storage": Home,
    Cot: Home,
    "Air conditioning": Waves,
    "Ceiling fan": Sparkles,
    Wifi: Waves,
    Fridge: Home,
    Freezer: Home,
    Microwave: Home,
    "Cooking basics": CookingPot,
    "Crockery and cutlery": CookingPot,
    Kettle: Home,
    Coffee: Home,
    "Wine glasses": Home,
    Toaster: Home,
    Blender: CookingPot,
    Cooker: CookingPot,
    "Private entrance": DoorOpen,
    "Patio or balcony": Home,
    "Outdoor dining area": Waves,
    "Hot tub": Waves,
    Gym: Accessibility,
    "Cleaning available during stay": Sparkles,
    "Long-term stays allowed": Home,
    "Self check-in": DoorOpen,
  };

  const getIcon = (amenity) => {
    return amenityIcons[amenity] || Home;
  };

  /*
   * First 10 amenities shown in the main section.
   */
  const amenities = availableAmenities.slice(0, 10);

  const amenityCategories = [
    {
      title: "Bathroom",
      items: [
        "Hairdryer",
        "Cleaning products",
        "Shampoo",
        "Hot water",
        "Shower gel",
      ],
    },
    {
      title: "Bedroom and laundry",
      items: [
        "Washing machine",
        "Hangers",
        "Bed linen",
        "Room-darkening blinds",
        "Iron",
        "Clothes storage",
        "Cot",
      ],
    },
    {
      title: "Entertainment",
      items: ["TV"],
    },
    {
      title: "Family",
      items: ["Cot"],
    },
    {
      title: "Heating and cooling",
      items: [
        "Air conditioning",
        "Ceiling fan",
      ],
    },
    {
      title: "Home safety",
      items: [
        "Exterior security cameras on property",
        "Carbon monoxide alarm",
        "Smoke alarm",
      ],
    },
    {
      title: "Internet and office",
      items: [
        "Wifi",
        "Dedicated workspace",
      ],
    },
    {
      title: "Kitchen and dining",
      items: [
        "Kitchen",
        "Fridge",
        "Freezer",
        "Microwave",
        "Cooking basics",
        "Crockery and cutlery",
        "Kettle",
        "Coffee",
        "Wine glasses",
        "Toaster",
        "Blender",
        "Cooker",
      ],
    },
    {
      title: "Location features",
      items: ["Private entrance"],
    },
    {
      title: "Outdoor",
      items: [
        "Patio or balcony",
        "Outdoor dining area",
      ],
    },
    {
      title: "Parking and facilities",
      items: [
        "Free parking on premises",
        "Pool",
        "Hot tub",
        "Gym",
      ],
    },
    {
      title: "Services",
      items: [
        "Pets allowed",
        "Cleaning available during stay",
        "Long-term stays allowed",
        "Self check-in",
      ],
    },
  ];

  const getAmenityClasses = (label) => {
    const unavailable = unavailableAmenities.has(label);

    return {
      container: unavailable
        ? "text-[var(--neutral-07)]"
        : "text-[var(--shade-02)]",

      text: unavailable
        ? "text-[var(--neutral-07)] line-through decoration-[var(--neutral-07)]"
        : "text-[var(--shade-02)]",

      icon: unavailable
        ? "shrink-0 text-[var(--neutral-06)]"
        : "shrink-0 text-[var(--shade-02)]",
    };
  };

  return (
    <>
      {/* =====================================================
          MAIN AMENITIES
      ===================================================== */}

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
            mb-[22px]
            text-[20px]
            font-semibold
            leading-[26px]
            tracking-[-0.015em]
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
            gap-x-[56px]
            gap-y-[16px]
          "
        >
          {amenities.map((label) => {
            const Icon = getIcon(label);
            const styles = getAmenityClasses(label);

            return (
              <div
                key={label}
                className={`
                  flex
                  min-h-[28px]
                  items-center
                  gap-[16px]
                  text-[14px]
                  leading-[20px]
                  ${styles.container}
                `}
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className={styles.icon}
                />

                <span className={styles.text}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setShowAllAmenities(true)}
          className="
            mt-[24px]
            flex
            h-[44px]
            items-center
            justify-center
            rounded-[8px]
            border
            border-[var(--shade-02)]
            bg-[var(--shade-01)]
            px-[20px]
            text-[14px]
            font-semibold
            leading-[20px]
            text-[var(--shade-02)]
            transition-colors
            duration-150
            hover:bg-[var(--neutral-01)]
          "
        >
          Show all {availableAmenities.length} amenities
        </button>
      </section>

      {/* =====================================================
          ALL AMENITIES MODAL
      ===================================================== */}

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
              h-[650px]
              w-full
              max-w-[800px]
              flex-col
              overflow-hidden
              rounded-[16px]
              bg-[var(--shade-01)]
              shadow-[0_12px_40px_rgba(0,0,0,0.20)]
            "
          >
            {/* MODAL HEADER */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                z-20
                h-[68px]
                bg-[var(--shade-01)]
              "
            >
              <button
                type="button"
                onClick={() => setShowAllAmenities(false)}
                aria-label="Close amenities"
                className="
                  absolute
                  left-[24px]
                  top-[20px]
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
            </div>

            {/* SCROLLABLE CONTENT */}

            <div
              className="
                h-full
                overflow-y-auto
                px-[56px]
                pb-[60px]
                pt-[68px]
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

              {amenityCategories.map(({ title, items }) => {
                const availableItems = items.filter((item) =>
                  availableAmenities.includes(item)
                );

                if (availableItems.length === 0) {
                  return null;
                }

                return (
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
                      {availableItems.map((label) => {
                        const Icon = getIcon(label);
                        const styles = getAmenityClasses(label);

                        return (
                          <div
                            key={`${title}-${label}`}
                            className={`
                              flex
                              min-h-[66px]
                              items-center
                              gap-[18px]
                              border-b
                              border-[var(--neutral-02)]
                              ${styles.container}
                            `}
                          >
                            <Icon
                              size={27}
                              strokeWidth={1.5}
                              className={styles.icon}
                            />

                            <span
                              className={`
                                text-[18px]
                                leading-[24px]
                                ${styles.text}
                              `}
                            >
                              {label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Amenities;
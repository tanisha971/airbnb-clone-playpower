import {
  BriefcaseBusiness,
  Car,
  CookingPot,
  Dog,
  Flame,
  Home,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

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
      {/* Heading */}
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

      {/* Amenities */}
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
              className="
                shrink-0
                text-[var(--shade-02)]
              "
            />

            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Show all */}
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

export default Amenities;
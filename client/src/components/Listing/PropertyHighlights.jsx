import {
  Accessibility,
  DoorOpen,
  Waves,
} from "lucide-react";

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
              {/* Icon */}
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
                <Icon
                  size={18}
                  strokeWidth={1.7}
                />
              </div>

              {/* Content */}
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

export default PropertyHighlights;
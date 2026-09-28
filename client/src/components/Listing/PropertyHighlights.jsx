import { DoorOpen, Sparkles, Waves } from "lucide-react";

function PropertyHighlights() {
  const highlights = [
    {
      icon: Waves,
      title: "Outdoor entertainment",
      description:
        "The pool and alfresco dining are great for summer trips.",
    },
    {
      icon: Sparkles,
      title: "Designed for staying cool",
      description:
        "Beat the heat with the A/C and ceiling fan.",
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
        w-full
        border-b
        border-[var(--neutral-03)]
        py-[28px]
      "
    >
      <div className="flex flex-col">
        {highlights.map(
          ({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                flex
                items-start
                gap-[18px]
                py-[10px]
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  w-[28px]
                  shrink-0
                  items-start
                  justify-center
                  pt-[2px]
                  text-[var(--shade-02)]
                "
              >
                <Icon
                  size={24}
                  strokeWidth={1.7}
                />
              </div>

              {/* Text */}

              <div
                className="
                  min-w-0
                  flex-1
                "
              >
                <h3
                  className="
                    m-0
                    text-[16px]
                    font-semibold
                    leading-[22px]
                    text-[var(--shade-02)]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    m-0
                    mt-[2px]
                    text-[16px]
                    font-normal
                    leading-[22px]
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

export default PropertyHighlights;
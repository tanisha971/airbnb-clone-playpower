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
          ({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`
                flex
                items-start
                gap-[18px]
                py-[16px]
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
                  w-[34px]
                  shrink-0
                  items-start
                  justify-center
                  pt-[2px]
                  text-[var(--shade-02)]
                "
              >
                <Icon size={25} strokeWidth={1.5} />
              </div>

              <div className="flex flex-col">
                <span
                  className="
                    text-[16px]
                    font-semibold
                    leading-[22px]
                    text-[var(--shade-02)]
                  "
                >
                  {title}
                </span>

                <span
                  className="
                    mt-[3px]
                    text-[16px]
                    leading-[22px]
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

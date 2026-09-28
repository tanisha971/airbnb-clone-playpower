import { useState } from "react";
import { ChevronRight } from "lucide-react";

function PropertyDescription({ listing }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const description = listing?.description || "";

  /*
    Keep the collapsed view concise while allowing the
    full MongoDB description to be shown on expansion.
  */
  const collapsedDescription =
    description.length > 280
      ? `${description.slice(0, 280).trim()}...`
      : description;

  return (
    <section
      className="
        w-full
        border-b
        border-[var(--neutral-03)]
        py-[28px]
      "
    >
      {/* =====================================================
          TRANSLATION NOTICE
      ===================================================== */}

      <div
        className="
          rounded-[12px]
          bg-[var(--neutral-01)]
          px-[18px]
          py-[14px]
          text-[14px]
          leading-[20px]
          text-[var(--shade-02)]
        "
      >
        Some info has been automatically translated.{" "}
        <button
          type="button"
          className="
            border-0
            bg-transparent
            p-0
            font-semibold
            text-[var(--shade-02)]
            underline
            underline-offset-[2px]
          "
        >
          Show original
        </button>
      </div>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <div
        className="
          mt-[16px]
          text-[16px]
          leading-[25px]
          text-[var(--shade-02)]
        "
      >
        <p className="m-0">
          {isExpanded
            ? description
            : collapsedDescription}
        </p>
      </div>

      {/* =====================================================
          SHOW MORE / SHOW LESS
      ===================================================== */}

      {description.length > 280 && (
        <button
          type="button"
          onClick={() =>
            setIsExpanded((value) => !value)
          }
          className="
            mt-[12px]
            flex
            items-center
            gap-[4px]
            border-0
            bg-transparent
            p-0
            text-[14px]
            font-semibold
            leading-[20px]
            text-[var(--shade-02)]
            underline
            underline-offset-[3px]
          "
        >
          {isExpanded ? "Show less" : "Show more"}

          <ChevronRight
            size={16}
            strokeWidth={1.8}
            className={`
              transition-transform
              duration-200
              ${isExpanded ? "rotate-90" : ""}
            `}
          />
        </button>
      )}
    </section>
  );
}

export default PropertyDescription;
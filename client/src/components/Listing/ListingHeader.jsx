import { Heart, Share } from "lucide-react";

function ListingHeader() {
  const title = "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10";

  return (
    <section
      className="
        mx-auto
        flex
        w-[calc(100%-80px)]
        max-w-[1312px]
        items-center
        justify-between
        py-[24px]
      "
    >
      {/* Listing title */}

      <h1
        className="
          m-0
          text-[25px]
          font-semibold
          leading-[24px]
          tracking-[-0.01em]
          text-[var(--shade-02)]
        "
      >
        {title}
      </h1>

      {/* Share / Save actions */}

      <div
        className="
          flex
          items-center
          gap-[16px]
        "
      >
        {/* Share */}

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
          <Share
            size={15}
            strokeWidth={1.8}
          />

          <span className="underline underline-offset-[2px]">
            Share
          </span>
        </button>

        {/* Save */}

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
          <Heart
            size={15}
            strokeWidth={1.8}
          />

          <span className="underline underline-offset-[2px]">
            Save
          </span>
        </button>
      </div>
    </section>
  );
}

export default ListingHeader;
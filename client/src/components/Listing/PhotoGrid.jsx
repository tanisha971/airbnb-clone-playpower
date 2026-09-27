import { Images } from "lucide-react";

function PhotoGrid({ onShowAllPhotos }) {
  const photos = [
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
          grid-cols-[1fr_1fr]
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
            src={photos[0].src}
            alt={photos[0].alt}
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

        {/* Top-right images */}
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
            src={photos[1].src}
            alt={photos[1].alt}
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
            src={photos[2].src}
            alt={photos[2].alt}
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

        {/* Bottom-right images */}
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
            src={photos[3].src}
            alt={photos[3].alt}
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
            src={photos[4].src}
            alt={photos[4].alt}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-[1.01]
            "
          />

          {/* Show all photos */}
          <span
            className="
              absolute
              bottom-[16px]
              right-[16px]
              flex
              h-[40px]
              items-center
              gap-[8px]
              rounded-[8px]
              border
              border-[var(--shade-02)]
              bg-[var(--shade-01)]
              px-[16px]
              text-[13px]
              font-semibold
              text-[var(--shade-02)]
              shadow-[0_1px_3px_rgba(0,0,0,0.15)]
              transition-colors
              duration-150
              group-hover:bg-[var(--neutral-01)]
            "
          >
            <Images
              size={16}
              strokeWidth={1.8}
            />

            <span>Show all photos</span>
          </span>
        </button>
      </div>
    </section>
  );
}

export default PhotoGrid;
import { Grip } from "lucide-react";

export const galleryPhotos = [
  { src: "/assets/gallery/01_LR1.avif", alt: "Living room" },
  { src: "/assets/gallery/10_KN1.avif", alt: "Dining area" },
  { src: "/assets/gallery/jacuzzi.avif", alt: "Jacuzzi" },
  { src: "/assets/gallery/22_BR5.avif", alt: "Bedroom" },
  { src: "/assets/gallery/ext1.jpg", alt: "Property exterior" },
];

function PhotoGrid({ onShowAllPhotos }) {
  return (
    <section
  id="photos"
  className="
    relative
    mx-auto
    w-[calc(100%-140px)]
  "
>
      <div
        className="
          grid
          h-[480px]
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
            <Grip size={15} strokeWidth={1.8} />
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

export default PhotoGrid;

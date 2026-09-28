import { Grip } from "lucide-react";

/*
  Fallback photos.

  These are kept exported because PhotoTour / Lightbox
  currently use galleryPhotos.
*/
export const galleryPhotos = [
  {
    src: "/assets/gallery/01_LR1.avif",
    alt: "Living room",
  },
  {
    src: "/assets/gallery/10_KN1.avif",
    alt: "Dining area",
  },
  {
    src: "/assets/gallery/jacuzzi.avif",
    alt: "Jacuzzi",
  },
  {
    src: "/assets/gallery/22_BR5.avif",
    alt: "Bedroom",
  },
  {
    src: "/assets/gallery/ext1.jpg",
    alt: "Property exterior",
  },
];

function PhotoGrid({ listing, onShowAllPhotos }) {
  /*
    Use photos coming from MongoDB.

    If listing.photos is unavailable for any reason,
    fall back to the existing local gallery photos.
  */
  const photos =
    listing?.photos?.length >= 5
      ? listing.photos
      : galleryPhotos;

  return (
    <section
      id="photos"
      className="
        relative
        mx-auto
        w-[calc(100%-140px)]
        max-w-[1120px]
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
        {/* =================================================
            MAIN IMAGE
        ================================================= */}

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

        {/* =================================================
            IMAGE 2
        ================================================= */}

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

        {/* =================================================
            IMAGE 3
        ================================================= */}

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

        {/* =================================================
            IMAGE 4
        ================================================= */}

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

        {/* =================================================
            IMAGE 5 + SHOW ALL PHOTOS
        ================================================= */}

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
            <Grip
              size={15}
              strokeWidth={1.8}
            />

            Show all photos
          </span>
        </button>
      </div>
    </section>
  );
}

export default PhotoGrid;
import { ChevronLeft, Heart, Share } from "lucide-react";
/* =========================================================
   PHOTO TOUR DATA
========================================================= */

export const tourSections = [
  {
    title: "Living room 1",
    description: "Sofa · Air conditioning · Ceiling fan · TV",
    photos: [
      {
        src: "/assets/gallery/01_LR1.avif",
        alt: "Living room 1",
      },
      {
        src: "/assets/gallery/02_LR2.avif",
        alt: "Living room 1",
      },
      {
        src: "/assets/gallery/03_LR3.avif",
        alt: "Living room 1",
      },
    ],
  },

  {
    title: "Living room 2",
    description: "Ceiling fan · Hot tub",
    photos: [
      {
        src: "/assets/gallery/04_LR4.avif",
        alt: "Living room 2",
      },
      {
        src: "/assets/gallery/05_LR5.avif",
        alt: "Living room 2",
      },
      {
        src: "/assets/gallery/jacuzzi.avif",
        alt: "Hot tub",
      },
    ],
  },

  {
    title: "Full kitchen",
    description:
      "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    photos: [
      {
        src: "/assets/gallery/10_KN1.avif",
        alt: "Full kitchen",
      },
      {
        src: "/assets/gallery/12_KN3.avif",
        alt: "Kitchen",
      },
    ],
  },

  {
    title: "Bedroom",
    description:
      "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    photos: [
      {
        src: "/assets/gallery/18_BR1.avif",
        alt: "Bedroom",
      },
      {
        src: "/assets/gallery/19_BR2.avif",
        alt: "Bedroom",
      },
      {
        src: "/assets/gallery/39_BR13.avif",
        alt: "Bedroom",
      },
    ],
  },

  {
    title: "Full bathroom",
    description:
      "Hairdryer · Hot water · Shampoo · Shower gel",
    photos: [
      {
        src: "/assets/gallery/27_WR1.avif",
        alt: "Full bathroom",
      },
    ],
  },

  {
    title: "Gym",
    description:
      "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    photos: [
      {
        src: "/assets/gallery/gym1.avif",
        alt: "Gym",
      },
      {
        src: "/assets/gallery/gym2.avif",
        alt: "Gym",
      },
      {
        src: "/assets/gallery/gym3.jpg",
        alt: "Gym",
      },
      {
        src: "/assets/gallery/gym4.jpg",
        alt: "Gym",
      },
    ],
  },

  {
    title: "Exterior",
    description: "",
    photos: [
      {
        src: "/assets/gallery/ext1.jpg",
        alt: "Exterior",
      },
      {
        src: "/assets/gallery/ext2.avif",
        alt: "Exterior",
      },
      {
        src: "/assets/gallery/ext3.jpg",
        alt: "Exterior",
      },
    ],
  },

  {
    title: "Pool",
    description: "Pool",
    photos: [
      {
        src: "/assets/gallery/pool.avif",
        alt: "Pool",
      },
      {
        src: "/assets/gallery/pool2.avif",
        alt: "Pool",
      },
      {
        src: "/assets/gallery/pool3.jpg",
        alt: "Pool",
      },
    ],
  },

  {
    title: "Additional photos",
    description: "",
    photos: [
      {
        src: "/assets/gallery/50.avif",
        alt: "Additional photo",
      },
      {
        src: "/assets/gallery/43_BR15.avif",
        alt: "Additional photo",
      },
    ],
  },
];

/* =========================================================
   FLATTEN PHOTOS
   Used so Lightbox can navigate through ALL photos.
========================================================= */

export const allTourPhotos = tourSections.flatMap(
  (section) => section.photos
);

/* =========================================================
   PHOTO GALLERY
========================================================= */

function PhotoGallery({
  section,
  sectionIndex,
  onOpenLightbox,
}) {
  const photos = section.photos;

  if (!photos.length) return null;

  const getGlobalIndex = (photoIndex) => {
    let index = 0;

    for (let i = 0; i < sectionIndex; i += 1) {
      index += tourSections[i].photos.length;
    }

    return index + photoIndex;
  };

  /* ---------------------------------------------------------
     ONE IMAGE
  --------------------------------------------------------- */

  if (photos.length === 1) {
    return (
      <div className="w-full">
        <button
          type="button"
          onClick={() =>
            onOpenLightbox(
              getGlobalIndex(0)
            )
          }
          className="
            block
            w-full
            overflow-hidden
            rounded-[10px]
            border-0
            bg-transparent
            p-0
          "
        >
          <img
            src={photos[0].src}
            alt={photos[0].alt}
            className="
              block
              h-auto
              max-h-[520px]
              w-full
              object-cover
            "
          />
        </button>
      </div>
    );
  }

  /* ---------------------------------------------------------
     TWO IMAGES
  --------------------------------------------------------- */

  if (photos.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-[12px]">
        {photos.map((photo, index) => (
          <button
            key={`${photo.src}-${index}`}
            type="button"
            onClick={() =>
              onOpenLightbox(
                getGlobalIndex(index)
              )
            }
            className="
              block
              aspect-[4/3]
              overflow-hidden
              rounded-[10px]
              border-0
              bg-transparent
              p-0
            "
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="
                block
                h-full
                w-full
                object-cover
                transition-transform
                duration-300
                hover:scale-[1.01]
              "
            />
          </button>
        ))}
      </div>
    );
  }

  /* ---------------------------------------------------------
     THREE OR MORE IMAGES
  --------------------------------------------------------- */

  return (
    <div className="space-y-[12px]">
      {/* First large image */}

      <button
        type="button"
        onClick={() =>
          onOpenLightbox(
            getGlobalIndex(0)
          )
        }
        className="
          group
          block
          aspect-[4/3]
          w-full
          overflow-hidden
          rounded-[10px]
          border-0
          bg-transparent
          p-0
        "
      >
        <img
          src={photos[0].src}
          alt={photos[0].alt}
          className="
            block
            h-full
            w-full
            object-cover
            transition-transform
            duration-300
            group-hover:scale-[1.01]
          "
        />
      </button>

      {/* Remaining images */}

      <div className="grid grid-cols-2 gap-[12px]">
        {photos.slice(1).map((photo, index) => (
          <button
            key={`${photo.src}-${index + 1}`}
            type="button"
            onClick={() =>
              onOpenLightbox(
                getGlobalIndex(index + 1)
              )
            }
            className="
              group
              block
              aspect-[4/3]
              overflow-hidden
              rounded-[10px]
              border-0
              bg-transparent
              p-0
            "
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="
                block
                h-full
                w-full
                object-cover
                transition-transform
                duration-300
                group-hover:scale-[1.01]
              "
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   PHOTO TOUR
========================================================= */

function PhotoTourScrollable({
  onClose,
  onOpenLightbox,
}) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        overflow-y-auto
        bg-[var(--shade-01)]
      "
    >
      {/* ===================================================
          HEADER
      =================================================== */}

      <header
        className="
          sticky
          top-0
          z-[110]
          flex
          h-[72px]
          w-full
          items-center
          justify-between
          bg-[var(--shade-01)]
          px-[40px]
        "
      >
        {/* Back */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo tour"
          className="
            flex
            h-[40px]
            w-[40px]
            items-center
            justify-center
            rounded-full
            border-0
            bg-transparent
            p-0
            text-[var(--shade-02)]
            transition-colors
            duration-150
            hover:bg-[var(--neutral-01)]
          "
        >
          <ChevronLeft size={28} strokeWidth={1} />
        </button>

        {/* Center title */}

        <h1
          className="
            absolute
            left-1/2
            top-1/2
            m-0
            -translate-x-1/2
            -translate-y-1/2
            text-[20px]
            font-semibold
            leading-none
            text-[var(--shade-02)]
          "
        >
          Photo tour
        </h1>

        {/* Right actions */}

        <div className="flex items-center gap-[14px]">
          <button
            type="button"
            aria-label="Share"
            className="
              flex
              h-[40px]
              w-[40px]
              items-center
              justify-center
              rounded-full
              border-0
              bg-transparent
              p-0
              text-[var(--shade-02)]
              transition-colors
              duration-150
              hover:bg-[var(--neutral-01)]
            "
          >
            <Share
              size={20}
              strokeWidth={1.2}
            />
          </button>

          <button
            type="button"
            aria-label="Save"
            className="
              flex
              h-[40px]
              w-[40px]
              items-center
              justify-center
              rounded-full
              border-0
              bg-transparent
              p-0
              text-[var(--shade-02)]
              transition-colors
              duration-150
              hover:bg-[var(--neutral-01)]
            "
          >
            <Heart
              size={20}
              strokeWidth={1.2}
            />
          </button>
        </div>
      </header>

      {/* ===================================================
          UPPER THUMBNAIL NAVIGATION
      =================================================== */}

      <nav
        aria-label="Photo tour sections"
        className="
          mx-auto
          w-full
          max-w-[1120px]
          px-0
          pb-[26px]
          pt-[30px]
        "
      >
        <div
          className="
            flex
            flex-wrap
            items-start
            gap-x-[14px]
            gap-y-[18px]
          "
        >
          {tourSections.map(
            (section, index) => (
              <a
                key={section.title}
                href={`#photo-section-${index}`}
                className="
                  group
                  w-[132px]
                  shrink-0
                  no-underline
                "
              >
                <div
                  className="
                    h-[123px]
                    w-[132px]
                    overflow-hidden
                    rounded-[10px]
                    bg-[var(--neutral-01)]
                  "
                >
                  <img
                    src={
                      section.photos[0]?.src
                    }
                    alt={section.title}
                    className="
                      block
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                <span
                  className="
                    mt-[9px]
                    block
                    text-[16px]
                    font-normal
                    leading-[20px]
                    text-[var(--neutral-07)]
                  "
                >
                  {section.title}
                </span>
              </a>
            )
          )}
        </div>
      </nav>

      {/* ===================================================
          MAIN PHOTO TOUR CONTENT
      =================================================== */}

      <main
        className="
          mx-auto
          w-full
          max-w-[1120px]
          pb-[120px]
        "
      >
        {tourSections.map(
          (section, sectionIndex) => (
            <section
              key={section.title}
              id={`photo-section-${sectionIndex}`}
              className="
                grid
                grid-cols-[minmax(0,1fr)_540px]
                items-start
                gap-[56px]
                scroll-mt-[100px]
                py-[34px]
              "
            >
              {/* LEFT INFORMATION */}

              <div
                className="
                  sticky
                  top-[100px]
                  pt-[4px]
                "
              >
                <h2
                  className="
                    m-0
                    text-[34px]
                    font-semibold
                    leading-[1.12]
                    tracking-[-0.8px]
                    text-[var(--shade-02)]
                  "
                >
                  {section.title}
                </h2>

                {section.description && (
                  <p
                    className="
                      mt-[10px]
                      max-w-[500px]
                      text-[20px]
                      font-normal
                      leading-[1.4]
                      text-[var(--neutral-07)]
                    "
                  >
                    {section.description}
                  </p>
                )}
              </div>

              {/* RIGHT GALLERY */}

              <PhotoGallery
                section={section}
                sectionIndex={sectionIndex}
                onOpenLightbox={
                  onOpenLightbox
                }
              />
            </section>
          )
        )}
      </main>
    </div>
  );
}

export default PhotoTourScrollable;
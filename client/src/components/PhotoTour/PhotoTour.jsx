import { ArrowLeft, Share } from "lucide-react";

function PhotoTour({
  photos,
  onClose,
  onOpenLightbox,
}) {
  const handlePhotoClick = (index) => {
    onOpenLightbox(index);
  };

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
      {/* Header */}

      <header
        className="
          sticky
          top-0
          z-50
          flex
          h-[72px]
          w-full
          items-center
          justify-between
          border-b
          border-[var(--neutral-03)]
          bg-[var(--shade-01)]
          px-[40px]
        "
      >
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
            text-[var(--shade-02)]
            transition-colors
            duration-150
            hover:bg-[var(--neutral-01)]
          "
        >
          <ArrowLeft
            size={20}
            strokeWidth={1.8}
          />
        </button>

        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
            text-[14px]
            font-medium
            text-[var(--shade-02)]
          "
        >
          Photo tour

          <span
            className="
              ml-[8px]
              text-[var(--neutral-07)]
            "
          >
            · {photos.length} photos
          </span>
        </div>

        <button
          type="button"
          aria-label="Share photos"
          className="
            flex
            h-[40px]
            items-center
            gap-[7px]
            rounded-full
            border-0
            bg-transparent
            px-[12px]
            text-[13px]
            font-medium
            text-[var(--shade-02)]
            transition-colors
            duration-150
            hover:bg-[var(--neutral-01)]
          "
        >
          <Share
            size={17}
            strokeWidth={1.8}
          />

          <span className="underline underline-offset-[2px]">
            Share
          </span>
        </button>
      </header>

      {/* Gallery */}

      <main
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-[40px]
          pb-[80px]
          pt-[24px]
        "
      >
        <div className="grid grid-cols-2 gap-[16px]">
          {photos.map((photo, index) => (
            <button
              key={`${photo.src}-${index}`}
              type="button"
              onClick={() => handlePhotoClick(index)}
              className="
                group
                relative
                overflow-hidden
                rounded-[8px]
                border-0
                bg-[var(--neutral-01)]
                p-0
                text-left
              "
            >
              <img
                src={photo.src}
                alt={
                  photo.alt ||
                  `Photo ${index + 1}`
                }
                className="
                  block
                  aspect-[4/3]
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-300
                  group-hover:scale-[1.015]
                "
              />

              <span
                className="
                  absolute
                  bottom-[12px]
                  left-[12px]
                  flex
                  h-[28px]
                  min-w-[28px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[rgba(0,0,0,0.55)]
                  px-[8px]
                  text-[11px]
                  font-medium
                  text-[var(--shade-01)]
                "
              >
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default PhotoTour;
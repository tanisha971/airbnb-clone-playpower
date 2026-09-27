import { useEffect } from "react";
import LightboxControls from "./LightboxControls";
import LightboxCounter from "./LightboxCounter";

function Lightbox({
  photos,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}) {
  const currentPhoto = photos[currentIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Prevent the listing page from scrolling
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrevious, onNext]);

  if (!currentPhoto) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[200]
        flex
        items-center
        justify-center
        bg-[rgba(0,0,0,0.92)]
      "
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      {/* Top bar */}
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          z-10
          flex
          h-[72px]
          items-center
          justify-between
          px-[32px]
        "
      >
        <LightboxCounter
          currentIndex={currentIndex}
          total={photos.length}
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="
            flex
            h-[40px]
            w-[40px]
            items-center
            justify-center
            rounded-full
            border-0
            bg-transparent
            text-[var(--shade-01)]
            transition-colors
            duration-150
            hover:bg-[rgba(255,255,255,0.12)]
          "
        >
          <span
            className="
              text-[28px]
              font-light
              leading-none
            "
          >
            ×
          </span>
        </button>
      </div>

      {/* Image */}
      <div
        className="
          flex
          h-full
          w-full
          items-center
          justify-center
          px-[100px]
          py-[90px]
        "
        onClick={onClose}
      >
        <img
          src={currentPhoto.src}
          alt={currentPhoto.alt || `Photo ${currentIndex + 1}`}
          onClick={(event) => event.stopPropagation()}
          className="
            max-h-full
            max-w-full
            object-contain
            select-none
          "
          draggable="false"
        />
      </div>

      {/* Previous / Next */}
      <LightboxControls
        onPrevious={onPrevious}
        onNext={onNext}
        disablePrevious={currentIndex === 0}
        disableNext={currentIndex === photos.length - 1}
      />
    </div>
  );
}

export default Lightbox;
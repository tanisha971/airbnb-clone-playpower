import { useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
        event.preventDefault();
        onClose();
      }

      if (
        event.key === "ArrowLeft" &&
        currentIndex > 0
      ) {
        event.preventDefault();
        onPrevious();
      }

      if (
        event.key === "ArrowRight" &&
        currentIndex < photos.length - 1
      ) {
        event.preventDefault();
        onNext();
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    currentIndex,
    photos.length,
    onClose,
    onPrevious,
    onNext,
  ]);

  if (!currentPhoto) {
    return null;
  }

  const isFirstPhoto = currentIndex === 0;
  const isLastPhoto =
    currentIndex === photos.length - 1;

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
          z-20
          flex
          h-[72px]
          items-center
          justify-between
          px-[32px]
        "
      >
        {/* Counter */}

        <div
          className="
            flex
            h-[36px]
            items-center
            rounded-full
            bg-[rgba(0,0,0,0.45)]
            px-[14px]
            text-[13px]
            font-medium
            text-[var(--shade-01)]
            backdrop-blur-[4px]
          "
        >
          {currentIndex + 1} / {photos.length}
        </div>

        {/* Close */}

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

      {/* Image area */}

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
          alt={
            currentPhoto.alt ||
            `Photo ${currentIndex + 1}`
          }
          onClick={(event) =>
            event.stopPropagation()
          }
          className="
            max-h-full
            max-w-full
            select-none
            object-contain
          "
          draggable="false"
        />
      </div>

      {/* Previous */}

      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstPhoto}
        aria-label="Previous photo"
        className="
          absolute
          left-[24px]
          top-1/2
          z-20
          flex
          h-[48px]
          w-[48px]
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-[rgba(255,255,255,0.7)]
          bg-[rgba(0,0,0,0.35)]
          p-0
          text-[var(--shade-01)]
          transition-all
          duration-150
          hover:bg-[rgba(0,0,0,0.6)]
          active:scale-95
          disabled:cursor-not-allowed
          disabled:opacity-30
        "
      >
        <ChevronLeft
          size={24}
          strokeWidth={1.7}
        />
      </button>

      {/* Next */}

      <button
        type="button"
        onClick={onNext}
        disabled={isLastPhoto}
        aria-label="Next photo"
        className="
          absolute
          right-[24px]
          top-1/2
          z-20
          flex
          h-[48px]
          w-[48px]
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-[rgba(255,255,255,0.7)]
          bg-[rgba(0,0,0,0.35)]
          p-0
          text-[var(--shade-01)]
          transition-all
          duration-150
          hover:bg-[rgba(0,0,0,0.6)]
          active:scale-95
          disabled:cursor-not-allowed
          disabled:opacity-30
        "
      >
        <ChevronRight
          size={24}
          strokeWidth={1.7}
        />
      </button>
    </div>
  );
}

export default Lightbox;
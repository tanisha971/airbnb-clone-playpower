import { ArrowLeft, Share } from "lucide-react";

function PhotoTourHeader({ onClose, photoCount }) {
  return (
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
      {/* Close / Back */}
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

      {/* Photo count */}
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
          · {photoCount} photos
        </span>
      </div>

      {/* Share */}
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
  );
}

export default PhotoTourHeader;
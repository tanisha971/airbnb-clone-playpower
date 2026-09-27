import { ChevronLeft, ChevronRight } from "lucide-react";

function LightboxControls({
  onPrevious,
  onNext,
  disablePrevious,
  disableNext,
}) {
  return (
    <>
      {/* Previous */}
      <button
        type="button"
        onClick={onPrevious}
        disabled={disablePrevious}
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
        disabled={disableNext}
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
    </>
  );
}

export default LightboxControls;
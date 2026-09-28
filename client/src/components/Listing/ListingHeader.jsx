import { useEffect, useState } from "react";
import { Heart, Share } from "lucide-react";

function ListingHeader() {
  const title =
    "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10";

  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  /* =====================================================
     SAVE / REMOVE FROM WISHLIST
  ===================================================== */

  const handleSave = () => {
    const nextSavedState = !isSaved;

    setIsSaved(nextSavedState);

    setToastMessage(
      nextSavedState
        ? "Saved to wishlist"
        : "Removed from wishlist"
    );
  };

  /* =====================================================
     AUTO-HIDE TOAST
  ===================================================== */

  useEffect(() => {
    if (!toastMessage) return;

    const timer = setTimeout(() => {
      setToastMessage("");
    }, 2500);

    return () => clearTimeout(timer);
  }, [toastMessage]);

  return (
    <>
      {/* =====================================================
          LISTING HEADER
      ===================================================== */}

      <section
        className="
          mx-auto
          flex
          w-[calc(100%-80px)]
          max-w-[1120px]
          items-center
          justify-between
          pt-[36px]
          pb-[26px]
        "
      >
        {/* ===================================================
            LISTING TITLE
        =================================================== */}

        <h1
          className="
            m-0
            min-w-0
            text-[30px]
            font-semibold
            leading-[36px]
            tracking-[-0.025em]
            text-[var(--shade-02)]
          "
        >
          {title}
        </h1>

        {/* ===================================================
            ACTIONS
        =================================================== */}

        <div
          className="
            ml-[32px]
            flex
            shrink-0
            items-center
            gap-[12px]
          "
        >
          {/* =================================================
              SHARE
          ================================================= */}

          <button
            type="button"
            className="
              flex
              h-[36px]
              items-center
              gap-[7px]
              rounded-full
              border-0
              bg-transparent
              px-[8px]
              text-[14px]
              font-medium
              leading-[20px]
              text-[var(--shade-02)]
              transition-colors
              duration-150
              hover:bg-[var(--neutral-01)]
            "
          >
            <Share
              size={17}
              strokeWidth={1.8}
              className="shrink-0"
            />

            <span
              className="
                underline
                underline-offset-[3px]
              "
            >
              Share
            </span>
          </button>

          {/* =================================================
              SAVE / SAVED
          ================================================= */}

          <button
            type="button"
            onClick={handleSave}
            aria-pressed={isSaved}
            aria-label={
              isSaved
                ? "Remove from wishlist"
                : "Save to wishlist"
            }
            className="
              flex
              h-[36px]
              items-center
              gap-[7px]
              rounded-full
              border-0
              bg-transparent
              px-[8px]
              text-[14px]
              font-medium
              leading-[20px]
              text-[var(--shade-02)]
              transition-colors
              duration-150
              hover:bg-[var(--neutral-01)]
            "
          >
            <Heart
              size={18}
              strokeWidth={1.8}
              fill={
                isSaved
                  ? "var(--primary-02)"
                  : "none"
              }
              className={
                isSaved
                  ? "text-[var(--primary-02)]"
                  : "text-[var(--shade-02)]"
              }
            />

            <span
              className="
                underline
                underline-offset-[3px]
              "
            >
              {isSaved ? "Saved" : "Save"}
            </span>
          </button>
        </div>
      </section>

      {/* =====================================================
          SAVE TOAST
      ===================================================== */}

      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="
            fixed
            bottom-[48px]
            left-1/2
            z-[200]
            flex
            min-h-[46px]
            -translate-x-1/2
            items-center
            justify-center
            rounded-[8px]
            bg-[var(--shade-02)]
            px-[20px]
            py-[12px]
            text-[13px]
            font-semibold
            text-[var(--shade-01)]
            shadow-[0_4px_12px_rgba(0,0,0,0.15)]
          "
        >
          {toastMessage}
        </div>
      )}
    </>
  );
}

export default ListingHeader;
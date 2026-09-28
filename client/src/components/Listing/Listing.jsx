import { useState } from "react";

import ListingHeader from "./ListingHeader";
import PhotoGrid from "./PhotoGrid";
import PropertyOverview from "./PropertyOverview";
import PropertyHighlights from "./PropertyHighlights";
import PropertyDescription from "./PropertyDescription";
import SleepingArrangements from "./SleepingArrangements";
import Amenities from "./Amenities";
import AvailabilityCalendar from "./AvailabilityCalendar";
import DiscountBanner from "./DiscountBanner";
import BookingCard from "./BookingCard";

function Listing({ onShowAllPhotos }) {
  const [reserved, setReserved] = useState(false);

  return (
    <main className="w-full bg-[var(--shade-01)]">
      {/* =====================================================
          LISTING HEADER
      ===================================================== */}

      <ListingHeader />

      {/* =====================================================
          PHOTO GALLERY
          This wrapper gives the navbar's #photos anchor
          a reliable target.
      ===================================================== */}

      <section
        id="photos"
        
      >
        <PhotoGrid
          onShowAllPhotos={onShowAllPhotos}
        />
      </section>

      {/* =====================================================
          MAIN LISTING CONTENT

          Reference desktop geometry:

          Container  : ~1320px
          Left       : ~774px
          Gap        : ~108px
          Right      : ~438px

          At a 1778px viewport:
          left edge ≈ 229px
          right edge ≈ 1549px
      ===================================================== */}

      <section
        className="
          mx-auto
          mt-[52px]
          grid
          w-[calc(100%-80px)]
          max-w-[1120px]
          grid-cols-[minmax(0,774px)_380px]
          items-start
          gap-[108px]
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="min-w-0">
          {/* -----------------------------------------------
              PROPERTY OVERVIEW
          ----------------------------------------------- */}

          <PropertyOverview />

          {/* -----------------------------------------------
              PROPERTY HIGHLIGHTS
          ----------------------------------------------- */}

          <PropertyHighlights />

          {/* -----------------------------------------------
              DESCRIPTION
          ----------------------------------------------- */}

          <PropertyDescription />

          {/* -----------------------------------------------
              SLEEPING ARRANGEMENTS
          ----------------------------------------------- */}

          <SleepingArrangements />

          {/* -----------------------------------------------
              AMENITIES
          ----------------------------------------------- */}

          <Amenities />

          {/* -----------------------------------------------
              AVAILABILITY
          ----------------------------------------------- */}

          <AvailabilityCalendar />
        </div>

        {/* =================================================
            RIGHT BOOKING RAIL
        ================================================= */}

        <aside
          className="
            sticky
            top-[96px]
            w-full
            self-start
          "
        >
          {/* -----------------------------------------------
              DISCOUNT BANNER
          ----------------------------------------------- */}

          <DiscountBanner />

          {/* -----------------------------------------------
              BOOKING CARD
          ----------------------------------------------- */}

          <div className="mt-[28px]">
            <BookingCard
              reserved={reserved}
              onReserve={() => setReserved(true)}
            />
          </div>

          {/* -----------------------------------------------
              REPORT LISTING
          ----------------------------------------------- */}

          <button
            type="button"
            className="
              mx-auto
              mt-[28px]
              flex
              items-center
              gap-[9px]
              border-0
              bg-transparent
              p-0
              text-[14px]
              font-normal
              leading-[20px]
              text-[var(--neutral-07)]
              transition-colors
              duration-150
              hover:text-[var(--shade-02)]
            "
          >
            <span
              aria-hidden="true"
              className="
                text-[16px]
                leading-none
              "
            >
              ⚑
            </span>

            <span className="underline underline-offset-[3px]">Report this listing</span>
          </button>
        </aside>
      </section>
    </main>
  );
}

export default Listing;
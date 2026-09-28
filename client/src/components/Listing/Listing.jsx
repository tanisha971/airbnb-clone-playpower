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
    <main>
      <ListingHeader />

      <PhotoGrid onShowAllPhotos={onShowAllPhotos} />

      <section
  className="
    mx-auto
    grid
    w-[calc(100%-140px)]
    grid-cols-[minmax(0,1fr)_465px]
    items-start
    gap-[120px]
  "
>
        <div className="min-w-0">
          <PropertyOverview />
          <PropertyHighlights />
          <PropertyDescription />
          <SleepingArrangements />
          <Amenities />
          <AvailabilityCalendar />
        </div>

        <aside className="sticky top-[88px] w-full">
          <DiscountBanner />

          <BookingCard
            reserved={reserved}
            onReserve={() => setReserved(true)}
          />

          {/* Report listing */}
        </aside>
      </section>
    </main>
  );
}

export default Listing;
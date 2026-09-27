import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";

import ListingHeader from "../components/Listing/ListingHeader";
import PhotoGrid from "../components/Listing/PhotoGrid";
import PropertyOverview from "../components/Listing/PropertyOverview";
import PropertyHighlights from "../components/Listing/PropertyHighlights";
import SleepingArrangements from "../components/Listing/SleepingArrangements";
import Amenities from "../components/Listing/Amenities";
import AvailabilityCalendar from "../components/Listing/AvailabilityCalendar";
import BookingCard from "../components/Listing/BookingCard";
import Reviews from "../components/Listing/Reviews";
import Location from "../components/Listing/Location";
import HostSection from "../components/Listing/HostSection";
import FooterInfo from "../components/Listing/FooterInfo";

import PhotoTour from "../components/PhotoTour/PhotoTour";
import Lightbox from "../components/Lightbox/Lightbox";

function ListingPage() {
  /* --------------------------------
     Listing data
  -------------------------------- */

  const listing = {
    price: "₹28,499",
    nights: 5,
    rating: "4.95",
    reviewCount: 19,
  };

  /* --------------------------------
     Gallery data
  -------------------------------- */

  const photos = [
    {
      src: "/assets/gallery/photo-01.jpg",
      alt: "Living room",
    },
    {
      src: "/assets/gallery/photo-02.jpg",
      alt: "Dining area",
    },
    {
      src: "/assets/gallery/photo-03.jpg",
      alt: "Jacuzzi",
    },
    {
      src: "/assets/gallery/photo-04.jpg",
      alt: "Bedroom",
    },
    {
      src: "/assets/gallery/photo-05.jpg",
      alt: "Property exterior",
    },
  ];

  /* --------------------------------
     Photo Tour state
  -------------------------------- */

  const [isPhotoTourOpen, setIsPhotoTourOpen] =
    useState(false);

  /* --------------------------------
     Lightbox state
  -------------------------------- */

  const [isLightboxOpen, setIsLightboxOpen] =
    useState(false);

  const [currentPhotoIndex, setCurrentPhotoIndex] =
    useState(0);

  /* --------------------------------
     Photo Tour
  -------------------------------- */

  const handleShowAllPhotos = () => {
    setIsPhotoTourOpen(true);
  };

  const handleClosePhotoTour = () => {
    setIsPhotoTourOpen(false);
  };

  /* --------------------------------
     Lightbox
  -------------------------------- */

  const handleOpenLightbox = (index) => {
    setCurrentPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex((current) => {
      if (current === 0) {
        return photos.length - 1;
      }

      return current - 1;
    });
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((current) => {
      if (current === photos.length - 1) {
        return 0;
      }

      return current + 1;
    });
  };

  /* --------------------------------
     Reservation
  -------------------------------- */

  const [reserved, setReserved] = useState(false);

  const handleReserve = () => {
    setReserved((current) => !current);
  };

  return (
    <div className="site-shell min-h-screen bg-[var(--shade-01)]">
      <Navbar />

      <main>
        <ListingHeader />

        <PhotoGrid
          onShowAllPhotos={handleShowAllPhotos}
        />

        <PropertyOverview />

        <PropertyHighlights />

        <SleepingArrangements />

        <Amenities />

        <AvailabilityCalendar />

        <Reviews />

        <Location />

        <HostSection />

        <FooterInfo />
      </main>

      {/* Booking card */}
      <div
        className="
          fixed
          bottom-[24px]
          right-[40px]
          z-40
          hidden
          xl:block
        "
      >
        <BookingCard
          listing={listing}
          reserved={reserved}
          onReserve={handleReserve}
        />
      </div>

      {/* Photo Tour */}
      {isPhotoTourOpen && (
        <PhotoTour
          photos={photos}
          onClose={handleClosePhotoTour}
          onOpenLightbox={handleOpenLightbox}
        />
      )}

      {/* Lightbox */}
      {isLightboxOpen && (
        <Lightbox
          photos={photos}
          currentIndex={currentPhotoIndex}
          onClose={handleCloseLightbox}
          onPrevious={handlePreviousPhoto}
          onNext={handleNextPhoto}
        />
      )}
    </div>
  );
}

export default ListingPage;
import { useCallback, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Listing, {
  galleryPhotos,
} from "../components/Listing/Listing";
import Reviews from "../components/Reviews/Reviews";
import Location from "../components/Location/Location";
import HostSection from "../components/Host/HostSection";
import FooterInfo from "../components/Footer/FooterInfo";
import PhotoTour from "../components/PhotoTour/PhotoTour";
import Lightbox from "../components/Lightbox/Lightbox";

function ListingPage() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] =
    useState(false);

  const [isLightboxOpen, setIsLightboxOpen] =
    useState(false);

  const [lightboxIndex, setLightboxIndex] =
    useState(0);

  /* =====================================================
     PHOTO TOUR
  ===================================================== */

  const openPhotoTour = useCallback(() => {
    setIsPhotoTourOpen(true);
  }, []);

  const closePhotoTour = useCallback(() => {
    setIsPhotoTourOpen(false);
  }, []);

  /* =====================================================
     LIGHTBOX
  ===================================================== */

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const showPrevious = useCallback(() => {
    setLightboxIndex((current) =>
      Math.max(0, current - 1)
    );
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((current) =>
      Math.min(
        galleryPhotos.length - 1,
        current + 1
      )
    );
  }, []);

  return (
    <div className="site-shell min-h-screen bg-[var(--shade-01)]">
      <Navbar />

      {/* Main listing */}

      <Listing
        onShowAllPhotos={openPhotoTour}
      />

      {/* Major page sections */}

      <Reviews />

      <Location />

      <HostSection />

      <FooterInfo />

      {/* Photo Tour */}

      {isPhotoTourOpen && (
        <PhotoTour
          photos={galleryPhotos}
          onClose={closePhotoTour}
          onOpenLightbox={openLightbox}
        />
      )}

      {/* Lightbox */}

      {isLightboxOpen && (
        <Lightbox
          photos={galleryPhotos}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      )}
    </div>
  );
}

export default ListingPage;
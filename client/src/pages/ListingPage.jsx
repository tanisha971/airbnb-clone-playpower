import { useCallback, useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";

import Listing from "../components/Listing/Listing";
import { galleryPhotos } from "../components/Listing/PhotoGrid";

import Reviews from "../components/Reviews/Reviews";
import Location from "../components/Location/Location";
import HostSection from "../components/Host/HostSection";
import FooterInfo from "../components/Footer/FooterInfo";

import PhotoTourScrollable from "../components/PhotoTour/PhotoTourScrollable";
import Lightbox from "../components/Lightbox/Lightbox";

import { getListing } from "../services/listingApi";

function ListingPage() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isPhotoTourOpen, setIsPhotoTourOpen] =
    useState(false);

  const [isLightboxOpen, setIsLightboxOpen] =
    useState(false);

  const [lightboxIndex, setLightboxIndex] =
    useState(0);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);

        const data = await getListing("mirashya-ug10");

        setListing(data);
      } catch (error) {
        console.error("Failed to load listing:", error);
        setError("Failed to load listing.");
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, []);

  const openPhotoTour = useCallback(() => {
    setIsPhotoTourOpen(true);
  }, []);

  const closePhotoTour = useCallback(() => {
    setIsPhotoTourOpen(false);
  }, []);

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

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        {error || "Listing not found."}
      </div>
    );
  }

  return (
    <div className="site-shell min-h-screen bg-[var(--shade-01)]">
      <Navbar />

      <Listing
        listing={listing}
        onShowAllPhotos={openPhotoTour}
      />

      <Reviews />
      <Location listing={listing} />
      <HostSection listing={listing} />
      <FooterInfo listing={listing} />

      {isPhotoTourOpen && (
        <PhotoTourScrollable
          photos={galleryPhotos}
          onClose={closePhotoTour}
          onOpenLightbox={openLightbox}
        />
      )}

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
import { useState } from "react";
import PhotoTourHeader from "./PhotoTourHeader";
import PhotoTourGrid from "./PhotoTourGrid";

function PhotoTour({ photos, onClose, onOpenLightbox }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const handlePhotoClick = (index) => {
    setActivePhotoIndex(index);

    if (onOpenLightbox) {
      onOpenLightbox(index);
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        overflow-y-auto
        bg-[var(--shade-01)]
      "
    >
      <PhotoTourHeader
        onClose={onClose}
        photoCount={photos.length}
      />

      <main
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-[40px]
          pb-[80px]
          pt-[24px]
        "
      >
        <PhotoTourGrid
          photos={photos}
          activePhotoIndex={activePhotoIndex}
          onPhotoClick={handlePhotoClick}
        />
      </main>
    </div>
  );
}

export default PhotoTour;
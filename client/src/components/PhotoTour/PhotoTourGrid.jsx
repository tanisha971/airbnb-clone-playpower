function PhotoTourGrid({
  photos,
  activePhotoIndex,
  onPhotoClick,
}) {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-[16px]
      "
    >
      {photos.map((photo, index) => {
        const isActive = index === activePhotoIndex;

        return (
          <button
            key={`${photo.src}-${index}`}
            type="button"
            onClick={() => onPhotoClick(index)}
            className={`
              group
              relative
              overflow-hidden
              rounded-[8px]
              border-0
              bg-[var(--neutral-01)]
              p-0
              text-left
              ${
                isActive
                  ? "ring-2 ring-[var(--shade-02)] ring-offset-2"
                  : ""
              }
            `}
          >
            <img
              src={photo.src}
              alt={photo.alt || `Photo ${index + 1}`}
              className="
                block
                aspect-[4/3]
                h-auto
                w-full
                object-cover
                transition-transform
                duration-300
                group-hover:scale-[1.015]
              "
            />

            {/* Photo number */}
            <span
              className="
                absolute
                bottom-[12px]
                left-[12px]
                flex
                h-[28px]
                min-w-[28px]
                items-center
                justify-center
                rounded-full
                bg-[rgba(0,0,0,0.55)]
                px-[8px]
                text-[11px]
                font-medium
                text-[var(--shade-01)]
              "
            >
              {index + 1}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default PhotoTourGrid;
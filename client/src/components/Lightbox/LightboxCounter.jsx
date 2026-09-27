function LightboxCounter({ currentIndex, total }) {
  return (
    <div
      className="
        flex
        h-[36px]
        items-center
        rounded-full
        bg-[rgba(0,0,0,0.45)]
        px-[14px]
        text-[13px]
        font-medium
        text-[var(--shade-01)]
        backdrop-blur-[4px]
      "
    >
      {currentIndex + 1} / {total}
    </div>
  );
}

export default LightboxCounter;
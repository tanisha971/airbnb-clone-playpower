function SleepingArrangements({ listing }) {
  const sleepingArrangements =
    listing?.sleepingArrangements || [];

  return (
    <section
      className="
        w-full
        border-b
        border-[var(--neutral-03)]
        py-[28px]
      "
    >
      <h2
        className="
          m-0
          mb-[18px]
          text-[18px]
          font-semibold
          leading-[24px]
          tracking-[-0.01em]
          text-[var(--shade-02)]
        "
      >
        Where you'll sleep
      </h2>

      <div className="flex gap-[12px]">
        {sleepingArrangements.map(
          ({ room, description, image }) => (
            <div
              key={room}
              className="w-[200px] shrink-0"
            >
              <div
                className="
                  h-[135px]
                  w-full
                  overflow-hidden
                  rounded-[8px]
                  bg-[var(--neutral-01)]
                "
              >
                <img
                  src={image}
                  alt={room}
                  className="
                    block
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              <div className="mt-[10px]">
                <p
                  className="
                    m-0
                    text-[14px]
                    font-semibold
                    leading-[20px]
                    text-[var(--shade-02)]
                  "
                >
                  {room}
                </p>

                <p
                  className="
                    m-0
                    mt-[2px]
                    text-[14px]
                    font-normal
                    leading-[20px]
                    text-[var(--neutral-07)]
                  "
                >
                  {description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default SleepingArrangements;
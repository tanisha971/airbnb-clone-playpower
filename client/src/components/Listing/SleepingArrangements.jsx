function SleepingArrangements() {
  const sleepingArrangements = [
    {
      room: "Bedroom",
      description: "1 double bed",
      image: "/assets/sleeping/bedroom.jpg",
    },
    {
      room: "Living room",
      description: "1 sofa",
      image: "/assets/sleeping/living-room.jpg",
    },
  ];

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
          text-[16px]
          font-semibold
          leading-[22px]
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
              className="w-[220px] shrink-0"
            >
              <div
                className="
                  h-[150px]
                  w-full
                  overflow-hidden
                  rounded-[8px]
                  bg-[var(--neutral-01)]
                "
              >
                <img
                  src={image}
                  alt={room}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-[10px]">
                <p
                  className="
                    m-0
                    text-[12px]
                    font-semibold
                    leading-[17px]
                    text-[var(--shade-02)]
                  "
                >
                  {room}
                </p>

                <p
                  className="
                    m-0
                    mt-[2px]
                    text-[11px]
                    leading-[16px]
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

/* =========================================================
   AMENITIES
========================================================= */

export default SleepingArrangements;

import {
  ChevronLeft,
  ChevronRight,
  PawPrint,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function FooterInfo() {
  const nearbyStays = [
    {
      image: "/assets/gallery/pool.avif",
      title: "Beautiful Stay With a private pool",
      location: "Candolim, Goa",
      price: "₹23,500",
      rating: "4.91",
    },
    {
      image: "/assets/gallery/39.avif",
      title: "Modern villa with private pool",
      location: "Calangute, Goa",
      price: "₹21,250",
      rating: "4.85",
    },
    {
      image: "/assets/gallery/46.avif",
      title: "Goan luxury stay with pool",
      location: "Anjuna, Goa",
      price: "₹18,900",
      rating: "4.88",
    },
    {
      image: "/assets/gallery/pool2.avif",
      title: "Tropical Studio 5 mins from beach",
      location: "Candolim, Goa",
      price: "₹15,200",
      rating: "4.82",
    },
    {
      image: "/assets/gallery/50.avif",
      title: "Luxury Castle 1BHK with plunge pool",
      location: "Calangute, Goa",
      price: "₹24,500",
      rating: "4.95",
    },
  ];

  return (
    <footer>
      {/* Bottom listing navigation */}
      <div
        className="
          border-b
          border-[var(--neutral-03)]
          bg-[var(--shade-01)]
        "
      >
        <div
          className="
            mx-auto
            flex
            w-[calc(100%-180px)]
            max-w-[1120px]
            items-center
            justify-between
            py-[16px]
          "
        >
          <nav className="flex items-center gap-[24px]">
            <a
              href="#photos"
              className="
                text-[11px]
                font-medium
                text-[var(--shade-02)]
                no-underline
              "
            >
              Photos
            </a>

            <a
              href="#amenities"
              className="
                text-[11px]
                font-medium
                text-[var(--shade-02)]
                no-underline
              "
            >
              Amenities
            </a>

            <a
              href="#reviews"
              className="
                text-[11px]
                font-medium
                text-[var(--shade-02)]
                no-underline
              "
            >
              Reviews
            </a>

            <a
              href="#location"
              className="
                text-[11px]
                font-medium
                text-[var(--shade-02)]
                no-underline
              "
            >
              Location
            </a>
          </nav>

          <div className="flex items-center gap-[16px]">
            <div className="text-right">
              <div
                className="
                  text-[11px]
                  font-semibold
                  text-[var(--shade-02)]
                "
              >
                ₹28,499{" "}
                <span className="font-normal">
                  for 5 nights
                </span>
              </div>

              <div
                className="
                  mt-[2px]
                  text-[9px]
                  text-[var(--neutral-07)]
                "
              >
                ★ 4.95 · 19 reviews
              </div>
            </div>

            <button
              type="button"
              className="
                h-[34px]
                min-w-[76px]
                rounded-full
                border-0
                bg-[var(--primary-02)]
                px-[16px]
                text-[11px]
                font-semibold
                text-[var(--shade-01)]
                transition-all
                duration-150
                hover:brightness-95
              "
            >
              Reserve
            </button>
          </div>
        </div>
      </div>

      {/* Policies */}
      <section
        className="
          mx-auto
          w-[calc(100%-180px)]
          max-w-[1120px]
          border-b
          border-[var(--neutral-03)]
          py-[32px]
        "
      >
        <div
          className="
            grid
            grid-cols-3
            gap-[64px]
          "
        >
          {/* Cancellation */}
          <div>
            <h3
              className="
                m-0
                text-[13px]
                font-semibold
                text-[var(--shade-02)]
              "
            >
              Cancellation policy
            </h3>

            <p
              className="
                m-0
                mt-[10px]
                text-[10px]
                leading-[17px]
                text-[var(--shade-02)]
              "
            >
              Free cancellation before 17 October.
              Cancel before check-in for a partial
              refund.
            </p>

            <button
              type="button"
              className="
                mt-[4px]
                border-0
                bg-transparent
                p-0
                text-[10px]
                font-semibold
                text-[var(--shade-02)]
                underline
              "
            >
              Learn more
            </button>
          </div>

          {/* House rules */}
          <div>
            <h3
              className="
                m-0
                text-[13px]
                font-semibold
                text-[var(--shade-02)]
              "
            >
              House rules
            </h3>

            <div className="mt-[10px] space-y-[7px]">
              <div
                className="
                  flex
                  items-center
                  gap-[8px]
                  text-[10px]
                  text-[var(--shade-02)]
                "
              >
                <Sparkles
                  size={13}
                  strokeWidth={1.5}
                />
                <span>Check-in after 2:00 pm</span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-[8px]
                  text-[10px]
                  text-[var(--shade-02)]
                "
              >
                <PawPrint
                  size={13}
                  strokeWidth={1.5}
                />
                <span>Pets allowed</span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-[8px]
                  text-[10px]
                  text-[var(--shade-02)]
                "
              >
                <span>Check-out before 11:00 am</span>
              </div>
            </div>

            <button
              type="button"
              className="
                mt-[6px]
                border-0
                bg-transparent
                p-0
                text-[10px]
                font-semibold
                text-[var(--shade-02)]
                underline
              "
            >
              Learn more
            </button>
          </div>

          {/* Safety */}
          <div>
            <h3
              className="
                m-0
                text-[13px]
                font-semibold
                text-[var(--shade-02)]
              "
            >
              Safety & property
            </h3>

            <div
              className="
                mt-[10px]
                flex
                items-start
                gap-[8px]
              "
            >
              <ShieldCheck
                size={14}
                strokeWidth={1.5}
                className="
                  mt-[1px]
                  shrink-0
                  text-[var(--shade-02)]
                "
              />

              <p
                className="
                  m-0
                  text-[10px]
                  leading-[17px]
                  text-[var(--shade-02)]
                "
              >
                Carbon monoxide alarm reported.
                Smoke detector installed on the
                property.
              </p>
            </div>

            <button
              type="button"
              className="
                mt-[6px]
                border-0
                bg-transparent
                p-0
                text-[10px]
                font-semibold
                text-[var(--shade-02)]
                underline
              "
            >
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* More stays nearby */}
      <section
        className="
          mx-auto
          w-[calc(100%-180px)]
          max-w-[1120px]
          py-[32px]
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <h2
            className="
              m-0
              text-[16px]
              font-semibold
              text-[var(--shade-02)]
            "
          >
            More stays nearby
          </h2>

          <div
            className="
              flex
              items-center
              gap-[4px]
            "
          >
            <span
              className="
                mr-[6px]
                text-[10px]
                text-[var(--neutral-07)]
              "
            >
              1 / 2
            </span>

            <button
              type="button"
              aria-label="Previous stays"
              className="
                flex
                h-[28px]
                w-[28px]
                items-center
                justify-center
                rounded-full
                border
                border-[var(--neutral-03)]
                bg-[var(--shade-01)]
                text-[var(--shade-02)]
              "
            >
              <ChevronLeft
                size={14}
                strokeWidth={1.8}
              />
            </button>

            <button
              type="button"
              aria-label="Next stays"
              className="
                flex
                h-[28px]
                w-[28px]
                items-center
                justify-center
                rounded-full
                border
                border-[var(--neutral-03)]
                bg-[var(--shade-01)]
                text-[var(--shade-02)]
              "
            >
              <ChevronRight
                size={14}
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>

        {/* Nearby cards */}
        <div
          className="
            mt-[18px]
            grid
            grid-cols-5
            gap-[12px]
          "
        >
          {nearbyStays.map((stay) => (
            <article
              key={stay.title}
              className="
                min-w-0
              "
            >
              <div
                className="
                  h-[145px]
                  w-full
                  overflow-hidden
                  rounded-[8px]
                  bg-[var(--neutral-01)]
                "
              >
                <img
                  src={stay.image}
                  alt={stay.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              <div className="mt-[8px]">
                <h3
                  className="
                    m-0
                    overflow-hidden
                    text-ellipsis
                    whitespace-nowrap
                    text-[11px]
                    font-semibold
                    text-[var(--shade-02)]
                  "
                >
                  {stay.title}
                </h3>

                <p
                  className="
                    m-0
                    mt-[3px]
                    text-[10px]
                    text-[var(--neutral-07)]
                  "
                >
                  {stay.location}
                </p>

                <p
                  className="
                    m-0
                    mt-[3px]
                    text-[10px]
                    text-[var(--shade-02)]
                  "
                >
                  <span className="font-semibold">
                    {stay.price}
                  </span>{" "}
                  night · ★ {stay.rating}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </footer>
  );
}

export default FooterInfo;
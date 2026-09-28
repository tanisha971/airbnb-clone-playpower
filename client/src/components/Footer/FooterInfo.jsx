import { useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  PawPrint,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function FooterInfo() {
  const [nearbyPage, setNearbyPage] = useState(0);

  const nearbyStayPages = [
    [
      {
        image: "/assets/gallery/pool.avif",
        title: "Beautiful Studio with a view to die for",
        price: "₹23,600",
        rating: "4.91",
      },
      {
        image: "/assets/gallery/39.avif",
        title: "NAQAB - 1bhk with private pool",
        price: "₹42,218",
        rating: "4.95",
      },
      {
        image: "/assets/gallery/46.avif",
        title: "Greentique Luxury Flat with plunge pool, Calangute",
        price: "₹44,506",
        rating: "4.94",
      },
      {
        image: "/assets/gallery/pool2.avif",
        title: "The Tropical Studio | 5 mins to Beach",
        price: "₹22,824",
        rating: "4.96",
      },
      {
        image: "/assets/gallery/50.avif",
        title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
        price: "₹39,942",
        rating: "4.95",
      },
    ],

    [
      {
        image: "/assets/gallery/pool2.avif",
        title: "The Tropical Studio | 5 mins to Beach",
        price: "₹22,824",
        rating: "4.96",
      },
      {
        image: "/assets/gallery/50.avif",
        title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
        price: "₹39,942",
        rating: "4.95",
      },
      {
        image: "/assets/gallery/jacuzzi.avif",
        title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool",
        price: "₹45,648",
        rating: "5.0",
      },
      {
        image: "/assets/gallery/39.avif",
        title: "Luxury Apt | Private Pool | 6 Mins from Beach",
        price: "₹48,786",
        rating: "4.93",
      },
      {
        image: "/assets/gallery/ext1.jpg",
        title: "Serendipity Cottage - Calm Stay in Calangute-Baga.",
        price: "₹22,824",
        rating: "4.92",
      },
    ],
  ];

  const currentStays = nearbyStayPages[nearbyPage];

  const totalPages = nearbyStayPages.length;

  const goToPreviousPage = () => {
    setNearbyPage((currentPage) =>
      Math.max(currentPage - 1, 0)
    );
  };

  const goToNextPage = () => {
    setNearbyPage((currentPage) =>
      Math.min(currentPage + 1, totalPages - 1)
    );
  };

  return (
    <footer>
      {/* =====================================================
          BOTTOM LISTING NAVIGATION
      ===================================================== */}

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

      {/* =====================================================
          POLICIES
      ===================================================== */}

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
            <CalendarDays
              size={28}
              strokeWidth={1.5}
              className="mb-[18px] text-[var(--shade-02)]"
            />

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
              Cancel before check-in on 18 October
              for a partial refund.
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
            <Sparkles
              size={28}
              strokeWidth={1.5}
              className="mb-[18px] text-[var(--shade-02)]"
            />

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

            <div
              className="
                mt-[10px]
                space-y-[7px]
                text-[10px]
                leading-[17px]
                text-[var(--shade-02)]
              "
            >
              <div>Check-in after 2:00 pm</div>
              <div>Checkout before 11:00 am</div>
              <div>3 guests maximum</div>
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
            <ShieldCheck
              size={28}
              strokeWidth={1.5}
              className="
                mb-[18px]
                text-[var(--shade-02)]
              "
            />

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
                space-y-[7px]
                text-[10px]
                leading-[17px]
                text-[var(--shade-02)]
              "
            >
              <div>Carbon monoxide alarm not reported</div>
              <div>Smoke alarm not reported</div>
              <div>
                Exterior security cameras on property
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
        </div>
      </section>

      {/* =====================================================
          MORE STAYS NEARBY
      ===================================================== */}

      <section
        className="
          mx-auto
          w-[calc(100%-180px)]
          max-w-[1120px]
          py-[32px]
        "
      >
        {/* Heading + carousel controls */}

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
              gap-[6px]
            "
          >
            {/* Page indicator */}

            <span
              className="
                mr-[6px]
                text-[10px]
                text-[var(--neutral-07)]
              "
            >
              {nearbyPage + 1} / {totalPages}
            </span>

            {/* Previous */}

            <button
              type="button"
              onClick={goToPreviousPage}
              disabled={nearbyPage === 0}
              aria-label="Previous stays"
              className={`
                flex
                h-[38px]
                w-[38px]
                items-center
                justify-center
                rounded-full
                border
                border-[var(--neutral-03)]
                bg-[var(--shade-01)]
                transition-all
                duration-150
                ${
                  nearbyPage === 0
                    ? "cursor-not-allowed text-[var(--neutral-04)]"
                    : "text-[var(--shade-02)] hover:bg-[var(--neutral-01)]"
                }
              `}
            >
              <ChevronLeft
                size={18}
                strokeWidth={1.7}
              />
            </button>

            {/* Next */}

            <button
              type="button"
              onClick={goToNextPage}
              disabled={nearbyPage === totalPages - 1}
              aria-label="Next stays"
              className={`
                flex
                h-[38px]
                w-[38px]
                items-center
                justify-center
                rounded-full
                border
                border-[var(--neutral-03)]
                bg-[var(--shade-01)]
                transition-all
                duration-150
                ${
                  nearbyPage === totalPages - 1
                    ? "cursor-not-allowed text-[var(--neutral-04)]"
                    : "text-[var(--shade-02)] hover:bg-[var(--neutral-01)]"
                }
              `}
            >
              <ChevronRight
                size={18}
                strokeWidth={1.7}
              />
            </button>
          </div>
        </div>

        {/* =================================================
            CARDS
        ================================================= */}

        <div
          className="
            mt-[18px]
            grid
            grid-cols-5
            gap-[24px]
          "
        >
          {currentStays.map((stay) => (
            <article
              key={stay.title}
              className="
                min-w-0
                transition-opacity
                duration-200
              "
            >
              {/* Image */}

              <div
                className="
                  h-[248px]
                  w-full
                  overflow-hidden
                  rounded-[12px]
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
                    transition-transform
                    duration-300
                    hover:scale-[1.02]
                  "
                />
              </div>

              {/* Details */}

              <div className="mt-[10px]">
                <h3
                  className="
                    m-0
                    text-[13px]
                    font-semibold
                    leading-[18px]
                    text-[var(--shade-02)]
                  "
                >
                  {stay.title}
                </h3>

                <p
                  className="
                    m-0
                    mt-[5px]
                    text-[12px]
                    leading-[17px]
                    text-[var(--shade-02)]
                  "
                >
                  {stay.price}{" "}
                  <span className="mx-[3px]">★</span>
                  {stay.rating}
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
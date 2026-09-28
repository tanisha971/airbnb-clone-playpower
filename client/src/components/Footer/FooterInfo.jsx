import { CalendarDays, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

function FooterInfo() {
  const [nearbyPage, setNearbyPage] = useState(0);

  const nearbyStayPages = [
    [
      {
        image: "/assets/gallery/studio1.webp",
        title: "Beautiful Studio with a view to die for",
        price: "₹23,600",
        rating: "4.91",
      },
      {
        image: "/assets/gallery/pool3.jpg",
        title: "NAQAB - 1bhk with private pool",
        price: "₹42,218",
        rating: "4.95",
      },
      {
        image: "/assets/gallery/pool2.avif",
        title: "Greentique Luxury Flat with plunge pool, Calangute",
        price: "₹44,506",
        rating: "4.94",
      },
      {
        image: "/assets/gallery/beach.webp",
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
        image: "/assets/gallery/26_BR9.avif",
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
    <footer className="w-full bg-[var(--shade-01)]">
      {/* =====================================================
          THINGS TO KNOW
      ===================================================== */}

      <section
        className="
          mx-auto
          w-[calc(100%-80px)]
          max-w-[1120px]
          border-b
          border-[var(--neutral-03)]
          py-[48px]
        "
      >
        <h2
          className="
            m-0
            text-[26px]
            font-semibold
            leading-[32px]
            tracking-[-0.02em]
            text-[var(--shade-02)]
          "
        >
          Things to know
        </h2>

        <div
          className="
            mt-[30px]
            grid
            grid-cols-3
            gap-[72px]
          "
        >
          {/* CANCELLATION POLICY */}

          <div>
            <CalendarDays
              size={27}
              strokeWidth={1.5}
              className="
                mb-[20px]
                text-[var(--shade-02)]
              "
            />

            <h3
              className="
                m-0
                text-[18px]
                font-semibold
                leading-[24px]
                text-[var(--shade-02)]
              "
            >
              Cancellation policy
            </h3>

            <p
              className="
                m-0
                mt-[16px]
                text-[16px]
                leading-[25px]
                text-[var(--shade-02)]
              "
            >
              Free cancellation before 17 October.
              Cancel before check-in on 18 October
              for a partial refund.
            </p>

            <p
              className="
                m-0
                mt-[10px]
                text-[16px]
                leading-[25px]
                text-[var(--shade-02)]
              "
            >
              Review this host&apos;s full policy for details.
            </p>

            <button
              type="button"
              className="
                mt-[8px]
                border-0
                bg-transparent
                p-0
                text-[16px]
                font-semibold
                leading-[22px]
                text-[var(--shade-02)]
                underline
                underline-offset-[3px]
              "
            >
              Learn more
            </button>
          </div>

          {/* HOUSE RULES */}

          <div>
            <span
              className="
                mb-[20px]
                flex
                h-[27px]
                w-[27px]
                items-center
                justify-center
                text-[25px]
                leading-none
                text-[var(--shade-02)]
              "
            >
              ⚿
            </span>

            <h3
              className="
                m-0
                text-[18px]
                font-semibold
                leading-[24px]
                text-[var(--shade-02)]
              "
            >
              House rules
            </h3>

            <div
              className="
                mt-[16px]
                space-y-[8px]
                text-[16px]
                leading-[25px]
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
                mt-[8px]
                border-0
                bg-transparent
                p-0
                text-[16px]
                font-semibold
                leading-[22px]
                text-[var(--shade-02)]
                underline
                underline-offset-[3px]
              "
            >
              Learn more
            </button>
          </div>

          {/* SAFETY */}

          <div>
            <ShieldCheck
              size={27}
              strokeWidth={1.5}
              className="
                mb-[20px]
                text-[var(--shade-02)]
              "
            />

            <h3
              className="
                m-0
                text-[18px]
                font-semibold
                leading-[24px]
                text-[var(--shade-02)]
              "
            >
              Safety &amp; property
            </h3>

            <div
              className="
                mt-[16px]
                space-y-[8px]
                text-[16px]
                leading-[25px]
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
                mt-[8px]
                border-0
                bg-transparent
                p-0
                text-[16px]
                font-semibold
                leading-[22px]
                text-[var(--shade-02)]
                underline
                underline-offset-[3px]
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
          w-[calc(100%-80px)]
          max-w-[1120px]
          py-[48px]
        "
      >
        {/* HEADING + CONTROLS */}

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
              text-[26px]
              font-semibold
              leading-[32px]
              tracking-[-0.02em]
              text-[var(--shade-02)]
            "
          >
            More stays nearby
          </h2>

          <div
            className="
              flex
              items-center
              gap-[10px]
            "
          >
            <span
              className="
                mr-[4px]
                text-[16px]
                leading-[20px]
                text-[var(--neutral-07)]
              "
            >
              {nearbyPage + 1} / {totalPages}
            </span>

            {/* PREVIOUS */}

            <button
              type="button"
              onClick={goToPreviousPage}
              disabled={nearbyPage === 0}
              aria-label="Previous stays"
              className={`
                flex
                h-[40px]
                w-[40px]
                items-center
                justify-center
                rounded-full
                border
                border-[var(--neutral-03)]
                bg-[var(--shade-01)]
                transition-colors
                duration-150
                ${
                  nearbyPage === 0
                    ? "cursor-not-allowed text-[var(--neutral-04)]"
                    : "text-[var(--shade-02)] hover:bg-[var(--neutral-01)]"
                }
              `}
            >
              <ChevronLeft
                size={20}
                strokeWidth={1.5}
              />
            </button>

            {/* NEXT */}

            <button
              type="button"
              onClick={goToNextPage}
              disabled={nearbyPage === totalPages - 1}
              aria-label="Next stays"
              className={`
                flex
                h-[40px]
                w-[40px]
                items-center
                justify-center
                rounded-full
                border
                border-[var(--neutral-03)]
                bg-[var(--shade-01)]
                transition-colors
                duration-150
                ${
                  nearbyPage === totalPages - 1
                    ? "cursor-not-allowed text-[var(--neutral-04)]"
                    : "text-[var(--shade-02)] hover:bg-[var(--neutral-01)]"
                }
              `}
            >
              <ChevronRight
                size={20}
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>

        {/* =================================================
            NEARBY CARDS
        ================================================= */}

        <div
          className="
            mt-[28px]
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
              "
            >
              {/* IMAGE */}

              <div
                className="
                  h-[210px]
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
                    block
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-300
                    hover:scale-[1.02]
                  "
                />
              </div>

              {/* DETAILS */}

              <div className="mt-[12px]">
                <h3
                  className="
                    m-0
                    text-[16px]
                    font-semibold
                    leading-[21px]
                    text-[var(--shade-02)]
                  "
                >
                  {stay.title}
                </h3>

                <p
                  className="
                    m-0
                    mt-[7px]
                    text-[15px]
                    leading-[20px]
                    text-[var(--shade-02)]
                  "
                >
                  {stay.price}
                  <span className="mx-[5px]">★</span>
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
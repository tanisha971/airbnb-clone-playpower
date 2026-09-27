import {
  Award,
  BedDouble,
  CheckCircle,
  ClipboardCheck,
  Map,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Tag,
} from "lucide-react";

function Reviews() {
  const ratingCategories = [
    {
      label: "Overall rating",
      rating: "",
      icon: null,
      bars: true,
    },
    {
      label: "Cleanliness",
      rating: "5.0",
      icon: Sparkles,
    },
    {
      label: "Accuracy",
      rating: "5.0",
      icon: CheckCircle,
    },
    {
      label: "Check-in",
      rating: "5.0",
      icon: ClipboardCheck,
    },
    {
      label: "Communication",
      rating: "5.0",
      icon: MessageCircle,
    },
    {
      label: "Location",
      rating: "4.8",
      icon: Map,
    },
    {
      label: "Value",
      rating: "4.8",
      icon: Tag,
    },
  ];

  const reviewCategories = [
    ["Comfort", "6", BedDouble],
    ["Accuracy", "5", CheckCircle],
    ["Host", "5", ShieldCheck],
    ["Condition", "2", Sparkles],
    ["Hospitality", "6", Award],
    ["Cleanliness", "4", Sparkles],
    ["Amenities", "2", Tag],
  ];

  const reviews = [
    {
      name: "Amit",
      stay: "2 weeks ago",
      date: "June 2026",
      avatar: "A",
      rating: 5,
      comment:
        "Very helpful and responsive host. Safe and peaceful stay. Loved everything about the property.",
    },
    {
      name: "Aneesh",
      stay: "2 months ago",
      date: "May 2026",
      avatar: "/assets/reviews/reviewer-01.jpg",
      rating: 5,
      comment:
        "We had a wonderful stay. The apartment was clean, comfortable, and very well maintained. The host was very responsive and helpful throughout the stay.",
      showMore: true,
    },
    {
      name: "Sankakha",
      stay: "1 month ago",
      date: "May 2026",
      avatar: "/assets/reviews/reviewer-02.avif",
      rating: 5,
      comment:
        "The host was very nice and helpful. Great stay.",
    },
    {
      name: "Vedant",
      stay: "4 weeks ago",
      date: "May 2026",
      avatar: "V",
      rating: 5,
      comment:
        "We had an amazing experience. The place was beautiful, spacious and exceptionally well maintained. Great host and peaceful surroundings.",
      showMore: true,
    },
    {
      name: "Vaibhav S",
      stay: "3 years hosting",
      date: "May 2026",
      avatar: "/assets/reviews/reviewer-03.avif",
      rating: 5,
      comment:
        "Clean and cozy place. Had a lovely stay and would definitely recommend it for a future trip.",
    },
    {
      name: "Vishal",
      stay: "5 years on Airbnb",
      date: "May 2026",
      avatar: "/assets/reviews/reviewer-04.avif",
      rating: 5,
      comment:
        "Great place. Easily accessible and a nice stay.",
    },
  ];

  return (
    <section
      id="reviews"
      className="
        mx-auto
        w-[calc(100%-180px)]
        max-w-[1120px]
        border-b
        border-[var(--neutral-03)]
        py-[48px]
      "
    >
      {/* Main rating */}

      <div className="text-center">
        <div
          className="
            flex
            items-center
            justify-center
            gap-[14px]
          "
        >
          <span
            className="
              text-[48px]
              leading-none
              text-[var(--shade-02)]
            "
          >
            ❧
          </span>

          <span
            className="
              text-[64px]
              font-semibold
              leading-none
              tracking-[-0.04em]
              text-[var(--shade-02)]
            "
          >
            4.95
          </span>

          <span
            className="
              -scale-x-100
              text-[48px]
              leading-none
              text-[var(--shade-02)]
            "
          >
            ❧
          </span>
        </div>

        <h2
          className="
            mt-[22px]
            mb-0
            text-[17px]
            font-semibold
            text-[var(--shade-02)]
          "
        >
          Guest favourite
        </h2>

        <p
          className="
            mx-auto
            mt-[6px]
            max-w-[340px]
            text-[12px]
            leading-[17px]
            text-[var(--shade-02)]
          "
        >
          This home is a guest favourite based on ratings,
          reviews and reliability.
        </p>

        <button
          type="button"
          className="
            mt-[5px]
            border-0
            bg-transparent
            p-0
            text-[12px]
            font-medium
            text-[var(--shade-02)]
            underline
            underline-offset-[2px]
          "
        >
          How reviews work
        </button>
      </div>

      {/* Rating breakdown */}

      <div
        className="
          mt-[40px]
          grid
          grid-cols-7
          divide-x
          divide-[var(--neutral-03)]
          border-b
          border-[var(--neutral-03)]
          pb-[28px]
        "
      >
        {ratingCategories.map(
          ({ label, rating, icon: Icon, bars }) => (
            <div
              key={label}
              className="
                flex
                min-h-[90px]
                flex-col
                px-[18px]
              "
            >
              <span
                className="
                  text-[10px]
                  font-medium
                  text-[var(--shade-02)]
                "
              >
                {label}
              </span>

              {bars ? (
                <div className="mt-[10px] space-y-[3px]">
                  {[5, 4, 3, 2, 1].map((number) => (
                    <div
                      key={number}
                      className="
                        flex
                        items-center
                        gap-[5px]
                      "
                    >
                      <span
                        className="
                          w-[8px]
                          text-[8px]
                          text-[var(--neutral-07)]
                        "
                      >
                        {number}
                      </span>

                      <div
                        className="
                          h-[2px]
                          flex-1
                          rounded-full
                          bg-[var(--neutral-02)]
                        "
                      >
                        <div
                          className="
                            h-full
                            rounded-full
                            bg-[var(--shade-02)]
                          "
                          style={{
                            width:
                              number === 5
                                ? "88%"
                                : number === 4
                                  ? "20%"
                                  : "5%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <span
                    className="
                      mt-[8px]
                      text-[14px]
                      font-semibold
                      text-[var(--shade-02)]
                    "
                  >
                    {rating}
                  </span>

                  {Icon && (
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="
                        mt-[7px]
                        text-[var(--shade-02)]
                      "
                    />
                  )}
                </>
              )}
            </div>
          )
        )}
      </div>

      {/* Review category pills */}

      <div
        className="
          flex
          flex-wrap
          gap-[8px]
          py-[20px]
        "
      >
        {reviewCategories.map(
          ([label, count, Icon]) => (
            <div
              key={label}
              className="
                flex
                h-[34px]
                items-center
                gap-[6px]
                rounded-full
                border
                border-[var(--neutral-03)]
                px-[12px]
                text-[11px]
                text-[var(--shade-02)]
              "
            >
              <Icon
                size={12}
                strokeWidth={1.6}
              />

              <span>{label}</span>

              <span className="text-[var(--neutral-07)]">
                {count}
              </span>
            </div>
          )
        )}
      </div>

      {/* Reviews */}

      <div
        className="
          grid
          grid-cols-2
          gap-x-[64px]
          gap-y-[38px]
        "
      >
        {reviews.map((review) => (
          <article
            key={review.name}
            className="min-h-[125px]"
          >
            {/* Reviewer */}

            <div
              className="
                flex
                items-center
                gap-[10px]
              "
            >
              <div
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-[var(--accent-01)]
                  text-[13px]
                  font-semibold
                  text-[var(--shade-02)]
                "
              >
                {review.avatar.startsWith("/") ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                ) : (
                  review.avatar
                )}
              </div>

              <div>
                <h3
                  className="
                    m-0
                    text-[12px]
                    font-semibold
                    text-[var(--shade-02)]
                  "
                >
                  {review.name}
                </h3>

                <p
                  className="
                    m-0
                    mt-[2px]
                    text-[10px]
                    text-[var(--neutral-07)]
                  "
                >
                  {review.stay}
                </p>
              </div>
            </div>

            {/* Rating + date */}

            <div
              className="
                mt-[10px]
                flex
                items-center
                gap-[6px]
                text-[10px]
                text-[var(--shade-02)]
              "
            >
              <span>
                {"★".repeat(review.rating)}
              </span>

              <span>·</span>

              <span>{review.date}</span>
            </div>

            {/* Comment */}

            <p
              className="
                m-0
                mt-[7px]
                text-[11px]
                leading-[17px]
                text-[var(--shade-02)]
              "
            >
              {review.comment}
            </p>

            {review.showMore && (
              <button
                type="button"
                className="
                  mt-[5px]
                  border-0
                  bg-transparent
                  p-0
                  text-[11px]
                  font-semibold
                  text-[var(--shade-02)]
                  underline
                  underline-offset-[2px]
                "
              >
                Show more
              </button>
            )}
          </article>
        ))}
      </div>

      {/* Show all reviews */}

      <button
        type="button"
        className="
          mt-[34px]
          h-[42px]
          rounded-[8px]
          border
          border-[var(--shade-02)]
          bg-[var(--shade-01)]
          px-[18px]
          text-[12px]
          font-semibold
          text-[var(--shade-02)]
          transition-colors
          duration-150
          hover:bg-[var(--neutral-01)]
        "
      >
        Show all 19 reviews
      </button>
    </section>
  );
}

export default Reviews;
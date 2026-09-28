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

function Reviews({ listing }) {
  const rating = Number(listing?.rating || 0);
  const reviewCount = Number(listing?.reviewCount || 0);

  const ratingCategories = [
    {
      label: "Overall rating",
      rating: rating ? rating.toFixed(2) : "—",
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
        w-[calc(100%-80px)]
        max-w-[1120px]
        border-b
        border-[var(--neutral-03)]
        py-[48px]
      "
    >
      {/* MAIN RATING */}

      <div className="text-center">
        <div className="flex justify-center">
          <img
            src="/assets/logo/Guest-Favorite-5.0.png"
            alt={`${rating || 4.95} Guest favourite`}
            className="
              block
              h-[120px]
              w-[420px]
              object-contain
            "
          />
        </div>

        <p
          className="
            mx-auto
            mt-[8px]
            max-w-[430px]
            text-[16px]
            leading-[22px]
            text-[var(--shade-02)]
          "
        >
          This home is a guest favourite based on ratings,
          reviews and reliability
        </p>

        <button
          type="button"
          className="
            mt-[12px]
            border-0
            bg-transparent
            p-0
            text-[14px]
            font-semibold
            leading-[20px]
            text-[var(--shade-02)]
            underline
            underline-offset-[3px]
          "
        >
          How reviews work
        </button>
      </div>

      {/* RATING BREAKDOWN */}

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
          ({ label, rating: categoryRating, icon: Icon, bars }) => (
            <div
              key={label}
              className="
                flex
                min-h-[94px]
                flex-col
                px-[20px]
              "
            >
              <span
                className="
                  text-[13px]
                  font-medium
                  leading-[18px]
                  text-[var(--shade-02)]
                "
              >
                {label}
              </span>

              {bars ? (
                <div className="mt-[10px] space-y-[4px]">
                  {[5, 4, 3, 2, 1].map((number) => (
                    <div
                      key={number}
                      className="flex items-center gap-[6px]"
                    >
                      <span
                        className="
                          w-[8px]
                          text-[9px]
                          leading-[12px]
                          text-[var(--neutral-07)]
                        "
                      >
                        {number}
                      </span>

                      <div
                        className="
                          h-[3px]
                          flex-1
                          overflow-hidden
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
                                ? `${Math.min(rating * 17.8, 100)}%`
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
                      text-[16px]
                      font-semibold
                      leading-[22px]
                      text-[var(--shade-02)]
                    "
                  >
                    {categoryRating}
                  </span>

                  {Icon && (
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="
                        mt-[6px]
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

      {/* REVIEW CATEGORY PILLS */}

      <div
        className="
          flex
          flex-wrap
          gap-[8px]
          py-[20px]
        "
      >
        {reviewCategories.map(([label, count, Icon]) => (
          <div
            key={label}
            className="
              flex
              h-[36px]
              items-center
              gap-[7px]
              rounded-full
              border
              border-[var(--neutral-03)]
              px-[14px]
              text-[13px]
              leading-[18px]
              text-[var(--shade-02)]
            "
          >
            <Icon
              size={14}
              strokeWidth={1.6}
            />

            <span>{label}</span>

            <span className="text-[var(--neutral-07)]">
              {count}
            </span>
          </div>
        ))}
      </div>

      {/* REVIEWS */}

      <div
        className="
          grid
          grid-cols-2
          gap-x-[80px]
          gap-y-[42px]
        "
      >
        {reviews.map((review) => (
          <article
            key={review.name}
            className="min-h-[145px]"
          >
            {/* REVIEWER */}

            <div className="flex items-center gap-[12px]">
              <div
                className="
                  flex
                  h-[44px]
                  w-[44px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  bg-[var(--accent-01)]
                  text-[14px]
                  font-semibold
                  text-[var(--shade-02)]
                "
              >
                {review.avatar.startsWith("/") ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  review.avatar
                )}
              </div>

              <div>
                <h3
                  className="
                    m-0
                    text-[14px]
                    font-semibold
                    leading-[20px]
                    text-[var(--shade-02)]
                  "
                >
                  {review.name}
                </h3>

                <p
                  className="
                    m-0
                    mt-[2px]
                    text-[12px]
                    leading-[17px]
                    text-[var(--neutral-07)]
                  "
                >
                  {review.stay}
                </p>
              </div>
            </div>

            {/* RATING + DATE */}

            <div
              className="
                mt-[10px]
                flex
                items-center
                gap-[7px]
                text-[12px]
                leading-[17px]
                text-[var(--shade-02)]
              "
            >
              <span>
                {"★".repeat(review.rating)}
              </span>

              <span>·</span>

              <span>{review.date}</span>
            </div>

            {/* COMMENT */}

            <p
              className="
                m-0
                mt-[8px]
                text-[14px]
                leading-[21px]
                text-[var(--shade-02)]
              "
            >
              {review.comment}
            </p>

            {review.showMore && (
              <button
                type="button"
                className="
                  mt-[6px]
                  border-0
                  bg-transparent
                  p-0
                  text-[14px]
                  font-semibold
                  leading-[20px]
                  text-[var(--shade-02)]
                  underline
                  underline-offset-[3px]
                "
              >
                Show more
              </button>
            )}
          </article>
        ))}
      </div>

      {/* SHOW ALL REVIEWS */}

      <button
        type="button"
        className="
          mt-[36px]
          flex
          h-[44px]
          items-center
          justify-center
          rounded-[8px]
          border
          border-[var(--shade-02)]
          bg-[var(--shade-01)]
          px-[20px]
          text-[14px]
          font-semibold
          leading-[20px]
          text-[var(--shade-02)]
          transition-colors
          duration-150
          hover:bg-[var(--neutral-01)]
        "
      >
        Show all {reviewCount || 19} reviews
      </button>
    </section>
  );
}

export default Reviews;
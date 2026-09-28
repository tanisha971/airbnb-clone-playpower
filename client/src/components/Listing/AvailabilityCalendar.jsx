import { ChevronLeft, ChevronRight } from "lucide-react";

function AvailabilityCalendar() {
  const octoberWeeks = [
    ["", "", "", "", "1", "2", "3"],
    ["4", "5", "6", "7", "8", "9", "10"],
    ["11", "12", "13", "14", "15", "16", "17"],
    ["18", "19", "20", "21", "22", "23", "24"],
    ["25", "26", "27", "28", "29", "30", "31"],
  ];

  const novemberWeeks = [
    ["1", "2", "3", "4", "5", "6", "7"],
    ["8", "9", "10", "11", "12", "13", "14"],
    ["15", "16", "17", "18", "19", "20", "21"],
    ["22", "23", "24", "25", "26", "27", "28"],
    ["29", "30", "", "", "", "", ""],
  ];

  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  const renderCalendar = (month, weeks) => (
    <div className="w-full">
      <div
        className="
          mb-[16px]
          text-center
          text-[20px]
          font-semibold
          leading-[26px]
          text-[var(--shade-02)]
        "
      >
        {month}
      </div>

      <div className="grid grid-cols-7">
        {weekdays.map((day, index) => (
          <div
            key={`${day}-${index}`}
            className="
              flex
              h-[30px]
              items-center
              justify-center
              text-[12px]
              font-medium
              text-[var(--shade-02)]
            "
          >
            {day}
          </div>
        ))}
      </div>

      <div>
        {weeks.map((week, weekIndex) => (
          <div
            key={weekIndex}
            className="grid grid-cols-7"
          >
            {week.map((day, dayIndex) => {
              const isCheckIn =
                month === "October 2026" &&
                day === "18";

              const isCheckOut =
                month === "October 2026" &&
                day === "23";

              const isBetween =
                month === "October 2026" &&
                ["19", "20", "21", "22"].includes(day);

              const isUnavailable =
                month === "November 2026" &&
                ["18", "19", "20", "21", "22", "23", "24", "29", "30"].includes(
                  day
                );

              const isSelected = isCheckIn || isCheckOut;

              return (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className="
                    relative
                    flex
                    h-[44px]
                    items-center
                    justify-center
                  "
                >
                  {day && isBetween && (
                    <span
                      className="
                        absolute
                        inset-y-0
                        left-0
                        right-0
                        bg-[var(--neutral-01)]
                      "
                    />
                  )}

                  {day && (
                    <span
                      className={`
                        relative
                        z-10
                        flex
                        h-[36px]
                        w-[36px]
                        items-center
                        justify-center
                        rounded-full
                        text-[14px]
                        ${
                          isSelected
                            ? "bg-[var(--shade-02)] font-semibold text-[var(--shade-01)]"
                            : isUnavailable
                              ? "text-[var(--neutral-03)] line-through"
                              : "text-[var(--shade-02)]"
                        }
                      `}
                    >
                      {day}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className="
        w-full
        border-b
        border-[var(--neutral-03)]
        py-[32px]
      "
    >
      <div>
        <h2
          className="
            m-0
            text-[28px]
            font-semibold
            leading-[34px]
            text-[var(--shade-02)]
          "
        >
          5 nights in Candolim
        </h2>

        <p
          className="
            m-0
            mt-[8px]
            text-[16px]
            leading-[22px]
            text-[var(--neutral-07)]
          "
        >
          18 Oct 2026 - 23 Oct 2026
        </p>
      </div>

      <div
        className="
          mt-[28px]
          grid
          grid-cols-[40px_minmax(0,1fr)_minmax(0,1fr)_40px]
          items-start
          gap-[12px]
        "
      >
        <button
          type="button"
          aria-label="Previous month"
          className="
            mt-[8px]
            flex
            h-[40px]
            w-[40px]
            items-center
            justify-center
            rounded-full
            border-0
            bg-transparent
            text-[var(--shade-02)]
            hover:bg-[var(--neutral-01)]
          "
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>

        {renderCalendar("October 2026", octoberWeeks)}

        {renderCalendar("November 2026", novemberWeeks)}

        <button
          type="button"
          aria-label="Next month"
          className="
            mt-[8px]
            flex
            h-[40px]
            w-[40px]
            items-center
            justify-center
            rounded-full
            border-0
            bg-transparent
            text-[var(--shade-02)]
            hover:bg-[var(--neutral-01)]
          "
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>

      <div
        className="
          mt-[22px]
          flex
          items-center
          justify-between
        "
      >
        <button
          type="button"
          aria-label="Keyboard shortcuts"
          className="
            flex
            h-[28px]
            w-[38px]
            items-center
            justify-center
            rounded-[6px]
            border
            border-[var(--neutral-03)]
            bg-[var(--shade-01)]
            text-[var(--shade-02)]
          "
        >
          <span className="text-[14px] leading-none">⌨</span>
        </button>

        <button
          type="button"
          className="
            border-0
            bg-transparent
            p-0
            text-[16px]
            font-semibold
            text-[var(--shade-02)]
            underline
            underline-offset-[3px]
          "
        >
          Clear dates
        </button>
      </div>
    </section>
  );
}

/* =========================================================
   DISCOUNT BANNER
========================================================= */

export default AvailabilityCalendar;

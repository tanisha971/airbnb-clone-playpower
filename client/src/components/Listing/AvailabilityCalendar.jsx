import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="w-[245px]">
      {/* Month header */}
      <div
        className="
          mb-[14px]
          text-center
          text-[13px]
          font-semibold
          text-[var(--shade-02)]
        "
      >
        {month}
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7">
        {weekdays.map((day, index) => (
          <div
            key={`${day}-${index}`}
            className="
              flex
              h-[28px]
              items-center
              justify-center
              text-[10px]
              font-medium
              text-[var(--neutral-07)]
            "
          >
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
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

              const isSelected =
                isCheckIn || isCheckOut;

              const isBetween =
                month === "October 2026" &&
                ["19", "20", "21", "22"].includes(day);

              return (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className="
                    relative
                    flex
                    h-[34px]
                    items-center
                    justify-center
                  "
                >
                  {day && (
                    <span
                      className={`
                        relative
                        z-10
                        flex
                        h-[30px]
                        w-[30px]
                        items-center
                        justify-center
                        rounded-full
                        text-[11px]
                        ${
                          isSelected
                            ? "bg-[var(--shade-02)] font-semibold text-[var(--shade-01)]"
                            : "text-[var(--shade-02)]"
                        }
                      `}
                    >
                      {day}
                    </span>
                  )}

                  {/* Selected range */}
                  {isBetween && (
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
        mx-auto
        w-[calc(100%-180px)]
        max-w-[1120px]
        border-b
        border-[var(--neutral-03)]
        py-[32px]
      "
    >
      {/* Heading */}
      <div
        className="
          flex
          items-start
          justify-between
        "
      >
        <div>
          <h2
            className="
              m-0
              text-[16px]
              font-semibold
              leading-[22px]
              text-[var(--shade-02)]
            "
          >
            5 nights in Candolim
          </h2>

          <p
            className="
              m-0
              mt-[4px]
              text-[11px]
              text-[var(--neutral-07)]
            "
          >
            Oct 18, 2026 – Oct 23, 2026
          </p>
        </div>

        <div className="flex items-center gap-[6px]">
          <button
            type="button"
            aria-label="Previous month"
            className="
              flex
              h-[32px]
              w-[32px]
              items-center
              justify-center
              rounded-full
              border-0
              bg-transparent
              text-[var(--shade-02)]
              hover:bg-[var(--neutral-01)]
            "
          >
            <ChevronLeft
              size={16}
              strokeWidth={1.8}
            />
          </button>

          <button
            type="button"
            aria-label="Next month"
            className="
              flex
              h-[32px]
              w-[32px]
              items-center
              justify-center
              rounded-full
              border-0
              bg-transparent
              text-[var(--shade-02)]
              hover:bg-[var(--neutral-01)]
            "
          >
            <ChevronRight
              size={16}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </div>

      {/* Calendars */}
      <div
        className="
          mt-[24px]
          flex
          items-start
          justify-center
          gap-[48px]
        "
      >
        {renderCalendar(
          "October 2026",
          octoberWeeks
        )}

        {renderCalendar(
          "November 2026",
          novemberWeeks
        )}
      </div>

      {/* Bottom actions */}
      <div
        className="
          mt-[18px]
          flex
          items-center
          justify-between
        "
      >
        <div
          className="
            flex
            items-center
            gap-[8px]
            text-[11px]
            text-[var(--neutral-07)]
          "
        >
          <CalendarDays
            size={13}
            strokeWidth={1.6}
          />

          <span>Dates are available</span>
        </div>

        <button
          type="button"
          className="
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
          Clear dates
        </button>
      </div>
    </section>
  );
}

export default AvailabilityCalendar;
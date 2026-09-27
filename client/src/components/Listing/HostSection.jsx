import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";

function HostSection() {
  const coHosts = [
    {
      name: "Shreya",
      image: "/assets/host/mirashya.jpg",
    },
    {
      name: "Anand",
      image: "/assets/host/cohost-02.jpg",
    },
    {
      name: "Megha",
      image: "/assets/host/cohost-03.jpg",
    },
    {
      name: "Kunal",
      image: "/assets/host/cohost-04.jpg",
    },
    {
      name: "Riya",
      image: "/assets/host/cohost-05.jpg",
    },
    {
      name: "Arjun",
      image: "/assets/host/cohost-06.jpg",
    },
  ];

  return (
    <section
      className="
        mx-auto
        w-[calc(100%-180px)]
        max-w-[1120px]
        border-b
        border-[var(--neutral-03)]
        py-[36px]
      "
    >
      {/* Heading */}
      <h2
        className="
          m-0
          text-[16px]
          font-semibold
          leading-[22px]
          text-[var(--shade-02)]
        "
      >
        Meet your host
      </h2>

      <div
        className="
          mt-[22px]
          grid
          grid-cols-[320px_1fr]
          gap-[48px]
        "
      >
        {/* Host card */}
        <div
          className="
            flex
            min-h-[210px]
            flex-col
            rounded-[12px]
            border
            border-[var(--neutral-03)]
            bg-[var(--shade-01)]
            p-[20px]
            shadow-[0_2px_8px_rgba(0,0,0,0.08)]
          "
        >
          {/* Host identity */}
          <div
            className="
              flex
              items-center
              gap-[14px]
            "
          >
            <div
              className="
                flex
                h-[72px]
                w-[72px]
                shrink-0
                overflow-hidden
                rounded-full
                bg-[var(--accent-01)]
              "
            >
              <img
                src="/assets/host/host.jpg"
                alt="Mirashya Homes"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            <div>
              <h3
                className="
                  m-0
                  text-[16px]
                  font-semibold
                  text-[var(--shade-02)]
                "
              >
                Mirashya Homes
              </h3>

              <p
                className="
                  m-0
                  mt-[4px]
                  text-[11px]
                  text-[var(--neutral-07)]
                "
              >
                Host · 2 years hosting
              </p>
            </div>
          </div>

          {/* Host stats */}
          <div
            className="
              mt-[20px]
              grid
              grid-cols-2
              gap-[14px]
              border-t
              border-[var(--neutral-02)]
              pt-[16px]
            "
          >
            <div>
              <span
                className="
                  block
                  text-[16px]
                  font-semibold
                  text-[var(--shade-02)]
                "
              >
                1,463
              </span>

              <span
                className="
                  text-[10px]
                  text-[var(--neutral-07)]
                "
              >
                Reviews
              </span>
            </div>

            <div>
              <span
                className="
                  block
                  text-[16px]
                  font-semibold
                  text-[var(--shade-02)]
                "
              >
                4.68★
              </span>

              <span
                className="
                  text-[10px]
                  text-[var(--neutral-07)]
                "
              >
                Rating
              </span>
            </div>
          </div>

          <div
            className="
              mt-[14px]
              flex
              items-center
              gap-[7px]
              text-[10px]
              text-[var(--neutral-07)]
            "
          >
            <BadgeCheck
              size={14}
              strokeWidth={1.6}
            />

            Superhost
          </div>
        </div>

        {/* Host details */}
        <div>
          <div
            className="
              grid
              grid-cols-2
              gap-x-[42px]
              gap-y-[22px]
            "
          >
            {/* Detail 1 */}
            <div className="flex gap-[12px]">
              <Clock3
                size={18}
                strokeWidth={1.6}
                className="shrink-0 text-[var(--shade-02)]"
              />

              <div>
                <h3
                  className="
                    m-0
                    text-[13px]
                    font-semibold
                    text-[var(--shade-02)]
                  "
                >
                  Responds within an hour
                </h3>

                <p
                  className="
                    m-0
                    mt-[3px]
                    text-[11px]
                    leading-[16px]
                    text-[var(--neutral-07)]
                  "
                >
                  Usually responds to messages quickly.
                </p>
              </div>
            </div>

            {/* Detail 2 */}
            <div className="flex gap-[12px]">
              <CalendarCheck
                size={18}
                strokeWidth={1.6}
                className="shrink-0 text-[var(--shade-02)]"
              />

              <div>
                <h3
                  className="
                    m-0
                    text-[13px]
                    font-semibold
                    text-[var(--shade-02)]
                  "
                >
                  Guest favourite
                </h3>

                <p
                  className="
                    m-0
                    mt-[3px]
                    text-[11px]
                    leading-[16px]
                    text-[var(--neutral-07)]
                  "
                >
                  This host has highly rated stays.
                </p>
              </div>
            </div>

            {/* Detail 3 */}
            <div className="flex gap-[12px]">
              <ShieldCheck
                size={18}
                strokeWidth={1.6}
                className="shrink-0 text-[var(--shade-02)]"
              />

              <div>
                <h3
                  className="
                    m-0
                    text-[13px]
                    font-semibold
                    text-[var(--shade-02)]
                  "
                >
                  Dedicated to guest service
                </h3>

                <p
                  className="
                    m-0
                    mt-[3px]
                    text-[11px]
                    leading-[16px]
                    text-[var(--neutral-07)]
                  "
                >
                  Focused on making every stay comfortable.
                </p>
              </div>
            </div>

            {/* Detail 4 */}
            <div className="flex gap-[12px]">
              <MessageCircle
                size={18}
                strokeWidth={1.6}
                className="shrink-0 text-[var(--shade-02)]"
              />

              <div>
                <h3
                  className="
                    m-0
                    text-[13px]
                    font-semibold
                    text-[var(--shade-02)]
                  "
                >
                  Communication
                </h3>

                <p
                  className="
                    m-0
                    mt-[3px]
                    text-[11px]
                    leading-[16px]
                    text-[var(--neutral-07)]
                  "
                >
                  Available before and during your stay.
                </p>
              </div>
            </div>
          </div>

          {/* Co-hosts */}
          <div className="mt-[30px]">
            <h3
              className="
                m-0
                text-[13px]
                font-semibold
                text-[var(--shade-02)]
              "
            >
              Co-hosts
            </h3>

            <div
              className="
                mt-[12px]
                flex
                flex-wrap
                gap-[18px]
              "
            >
              {coHosts.map((host) => (
                <div
                  key={host.name}
                  className="
                    flex
                    items-center
                    gap-[7px]
                  "
                >
                  <div
                    className="
                      h-[32px]
                      w-[32px]
                      overflow-hidden
                      rounded-full
                      bg-[var(--neutral-02)]
                    "
                  >
                    <img
                      src={host.image}
                      alt={host.name}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>

                  <span
                    className="
                      text-[10px]
                      text-[var(--shade-02)]
                    "
                  >
                    {host.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Message button */}
          <button
            type="button"
            className="
              mt-[28px]
              flex
              h-[42px]
              items-center
              justify-center
              gap-[8px]
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
            <MessageCircle
              size={15}
              strokeWidth={1.7}
            />

            Message host
          </button>
        </div>
      </div>

      {/* Safety / communication note */}
      <div
        className="
          mt-[28px]
          flex
          items-start
          gap-[10px]
          border-t
          border-[var(--neutral-02)]
          pt-[18px]
        "
      >
        <ShieldCheck
          size={17}
          strokeWidth={1.6}
          className="
            mt-[1px]
            shrink-0
            text-[var(--neutral-07)]
          "
        />

        <p
          className="
            m-0
            max-w-[720px]
            text-[10px]
            leading-[16px]
            text-[var(--neutral-07)]
          "
        >
          To protect your payment and personal information,
          always communicate and transact through Airbnb.
        </p>
      </div>
    </section>
  );
}

export default HostSection;
import {
  Clock3,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

function HostSection() {
  const coHosts = [
    {
      name: "Sharath",
      image: "/assets/host/h1.jpg",
    },
    {
      name: "Aman Dev Pahwa",
      image: "/assets/host/h2.jpg",
    },
    {
      name: "Maria Karen Priyanka",
      image: "/assets/host/h3.jpg",
    },
    {
      name: "Simran",
      image: "/assets/host/h4.jpg",
    },
    {
      name: "Pallavi",
      image: "/assets/host/h5.avif",
    },
    {
      name: "Sanyukta",
      image: "/assets/host/h6.avif",
    },
    {
      name: "Shruti",
      image: "/assets/host/h7.jpg",
    },
    {
      name: "Amisha",
      image: "/assets/host/h8.jpg",
    },
  ];

  return (
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
      {/* =====================================================
          HEADING
      ===================================================== */}

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
        Meet your host
      </h2>

      {/* =====================================================
          HOST + DETAILS
      ===================================================== */}

      <div
        className="
          mt-[28px]
          grid
          grid-cols-[398px_minmax(0,1fr)]
          gap-[54px]
        "
      >
        {/* ===================================================
            HOST CARD
        =================================================== */}

        <div>
          <div
            className="
              flex
              h-[305px]
              w-[398px]
              items-center
              rounded-[22px]
              bg-[var(--shade-01)]
              p-[36px]
              shadow-[0_8px_24px_rgba(0,0,0,0.12)]
            "
          >
            {/* HOST IDENTITY */}

            <div
              className="
                flex
                w-[216px]
                flex-col
                items-center
                justify-center
                border-r
                border-[var(--neutral-02)]
                pr-[28px]
              "
            >
              <div
                className="
                  relative
                  h-[104px]
                  w-[104px]
                  overflow-hidden
                  rounded-full
                  bg-[var(--accent-01)]
                "
              >
                <img
                  src="/assets/host/mirashya.jpg"
                  alt="Mirashya Homes"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                <span
                  className="
                    absolute
                    bottom-[2px]
                    right-[0px]
                    flex
                    h-[32px]
                    w-[32px]
                    items-center
                    justify-center
                    rounded-full
                    border-[3px]
                    border-white
                    bg-[var(--primary-02)]
                    text-[18px]
                    font-semibold
                    text-white
                  "
                >
                  ✓
                </span>
              </div>

              <h3
                className="
                  m-0
                  mt-[16px]
                  text-center
                  text-[28px]
                  font-semibold
                  leading-[34px]
                  tracking-[-0.02em]
                  text-[var(--shade-02)]
                "
              >
                Mirashya
                <br />
                Homes
              </h3>

              <span
                className="
                  mt-[8px]
                  text-[14px]
                  leading-[20px]
                  text-[var(--shade-02)]
                "
              >
                Host
              </span>
            </div>

            {/* HOST STATS */}

            <div
              className="
                flex
                min-w-0
                flex-1
                flex-col
                justify-center
                pl-[22px]
              "
            >
              <div>
                <span
                  className="
                    block
                    text-[24px]
                    font-semibold
                    leading-[30px]
                    text-[var(--shade-02)]
                  "
                >
                  1,463
                </span>

                <span
                  className="
                    text-[14px]
                    leading-[20px]
                    text-[var(--shade-02)]
                  "
                >
                  Reviews
                </span>
              </div>

              <div
                className="
                  my-[16px]
                  h-px
                  w-full
                  bg-[var(--neutral-02)]
                "
              />

              <div>
                <span
                  className="
                    block
                    text-[24px]
                    font-semibold
                    leading-[30px]
                    text-[var(--shade-02)]
                  "
                >
                  4.68★
                </span>

                <span
                  className="
                    text-[14px]
                    leading-[20px]
                    text-[var(--shade-02)]
                  "
                >
                  Rating
                </span>
              </div>

              <div
                className="
                  my-[16px]
                  h-px
                  w-full
                  bg-[var(--neutral-02)]
                "
              />

              <div>
                <span
                  className="
                    block
                    text-[24px]
                    font-semibold
                    leading-[30px]
                    text-[var(--shade-02)]
                  "
                >
                  2
                </span>

                <span
                  className="
                    text-[14px]
                    leading-[20px]
                    text-[var(--shade-02)]
                  "
                >
                  Years hosting
                </span>
              </div>
            </div>
          </div>

          {/* HOST PERSONAL DETAILS */}

          <div className="mt-[24px] space-y-[20px]">
            <div className="flex items-center gap-[16px]">
              <span className="text-[26px] leading-none">♧</span>

              <span
                className="
                  text-[16px]
                  leading-[22px]
                  text-[var(--shade-02)]
                "
              >
                Born in the 80s
              </span>
            </div>

            <div className="flex items-center gap-[16px]">
              <span className="text-[26px] leading-none">♢</span>

              <span
                className="
                  text-[16px]
                  leading-[22px]
                  text-[var(--shade-02)]
                "
              >
                Where I went to school: NICMAR GOA
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================
            RIGHT SIDE
        =================================================== */}

        <div className="min-w-0">
          {/* CO-HOSTS */}

          <h3
            className="
              m-0
              text-[24px]
              font-semibold
              leading-[30px]
              text-[var(--shade-02)]
            "
          >
            Co-Hosts
          </h3>

          <div
            className="
              mt-[22px]
              grid
              grid-cols-3
              gap-x-[48px]
              gap-y-[22px]
            "
          >
            {coHosts.map((host) => (
              <div
                key={host.name}
                className="
                  flex
                  items-center
                  gap-[12px]
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
                  "
                >
                  {host.image ? (
                    <img
                      src={host.image}
                      alt={host.name}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  ) : (
                    <span
                      className="
                        text-[16px]
                        font-medium
                        text-[var(--primary-02)]
                      "
                    >
                      {host.name.charAt(0)}
                    </span>
                  )}
                </div>

                <span
                  className="
                    text-[16px]
                    leading-[22px]
                    text-[var(--shade-02)]
                  "
                >
                  {host.name}
                </span>
              </div>
            ))}
          </div>

          {/* HOST DETAILS */}

          <h3
            className="
              m-0
              mt-[34px]
              text-[24px]
              font-semibold
              leading-[30px]
              text-[var(--shade-02)]
            "
          >
            Host details
          </h3>

          <div
            className="
              mt-[20px]
              text-[16px]
              leading-[26px]
              text-[var(--shade-02)]
            "
          >
            <div>Response rate: 100%</div>
            <div>Responds within an hour</div>
          </div>

          {/* MESSAGE */}

          <button
            type="button"
            className="
              mt-[22px]
              flex
              h-[56px]
              items-center
              justify-center
              rounded-[10px]
              border-0
              bg-[var(--neutral-01)]
              px-[28px]
              text-[16px]
              font-semibold
              text-[var(--shade-02)]
              transition-colors
              duration-150
              hover:bg-[var(--neutral-02)]
            "
          >
            Message host
          </button>

          {/* SAFETY NOTE */}

          <div
            className="
              mt-[34px]
              flex
              items-center
              gap-[14px]
            "
          >
            <ShieldCheck
              size={27}
              strokeWidth={1.5}
              className="text-[var(--neutral-07)]"
            />

            <p
              className="
                m-0
                text-[14px]
                leading-[20px]
                text-[var(--neutral-07)]
              "
            >
              To help protect your payment, always use Airbnb
              to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HostSection;
import { useEffect, useState } from "react";
import { Globe, Menu, Search } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("photos");

  const navItems = [
    {
      id: "photos",
      label: "Photos",
    },
    {
      id: "amenities",
      label: "Amenities",
    },
    {
      id: "reviews",
      label: "Reviews",
    },
    {
      id: "location",
      label: "Location",
    },
  ];

  useEffect(() => {
    const sections = navItems.map((item) => item.id);

    const handleScroll = () => {
      const scrollY = window.scrollY;

      /*
       * Reference behavior:
       * The compact navbar appears after the user has
       * scrolled past the main photo/header area.
       */
      setIsScrolled(scrollY > 500);

      /*
       * Scroll spy.
       *
       * 100px accounts for the compact sticky navbar
       * plus a small visual buffer.
       */
      let currentSection = "photos";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 100) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSectionClick = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    /*
     * The reference compact navbar is approximately 78px high.
     */
    const navbarOffset = 78;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: Math.max(0, sectionTop),
      behavior: "smooth",
    });

    setActiveSection(sectionId);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-[var(--neutral-02)]
        bg-[var(--shade-01)]
      "
    >
      {!isScrolled ? (
        /* =====================================================
           INITIAL NAVBAR
        ===================================================== */

        <div
          className="
            mx-auto
            flex
            h-[90px]
            w-[calc(100%-180px)]
            max-w-[1600px]
            items-center
            justify-between
          "
        >
          {/* =================================================
              AIRBNB LOGO
          ================================================= */}

          <a
            href="/"
            aria-label="Airbnb home"
            className="
              flex
              shrink-0
              items-center
            "
          >
            <img
              src="/assets/logo/Airbnb-Logo.png"
              alt="Airbnb"
              className="
                block
                h-auto
                w-[125px]
              "
            />
          </a>

          {/* =================================================
              SEARCH BAR
          ================================================= */}

          <div
            className="
              absolute
              left-1/2
              
              flex
              h-[50px]
              w-[476px]
              -translate-x-1/2
              items-center
              rounded-full
              border
              border-[var(--neutral-03)]
              bg-[var(--shade-01)]
              shadow-[0_2px_6px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.05)]
            "
          >
            {/* HOME ICON */}

            <div
              className="
                flex
                h-full
                w-[72px]
                shrink-0
                items-center
                justify-center
                ml-[7px]
              "
            >
              <img
                src="/assets/logo/homes-icon.avif"
                alt=""
                className="
                  h-[36px]
                  w-[36px]
                  object-contain
                "
              />
            </div>

            {/* ANYWHERE */}

            <button
              type="button"
              className="
                flex
                h-[38px]
                w-[105px]
                shrink-0
                items-center
                justify-center
                border-r
                border-[var(--neutral-03)]
                bg-transparent
                p-0
                text-[16px]
                font-medium
                leading-[20px]
                text-[var(--shade-02)]
                transition-colors
                duration-150
                hover:bg-[var(--neutral-01)]
              "
            >
              Anywhere
            </button>

            {/* ANYTIME */}

            <button
              type="button"
              className="
                flex
                h-[38px]
                w-[106px]
                shrink-0
                items-center
                justify-center
                border-r
                border-[var(--neutral-03)]
                bg-transparent
                p-0
                text-[16px]
                font-medium
                leading-[20px]
                text-[var(--shade-02)]
                transition-colors
                duration-150
                hover:bg-[var(--neutral-01)]
              "
            >
              Anytime
            </button>

            {/* ADD GUESTS */}

            <button
              type="button"
              className="
                flex
                h-[38px]
                min-w-0
                flex-1
                items-center
                justify-center
                bg-transparent
                p-0
                text-[16px]
                font-normal
                leading-[20px]
                text-[var(--neutral-07)]
                transition-colors
                duration-150
                hover:bg-[var(--neutral-01)]
              "
            >
              Add guests
            </button>

            {/* SEARCH BUTTON */}

            <button
              type="button"
              aria-label="Search"
              className="
                mr-[7px]
                flex
                h-[36px]
                w-[36px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border-0
                bg-[var(--primary-02)]
                p-0
                text-white
                transition-all
                duration-150
                hover:brightness-95
                active:scale-95
              "
            >
              <Search
                size={18}
                strokeWidth={2.8}
              />
            </button>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
            "
          >
            {/* BECOME A HOST */}

            <button
              type="button"
              className="
                flex
                h-[48px]
                items-center
                justify-center
                rounded-full
                border-0
                bg-transparent
                px-[14px]
                text-[15px]
                font-medium
                leading-[20px]
                text-[var(--shade-02)]
                transition-colors
                duration-150
                hover:bg-[var(--neutral-01)]
              "
            >
              Become a host
            </button>

            {/* GLOBE */}

            <button
              type="button"
              aria-label="Choose language"
              className="
                ml-[12px]
                flex
                h-[48px]
                w-[48px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border-0
                bg-[var(--neutral-01)]
                p-0
                text-[var(--shade-02)]
                transition-colors
                duration-150
                hover:bg-[var(--neutral-02)]
              "
            >
              <Globe
                size={21}
                strokeWidth={2}
              />
            </button>

            {/* MENU */}

            <button
              type="button"
              aria-label="Open menu"
              className="
                ml-[8px]
                flex
                h-[48px]
                w-[48px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border-0
                bg-[var(--neutral-01)]
                p-0
                text-[var(--shade-02)]
                transition-colors
                duration-150
                hover:bg-[var(--neutral-02)]
              "
            >
              <Menu
                size={19}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      ) : (
        /* =====================================================
           SCROLLED NAVBAR
        ===================================================== */

        <div
          className="
            mx-auto
            flex
            h-[72px]
            w-[calc(100%-80px)]
            max-w-[1120px]
            items-center
            justify-between
          "
        >
          {/* =================================================
              LEFT SECTION NAVIGATION
          ================================================= */}

          <nav
            className="
              flex
              h-full
              items-center
              gap-[27px]
            "
          >
            {navItems.map((item) => {
              const isActive =
                activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    handleSectionClick(item.id)
                  }
                  className={`
                    relative
                    flex
                    h-full
                    items-center
                    border-0
                    bg-transparent
                    p-0
                    font-semibold
                    text-[30px]
                    leading-[30px]
                    transition-colors
                    duration-150
                    ${
                      isActive
                        ? "font-normal text-[var(--shade-02)]"
                        : "font-bold text-[var(--shade-02)]"
                    }
                  `}
                >
                  {item.label}

                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-[16px]
                        left-0
                        right-0
                        h-[2px]
                        bg-[var(--shade-02)]
                      "
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              flex
              items-center
              gap-[20px]
            "
          >
            <div
              className="
                min-w-[170px]
                text-right
                text-[16px]
                leading-[20px]
                text-[var(--shade-02)]
              "
            >
              <div>
                <span className="font-semibold">
                  ₹28,499
                </span>{" "}
                for 5 nights
              </div>

              <div
                className="
                  mt-[3px]
                  text-[14px]
                  leading-[18px]
                  text-[var(--shade-02)]
                "
              >
                ★ 4.95 · 19 reviews
              </div>
            </div>

            <button
              type="button"
              className="
                flex
                h-[48px]
                min-w-[110px]
                items-center
                justify-center
                rounded-full
                border-0
                bg-[var(--primary-02)]
                px-[24px]
                text-[16px]
                font-semibold
                leading-[20px]
                text-white
                transition-all
                duration-150
                hover:brightness-95
                active:scale-[0.98]
              "
            >
              Reserve
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
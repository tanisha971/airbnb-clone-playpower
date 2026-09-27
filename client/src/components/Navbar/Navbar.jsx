import { useEffect, useState } from "react";
import { Globe, Menu, Search } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky
        top-0
        z-50
        w-full
        border-b
        border-[var(--neutral-02)]
        bg-[var(--shade-01)]
        transition-all
        duration-200
        ${
          isScrolled
            ? "h-[64px]"
            : "h-[100px]"
        }
      `}
    >
      {!isScrolled ? (
        <div
          className="
            relative
            mx-auto
            flex
            h-full
            w-[calc(100%-120px)]
            items-center
          "
        >
          {/* =================================================
              AIRBNB LOGO
          ================================================= */}

          <a
            href="/"
            aria-label="Airbnb home"
            className="
              absolute
              left-0
              top-1/2
              flex
              -translate-y-1/2
              items-center
            "
          >
            <img
              src="/assets/logo/Airbnb-Logo.png"
              alt="Airbnb"
              className="
                block
                h-auto
                w-[128px]
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
              top-1/2
              flex
              h-[50px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
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
                h-[48px]
                w-[64px]
                shrink-0
                items-center
                justify-center
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
                h-[40px]
                w-[104px]
                shrink-0
                items-center
                justify-center
                border-r
                border-[var(--neutral-03)]
                bg-transparent
                px-0
                text-[14px]
                font-normal
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
                h-[40px]
                w-[111px]
                shrink-0
                items-center
                justify-center
                border-r
                border-[var(--neutral-03)]
                bg-transparent
                px-0
                text-[14px]
                font-normal
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
                h-[40px]
                min-w-0
                flex-1
                items-center
                justify-center
                bg-transparent
                px-0
                text-[14px]
                font-normal
                text-[var(--shade-02)]
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
                h-[40px]
                w-[40px]
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
                size={17}
                strokeWidth={3}
              />
            </button>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              absolute
              right-0
              top-1/2
              flex
              h-[40px]
              -translate-y-1/2
              items-center
            "
          >
            {/* BECOME A HOST */}

            <button
              type="button"
              className="
                flex
                h-[40px]
                items-center
                justify-center
                rounded-full
                border-0
                bg-transparent
                px-[12px]
                py-[11px]
                text-[14px]
                font-normal
                leading-[18px]
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
                ml-[16px]
                flex
                h-[40px]
                w-[40px]
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
                size={20}
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
                h-[40px]
                w-[40px]
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
                size={16}
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
            h-full
            w-[calc(100%-120px)]
            items-center
            justify-between
          "
        >
          {/* LEFT SECTION NAVIGATION */}

          <nav
            className="
              flex
              h-full
              items-center
              gap-[28px]
            "
          >
            <a
              href="#photos"
              className="
                relative
                flex
                h-full
                items-center
                text-[14px]
                font-semibold
                text-[var(--shade-02)]
                no-underline
              "
            >
              Photos

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-[2px]
                  bg-[var(--shade-02)]
                "
              />
            </a>

            <a
              href="#amenities"
              className="
                flex
                h-full
                items-center
                text-[14px]
                font-medium
                text-[var(--neutral-07)]
                no-underline
              "
            >
              Amenities
            </a>

            <a
              href="#reviews"
              className="
                flex
                h-full
                items-center
                text-[14px]
                font-medium
                text-[var(--neutral-07)]
                no-underline
              "
            >
              Reviews
            </a>

            <a
              href="#location"
              className="
                flex
                h-full
                items-center
                text-[14px]
                font-medium
                text-[var(--neutral-07)]
                no-underline
              "
            >
              Location
            </a>
          </nav>

          {/* RIGHT */}

          <div className="flex items-center gap-[20px]">
            <div
              className="
                text-right
                text-[13px]
                text-[var(--shade-02)]
              "
            >
              <div>
                <span className="font-semibold underline">
                  ₹28,499
                </span>{" "}
                for 5 nights
              </div>

              <small
                className="
                  mt-[4px]
                  block
                  text-[12px]
                  text-[var(--neutral-07)]
                "
              >
                ★ 4.95 · 19 reviews
              </small>
            </div>

            <button
              type="button"
              className="
                flex
                h-[48px]
                min-w-[116px]
                items-center
                justify-center
                rounded-full
                border-0
                bg-[var(--primary-02)]
                px-[24px]
                text-[14px]
                font-semibold
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
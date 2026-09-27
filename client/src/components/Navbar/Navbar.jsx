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
      className={`sticky top-0 z-50 w-full border-b border-[#EBEBEB] bg-white transition-all duration-300 ${
        isScrolled ? "h-[64px]" : "h-[90px]"
      }`}
    >
      {!isScrolled ? (
        <div className="relative mx-auto flex h-full w-full max-w-[1360px] items-center">
          
          {/* ================= LOGO ================= */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <img
              src="/assets/logo/Airbnb-Logo.png"
              alt="Airbnb"
              className="block h-auto w-[110px]"
            />
          </div>

          {/* ================= SEARCH BAR ================= */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-[50px]
              w-[400px]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              rounded-full
              border
              border-[#DDDDDD]
              bg-white
              shadow-[0_2px_6px_rgba(0,0,0,0.10)]
            "
          >
            {/* Small search/location image */}
            <div className="flex w-[65px] shrink-0 items-center justify-center">
              <img
                src="/assets/logo/homes-icon.avif"
                alt=""
                className="h-[32px] w-[32px] object-contain"
              />
            </div>

            {/* Anywhere */}
            <button
              className="
                flex
                h-[30px]
                w-[122px]
                items-center
                justify-center
                border-r
                border-[#DDDDDD]
                text-[16px]
                font-semibold
                text-[#222222]
              "
            >
              Anywhere
            </button>

            {/* Anytime */}
            <button
              className="
                flex
                h-[30px]
                w-[113px]
                items-center
                justify-center
                border-r
                border-[#DDDDDD]
                text-[16px]
                font-semibold
                text-[#222222]
              "
            >
              Anytime
            </button>

            {/* Add guests */}
            <button
              className="
                flex
                h-full
                flex-1
                items-center
                justify-center
                whitespace-nowrap
                text-[16px]
                font-normal
                text-[#717171]
              "
            >
              Add guests
            </button>

            {/* Search */}
            <button
              className="
                mr-[6px]
                flex
                h-[32px]
                w-[32px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#FF385C]
                text-white
                transition
                hover:brightness-95
                active:scale-95
              "
              aria-label="Search"
            >
              <Search
                size={12}
                strokeWidth={3}
              />
            </button>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center">
            
            {/* Become a host */}
            <button
              className="
                mr-[20px]
                whitespace-nowrap
                rounded-full
                px-[16px]
                py-[12px]
                text-[16px]
                font-semibold
                text-[#222222]
                transition
                hover:bg-[#F7F7F7]
              "
            >
              Become a host
            </button>

            {/* Globe */}
            <button
              className="
                mr-[10px]
                flex
                h-[48px]
                w-[48px]
                items-center
                justify-center
                rounded-full
                bg-[#F7F7F7]
                text-[#222222]
                transition
                hover:bg-[#EBEBEB]
              "
              aria-label="Choose language"
            >
              <Globe
                size={20}
                strokeWidth={2.2}
              />
            </button>

            {/* Menu */}
            <button
              className="
                flex
                h-[48px]
                w-[48px]
                items-center
                justify-center
                rounded-full
                bg-[#F7F7F7]
                text-[#222222]
                transition
                hover:bg-[#EBEBEB]
              "
              aria-label="Open menu"
            >
              <Menu
                size={22}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      ) : (
        /* =========================
           SCROLLED NAVBAR
        ========================== */
        <div className="mx-auto flex h-full w-full max-w-[1710px] items-center justify-between">
          
          {/* Section Navigation */}
          <nav className="flex h-full items-center gap-7">
            <a
              href="#photos"
              className="
                flex
                h-full
                items-center
                border-b-2
                border-[#222222]
                text-[14px]
                font-semibold
                text-[#222222]
              "
            >
              Photos
            </a>

            <a
              href="#amenities"
              className="flex h-full items-center text-[14px] font-medium text-[#717171]"
            >
              Amenities
            </a>

            <a
              href="#reviews"
              className="flex h-full items-center text-[14px] font-medium text-[#717171]"
            >
              Reviews
            </a>

            <a
              href="#location"
              className="flex h-full items-center text-[14px] font-medium text-[#717171]"
            >
              Location
            </a>
          </nav>

          {/* Booking Summary */}
          <div className="flex items-center gap-5">
            <div className="text-right">
              <div className="text-[13px] text-[#222222]">
                <span className="font-semibold underline">
                  ₹28,499
                </span>{" "}
                for 5 nights
              </div>

              <div className="mt-1 text-[12px] text-[#717171]">
                ★ 4.95 · 19 reviews
              </div>
            </div>

            <button
              className="
                airbnb-gradient
                flex
                h-[48px]
                min-w-[116px]
                items-center
                justify-center
                rounded-full
                px-6
                text-[14px]
                font-semibold
                text-white
                transition-all
                duration-200
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
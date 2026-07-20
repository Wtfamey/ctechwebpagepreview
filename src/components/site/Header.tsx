import { BannerCarousel } from "./BannerCarousel";
import { RightBannerCarousel } from "./RightBannerCarousel";
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-full mx-auto">
        <div className="flex items-stretch gap-6">
          {/* Logo — square-ish, slightly wider */}
          <div className="w-[200px] flex-shrink-0 h-[200px] flex items-center justify-center bg-white">
            <a href="/" className="w-full h-full flex items-center justify-center" style={{ paddingRight: "0", paddingLeft: "16px", paddingBottom: "16px" }}>
              <img
                src="/images/logo.jpg"
                alt="CTech Labs"
                className="max-w-full max-h-[160px] object-contain"
                style={{ marginLeft: "8px", marginBottom: "12px" }}
              />
            </a>
          </div>

          {/* Banner — flex-1, fills remaining space */}
          <div className="flex-1 h-[200px] overflow-hidden">
            <BannerCarousel />
          </div>

          {/* Right card — fixed 380px, dark grey */}
          <div className="hidden lg:block w-[380px] flex-shrink-0 bg-[#383838] h-[200px] overflow-hidden">
            <RightBannerCarousel />
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
}
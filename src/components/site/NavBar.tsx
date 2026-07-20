import { useState, useEffect } from "react";
import { NAV_ITEMS, PRODUCT_SUBPAGES } from "./data";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-36px 0px -60% 0px", threshold: 0 }
    );
    const sections = document.querySelectorAll(".section-wrapper");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <nav className="bg-emerald-600 relative" style={{ borderBottom: "4px solid #065f46" }}>
      <div className="max-w-full mx-auto px-2 md:px-4">
        <button
          className="lg:hidden absolute top-3 right-2 z-50 flex flex-col items-center justify-center bg-white/20 hover:bg-white/30 rounded-md p-2.5 cursor-pointer transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>

        <div id="cssmenu" className={`${mobileOpen ? "mobile-open block" : "hidden"} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:items-stretch lg:justify-center">
            {NAV_ITEMS.map((it) => {
              const isProducts = it.label === "Products";
              const active = activeSection === it.sectionId ||
                (isProducts && PRODUCT_SUBPAGES.some((p) => p.sectionId === activeSection));
              const linkClass = `block px-5 py-[10px] lg:px-6 lg:py-[10px] transition-colors font-light text-base lg:text-sm uppercase tracking-wide ${active ? "text-black bg-amber-300 hover:bg-amber-400" : "text-white/90 hover:text-white hover:bg-emerald-700"}`;
              if (isProducts) {
                return (
                  <li key={it.sectionId} className={`relative group ${active ? "active" : ""}`}>
                    <a href="#section-products" onClick={close} className={linkClass}>
                      Products
                    </a>
                    <ul className="lg:absolute lg:top-full lg:left-0 lg:min-w-[240px] lg:bg-emerald-700 lg:shadow-lg lg:rounded-b-lg lg:invisible lg:group-hover:visible lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-200 bg-emerald-500">
                      {PRODUCT_SUBPAGES.map((p) => (
                        <li key={p.sectionId}>
                            <a
                              href={p.to}
                              onClick={close}
                              className="block px-5 py-3.5 text-white/80 hover:text-white hover:bg-emerald-600 transition-colors text-sm font-light"
                            >
                              {p.label}
                            </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={it.sectionId} className={active ? "active" : ""}>
                  <a href={it.to} onClick={close} className={linkClass}>
                    {it.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

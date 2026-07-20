import { useEffect, useState, useCallback } from "react";
import { BANNERS } from "./data";

export function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const total = BANNERS.length;

  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % total), 3500);
    return () => clearInterval(t);
  }, [total]);

  return (
    <div style={{ display: "flex", alignItems: "stretch", width: "100%", height: "100%", background: "#fff" }}>
      <button onClick={prev} aria-label="Previous slide" style={{ flexShrink: 0, width: "60px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", background: "#383838", transition: "background 0.2s", height: "100%" }}
        onMouseEnter={(e) => e.currentTarget.style.background = "#2a2a2a"}
        onMouseLeave={(e) => e.currentTarget.style.background = "#383838"}>
        <svg width="16" height="26" viewBox="0 0 16 26" fill="none">
          <polyline points="15,1 3,13 15,25" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div style={{ position: "relative", flex: 1, height: "100%", overflow: "hidden" }}>
        {BANNERS.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            loading="lazy"
            style={{
              position: "absolute",
              top: 0, left: 0, width: "100%", height: "100%",
              objectFit: "contain", objectPosition: "center center",
              transition: "opacity 0.6s ease",
              opacity: idx === current ? 1 : 0,
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      <button onClick={next} aria-label="Next slide" style={{ flexShrink: 0, width: "60px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", background: "#383838", transition: "background 0.2s", height: "100%" }}
        onMouseEnter={(e) => e.currentTarget.style.background = "#2a2a2a"}
        onMouseLeave={(e) => e.currentTarget.style.background = "#383838"}>
        <svg width="16" height="26" viewBox="0 0 16 26" fill="none">
          <polyline points="1,1 13,13 1,25" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

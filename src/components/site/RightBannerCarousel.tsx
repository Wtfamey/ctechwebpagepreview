import { useEffect, useRef, useState } from "react";
import { RIGHT_BANNER_IMAGES } from "./data";

// Cycles through 4 edge directions: top → right → bottom → left
const DIRECTIONS = ["top", "right", "bottom", "left"] as const;

export function RightBannerCarousel() {
  const total = RIGHT_BANNER_IMAGES.length;

  // Which image is currently showing (settled, no animation)
  const [current, setCurrent] = useState(0);
  // Which image is flying in right now (null = idle)
  const [incoming, setIncoming] = useState<number | null>(null);
  // Which flip direction is being used for the incoming slide
  const [direction, setDirection] = useState<(typeof DIRECTIONS)[number]>("top");

  const dirIdxRef = useRef(0);
  const currentRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextCurrent = (currentRef.current + 1) % total;
      const nextDir = DIRECTIONS[dirIdxRef.current % DIRECTIONS.length];

      dirIdxRef.current += 1;
      currentRef.current = nextCurrent;

      setDirection(nextDir);
      setIncoming(nextCurrent);

      // After animation finishes, promote incoming → current and clear incoming
      setTimeout(() => {
        setCurrent(nextCurrent);
        setIncoming(null);
      }, 750);
    }, 3500);

    return () => clearInterval(interval);
  }, [total]);

  // CSS class applied to the incoming image based on direction
  const flipClass = incoming !== null ? `flap-from-${direction}` : "";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "#383838",
        overflow: "hidden",
        perspective: "900px",
      }}
    >
      {/* Settled current image — sits underneath */}
      <img
        src={RIGHT_BANNER_IMAGES[current]}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />

      {/* Incoming image — flaps in from one edge */}
      {incoming !== null && (
        <img
          key={`${incoming}-${direction}`}
          src={RIGHT_BANNER_IMAGES[incoming]}
          alt=""
          className={flipClass}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      )}
    </div>
  );
}

import React, { useRef, useEffect, useState } from "react";

/**
 * ParallaxBlob — decorative background shape that moves SLOWER than scroll.
 *
 * How it works:
 * The blob is `absolute` inside its section. As the user scrolls, the section
 * moves up at 1:1 scroll speed. We apply `translateY(scrollY * factor)` to
 * push the blob *down* as the user scrolls down, which makes it appear to
 * travel upward more slowly than the rest of the content.
 *
 * `factor` controls the parallax strength:
 *   0   = blob doesn't move at all (fully stuck to page, like `position:fixed`)
 *   0.3 = blob moves at 30% of scroll speed (slow background effect)
 *   0.7 = blob moves at 70% of scroll speed (subtle effect)
 *   1   = same as normal scroll (no parallax)
 */
export const ParallaxBlob = ({
  color = "#99AD7A",
  opacity = 0.14,
  size = 400,
  top,
  left,
  right,
  bottom,
  factor = 0.3,      // how much it moves WITH scroll (lower = slower = more parallax)
  blur = 80,
  rotate = 0,
  shape = "circle",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const y = window.scrollY * factor;
      ref.current.style.transform = `translateY(${y}px) rotate(${rotate}deg)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [factor, rotate]);

  const borderRadius = {
    circle: "50%",
    oval: "60% 40% 60% 40% / 50% 60% 40% 50%",
    organic: "71% 29% 70% 30% / 30% 56% 44% 70%",
  }[shape] || "50%";

  return (
    <div
      className="absolute pointer-events-none will-change-transform"
      style={{ top, left, right, bottom, zIndex: 0 }}
    >
      <div
        ref={ref}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          opacity,
          borderRadius,
          filter: `blur(${blur}px)`,
          transform: `rotate(${rotate}deg)`,
        }}
      />
    </div>
  );
};

export default ParallaxBlob;

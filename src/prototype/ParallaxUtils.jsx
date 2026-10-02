import React, { useRef, useEffect, useState } from "react";

/**
 * ParallaxLayer — wraps children and applies a vertical parallax offset
 * based on scroll position. speed < 1 = slower than scroll (background).
 * speed > 1 = faster than scroll (foreground). speed = 0 = fixed.
 */
export const ParallaxLayer = ({ children, speed = 0.3, className = "", style = {} }) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.parentElement?.getBoundingClientRect();
      const scrolled = window.scrollY;
      setOffset(scrolled * speed * -1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{ transform: `translateY(${offset}px)`, ...style }}
    >
      {children}
    </div>
  );
};

/**
 * ParallaxBlob — a decorative abstract blob shape with parallax movement.
 * Used as background ambient decoration across sections.
 */
export const ParallaxBlob = ({
  color = "#99AD7A",
  opacity = 0.12,
  size = 400,
  top,
  left,
  right,
  bottom,
  speed = 0.25,
  blur = 80,
  rotate = 0,
  shape = "circle", // "circle" | "oval" | "organic"
}) => {
  const borderRadius = {
    circle: "50%",
    oval: "60% 40% 60% 40% / 50% 60% 40% 50%",
    organic: "71% 29% 70% 30% / 30% 56% 44% 70%",
  }[shape] || "50%";

  return (
    <ParallaxLayer
      speed={speed}
      className="absolute pointer-events-none"
      style={{ top, left, right, bottom, zIndex: 0 }}
    >
      <div
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
    </ParallaxLayer>
  );
};

export default ParallaxLayer;

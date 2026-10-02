import React, { useEffect, useRef } from "react";

/**
 * Cursor spotlight — small, highly visible sage green dot
 * with a tight radial glow that closely tracks the cursor.
 */
const CursorSpotlight = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const currentDot = useRef({ x: -200, y: -200 });
  const currentRing = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Dot tracks cursor almost instantly (0.4 lerp = tight follow)
      currentDot.current.x += (pos.current.x - currentDot.current.x) * 0.4;
      currentDot.current.y += (pos.current.y - currentDot.current.y) * 0.4;

      // Ring lags slightly behind (0.12 lerp = trailing feel)
      currentRing.current.x += (pos.current.x - currentRing.current.x) * 0.12;
      currentRing.current.y += (pos.current.y - currentRing.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${currentDot.current.x - 6}px, ${currentDot.current.y - 6}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${currentRing.current.x - 20}px, ${currentRing.current.y - 20}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Inner dot — solid, sharp, always visible */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform rounded-full"
        style={{
          width: 12,
          height: 12,
          backgroundColor: "#546B41",
          opacity: 0.9,
          mixBlendMode: "normal",
        }}
      />
      {/* Outer ring — slightly larger, trails behind the dot */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] will-change-transform rounded-full"
        style={{
          width: 40,
          height: 40,
          border: "1.5px solid #546B41",
          opacity: 0.5,
          mixBlendMode: "normal",
        }}
      />
    </>
  );
};

export default CursorSpotlight;

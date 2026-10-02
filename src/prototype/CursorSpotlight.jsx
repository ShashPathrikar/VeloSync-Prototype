import React, { useEffect, useRef } from "react";

/**
 * Global cursor spotlight effect — soft sage green glow that follows the cursor.
 * Renders a single fixed div that tracks mouse position via CSS custom properties.
 */
const CursorSpotlight = () => {
  const spotRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const current = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Lerp toward actual cursor position for smooth lag
      current.current.x += (pos.current.x - current.current.x) * 0.1;
      current.current.y += (pos.current.y - current.current.y) * 0.1;

      if (spotRef.current) {
        spotRef.current.style.transform = `translate(${current.current.x - 200}px, ${current.current.y - 200}px)`;
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
    <div
      ref={spotRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
      style={{
        width: 400,
        height: 400,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(153, 173, 122, 0.18) 0%, rgba(84, 107, 65, 0.08) 50%, transparent 70%)",
        mixBlendMode: "multiply",
      }}
    />
  );
};

export default CursorSpotlight;

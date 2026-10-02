import React, { useEffect, useRef, useState } from "react";

/**
 * Custom cursor — stays visible at all times.
 * Grows slightly when hovering interactive elements to indicate clickability.
 */
const CursorSpotlight = () => {
  const cursorRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const INTERACTIVE = "a, button, input, select, textarea, label, [role='button'], [tabindex]";

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHovering(!!(el && el.closest(INTERACTIVE)));
    };

    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const animate = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.35;
      current.current.y += (pos.current.y - current.current.y) * 0.35;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
      style={{
        width: hovering ? 22 : 10,
        height: hovering ? 22 : 10,
        borderRadius: "50%",
        backgroundColor: hovering ? "transparent" : "#546B41",
        border: hovering ? "2px solid #546B41" : "none",
        opacity: hidden ? 0 : 1,
        transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border 0.15s ease, opacity 0.2s ease",
        boxShadow: hovering
          ? "0 0 0 4px rgba(84,107,65,0.1)"
          : "0 0 0 5px rgba(84,107,65,0.12), 0 0 0 10px rgba(84,107,65,0.05)",
      }}
    />
  );
};

export default CursorSpotlight;

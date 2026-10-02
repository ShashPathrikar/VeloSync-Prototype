import React, { useEffect, useRef, useState } from "react";

/**
 * Custom cursor — a clean minimal dot that morphs on hover.
 * Reverts to native system cursor on interactive elements (buttons, links, inputs).
 */
const CursorSpotlight = () => {
  const cursorRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [hovering, setHovering] = useState(false); // hovering over interactive element

  useEffect(() => {
    const INTERACTIVE = "a, button, input, select, textarea, label, [role='button'], [tabindex]";

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };

      // Check if hovering over an interactive element
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el && el.closest(INTERACTIVE)) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const animate = () => {
      // Smooth lerp — 0.35 = fast & responsive but not instant
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

  // When hovering interactive elements, hide our custom cursor entirely
  // (browser native cursor-pointer takes over via CSS on those elements)
  if (hidden || hovering) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "#546B41",
        // Subtle glow halo around the dot
        boxShadow: "0 0 0 6px rgba(84, 107, 65, 0.12), 0 0 0 12px rgba(84, 107, 65, 0.05)",
        transition: "box-shadow 0.2s ease",
      }}
    />
  );
};

export default CursorSpotlight;

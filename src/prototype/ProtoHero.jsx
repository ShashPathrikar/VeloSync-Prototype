import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowRight, FiShield, FiTrendingUp, FiCpu } from "react-icons/fi";

// 3D tilt card using mouse position
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ProtoHero = ({ onOpenDemo }) => {
  const metrics = [
    {
      id: "velocity",
      icon: <FiTrendingUp style={{ color: "#546B41" }} className="text-xl" />,
      title: "3× Product Velocity",
      sub: "Agile squads & pre-built modules",
      num: "3×",
    },
    {
      id: "sla",
      icon: <FiShield style={{ color: "#546B41" }} className="text-xl" />,
      title: "99.9% Uptime SLA",
      sub: "Enterprise cloud & on-prem",
      num: "99.9",
    },
    {
      id: "dual",
      icon: <FiCpu style={{ color: "#546B41" }} className="text-xl" />,
      title: "Dual-Engine Strategy",
      sub: "SaaS products + Custom services",
      num: "2×",
    },
  ];

  return (
    <section
      className="relative min-h-[100dvh] pt-32 md:pt-40 pb-20 flex flex-col justify-between overflow-hidden"
      style={{ backgroundColor: "#FFF8EC" }}
      aria-label="Hero"
    >
      {/* Soft background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[100px] rounded-full pointer-events-none opacity-30"
        style={{ backgroundColor: "#DCCCAC" }}
      />
      
      {/* Subtle organic pattern (optional, just leaving empty for clean space) */}

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium tracking-wide mb-8"
          style={{ borderColor: "#DCCCAC", color: "#546B41", backgroundColor: "rgba(255,248,236,0.5)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#99AD7A" }} />
          <span>VeloSynq 2.0 — Intelligent Automation & Engineering</span>
        </motion.div>

        <div className="max-w-4xl">
          {/* Headline line 1 */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="font-['FoundersGrotesk'] text-[14vw] md:text-[9vw] uppercase leading-[0.9] tracking-tight"
              style={{ color: "#2C2C2C" }}
            >
              Build.
            </motion.h1>
          </div>

          {/* Headline line 2 */}
          <div className="overflow-hidden mb-1 flex flex-wrap items-center gap-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
              className="origin-left h-[7vw] md:h-[4.5vw] w-[14vw] md:w-[9vw] rounded-full hidden sm:block"
              style={{ backgroundColor: "#546B41" }}
            />
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
              className="font-['FoundersGrotesk'] text-[14vw] md:text-[9vw] uppercase leading-[0.9] tracking-tight"
              style={{ color: "#2C2C2C" }}
            >
              Ship.
            </motion.h1>
          </div>

          {/* Headline line 3 */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.16, ease: [0.76, 0, 0.24, 1] }}
              className="font-['FoundersGrotesk'] text-[14vw] md:text-[9vw] uppercase leading-[0.9] tracking-tight"
              style={{ color: "#546B41" }}
            >
              Scale.
            </motion.h1>
          </div>
        </div>

        {/* Sub copy + CTAs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex-1 max-w-xl"
          >
            <p className="font-['NeueMontreal'] text-lg md:text-xl leading-relaxed mb-8 border-l-2 pl-6" style={{ color: "#2C2C2C", borderColor: "#DCCCAC", opacity: 0.8 }}>
              A hybrid solution combining ready-made enterprise SaaS tools with dedicated engineering squads. Replace fragmented stacks, cut software licensing costs by 85%, and scale faster with one unified platform.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDemo}
                className="flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:-translate-y-1 shadow-md"
                style={{ backgroundColor: "#546B41", color: "#FFF8EC" }}
              >
                <span>Book Architecture Demo</span>
                <FiArrowRight className="text-lg" />
              </button>
              <a
                href="#flywheel"
                className="px-6 py-3.5 rounded-full border text-sm font-semibold transition-all duration-300 hover:bg-white"
                style={{ borderColor: "#DCCCAC", color: "#546B41" }}
              >
                Explore Dual Engine
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3D tilt metric cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20" style={{ perspective: "1000px" }}>
          {metrics.map((m, i) => (
            <TiltCard key={m.id} className="p-8 rounded-3xl border shadow-sm transition-shadow hover:shadow-lg bg-white" style={{ borderColor: "#DCCCAC" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#99AD7A" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFF8EC" }}>
                    {m.icon}
                  </div>
                </div>
                <span className="font-['FoundersGrotesk'] text-5xl leading-none block mb-3" style={{ color: "#2C2C2C" }}>
                  {m.num}
                </span>
                <h3 className="font-semibold text-lg mb-1" style={{ color: "#2C2C2C" }}>{m.title}</h3>
                <p className="text-sm" style={{ color: "#546B41", opacity: 0.8 }}>{m.sub}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtoHero;

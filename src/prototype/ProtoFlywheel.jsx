import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiRefreshCw, FiLayers, FiCode } from "react-icons/fi";

// 3D perspective tilt card
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

const ProtoFlywheel = ({ onOpenDemo }) => {
  return (
    <section id="flywheel" className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: "#2C2C2C", color: "#FFF8EC" }}>
      
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ backgroundColor: "#99AD7A" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{ borderColor: "rgba(220, 204, 172, 0.3)", backgroundColor: "rgba(255, 248, 236, 0.05)" }}>
            <span className="font-semibold text-xs tracking-widest uppercase" style={{ color: "#DCCCAC" }}>
              The Dual-Engine Advantage
            </span>
          </div>
          <h2 className="font-['FoundersGrotesk'] uppercase text-5xl md:text-7xl tracking-tight leading-none max-w-3xl">
            How Our Two Engines Power Your Growth
          </h2>
          <p className="text-base md:text-lg mt-6 max-w-2xl" style={{ color: "#DCCCAC", opacity: 0.8 }}>
            Unlike pure software vendors or generic consultancies, VeloSynq operates two
            financially and operationally self-reinforcing engines.
          </p>
        </div>

        {/* Engine cards — 3D tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16" style={{ perspective: "1200px" }}>
          <TiltCard className="lg:col-span-5 p-10 rounded-3xl border shadow-xl bg-opacity-95" style={{ backgroundColor: "#FFF8EC", borderColor: "#DCCCAC", color: "#2C2C2C" }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8" style={{ backgroundColor: "#546B41", color: "#FFF8EC" }}>
              <FiCode />
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#99AD7A" }}>
              Engine 01 · Immediate Impact
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Engineering Services Squads
            </h3>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#546B41", opacity: 0.9 }}>
              Dedicated developers, DevOps engineers, and integration specialists. We integrate deeply with client teams to solve urgent technical challenges and build custom systems.
            </p>
            <ul className="space-y-4 border-t pt-6" style={{ borderColor: "rgba(84, 107, 65, 0.2)" }}>
              {[
                "Generates field insights to refine internal software",
                "Monthly engineering retainers & immediate value",
                "Rapid integration into client infrastructure",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium">
                  <span style={{ color: "#99AD7A" }}>→</span>
                  <span style={{ color: "#2C2C2C" }}>{item}</span>
                </li>
              ))}
            </ul>
          </TiltCard>

          {/* Center flywheel indicator */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center gap-6 text-center py-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="w-20 h-20 rounded-full border-2 flex items-center justify-center text-3xl"
              style={{ borderColor: "#99AD7A", color: "#DCCCAC" }}
            >
              <FiRefreshCw />
            </motion.div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#DCCCAC" }}>
              Self-Sustaining<br />Flywheel
            </span>
          </div>

          <TiltCard className="lg:col-span-5 p-10 rounded-3xl border shadow-xl bg-opacity-95" style={{ backgroundColor: "#FFF8EC", borderColor: "#DCCCAC", color: "#2C2C2C" }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8" style={{ backgroundColor: "#99AD7A", color: "#FFF8EC" }}>
              <FiLayers />
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#546B41" }}>
              Engine 02 · Compounding Value
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Scalable Software Products
            </h3>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#546B41", opacity: 0.9 }}>
              Multi-tenant SaaS and enterprise on-premise software. High gross-margin platforms replacing bloated legacy stacks with continuous updates.
            </p>
            <ul className="space-y-4 border-t pt-6" style={{ borderColor: "rgba(84, 107, 65, 0.2)" }}>
              {[
                "Predictable recurring subscription & license income",
                "Reusable templates & pipelines speed up services",
                "Continuous feedback loop from active users",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium">
                  <span style={{ color: "#546B41" }}>→</span>
                  <span style={{ color: "#2C2C2C" }}>{item}</span>
                </li>
              ))}
            </ul>
          </TiltCard>
        </div>

        {/* Bottom proof bar */}
        <div className="p-8 md:p-10 rounded-3xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ backgroundColor: "rgba(255, 248, 236, 0.05)", borderColor: "rgba(220, 204, 172, 0.2)" }}>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-2" style={{ color: "#DCCCAC" }}>
              Proven by the World's Tech Giants
            </h4>
            <p className="text-base max-w-2xl" style={{ color: "#FFF8EC", opacity: 0.8 }}>
              Microsoft ($3T), Amazon AWS ($2.9T), Google ($4.6T), and Adobe ($130B) all leverage this exact Dual-Model strategy.
            </p>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90 shadow-md shrink-0"
            style={{ backgroundColor: "#DCCCAC", color: "#2C2C2C" }}
          >
            Leverage Dual Engine
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProtoFlywheel;

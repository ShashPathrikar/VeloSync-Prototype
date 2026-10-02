import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiTarget, FiSmile } from "react-icons/fi";

const ProtoCulture = () => {
  const pillars = [
    {
      icon: <FiTarget className="text-2xl" />,
      num: "01",
      title: "Own Your Role, Own the Impact",
      desc: "Every team member is an empowered decision maker. We make choices based on facts, data, evidence, and real business ROI.",
    },
    {
      icon: <FiSmile className="text-2xl" />,
      num: "02",
      title: "Stay Calm, Stress-Free & Sharp",
      desc: "A calm mind produces cleaner architecture. We encourage deep, focused work without artificial urgency. Stress is not a requirement — clarity is.",
    },
    {
      icon: <FiClock className="text-2xl" />,
      num: "03",
      title: "Respect Time & Commitments",
      desc: "Take time to deliberate, but once we commit to an ETA, we deliver strictly on schedule. Reliability builds trust — and trust builds great products.",
    },
  ];

  return (
    <section id="culture" className="py-24 md:py-32" style={{ backgroundColor: "#2C2C2C", color: "#FFF8EC" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px" style={{ backgroundColor: "#DCCCAC" }} />
            <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "#DCCCAC" }}>
              Operating Philosophy
            </span>
          </div>
          <h2 className="font-['FoundersGrotesk'] text-5xl md:text-7xl uppercase tracking-tight leading-none text-white">
            Built on Reliability<br />& Trust
          </h2>
          <p className="text-base mt-6 max-w-xl border-l-2 pl-6" style={{ color: "#DCCCAC", borderColor: "#546B41", opacity: 0.9 }}>
            The guiding principles that dictate how we build products and deliver engineering services for our clients.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-10 rounded-3xl border shadow-xl bg-opacity-95"
              style={{ backgroundColor: "rgba(255, 248, 236, 0.03)", borderColor: "rgba(220, 204, 172, 0.2)" }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm" style={{ backgroundColor: "#546B41", color: "#FFF8EC" }}>
                  {p.icon}
                </div>
                <span className="font-['FoundersGrotesk'] text-5xl" style={{ color: "rgba(220, 204, 172, 0.15)" }}>{p.num}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: "#DCCCAC", opacity: 0.8 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtoCulture;

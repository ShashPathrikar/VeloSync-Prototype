import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { ParallaxBlob } from "./ParallaxUtils";

const ProtoAbout = ({ onOpenDemo }) => {
  const stats = [
    { value: "85%", label: "Average Savings", sub: "vs Atlassian / Salesforce stacks" },
    { value: "4+1", label: "Core Products", sub: "Sprint, Docs, CMS, CRM & Analytics" },
    { value: "100%", label: "Data Sovereignty", sub: "Private Cloud VPC or On-Premises" },
    { value: "24/7", label: "SLA Support", sub: "Dedicated engineering squads" },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#FFF8EC" }}>
      <ParallaxBlob color="#546B41" size={350} top="0" right="-60px" speed={0.3} opacity={0.08} blur={80} shape="organic" />
      <ParallaxBlob color="#99AD7A" size={280} bottom="-60px" left="-40px" speed={0.2} opacity={0.12} blur={70} shape="oval" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-8 flex items-center gap-3">
          <div className="w-6 h-px" style={{ backgroundColor: "#546B41" }} />
          <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: "#546B41" }}>
            Strategic Positioning
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-24">
          <div className="lg:col-span-7">
            <h2 className="font-['NeueMontreal'] text-3xl md:text-4xl lg:text-5xl leading-tight font-medium" style={{ color: "#2C2C2C" }}>
              Why should only giant corporations afford the tools and squads that drive velocity?
              VeloSynq democratizes enterprise software and elite engineering for ambitious companies.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 border-l-2 pl-8 md:pl-12" style={{ borderColor: "#DCCCAC" }}>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#546B41", opacity: 0.9 }}>
              Our dual-model strategy enables us to deliver immediate impact through engineering services
              while building long-term value through scalable, multi-tenant and on-premise products.
            </p>
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity w-fit"
              style={{ color: "#546B41" }}
            >
              <span>Explore Engagement Models</span>
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Stat grid — soft rounded cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl border shadow-sm hover:shadow-md transition-shadow bg-white"
              style={{ borderColor: "#DCCCAC" }}
            >
              <span className="font-['FoundersGrotesk'] text-5xl md:text-6xl leading-none block mb-4" style={{ color: "#546B41" }}>
                {s.value}
              </span>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#2C2C2C" }}>
                {s.label}
              </h3>
              <p className="text-sm" style={{ color: "#546B41", opacity: 0.8 }}>{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtoAbout;

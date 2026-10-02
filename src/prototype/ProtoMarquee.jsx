import React from "react";
import { motion } from "framer-motion";

const ProtoMarquee = () => {
  const items = [
    "SPRINTSYNQ · JIRA ALT",
    "DOCSYNQ · CONFLUENCE ALT",
    "CONTENTSYNQ · HEADLESS CMS",
    "CLIENTSYNQ · CRM",
    "SMART WORKFLOWS",
    "PRODUCT ENGINEERING",
    "ENTERPRISE ON-PREMISE",
    "DUAL-MODEL ENGINE",
  ];

  return (
    <div className="w-full py-6 md:py-8 overflow-hidden relative z-10 flex items-center border-y" style={{ backgroundColor: "#546B41", borderColor: "#546B41" }}>
      <motion.div
        className="flex whitespace-nowrap gap-12 shrink-0 font-['FoundersGrotesk'] text-2xl md:text-3xl uppercase tracking-widest"
        style={{ color: "#FFF8EC" }}
        animate={{ x: [0, -1400] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span>{text}</span>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#99AD7A" }} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProtoMarquee;

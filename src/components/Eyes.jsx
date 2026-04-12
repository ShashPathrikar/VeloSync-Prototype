import React from "react";
import { motion } from "framer-motion";

const comparisons = [
  {
    competitor: "Jira",
    theirPrice: "$7–14",
    ourProduct: "TaskVault",
    savings: "Up to 85%",
    description: "Sprint planning, kanban boards & issue tracking",
  },
  {
    competitor: "Confluence",
    theirPrice: "$5–10",
    ourProduct: "DocSync",
    savings: "Up to 80%",
    description: "Team wikis, docs & knowledge bases",
  },
  {
    competitor: "Contentful",
    theirPrice: "$500+",
    ourProduct: "ContentHub",
    savings: "Up to 95%",
    description: "Headless CMS, media library & publishing",
  },
  {
    competitor: "Salesforce / HubSpot",
    theirPrice: "$75+",
    ourProduct: "VeloSynq CRM",
    savings: "Up to 90%",
    description: "Leads, pipelines & customer management",
  },
];

const Eyes = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.5"
      className="relative z-[1] w-full bg-[#004d43] overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top hero row */}
      <div className="relative px-5 md:px-[5.922vw] pt-16 md:pt-24 pb-12 md:pb-16 border-b border-white/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-['NeueMontrealLight'] text-white/50 text-[3vw] md:text-[1vw] uppercase tracking-widest mb-4">
              / Why VeloSynq
            </p>
            <h2 className="font-['FoundersGrotesk'] uppercase text-[12vw] md:text-[6.5vw] leading-none text-white">
              Pay Less.<br className="md:hidden" /> Get More.
            </h2>
          </div>
          <p className="font-['NeueMontrealLight'] text-white/60 text-[4vw] md:text-[1.2vw] max-w-full md:max-w-[30vw] leading-relaxed md:text-right">
            Stop paying enterprise prices for tools your small business doesn't
            need to overpay for. VeloSynq gives you everything — at a fraction
            of the cost.
          </p>
        </div>
      </div>

      {/* Comparison grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {comparisons.map((item, idx) => (
          <motion.div
            key={item.competitor}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.76, 0, 0.24, 1] }}
            className={`px-6 md:px-8 py-10 md:py-12 flex flex-col gap-4 border-b border-white/20 ${
              idx < comparisons.length - 1 ? "md:border-r" : ""
            } border-white/20 lg:border-b-0`}
          >
            {/* vs competitor */}
            <p className="font-['NeueMontrealLight'] text-white/40 text-xs uppercase tracking-widest">
              vs {item.competitor}
            </p>

            {/* Savings big number */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 + 0.15, ease: [0.76, 0, 0.24, 1] }}
              >
                <span className="font-['FoundersGrotesk'] text-[10vw] md:text-[4vw] leading-none text-[#00e5c8]">
                  {item.savings}
                </span>
              </motion.div>
            </div>

            <div>
              <p className="font-['NeueMontrealLight'] text-white text-[4vw] md:text-[1.2vw] font-semibold leading-snug">
                {item.ourProduct}
              </p>
              <p className="font-['NeueMontrealLight'] text-white/60 text-[3.5vw] md:text-[1vw] leading-relaxed mt-1">
                {item.description}
              </p>
            </div>

            {/* Their price crossed out */}
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
              <span className="font-['NeueMontrealLight'] text-white/30 line-through text-sm">
                {item.theirPrice}/user/mo
              </span>
              <span className="font-['NeueMontrealLight'] text-[#00e5c8] text-sm font-semibold">
                VeloSynq saves you more
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA strip */}
      <div className="relative px-5 md:px-[5.922vw] py-8 md:py-10 border-t border-white/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-['NeueMontrealLight'] text-white/70 text-[3.5vw] md:text-[1.1vw]">
          All four products. One subscription. No per-seat surprises.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-3 px-7 py-3 rounded-full font-['NeueMontrealLight'] text-[3.5vw] md:text-[1vw] transition-all duration-300"
          style={{ border: "1px solid #00e5c8", color: "#00e5c8" }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#00e5c8"; e.currentTarget.style.color = "#004d43"; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#00e5c8"; }}
        >
          See Pricing
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Eyes;

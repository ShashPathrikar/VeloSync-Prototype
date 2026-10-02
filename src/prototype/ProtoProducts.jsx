import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowRight, FiLayers, FiFileText, FiGlobe, FiUsers, FiBarChart2 } from "react-icons/fi";

// 3D tilt card
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 250, damping: 28 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 250, damping: 28 });

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

const ProtoProducts = ({ onOpenDemo }) => {
  const products = [
    {
      id: "sprint",
      number: "01",
      title: "SprintSynq",
      category: "Agile Project Management",
      competitor: "Jira Alternative",
      savings: "85% Savings",
      description: "Sprint planning, customizable kanban boards, backlog management, and real-time issue tracking without the per-seat Atlassian surcharge.",
      tags: ["Sprint Planning", "Kanban", "Issue Tracking", "Velocity Metrics"],
      icon: <FiLayers />,
    },
    {
      id: "doc",
      number: "02",
      title: "DocSynq",
      category: "Living Team Wikis & Docs",
      competitor: "Confluence Alternative",
      savings: "80% Savings",
      description: "Centralized knowledge base, real-time multiplayer editing, team wikis, and markdown export to keep organizational intelligence accessible.",
      tags: ["Team Wikis", "Real-time Docs", "Knowledge Base", "Version History"],
      icon: <FiFileText />,
    },
    {
      id: "content",
      number: "03",
      title: "ContentSynq",
      category: "Headless Content Management",
      competitor: "Contentful Alternative",
      savings: "95% Savings",
      description: "API-first headless CMS with integrated media asset library, multi-channel publishing hooks, and developer-friendly GraphQL/REST endpoints.",
      tags: ["Headless CMS", "Media Asset Hub", "Multi-Channel", "Developer APIs"],
      icon: <FiGlobe />,
    },
    {
      id: "client",
      number: "04",
      title: "ClientSynq",
      category: "CRM & High-Velocity Sales",
      competitor: "Salesforce Alternative",
      savings: "90% Savings",
      description: "Lead capture pipelines, deal velocity tracking, contact history, and email automation built for modern growth teams.",
      tags: ["Lead Tracking", "Deal Pipelines", "CRM Workflows", "Contact Sync"],
      icon: <FiUsers />,
    },
    {
      id: "analytics",
      number: "05",
      title: "VeloAnalytics",
      category: "Unified Telemetry & BI",
      competitor: "Enterprise BI Suite",
      savings: "Included",
      description: "Cross-platform analytics dashboards unifying sprint velocity, doc engagement, content impressions, and sales deal progression.",
      tags: ["Unified Dashboards", "Telemetry", "Executive Reports", "Real-Time"],
      icon: <FiBarChart2 />,
    },
  ];

  return (
    <section id="products" className="py-24 md:py-32" style={{ backgroundColor: "#2C2C2C", color: "#FFF8EC" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-10 border-b" style={{ borderColor: "rgba(220, 204, 172, 0.2)" }}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px" style={{ backgroundColor: "#DCCCAC" }} />
              <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "#DCCCAC" }}>
                Core Software Products
              </span>
            </div>
            <h2 className="font-['FoundersGrotesk'] text-5xl md:text-7xl uppercase tracking-tight leading-none text-white">
              The VeloSynq Suite
            </h2>
          </div>
          <p className="text-base max-w-sm leading-relaxed border-l-2 pl-6" style={{ borderColor: "#546B41", opacity: 0.8 }}>
            Replace fragmented, expensive enterprise software with one unified, high-performance platform
            available via Cloud SaaS or Enterprise On-Premise.
          </p>
        </div>

        {/* Product grid — 3D tilt cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
          {products.map((p, idx) => (
            <TiltCard
              key={p.id}
              className="p-10 rounded-3xl border shadow-lg bg-opacity-95"
              style={{ backgroundColor: "#FFF8EC", borderColor: "#DCCCAC", color: "#2C2C2C" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between gap-3 mb-8">
                  <span className="font-semibold text-sm tracking-widest" style={{ color: "#99AD7A" }}>{p.number}</span>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide" style={{ borderColor: "#DCCCAC", color: "#546B41" }}>
                      {p.competitor}
                    </span>
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wide" style={{ backgroundColor: "#546B41", color: "#FFF8EC" }}>
                      {p.savings}
                    </span>
                  </div>
                </div>

                {/* Icon + title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm" style={{ backgroundColor: "#DCCCAC", color: "#2C2C2C" }}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-['FoundersGrotesk'] uppercase text-3xl md:text-4xl leading-none">
                      {p.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider mt-1 block" style={{ color: "#99AD7A" }}>{p.category}</span>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-8" style={{ color: "#546B41", opacity: 0.9 }}>{p.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg border text-xs font-medium tracking-wide"
                      style={{ borderColor: "#DCCCAC", backgroundColor: "rgba(220, 204, 172, 0.1)", color: "#546B41" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-6 flex items-center justify-between border-t" style={{ borderColor: "rgba(84, 107, 65, 0.2)" }}>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#99AD7A" }}>Cloud · On-Prem</span>
                  <button
                    onClick={onOpenDemo}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:opacity-80 transition-opacity"
                    style={{ color: "#546B41" }}
                  >
                    <span>Request Access</span>
                    <FiArrowRight className="text-lg" />
                  </button>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtoProducts;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiFileText, FiCheckSquare, FiGlobe, FiZap } from "react-icons/fi";

const products = [
  {
    id: "docsync",
    number: "01",
    title: "DocSynq",
    category: "Living Team Wikis & Docs",
    competitor: "Confluence Alternative",
    description:
      "Centralized knowledge base with real-time multiplayer editing, team wikis, nested pages, and markdown export — keeping institutional knowledge evergreen and accessible.",
    features: ["Real-time multiplayer editing", "Nested page hierarchy", "Markdown export", "Version history"],
    icon: <FiFileText className="text-3xl" />,
  },
  {
    id: "taskvault",
    number: "02",
    title: "TaskVault",
    category: "Sprint & Project Management",
    competitor: "Jira Alternative",
    description:
      "Sprint planning, customizable kanban boards, backlog management, and real-time issue tracking built for modern engineering teams — without the per-seat Atlassian tax.",
    features: ["Sprint planning & velocity", "Kanban & list views", "Custom workflows", "Burndown charts"],
    icon: <FiCheckSquare className="text-3xl" />,
  },
  {
    id: "contenthub",
    number: "03",
    title: "ContentHub",
    category: "Headless Content Management",
    competitor: "Contentful Alternative",
    description:
      "API-first headless CMS with an integrated media asset library, multi-channel publishing hooks, and developer-friendly GraphQL/REST endpoints for any frontend stack.",
    features: ["API-first GraphQL/REST", "Multi-channel publishing", "Media asset hub", "Custom content types"],
    icon: <FiGlobe className="text-3xl" />,
  },
  {
    id: "qaflow",
    number: "04",
    title: "QAFlow",
    category: "Automated Quality Assurance",
    competitor: "QA & Testing Platform",
    description:
      "Automated test case management, regression pipelines, and bug lifecycle tracking — integrated directly into your CI/CD workflow so quality ships alongside every release.",
    features: ["Test case management", "CI/CD pipeline integration", "Bug lifecycle tracking", "Regression automation"],
    icon: <FiZap className="text-3xl" />,
  },
];

// Single 3D flip card
const FlipCard = ({ product, index, onOpenDemo }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      // Container — perspective for 3D space
      style={{ perspective: "1200px" }}
      className="relative w-full"
    >
      {/* Flip inner — this rotates */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full"
        style={{ transformStyle: "preserve-3d", height: "360px" }}
      >
        {/* ── FRONT FACE ── */}
        <div
          className="absolute inset-0 rounded-3xl border flex flex-col justify-between p-8 cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundColor: "#FFF8EC",
            borderColor: "#DCCCAC",
          }}
          onClick={() => setFlipped(true)}
        >
          {/* Top row */}
          <div className="flex items-start justify-between">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: "#DCCCAC", color: "#2C2C2C" }}
            >
              {product.icon}
            </div>
            <span className="font-['FoundersGrotesk'] text-5xl" style={{ color: "rgba(84,107,65,0.12)" }}>
              {product.number}
            </span>
          </div>

          {/* Bottom */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest block mb-2" style={{ color: "#99AD7A" }}>
              {product.competitor}
            </span>
            <h3
              className="font-['FoundersGrotesk'] text-5xl uppercase leading-none mb-2"
              style={{ color: "#2C2C2C" }}
            >
              {product.title}
            </h3>
            <p className="text-sm" style={{ color: "#546B41", opacity: 0.7 }}>
              {product.category}
            </p>
          </div>

          {/* Tap hint */}
          <div className="absolute bottom-6 right-8 text-xs font-semibold uppercase tracking-widest" style={{ color: "#DCCCAC" }}>
            Hover to flip →
          </div>
        </div>

        {/* ── BACK FACE ── */}
        <div
          className="absolute inset-0 rounded-3xl border flex flex-col justify-between p-8"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "#546B41",
            borderColor: "#546B41",
          }}
          onClick={() => setFlipped(false)}
        >
          <div>
            <h3
              className="font-['FoundersGrotesk'] text-4xl uppercase leading-none mb-4"
              style={{ color: "#FFF8EC" }}
            >
              {product.title}
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#DCCCAC", opacity: 0.9 }}>
              {product.description}
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs font-medium" style={{ color: "#FFF8EC", opacity: 0.8 }}>
                  <span style={{ color: "#99AD7A" }}>→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={(e) => { e.stopPropagation(); onOpenDemo(); }}
              className="flex items-center gap-2 text-sm font-bold hover:opacity-80 transition-opacity"
              style={{ color: "#FFF8EC" }}
            >
              <span>Request Access</span>
              <FiArrowRight />
            </button>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#99AD7A" }}>
              ← Flip back
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProtoProducts = ({ onOpenDemo }) => {
  return (
    <section id="products" className="py-24 md:py-32" style={{ backgroundColor: "#FFF8EC" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px" style={{ backgroundColor: "#546B41" }} />
              <span className="font-semibold text-xs uppercase tracking-widest" style={{ color: "#546B41" }}>
                Core Software Products
              </span>
            </div>
            <h2
              className="font-['FoundersGrotesk'] text-5xl md:text-7xl uppercase tracking-tight leading-none"
              style={{ color: "#2C2C2C" }}
            >
              The VeloSynq Suite
            </h2>
          </div>
          <p
            className="text-sm max-w-xs border-l-2 pl-5 hidden md:block"
            style={{ color: "#546B41", borderColor: "#DCCCAC", opacity: 0.9 }}
          >
            Hover any card to flip it and see what's inside.
          </p>
        </motion.div>

        {/* 2×2 flip card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ perspective: "2000px" }}>
          {products.map((p, i) => (
            <FlipCard key={p.id} product={p} index={i} onOpenDemo={onOpenDemo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtoProducts;

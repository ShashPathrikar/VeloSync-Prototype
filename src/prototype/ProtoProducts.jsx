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

// The card height as a CSS value — defined once so both faces match exactly
const CARD_H = 380;

const FlipCard = ({ product, index, onOpenDemo }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      // Outer wrapper provides the 3D perspective
      style={{ perspective: "1400px", height: CARD_H }}
      className="relative w-full"
    >
      {/* Inner wrapper — this is the element that actually rotates */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",  // ← only one style prop, no conflict
        }}
      >
        {/* ── FRONT FACE ── */}
        <div
          onClick={() => setFlipped(true)}
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundColor: "#FFF8EC",
            borderRadius: "1.5rem",
            border: "1px solid #DCCCAC",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 4px 24px rgba(84,107,65,0.06)",
          }}
        >
          {/* Top */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "1rem",
                backgroundColor: "#DCCCAC",
                color: "#2C2C2C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {product.icon}
            </div>
            <span
              style={{
                fontFamily: "FoundersGrotesk",
                fontSize: "3rem",
                color: "rgba(84,107,65,0.1)",
                lineHeight: 1,
              }}
            >
              {product.number}
            </span>
          </div>

          {/* Bottom */}
          <div>
            <span
              style={{
                display: "block",
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#99AD7A",
                marginBottom: "0.5rem",
              }}
            >
              {product.competitor}
            </span>
            <h3
              style={{
                fontFamily: "FoundersGrotesk",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                textTransform: "uppercase",
                lineHeight: 0.9,
                color: "#2C2C2C",
                marginBottom: "0.4rem",
              }}
            >
              {product.title}
            </h3>
            <p style={{ fontSize: "0.85rem", color: "#546B41", opacity: 0.7 }}>
              {product.category}
            </p>
          </div>

          {/* Hint */}
          <span
            style={{
              position: "absolute",
              bottom: "1.5rem",
              right: "2rem",
              fontSize: "0.65rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#DCCCAC",
            }}
          >
            Click to flip →
          </span>
        </div>

        {/* ── BACK FACE ── */}
        <div
          onClick={() => setFlipped(false)}
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",   // pre-rotated so it starts hidden
            backgroundColor: "#546B41",
            borderRadius: "1.5rem",
            border: "1px solid #546B41",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 4px 24px rgba(84,107,65,0.2)",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "FoundersGrotesk",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                textTransform: "uppercase",
                lineHeight: 0.95,
                color: "#FFF8EC",
                marginBottom: "1rem",
              }}
            >
              {product.title}
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.65,
                color: "#DCCCAC",
                opacity: 0.9,
                marginBottom: "1.5rem",
              }}
            >
              {product.description}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem 0.75rem",
              }}
            >
              {product.features.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.4rem",
                    fontSize: "0.75rem",
                    color: "rgba(255,248,236,0.8)",
                    fontWeight: 500,
                  }}
                >
                  <span style={{ color: "#99AD7A", flexShrink: 0 }}>→</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1.5rem" }}>
            <button
              onClick={(e) => { e.stopPropagation(); onOpenDemo(); }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "#FFF8EC",
                background: "none",
                border: "none",
                padding: 0,
                opacity: 0.9,
              }}
            >
              Request Access <FiArrowRight />
            </button>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#99AD7A",
              }}
            >
              ← flip back
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
            Click any card to flip it and see what's inside.
          </p>
        </motion.div>

        {/* 2×2 flip card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <FlipCard key={p.id} product={p} index={i} onOpenDemo={onOpenDemo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtoProducts;

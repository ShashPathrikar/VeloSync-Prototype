import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiFileText, FiCheckSquare, FiGlobe, FiZap } from "react-icons/fi";

const products = [
  {
    id: "docsync",
    number: "01",
    title: "DocSynq",
    category: "Living Team Wikis & Docs",
    competitor: "Confluence Alternative",
    tag: "Knowledge Base",
    description:
      "Centralized knowledge base with real-time multiplayer editing, team wikis, nested pages, and markdown export — keeping every team's institutional knowledge accessible and evergreen.",
    features: ["Real-time multiplayer editing", "Nested page hierarchy", "Markdown export", "Version history"],
    icon: <FiFileText />,
    accent: "#546B41",
    bg: "#FFF8EC",
  },
  {
    id: "taskvault",
    number: "02",
    title: "TaskVault",
    category: "Sprint & Project Management",
    competitor: "Jira Alternative",
    tag: "Agile Tracking",
    description:
      "Sprint planning, customizable kanban boards, backlog management, and real-time issue tracking built for modern engineering teams — without the per-seat Atlassian tax.",
    features: ["Sprint planning & velocity", "Kanban & list views", "Custom workflows", "Burndown charts"],
    icon: <FiCheckSquare />,
    accent: "#99AD7A",
    bg: "#2C2C2C",
  },
  {
    id: "contenthub",
    number: "03",
    title: "ContentHub",
    category: "Headless Content Management",
    competitor: "Contentful Alternative",
    tag: "Headless CMS",
    description:
      "API-first headless CMS with an integrated media asset library, multi-channel publishing hooks, and developer-friendly GraphQL/REST endpoints for any frontend stack.",
    features: ["API-first GraphQL/REST", "Multi-channel publishing", "Media asset hub", "Custom content types"],
    icon: <FiGlobe />,
    accent: "#546B41",
    bg: "#FFF8EC",
  },
  {
    id: "qaflow",
    number: "04",
    title: "QAFlow",
    category: "Automated Quality Assurance",
    competitor: "End-to-End Testing Platform",
    tag: "QA Automation",
    description:
      "Automated test case management, regression pipelines, and bug lifecycle tracking — integrated directly into your CI/CD workflow so quality ships alongside every release.",
    features: ["Test case management", "CI/CD pipeline integration", "Bug lifecycle tracking", "Regression automation"],
    icon: <FiZap />,
    accent: "#99AD7A",
    bg: "#2C2C2C",
  },
];

const ProtoProducts = ({ onOpenDemo }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Translate the horizontal strip left as user scrolls down
  // 4 cards, each ~520px wide + gap. Total translate needed ~= 3 card widths
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="products" ref={containerRef} style={{ height: "400vh", position: "relative" }}>
      {/* Sticky viewport that stays fixed while user scrolls */}
      <div
        className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center"
        style={{ backgroundColor: "#FFF8EC" }}
      >
        {/* Section header */}
        <div className="px-6 md:px-14 mb-10 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
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
            className="hidden md:block text-sm max-w-xs text-right border-r-2 pr-5"
            style={{ color: "#546B41", borderColor: "#DCCCAC", opacity: 0.8 }}
          >
            Scroll down to explore each product →
          </p>
        </div>

        {/* Horizontal scroll strip */}
        <div className="pl-6 md:pl-14">
          <motion.div
            style={{ x }}
            className="flex gap-6 w-max"
          >
            {products.map((p) => (
              <div
                key={p.id}
                className="rounded-3xl border overflow-hidden flex flex-col justify-between shrink-0 shadow-md"
                style={{
                  width: "min(80vw, 480px)",
                  minHeight: "min(65vh, 480px)",
                  backgroundColor: p.bg,
                  borderColor: "#DCCCAC",
                  padding: "2.5rem",
                }}
              >
                {/* Card header */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: p.accent }}
                    >
                      {p.number}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: p.bg === "#2C2C2C" ? "rgba(255,248,236,0.1)" : "rgba(84,107,65,0.1)",
                        color: p.bg === "#2C2C2C" ? "#DCCCAC" : "#546B41",
                      }}
                    >
                      {p.competitor}
                    </span>
                  </div>

                  {/* Icon + title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
                      style={{
                        backgroundColor: p.bg === "#2C2C2C" ? "rgba(255,248,236,0.08)" : "#DCCCAC",
                        color: p.bg === "#2C2C2C" ? "#DCCCAC" : "#2C2C2C",
                      }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <h3
                        className="font-['FoundersGrotesk'] text-4xl uppercase leading-none"
                        style={{ color: p.bg === "#2C2C2C" ? "#FFF8EC" : "#2C2C2C" }}
                      >
                        {p.title}
                      </h3>
                      <span
                        className="text-xs font-semibold uppercase tracking-wider mt-1 block"
                        style={{ color: p.accent }}
                      >
                        {p.category}
                      </span>
                    </div>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-8"
                    style={{
                      color: p.bg === "#2C2C2C" ? "rgba(255,248,236,0.7)" : "#546B41",
                    }}
                  >
                    {p.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-xs font-medium"
                        style={{ color: p.bg === "#2C2C2C" ? "rgba(220,204,172,0.8)" : "#2C2C2C" }}
                      >
                        <span style={{ color: p.accent }}>→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer */}
                <button
                  onClick={onOpenDemo}
                  className="flex items-center gap-2 text-sm font-bold hover:opacity-70 transition-opacity"
                  style={{ color: p.accent }}
                >
                  <span>Request Access</span>
                  <FiArrowRight />
                </button>
              </div>
            ))}

            {/* End card — CTA */}
            <div
              className="rounded-3xl border flex flex-col items-center justify-center text-center shrink-0 shadow-md px-10"
              style={{
                width: "min(60vw, 360px)",
                minHeight: "min(65vh, 480px)",
                backgroundColor: "#546B41",
                borderColor: "#546B41",
              }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#99AD7A" }}>
                That's the full suite
              </span>
              <h3
                className="font-['FoundersGrotesk'] text-5xl uppercase leading-none mb-6"
                style={{ color: "#FFF8EC" }}
              >
                See it live
              </h3>
              <p className="text-sm mb-8" style={{ color: "#DCCCAC", opacity: 0.9 }}>
                Book a 30-min architecture demo and see all four products running in a live environment.
              </p>
              <button
                onClick={onOpenDemo}
                className="flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold shadow-md"
                style={{ backgroundColor: "#FFF8EC", color: "#546B41" }}
              >
                <span>Book a Demo</span>
                <FiArrowRight />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll progress indicator */}
        <div className="absolute bottom-8 left-0 w-full px-6 md:px-14 flex items-center gap-4">
          <motion.div
            className="h-px flex-1 origin-left"
            style={{
              backgroundColor: "#DCCCAC",
              scaleX: scrollYProgress,
            }}
          />
          <motion.span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#99AD7A" }}
          >
            <motion.span>
              {/* Show card index */}
            </motion.span>
            Scroll to explore
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default ProtoProducts;

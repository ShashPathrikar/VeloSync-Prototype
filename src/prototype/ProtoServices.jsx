import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiCloud, FiUsers, FiArrowRight } from "react-icons/fi";

const ProtoServices = ({ onOpenDemo }) => {
  const serviceLines = [
    {
      icon: <FiUsers className="text-2xl" />,
      title: "Dedicated Engineering Squads",
      desc: "Full-stack developers, DevOps engineers, QA specialists, and integration engineers on a predictable monthly retainer model.",
      features: ["Full sprint velocity", "Senior architectural oversight", "Zero hiring latency", "Direct Slack/Discord integration"],
    },
    {
      icon: <FiCloud className="text-2xl" />,
      title: "Platform Integration & Migration",
      desc: "Seamlessly migrate legacy data from Jira, Salesforce, HubSpot, or Confluence into VeloSynq or your private AWS/GCP/Azure cloud.",
      features: ["Zero data loss migration", "API bridge engineering", "Custom schema sync", "Zero downtime cutover"],
    },
    {
      icon: <FiCpu className="text-2xl" />,
      title: "Intelligent Automations",
      desc: "Custom smart bots, workflow triggers, and observability pipelines that eliminate manual repetitive tasks across your team.",
      features: ["Custom model integration", "Autonomous QA pipelines", "Automated release notes", "Telemetry & anomaly alerts"],
    },
    {
      icon: <FiCode className="text-2xl" />,
      title: "Enterprise Custom Builds",
      desc: "Tailored feature engineering, bespoke integrations, and on-premise hardened deployments built specifically to your enterprise specs.",
      features: ["Air-gapped installation", "Custom security audits", "Bespoke UI styling", "Guaranteed SLA uptime"],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32" style={{ backgroundColor: "#FFF8EC" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px" style={{ backgroundColor: "#546B41" }} />
            <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "#546B41" }}>
              Product Engineering Services
            </span>
          </div>
          <h2 className="font-['FoundersGrotesk'] text-5xl md:text-7xl uppercase tracking-tight leading-none" style={{ color: "#2C2C2C" }}>
            Elite Engineering<br />On Demand
          </h2>
          <p className="text-base mt-6 max-w-xl border-l-2 pl-6" style={{ color: "#546B41", borderColor: "#DCCCAC", opacity: 0.9 }}>
            Augment your team with dedicated squads who build, deploy, and maintain mission-critical
            software with guaranteed reliability.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {serviceLines.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-10 rounded-3xl border shadow-sm hover:shadow-md transition-shadow bg-white"
              style={{ borderColor: "#DCCCAC" }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm" style={{ backgroundColor: "#DCCCAC", color: "#2C2C2C" }}>
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#2C2C2C" }}>{s.title}</h3>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#546B41", opacity: 0.9 }}>{s.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t" style={{ borderColor: "rgba(220, 204, 172, 0.4)" }}>
                {s.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm font-medium">
                    <span style={{ color: "#99AD7A" }}>→</span>
                    <span style={{ color: "#2C2C2C" }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:-translate-y-1 shadow-md"
            style={{ backgroundColor: "#546B41", color: "#FFF8EC" }}
          >
            <span>Hire a Dedicated Squad</span>
            <FiArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProtoServices;

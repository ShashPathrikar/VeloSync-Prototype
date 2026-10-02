import React from "react";
import { FiCheck, FiServer, FiCloud } from "react-icons/fi";

const ProtoEnterprise = ({ onOpenDemo }) => {
  return (
    <section id="enterprise" className="py-24 md:py-32" style={{ backgroundColor: "#2C2C2C", color: "#FFF8EC" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px" style={{ backgroundColor: "#DCCCAC" }} />
            <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "#DCCCAC" }}>
              Deployment Flexibility
            </span>
          </div>
          <h2 className="font-['FoundersGrotesk'] text-5xl md:text-7xl uppercase tracking-tight leading-none text-white">
            Cloud SaaS<br />vs. On-Premises
          </h2>
          <p className="text-base mt-6 max-w-xl border-l-2 pl-6" style={{ color: "#DCCCAC", borderColor: "#546B41", opacity: 0.9 }}>
            Choose the deployment architecture that best meets your security, compliance, and budget requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cloud SaaS */}
          <div className="p-10 md:p-12 rounded-3xl border shadow-xl flex flex-col justify-between" style={{ backgroundColor: "rgba(255, 248, 236, 0.03)", borderColor: "rgba(220, 204, 172, 0.2)" }}>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm" style={{ backgroundColor: "#546B41", color: "#FFF8EC" }}>
                  <FiCloud />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Enterprise Cloud SaaS</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#99AD7A" }}>Multi-tenant or Dedicated Cloud</span>
                </div>
              </div>
              <p className="text-base mb-8 leading-relaxed" style={{ color: "#DCCCAC", opacity: 0.8 }}>
                Zero infrastructure overhead. Automatic updates, globally distributed CDNs, and seamless scalability for fast-moving teams.
              </p>
              <ul className="space-y-4 text-sm font-medium mb-10">
                {[
                  "99.9% Uptime SLA Guarantee",
                  "Automatic weekly product enhancements",
                  "SOC2 Type II & GDPR compliant",
                  "Predictable monthly or annual subscription",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(153, 173, 122, 0.2)" }}>
                      <FiCheck style={{ color: "#99AD7A" }} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={onOpenDemo}
              className="w-full py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90 shadow-md"
              style={{ backgroundColor: "#DCCCAC", color: "#2C2C2C" }}
            >
              Deploy to Cloud
            </button>
          </div>

          {/* On-Premises */}
          <div className="p-10 md:p-12 rounded-3xl border shadow-xl flex flex-col justify-between relative overflow-hidden" style={{ backgroundColor: "#FFF8EC", borderColor: "#DCCCAC", color: "#2C2C2C" }}>
            <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm" style={{ backgroundColor: "#DCCCAC", color: "#546B41" }}>
              Full Sovereignty
            </div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm" style={{ backgroundColor: "#DCCCAC", color: "#2C2C2C" }}>
                  <FiServer />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Enterprise On-Premises</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#546B41" }}>Private VPC or Air-Gapped Data Center</span>
                </div>
              </div>
              <p className="text-base mb-8 leading-relaxed" style={{ color: "#546B41", opacity: 0.9 }}>
                Complete data sovereignty for banking, healthcare, and government sectors. Installed inside your own private hardware or VPC.
              </p>
              <ul className="space-y-4 text-sm font-medium mb-10">
                {[
                  "100% data residency inside your servers",
                  "Perpetual or multi-year enterprise licensing",
                  "Air-gapped & zero external telemetry mode",
                  "Dedicated annual maintenance & support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(84, 107, 65, 0.1)" }}>
                      <FiCheck style={{ color: "#546B41" }} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={onOpenDemo}
              className="w-full py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90 shadow-md"
              style={{ backgroundColor: "#546B41", color: "#FFF8EC" }}
            >
              Schedule On-Premises Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtoEnterprise;

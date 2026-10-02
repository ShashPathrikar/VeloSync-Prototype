import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const ProtoRoiCalc = ({ onOpenDemo }) => {
  const [users, setUsers] = useState(25);
  const [plan, setPlan] = useState("all-in-one");

  const competitorPerUserMo = 120;
  const velosynqPerUserMo = plan === "all-in-one" ? 25 : 15;

  const competitorAnnual = users * competitorPerUserMo * 12;
  const velosynqAnnual = users * velosynqPerUserMo * 12;
  const annualSavings = competitorAnnual - velosynqAnnual;
  const savingsPct = Math.round((annualSavings / competitorAnnual) * 100);

  return (
    <section id="roi-calculator" className="py-24 md:py-32" style={{ backgroundColor: "#FFF8EC" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{ borderColor: "#DCCCAC", backgroundColor: "rgba(220, 204, 172, 0.2)" }}>
            <span className="font-semibold text-xs tracking-widest uppercase" style={{ color: "#546B41" }}>
              Interactive Value Estimator
            </span>
          </div>
          <h2 className="font-['FoundersGrotesk'] text-5xl md:text-7xl uppercase tracking-tight leading-none" style={{ color: "#2C2C2C" }}>
            Calculate Your True Savings
          </h2>
          <p className="text-base mt-6 max-w-xl" style={{ color: "#546B41", opacity: 0.9 }}>
            See how much your organization saves by replacing per-seat software stacks with VeloSynq.
          </p>
        </div>

        {/* Calculator panel */}
        <div className="max-w-5xl mx-auto rounded-3xl border shadow-xl overflow-hidden" style={{ borderColor: "#DCCCAC", backgroundColor: "white" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Controls */}
            <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r" style={{ borderColor: "#DCCCAC" }}>
              <label className="block text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#99AD7A" }}>
                Team Size
              </label>
              <div className="font-['FoundersGrotesk'] text-7xl mb-2" style={{ color: "#2C2C2C" }}>{users}</div>
              <p className="text-sm font-medium tracking-wide mb-8" style={{ color: "#546B41" }}>Members</p>

              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={users}
                onChange={(e) => setUsers(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer mb-12"
                style={{
                  background: `linear-gradient(to right, #546B41 ${((users - 5) / (500 - 5)) * 100}%, #DCCCAC 0%)`,
                }}
              />

              <label className="block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#99AD7A" }}>
                Platform Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { key: "all-in-one", label: "Complete 4-App Suite" },
                  { key: "custom", label: "Core Tools Only" },
                ].map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setPlan(opt.key)}
                    className={`p-4 rounded-2xl border text-sm font-semibold transition-all duration-200 ${
                      plan === opt.key
                        ? "shadow-sm"
                        : "hover:bg-opacity-50"
                    }`}
                    style={{
                      borderColor: plan === opt.key ? "#546B41" : "#DCCCAC",
                      backgroundColor: plan === opt.key ? "#546B41" : "transparent",
                      color: plan === opt.key ? "#FFF8EC" : "#546B41"
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t" style={{ borderColor: "rgba(220, 204, 172, 0.4)" }}>
                {["Includes SprintSynq + DocSynq + CMS + CRM", "No hidden per-seat licensing tiers"].map((note) => (
                  <div key={note} className="flex items-center gap-3 text-sm font-medium" style={{ color: "#546B41" }}>
                    <span style={{ color: "#99AD7A" }}>→</span>
                    {note}
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="p-10 md:p-12 flex flex-col justify-between" style={{ backgroundColor: "#2C2C2C", color: "#FFF8EC" }}>
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest block mb-4" style={{ color: "#DCCCAC" }}>
                  Estimated Annual Savings
                </span>
                <span className="font-['FoundersGrotesk'] text-7xl md:text-8xl leading-none block mb-4" style={{ color: "#FFF8EC" }}>
                  ${annualSavings.toLocaleString()}
                </span>
                <span className="text-sm font-medium tracking-wide block mb-10" style={{ color: "#99AD7A" }}>
                  Save ~{savingsPct}% vs Jira + Salesforce stack
                </span>

                <div className="border-t pt-8 grid grid-cols-2 gap-6 mb-10" style={{ borderColor: "rgba(255, 248, 236, 0.1)" }}>
                  <div>
                    <span className="block font-['FoundersGrotesk'] text-4xl line-through mb-1" style={{ color: "rgba(255, 248, 236, 0.4)" }}>
                      ${competitorAnnual.toLocaleString()}
                    </span>
                    <span className="text-sm font-medium tracking-wider" style={{ color: "#99AD7A" }}>Legacy Stack</span>
                  </div>
                  <div>
                    <span className="block font-['FoundersGrotesk'] text-4xl mb-1" style={{ color: "#DCCCAC" }}>
                      ${velosynqAnnual.toLocaleString()}
                    </span>
                    <span className="text-sm font-medium tracking-wider" style={{ color: "#99AD7A" }}>VeloSynq Cost</span>
                  </div>
                </div>

                {/* Savings bar */}
                <div className="mb-10">
                  <div className="h-2 rounded-full w-full" style={{ backgroundColor: "rgba(255, 248, 236, 0.1)" }}>
                    <div
                      className="h-full rounded-full transition-all duration-500 shadow-sm"
                      style={{ width: `${savingsPct}%`, backgroundColor: "#99AD7A" }}
                    />
                  </div>
                  <div className="flex justify-between text-xs font-semibold mt-3 uppercase tracking-wider" style={{ color: "#DCCCAC", opacity: 0.8 }}>
                    <span>0%</span>
                    <span>{savingsPct}% Savings</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenDemo}
                className="w-full py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-3 shadow-md"
                style={{ backgroundColor: "#DCCCAC", color: "#2C2C2C" }}
              >
                <span>Lock In Pricing</span>
                <FiArrowRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtoRoiCalc;

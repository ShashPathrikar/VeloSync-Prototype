import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const ProtoFooter = ({ onOpenDemo }) => {
  return (
    <footer className="pt-24 pb-12" style={{ backgroundColor: "#FFF8EC", color: "#2C2C2C", borderTop: "1px solid #DCCCAC" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top CTA strip */}
        <div className="py-16 border-b flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16" style={{ borderColor: "rgba(220, 204, 172, 0.4)" }}>
          <h2 className="font-['FoundersGrotesk'] text-5xl md:text-7xl uppercase leading-none">
            Ready to Accelerate?
          </h2>
          <button
            onClick={onOpenDemo}
            className="flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:-translate-y-1 shadow-md shrink-0"
            style={{ backgroundColor: "#546B41", color: "#FFF8EC" }}
          >
            <span>Schedule Demo</span>
            <FiArrowUpRight className="text-lg" />
          </button>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 pb-16 border-b" style={{ borderColor: "rgba(220, 204, 172, 0.4)" }}>
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg" style={{ backgroundColor: "#546B41", color: "#FFF8EC" }}>
                V
              </div>
              <span className="font-['FoundersGrotesk'] text-3xl uppercase tracking-tight">VeloSynq</span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed mb-6" style={{ color: "#546B41", opacity: 0.9 }}>
              Engineering and intelligent automation combining product innovation, platform expertise, and cloud reliability.
            </p>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#99AD7A" }}>
              © {new Date().getFullYear()} VeloSynq Inc.
            </span>
          </div>

          {/* Software Suite */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#99AD7A" }}>Software Suite</h4>
            <ul className="space-y-3 text-sm font-medium" style={{ color: "#546B41" }}>
              <li><a href="#products" className="hover:opacity-70 transition-opacity">SprintSynq · Jira Alt</a></li>
              <li><a href="#products" className="hover:opacity-70 transition-opacity">DocSynq · Confluence Alt</a></li>
              <li><a href="#products" className="hover:opacity-70 transition-opacity">ContentSynq · CMS</a></li>
              <li><a href="#products" className="hover:opacity-70 transition-opacity">ClientSynq · CRM</a></li>
              <li><a href="#products" className="hover:opacity-70 transition-opacity">VeloAnalytics</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#99AD7A" }}>Services & Enterprise</h4>
            <ul className="space-y-3 text-sm font-medium" style={{ color: "#546B41" }}>
              <li><a href="#services" className="hover:opacity-70 transition-opacity">Dedicated Engineering Squads</a></li>
              <li><a href="#services" className="hover:opacity-70 transition-opacity">Cloud Migration & Integration</a></li>
              <li><a href="#services" className="hover:opacity-70 transition-opacity">Intelligent Automations</a></li>
              <li><a href="#enterprise" className="hover:opacity-70 transition-opacity">On-Premises VPC Deployments</a></li>
              <li><a href="#roi-calculator" className="hover:opacity-70 transition-opacity">ROI Savings Calculator</a></li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#99AD7A" }}>Quick Switch</h4>
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: "#546B41" }}>
                ← Classic Website
              </Link>
              <button
                onClick={onOpenDemo}
                className="text-sm font-bold hover:opacity-70 transition-opacity text-left"
                style={{ color: "#2C2C2C" }}
              >
                Book a Demo →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#99AD7A" }}>
            Dual-Engine Platform · Cloud & On-Premises
          </span>
          <div className="flex items-center gap-8 text-xs font-semibold uppercase tracking-widest" style={{ color: "#546B41" }}>
            <a href="#" className="hover:opacity-70 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Terms</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProtoFooter;

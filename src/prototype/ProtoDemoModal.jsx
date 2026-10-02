import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheckCircle } from "react-icons/fi";

const ProtoDemoModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "dual-engine",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-5 py-4 rounded-xl border text-sm focus:outline-none transition-colors placeholder-opacity-60";
  const labelClass = "block text-sm font-semibold uppercase tracking-widest mb-2";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          className="relative w-full max-w-lg p-10 rounded-3xl shadow-2xl"
          style={{ backgroundColor: "#FFF8EC", color: "#2C2C2C", border: "1px solid #DCCCAC" }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full transition-all"
            style={{ backgroundColor: "rgba(220, 204, 172, 0.3)", color: "#546B41" }}
          >
            <FiX size={20} />
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest block mb-2" style={{ color: "#99AD7A" }}>
                  Architecture Call
                </span>
                <h3 className="font-['FoundersGrotesk'] text-4xl uppercase leading-none mb-3" style={{ color: "#2C2C2C" }}>
                  Request Demo
                </h3>
                <p className="text-sm" style={{ color: "#546B41", opacity: 0.8 }}>
                  Connect with our lead architects to discuss SaaS tools, dedicated squads, or on-premise installation.
                </p>
              </div>

              <div className="space-y-5 mb-8">
                <div>
                  <label className={labelClass} style={{ color: "#546B41" }}>Full Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className={inputClass}
                    style={{ borderColor: "#DCCCAC", backgroundColor: "white", color: "#2C2C2C" }}
                  />
                </div>
                <div>
                  <label className={labelClass} style={{ color: "#546B41" }}>Work Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className={inputClass}
                    style={{ borderColor: "#DCCCAC", backgroundColor: "white", color: "#2C2C2C" }}
                  />
                </div>
                <div>
                  <label className={labelClass} style={{ color: "#546B41" }}>Company & Team Size</label>
                  <input
                    required
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Corp (25 engineers)"
                    className={inputClass}
                    style={{ borderColor: "#DCCCAC", backgroundColor: "white", color: "#2C2C2C" }}
                  />
                </div>
                <div>
                  <label className={labelClass} style={{ color: "#546B41" }}>Primary Interest</label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className={inputClass + " appearance-none cursor-pointer"}
                    style={{ borderColor: "#DCCCAC", backgroundColor: "white", color: "#2C2C2C" }}
                  >
                    <option value="dual-engine">Dual-Engine (SaaS Suite + Squad)</option>
                    <option value="saas-suite">SaaS Software Suite (SprintSynq / DocSynq)</option>
                    <option value="dedicated-squad">Dedicated Engineering Squad Retainer</option>
                    <option value="on-premise">On-Premises / Private VPC Installation</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90 shadow-md"
                style={{ backgroundColor: "#546B41", color: "#FFF8EC" }}
              >
                Confirm Architecture Call
              </button>
            </form>
          ) : (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-4xl mb-6 shadow-sm" style={{ backgroundColor: "#DCCCAC", color: "#546B41" }}>
                <FiCheckCircle />
              </div>
              <h3 className="font-['FoundersGrotesk'] text-4xl uppercase mb-4" style={{ color: "#2C2C2C" }}>Request Received!</h3>
              <p className="text-sm max-w-xs mx-auto mb-8" style={{ color: "#546B41", opacity: 0.9 }}>
                Thank you, {form.name}. Our technical team will reach out within 2 hours with available time slots and demo access.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-sm"
                style={{ backgroundColor: "#2C2C2C", color: "#FFF8EC" }}
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProtoDemoModal;

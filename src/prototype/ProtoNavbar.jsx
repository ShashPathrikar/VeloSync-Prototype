import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const ProtoNavbar = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Dual Engine", href: "#flywheel" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Enterprise", href: "#enterprise" },
    { label: "ROI Calculator", href: "#roi-calculator" },
    { label: "Culture", href: "#culture" },
  ];

  return (
    <header
      style={{
        backgroundColor: scrolled ? "rgba(255,248,236,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid #DCCCAC" : "1px solid transparent",
      }}
      className="fixed top-0 left-0 w-full z-[100] transition-all duration-400 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between py-4">
        {/* Brand */}
        <Link to="/prototype" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#FFF8EC] font-bold text-lg transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundColor: "#546B41" }}
          >
            V
          </div>
          <span
            className="font-['FoundersGrotesk'] text-2xl tracking-tight uppercase font-semibold"
            style={{ color: "#2C2C2C" }}
          >
            VeloSynq
          </span>
          <span
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium"
            style={{ backgroundColor: "#DCCCAC", color: "#546B41" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#546B41" }}
            />
            Dual-Engine
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
              style={{ color: "#546B41" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            to="/"
            className="text-xs font-medium transition-colors"
            style={{ color: "#99AD7A" }}
          >
            Classic View
          </Link>
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:-translate-y-px shadow-sm"
            style={{ backgroundColor: "#546B41", color: "#FFF8EC" }}
          >
            Request Demo
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onOpenDemo}
            className="px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{ backgroundColor: "#546B41", color: "#FFF8EC" }}
          >
            Demo
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg transition-colors"
            style={{ color: "#546B41" }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "#FFF8EC", borderTop: "1px solid #DCCCAC" }}
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-3 border-b transition-colors"
                  style={{ color: "#546B41", borderColor: "#DCCCAC" }}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
                  className="w-full py-3 rounded-xl text-sm font-semibold"
                  style={{ backgroundColor: "#546B41", color: "#FFF8EC" }}
                >
                  Book a Demo
                </button>
                <Link to="/" className="text-center text-xs" style={{ color: "#99AD7A" }}>
                  ← Back to Classic Website
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default ProtoNavbar;

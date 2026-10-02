import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCode, FiLayers, FiRefreshCw } from "react-icons/fi";

const ProtoInteractiveDiagram = () => {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: "squads",
      title: "Engineering Squads",
      subtitle: "Immediate Impact & Field Insights",
      icon: <FiCode />,
      position: "left", // Visual hint
      description: "Our dedicated squads embed directly into your company, solving complex technical challenges while discovering patterns and friction points in modern enterprise workflows.",
      color: "#546B41"
    },
    {
      id: "flywheel",
      title: "The Flywheel Effect",
      subtitle: "Continuous Value Loop",
      icon: <FiRefreshCw />,
      position: "center",
      description: "Insights from the field directly inform our product roadmap. In return, our squads use these powerful SaaS tools to accelerate their own delivery, shipping your custom features 3x faster.",
      color: "#99AD7A"
    },
    {
      id: "saas",
      title: "SaaS Platform",
      subtitle: "Scalable Compounding Value",
      icon: <FiLayers />,
      position: "right",
      description: "We distill our field insights into enterprise-grade software products (like SprintSynq and DocSynq) that replace legacy bloatware, providing high-margin, scalable solutions for all clients.",
      color: "#DCCCAC"
    }
  ];

  return (
    <section className="relative py-28 md:py-40 overflow-hidden flex flex-col items-center justify-center" style={{ backgroundColor: "#FFF8EC" }}>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-24">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px" style={{ backgroundColor: "#DCCCAC" }} />
          <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "#546B41" }}>
            The Dual-Engine Synergy
          </span>
          <div className="w-12 h-px" style={{ backgroundColor: "#DCCCAC" }} />
        </div>
        <h2 className="font-['FoundersGrotesk'] text-4xl md:text-6xl uppercase leading-none tracking-tight" style={{ color: "#2C2C2C" }}>
          How insights become architecture
        </h2>
        <p className="text-sm font-medium tracking-wide mt-6" style={{ color: "#546B41", opacity: 0.8 }}>
          Click the nodes below to explore the connection
        </p>
      </div>

      {/* Interactive Abstract Diagram */}
      <div className="relative w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 h-auto md:h-[400px]">
        
        {/* Background flowing lines (SVG) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice">
            <motion.path
              d="M 250 200 C 400 50, 600 350, 750 200"
              fill="transparent"
              stroke="#DCCCAC"
              strokeWidth="2"
              strokeDasharray="8 8"
              animate={{ strokeDashoffset: [0, -100] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
            <motion.path
              d="M 250 200 C 400 350, 600 50, 750 200"
              fill="transparent"
              stroke="rgba(84, 107, 65, 0.2)"
              strokeWidth="2"
              strokeDasharray="8 8"
              animate={{ strokeDashoffset: [0, 100] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
          </svg>
        </div>

        {/* Nodes */}
        {nodes.map((node, index) => {
          const isActive = activeNode === node.id;
          const isFaded = activeNode !== null && !isActive;

          return (
            <div 
              key={node.id} 
              className={`relative z-10 flex flex-col items-center cursor-pointer transition-all duration-500 md:absolute ${
                node.position === "left" ? "md:left-[15%]" : 
                node.position === "right" ? "md:right-[15%]" : 
                "md:left-1/2 md:-translate-x-1/2"
              }`}
              style={{
                opacity: isFaded ? 0.3 : 1,
                transform: `scale(${isActive ? 1.05 : 1}) ${node.position === "center" ? "translateX(-50%)" : ""}`
              }}
              onClick={() => setActiveNode(isActive ? null : node.id)}
            >
              {/* Abstract Glass Shape */}
              <div 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center relative backdrop-blur-md transition-all duration-500"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.4)", 
                  border: `1px solid ${isActive ? node.color : "rgba(220, 204, 172, 0.5)"}`,
                  boxShadow: isActive ? `0 20px 40px -10px ${node.color}40` : "0 10px 30px -10px rgba(0,0,0,0.05)"
                }}
              >
                {/* Inner glowing element */}
                <div 
                  className="absolute inset-2 rounded-full opacity-20 blur-xl transition-all duration-500"
                  style={{ backgroundColor: node.color, opacity: isActive ? 0.4 : 0.1 }}
                />
                <div className="text-4xl transition-colors duration-500" style={{ color: isActive ? node.color : "#2C2C2C" }}>
                  {node.icon}
                </div>
              </div>
              
              <span className="mt-6 font-semibold tracking-wide text-sm transition-colors duration-500" style={{ color: isActive ? node.color : "#2C2C2C" }}>
                {node.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Info Card Panel (Glassmorphism) */}
      <div className="w-full max-w-2xl mx-auto px-6 mt-16 md:mt-24 h-48">
        <AnimatePresence mode="wait">
          {activeNode ? (
            <motion.div
              key={activeNode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-3xl backdrop-blur-xl shadow-lg border flex flex-col items-center text-center"
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.6)", 
                borderColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <h3 className="text-xl font-bold mb-2" style={{ color: "#2C2C2C" }}>
                {nodes.find(n => n.id === activeNode)?.title}
              </h3>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: nodes.find(n => n.id === activeNode)?.color }}>
                {nodes.find(n => n.id === activeNode)?.subtitle}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "#546B41", opacity: 0.9 }}>
                {nodes.find(n => n.id === activeNode)?.description}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex items-center justify-center text-sm font-medium tracking-wide"
              style={{ color: "#99AD7A", opacity: 0.6 }}
            >
              Select a node to reveal insights.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};

export default ProtoInteractiveDiagram;

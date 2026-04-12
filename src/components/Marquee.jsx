import React from "react";
import { useContent } from "../context/ContentContext";

const ROW1 = ["VeloSynq", "SprintSynq", "DocSynq", "ContentSynq", "ClientSynq"];
const ROW2 = ["Project Management", "Team Documentation", "Content Management", "CRM & Sales", "Business Analytics", "Affordable SaaS"];

const Marquee = () => {
  const { content } = useContent();
  const marqueeBgColor = (content && content.marqueeBgColor) || (content && content.primaryColor) || '#004d43';

  return (
    <div
      className="relative z-10 w-full py-14 md:py-20 md:mt-[6vw] rounded-t-3xl overflow-hidden"
      style={{ backgroundColor: marqueeBgColor }}
    >
      <style>{`
        @keyframes mq-left  { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
        @keyframes mq-right { from { transform: translateX(-50%); } to { transform: translateX(0); }    }
        .mq-track-left  { display:flex; width:max-content; animation: mq-left  38s linear infinite; will-change:transform; }
        .mq-track-right { display:flex; width:max-content; animation: mq-right 30s linear infinite; will-change:transform; }
      `}</style>

      {/* Top rule */}
      <div className="border-t border-white/15 mb-10" />

      {/* Row 1 — product names, scrolls left */}
      <div className="overflow-hidden mb-4">
        <div className="mq-track-left">
          {[0, 1].map(i => (
            <div key={i} className="flex items-center shrink-0">
              {ROW1.map((name, j) => (
                <React.Fragment key={j}>
                  <span className="font-['FoundersGrotesk'] uppercase text-[9vw] md:text-[5vw] text-white leading-none whitespace-nowrap px-[3vw] md:px-[2.5vw]">
                    {name}
                  </span>
                  <span className="text-white/25 text-[4vw] md:text-[2vw] leading-none">◆</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — feature keywords, scrolls right */}
      <div className="overflow-hidden">
        <div className="mq-track-right">
          {[0, 1].map(i => (
            <div key={i} className="flex items-center shrink-0">
              {ROW2.map((label, j) => (
                <React.Fragment key={j}>
                  <span className="font-['NeueMontrealLight'] uppercase text-[3.5vw] md:text-[1.2vw] text-white/45 leading-none tracking-widest whitespace-nowrap px-[4vw] md:px-[3vw]">
                    {label}
                  </span>
                  <span className="text-white/20 text-[2.5vw] md:text-[1vw] leading-none">—</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="border-b border-white/15 mt-10" />
    </div>
  );
};

export default Marquee;

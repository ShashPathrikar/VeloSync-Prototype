import React, { useState, useEffect } from "react";
import ProtoSEO from "./ProtoSEO";
import ProtoNavbar from "./ProtoNavbar";
import ProtoHero from "./ProtoHero";
import ProtoMarquee from "./ProtoMarquee";
import ProtoAbout from "./ProtoAbout";
import ProtoFlywheel from "./ProtoFlywheel";
import ProtoInteractiveDiagram from "./ProtoInteractiveDiagram";
import ProtoProducts from "./ProtoProducts";
import ProtoServices from "./ProtoServices";
import ProtoEnterprise from "./ProtoEnterprise";
import ProtoCulture from "./ProtoCulture";
import ProtoDemoModal from "./ProtoDemoModal";
import ProtoFooter from "./ProtoFooter";
import CursorSpotlight from "./CursorSpotlight";

const PrototypePage = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Hide the browser scrollbar while on this page, restore on leave
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "proto-no-scrollbar";
    style.textContent = `
      html::-webkit-scrollbar { display: none !important; }
      html { scrollbar-width: none !important; -ms-overflow-style: none !important; }
    `;
    document.head.appendChild(style);
    return () => {
      document.getElementById("proto-no-scrollbar")?.remove();
    };
  }, []);

  return (
    <div
      className="proto-cursor-wrap w-full min-h-[100dvh] font-['NeueMontreal'] overflow-x-hidden selection:bg-[#546B41] selection:text-[#FFF8EC]"
      style={{ backgroundColor: "#FFF8EC", color: "#2C2C2C" }}
    >
      <CursorSpotlight />
      <ProtoSEO />
      <ProtoNavbar onOpenDemo={() => setDemoModalOpen(true)} />
      <main>
        <ProtoHero onOpenDemo={() => setDemoModalOpen(true)} />
        <ProtoMarquee />
        <ProtoAbout onOpenDemo={() => setDemoModalOpen(true)} />
        <ProtoFlywheel onOpenDemo={() => setDemoModalOpen(true)} />
        <ProtoInteractiveDiagram />
        <ProtoProducts onOpenDemo={() => setDemoModalOpen(true)} />
        <ProtoServices onOpenDemo={() => setDemoModalOpen(true)} />
        <ProtoEnterprise onOpenDemo={() => setDemoModalOpen(true)} />
        <ProtoCulture />
      </main>
      <ProtoFooter onOpenDemo={() => setDemoModalOpen(true)} />
      <ProtoDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
};

export default PrototypePage;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const el = aboutRef.current;
    gsap.fromTo(
      el,
      { yPercent: 6 },
      {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top top",
          scrub: 1.5,
        },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={aboutRef}
      id="about"
      className="relative z-20 w-full py-12 md:py-20 bg-[#f4f4f0] rounded-t-3xl text-zinc-900 -mt-[12vw]"
    >
      {/* Section label */}
      <div className="px-5 md:px-[5.922vw] mb-6">
        <p className="font-['NeueMontrealLight'] text-[3vw] md:text-[1vw] uppercase tracking-widest" style={{ color: "#004d43" }}>
          / About VeloSynq
        </p>
      </div>

      {/* Hero text */}
      <div className="px-5 md:px-[5.922vw]">
        <p className="text-[7vw] md:text-[3.2vw] leading-tight md:leading-none w-full text-zinc-900">
          Why should only big corporations afford the tools that make teams productive?
          VeloSynq gives every small business the same enterprise-grade software —
          at a price that actually makes sense.
        </p>
      </div>

      {/* Details row */}
      <div className="w-full border-y border-zinc-200 mt-8 md:mt-12 px-5 md:px-[5.922vw] font-['NeueMontreal'] text-[4vw] md:text-[1.3vw] py-6 md:py-10">
        <div className="flex flex-col md:flex-row gap-7 md:gap-10 pt-4 pb-12 md:pb-28">
          <div className="md:basis-[25vw] lg:basis-[50vw] text-zinc-500">
            The platform:
          </div>
          <div className="flex flex-col basis-[25vw] w-full md:w-[70vw] gap-4 md:gap-3 text-zinc-500">
            <span>
              The tools that power the world's best teams were never designed with small
              business budgets in mind. Per-seat pricing, annual contracts, and enterprise
              tiers add up fast — often into thousands every month. VeloSynq changes
              that equation entirely.
            </span>
            <span>
              VeloSynq is a complete SaaS suite — <strong className="text-zinc-700">SprintSynq</strong> for project management,{" "}
              <strong className="text-zinc-700">DocSynq</strong> for team documentation,{" "}
              <strong className="text-zinc-700">ContentSynq</strong> for content management, and{" "}
              <strong className="text-zinc-700">ClientSynq</strong> for customer relationships.
              Everything your organisation needs, under one roof.
            </span>
            <span>
              Founded in Pune by Harikrishna and Nihal, VeloSynq was born from the frustration
              of watching talented small business teams struggle between expensive enterprise
              software and inadequate free alternatives. Every business deserves access to
              powerful, reliable, and beautiful tools.
            </span>
          </div>
          <div className="flex flex-col basis-[25vw] justify-end md:pl-40 text-zinc-500 mt-6 md:mt-0">
            <span className="mb-3 text-zinc-900 font-semibold">Follow:</span>
            <a href="https://twitter.com/velosynq" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors duration-200 cursor-pointer">Twitter / X</a>
            <a href="https://github.com/velosynq" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors duration-200 cursor-pointer">GitHub</a>
            <a href="https://linkedin.com/company/velosynq" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors duration-200 cursor-pointer">LinkedIn</a>
            <a href="https://producthunt.com/products/velosynq" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors duration-200 cursor-pointer">Product Hunt</a>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col lg:flex-row gap-7 md:gap-10 px-5 md:px-[3.922vw] mt-8 justify-between items-start">
        <div className="flex flex-col gap-4 items-start">
          <h3 className="text-[7vw] md:text-[4vw] text-zinc-900">Our mission:</h3>
          <p className="font-['NeueMontrealLight'] text-zinc-500 text-[4vw] md:text-[1.2vw] max-w-[90vw] md:max-w-[30vw] leading-relaxed">
            Democratise enterprise software. Give every small business the competitive
            advantage that was previously reserved for large corporations.
          </p>
          <button className="mt-2 px-6 py-4 rounded-full text-[4vw] md:text-[1.184vw] flex gap-7 items-center justify-between bg-[#004d43] border border-[#004d43] text-white hover:bg-zinc-900 hover:border-zinc-900 transition-all duration-300">
            <span>REQUEST A DEMO</span>
            <div className="w-2 h-2 rounded-full bg-current"></div>
          </button>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-full md:w-[500px] mt-6 md:mt-0">
          {[
            { label: "Products", value: "4", sub: "in one platform" },
            { label: "Cheaper than Jira", value: "80%", sub: "average savings" },
            { label: "Free to start", value: "$0", sub: "no credit card needed" },
            { label: "Support", value: "24/7", sub: "for all customers" },
          ].map((stat) => (
            <div key={stat.label} className="border border-zinc-200 rounded-2xl p-5 flex flex-col gap-1">
              <span className="font-['FoundersGrotesk'] text-[8vw] md:text-[3vw] leading-none text-zinc-900">{stat.value}</span>
              <span className="font-['NeueMontrealLight'] text-zinc-900 text-[3vw] md:text-[1.1vw] font-semibold">{stat.label}</span>
              <span className="font-['NeueMontrealLight'] text-zinc-400 text-[3vw] md:text-[0.9vw]">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

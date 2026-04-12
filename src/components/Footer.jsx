import React from 'react';
import { useContent } from "../context/ContentContext";

const Footer = ({ variant = 'white', bgColor }) => {
  const isGreen = variant === 'green';
  const { content } = useContent ? useContent() : { content: null };
  const footerBg = bgColor || (isGreen ? (content && content.primaryColor) || '#004d43' : '#fff');
  const borderColor = isGreen ? ((content && content.primaryColor) || '#004d43') : '#e5e7eb';
  return (
    <div id="contact" data-scroll data-scroll-section className={`flex flex-col justify-between px-5 md:px-[3.922vw] py-8 md:py-10 w-full min-h-screen md:h-screen overflow-hidden`} style={{ background: footerBg, borderTop: `1px solid ${borderColor}`, position: 'sticky', top: 0, zIndex: 30 }}>
        {/* Desktop layout */}
        <div className='hidden md:flex flex-row items-start justify-between flex-1 min-h-0'>
      <div className='w-1/2 flex flex-col justify-between'>
        <div>
          <h1 className={`font-['FoundersGrotesk'] leading-[7vw] uppercase text-[9vw] ${isGreen ? 'text-white' : 'text-zinc-900'}`}>SHIP</h1>
          <h1 className={`font-['FoundersGrotesk'] leading-[7vw] uppercase text-[9vw] ${isGreen ? 'text-white' : 'text-zinc-900'}`}>FASTER</h1>
        </div>
      </div>
      <div className='w-1/2'>
        <div className='flex flex-col gap-10'>
          <h1 className={`font-['FoundersGrotesk'] leading-[7vw] uppercase text-[9vw] ${isGreen ? 'text-white' : 'text-zinc-900'}`}>SCALE SMARTER</h1>
          <div className='flex flex-col gap-1'>
            <span className={`mb-3 text-xs uppercase tracking-widest font-["NeueMontrealLight"] ${isGreen ? 'text-zinc-300' : 'text-zinc-400'}`}>Follow</span>
            <a href="https://twitter.com/velosynq" target="_blank" rel="noopener noreferrer" className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"]`}>Twitter / X</a>
            <a href="https://github.com/velosynq" target="_blank" rel="noopener noreferrer" className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"]`}>GitHub</a>
            <a href="https://linkedin.com/company/velosynq" target="_blank" rel="noopener noreferrer" className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"]`}>LinkedIn</a>
            <a href="https://producthunt.com/products/velosynq" target="_blank" rel="noopener noreferrer" className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"]`}>Product Hunt</a>
          </div>
          <div className='flex flex-row items-start justify-between pr-7'>
            <div className='flex flex-col gap-1'>
              <span className={`mb-3 text-xs uppercase tracking-widest font-["NeueMontrealLight"] ${isGreen ? 'text-zinc-300' : 'text-zinc-400'}`}>HQ</span>
              <span className={`${isGreen ? 'text-zinc-300' : 'text-zinc-500'} font-["NeueMontrealLight"]`}>Pune, Maharashtra</span>
              <span className={`${isGreen ? 'text-zinc-300' : 'text-zinc-500'} font-["NeueMontrealLight"]`}>India</span>
              <span className={`mt-2 ${isGreen ? 'text-zinc-300' : 'text-zinc-500'} font-["NeueMontrealLight"]`}>Remote-First Team</span>
              <span className={`${isGreen ? 'text-zinc-300' : 'text-zinc-500'} font-["NeueMontrealLight"]`}>Global Support</span>
            </div>
            <div className='flex flex-col gap-1'>
              <span className={`mb-3 text-xs uppercase tracking-widest font-["NeueMontrealLight"] ${isGreen ? 'text-zinc-300' : 'text-zinc-400'}`}>Products</span>
              <span className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"]`}>SprintSynq</span>
              <span className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"]`}>DocSynq</span>
              <span className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"]`}>ContentSynq</span>
              <span className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"]`}>ClientSynq</span>
              <span className={`mt-3 ${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"]`}>Pricing</span>
              <span className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"]`}>Contact</span>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <span className={`mb-3 text-xs uppercase tracking-widest font-["NeueMontrealLight"] ${isGreen ? 'text-zinc-300' : 'text-zinc-400'}`}>Email</span>
            <a href="mailto:hello@velosynq.io" className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"]`}>hello@velosynq.io</a>
          </div>
        </div>
      </div>
      </div>

        {/* Mobile layout */}
        <div className='flex flex-col md:hidden flex-1 min-h-0'>
          <div>
            <h1 className={`font-['FoundersGrotesk'] leading-[12vw] uppercase text-[15vw] ${isGreen ? 'text-white' : 'text-zinc-900'}`}>SHIP FASTER</h1>
            <h1 className={`font-['FoundersGrotesk'] leading-[12vw] uppercase text-[15vw] ${isGreen ? 'text-white' : 'text-zinc-900'}`}>SCALE SMARTER</h1>
          </div>
          <div className='grid grid-cols-2 gap-x-6 gap-y-20 mt-14 mb-6'>
            <div className='flex flex-col gap-1'>
              <span className={`mb-2 text-xs uppercase tracking-widest font-["NeueMontrealLight"] ${isGreen ? 'text-zinc-300' : 'text-zinc-400'}`}>Follow</span>
              <a href="https://twitter.com/velosynq" target="_blank" rel="noopener noreferrer" className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"] text-sm`}>Twitter / X</a>
              <a href="https://github.com/velosynq" target="_blank" rel="noopener noreferrer" className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"] text-sm`}>GitHub</a>
              <a href="https://linkedin.com/company/velosynq" target="_blank" rel="noopener noreferrer" className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"] text-sm`}>LinkedIn</a>
              <a href="https://producthunt.com/products/velosynq" target="_blank" rel="noopener noreferrer" className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"] text-sm`}>Product Hunt</a>
            </div>
            <div className='flex flex-col gap-1'>
              <span className={`mb-2 text-xs uppercase tracking-widest font-["NeueMontrealLight"] ${isGreen ? 'text-zinc-300' : 'text-zinc-400'}`}>Products</span>
              <span className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"] text-sm`}>SprintSynq</span>
              <span className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"] text-sm`}>DocSynq</span>
              <span className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"] text-sm`}>ContentSynq</span>
              <span className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"] text-sm`}>ClientSynq</span>
              <span className={`mt-2 ${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"] text-sm`}>Pricing</span>
              <span className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"] text-sm`}>Contact</span>
            </div>
            <div className='flex flex-col gap-1 col-span-2'>
              <span className={`mb-2 text-xs uppercase tracking-widest font-["NeueMontrealLight"] ${isGreen ? 'text-zinc-300' : 'text-zinc-400'}`}>Email</span>
              <a href="mailto:hello@velosynq.io" className={`${isGreen ? 'text-zinc-300 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'} transition-colors duration-200 cursor-pointer font-["NeueMontrealLight"] text-sm`}>hello@velosynq.io</a>
            </div>
            <div className='flex flex-col gap-1 col-span-2'>
              <span className={`mb-2 text-xs uppercase tracking-widest font-["NeueMontrealLight"] ${isGreen ? 'text-zinc-300' : 'text-zinc-400'}`}>HQ</span>
              <span className={`${isGreen ? 'text-zinc-300' : 'text-zinc-500'} font-["NeueMontrealLight"] text-sm`}>Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>
      <div className={`flex flex-col md:flex-row mt-8 md:mt-10 border-t ${isGreen ? 'border-white/20' : 'border-zinc-200'} pt-4 md:pt-6 gap-4 md:gap-0`}>
        <div className='w-full md:w-1/2'>
          <div className={`text-xl md:text-2xl font-bold font-['FoundersGrotesk'] ${isGreen ? 'text-white' : 'text-zinc-900'}`}>VeloSynq</div>
        </div>
        <div className={`w-full md:w-1/2 flex flex-col md:flex-row items-start md:items-center justify-between text-xs md:text-sm font-["NeueMontrealLight"] gap-2 ${isGreen ? 'text-zinc-300' : 'text-zinc-400'}`}>
            <div>© VeloSynq 2025. All rights reserved.</div>
            <div>Affordable SaaS for Small Businesses</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";

const SplitPortraitHero = () => {
  // Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const portraitVars = {
    initial: { opacity: 0, scale: 0.98, y: 10 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-x-hidden bg-[#0a0a0a] text-neutral-50 flex flex-col items-center"
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10 w-full max-w-7xl px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-20 pt-28 pb-12 lg:py-0 lg:h-screen"
      >
        {/* Left Content Side */}
        <div className="w-full flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
          <motion.div variants={fadeInUp} className="flex flex-col space-y-2">
            <span className="text-[0.6rem] md:text-[0.65rem] font-mono uppercase tracking-[0.4em] text-emerald-500/80 mb-2 block">
              Coffee ． Code ． Create
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light tracking-tight leading-[1.1] lg:leading-[1.1]">
              Designer <span className="text-neutral-500 italic">by craft</span>
              <br />
              Developer <span className="text-neutral-200 font-medium">by code</span>
            </h1>
            <p className="pt-1 text-[0.65rem] md:text-[0.7rem] text-neutral-500 tracking-[0.3em] uppercase font-mono">
              Based Dubai, UAE
            </p>
          </motion.div>

          <motion.p 
            variants={fadeInUp}
            className="max-w-md mx-auto lg:mx-0 text-neutral-400 font-light leading-relaxed text-sm md:text-base lg:border-l lg:border-neutral-800 lg:pl-6"
          >
            I build quiet, intentional, and fast interfaces — from landing pages and dashboards to complete product experiences.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
            <div className="flex items-center gap-3 text-[0.65rem] md:text-[0.7rem] font-mono tracking-[0.2em]">
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-neutral-300 backdrop-blur-md">
                <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                </span>
                Available for work
              </span>
            </div>
            
            <div className="flex gap-4 items-center text-[0.6rem] md:text-[0.65rem] font-mono text-neutral-500 uppercase tracking-widest">
              <div className="flex gap-4 items-center text-[0.6rem] md:text-[0.65rem] font-mono text-neutral-500 uppercase tracking-widest">
                <a 
                  href="https://www.linkedin.com/in/inaam-ahamed-2817b836a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  LinkedIn
                </a>
                <span className="w-1 h-1 bg-neutral-800 rounded-full" />
                <a 
                  href="https://github.com/InaamJr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Github
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Portrait Side - Reduced size for smaller heights */}
        <motion.div 
          variants={portraitVars}
          className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[420px] aspect-[4/5] group mx-auto lg:mx-0"
        >
          <div className="absolute -inset-3 border border-neutral-800/30 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-700" />
          
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl ring-1 ring-white/5">
            <img
              src="/images/Hero_6.1.png"
              alt="Inaam Jr"
              className="h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-[1.02] group-hover:scale-100"
            />
            {/* Minimal Portrait Info */}
            <div className="absolute bottom-4 left-4 z-20">
              <p className="text-[0.55rem] font-mono uppercase tracking-[0.3em] text-white/50">
                INAAM.JR // 2026
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modern Stack Meta Footer - Responsive Flow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="w-full max-w-7xl px-6 lg:px-12 mt-8 mb-10 lg:mt-0 lg:mb-0 lg:absolute lg:bottom-10 z-20 flex flex-col md:flex-row justify-between items-center gap-6 text-[0.55rem] md:text-[0.6rem] font-mono uppercase tracking-[0.2em] text-neutral-600"
      >
        <div className="flex gap-6 md:gap-10">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-neutral-800 mb-0.5">Stack</span>
            <span className="text-neutral-500">React / Node / Tailwind</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-neutral-800 mb-0.5">Focus</span>
            <span className="text-neutral-500">Interfaces / Motion</span>
          </div>
        </div>
        
        <div className="hidden lg:block h-px flex-1 mx-12 bg-neutral-900" />

        <div className="text-center md:text-right">
          <span className="text-neutral-800">Local Time</span>
          <p className="text-neutral-500">Dubai, UAE // {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
        </div>
      </motion.div>

      {/* Subtle bottom name overlay - much cleaner */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 select-none overflow-hidden opacity-[0.03]">
        <p className="text-[12vw] leading-none font-bold text-white whitespace-nowrap text-center translate-y-1/2">
          INAAM JR INAAM JR INAAM JR
        </p>
      </div>
    </section>
  );
};

export default SplitPortraitHero;
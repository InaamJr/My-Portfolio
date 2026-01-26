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

  const fadeInRight = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const portraitVars = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
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
      className="relative w-full h-screen overflow-hidden bg-[#0a0a0a] text-neutral-50 flex flex-col justify-center items-center"
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10 w-full max-w-7xl px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
      >
        {/* Left Content Side */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <motion.div variants={fadeInRight} className="flex flex-col space-y-2">
            <span className="text-[0.65rem] font-mono uppercase tracking-[0.4em] text-emerald-500/80 mb-2 block">
              Coffee ． Code ． Create
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
              Designer <span className="text-neutral-500 italic">by craft</span>
              <br />
              Developer <span className="text-neutral-200 font-medium">by code</span>
            </h1>
            <p className="pt-2 text-[0.7rem] text-neutral-500 tracking-[0.3em] uppercase font-mono">
              Based Dubai, UAE
            </p>
          </motion.div>

          <motion.p 
            variants={fadeInRight}
            className="max-w-md mx-auto lg:mx-0 text-neutral-400 font-light leading-relaxed text-sm sm:text-base border-l-0 lg:border-l border-neutral-800 lg:pl-6"
          >
            I build quiet, intentional, and fast interfaces — from landing pages and dashboards to complete product experiences.
          </motion.p>

          <motion.div variants={fadeInRight} className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
            <div className="flex items-center gap-3 text-[0.7rem] font-mono tracking-[0.2em]">
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-neutral-300 backdrop-blur-md">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                </span>
                Available for work
              </span>
            </div>
            
            <div className="flex gap-4 items-center text-[0.65rem] font-mono text-neutral-500">
              <span className="hover:text-white transition-colors cursor-pointer uppercase tracking-widest">Twitter</span>
              <span className="w-1 h-1 bg-neutral-800 rounded-full" />
              <span className="hover:text-white transition-colors cursor-pointer uppercase tracking-widest">Github</span>
            </div>
          </motion.div>
        </div>

        {/* Right Portrait Side - Reduced Size & More Minimal */}
        <motion.div 
          variants={portraitVars}
          className="relative w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px] aspect-[4/5] group"
        >
          {/* Decorative frame elements */}
          <div className="absolute -inset-4 border border-neutral-800/50 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute -inset-px border border-neutral-700/30 rounded-2xl z-20 pointer-events-none" />
          
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl shadow-black/50">
            <img
              src="/images/Hero_6.1.png"
              alt="Inaam Jr"
              className="h-full w-full object-cover transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
            />

            {/* Subtle Info Overlay on Image */}
            <div className="absolute bottom-6 left-6 z-20 overflow-hidden">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-[0.6rem] font-mono uppercase tracking-[0.3em] text-white/70"
              >
                INAAM.JR // DEV.26
              </motion.div>
            </div>
          </div>

          {/* Abstract geometric touch */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/5 blur-[80px] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Modern Stack Meta Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 w-full max-w-7xl px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.6rem] font-mono uppercase tracking-[0.25em] text-neutral-600"
      >
        <div className="hidden lg:flex gap-8">
          <div className="flex flex-col">
            <span className="text-neutral-800 mb-1">Stack</span>
            <span className="text-neutral-500">React / Node / Tailwind</span>
          </div>
          <div className="flex flex-col">
            <span className="text-neutral-800 mb-1">Focus</span>
            <span className="text-neutral-500">Interfaces / Motion</span>
          </div>
        </div>
        
        <div className="hidden md:block h-px flex-1 mx-12 bg-neutral-900" />

        <div className="text-right">
          <span className="text-neutral-800">Local Time</span>
          <p className="text-neutral-500">Dubai, UAE // {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </motion.div>

      {/* Subtle bottom name overlay - much cleaner */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 select-none overflow-hidden h-55 opacity-[0.03]">
        <p className="text-[12vw] leading-none font-bold text-white whitespace-nowrap text-center translate-y-1/2">
          INAAM JR INAAM JR INAAM JR
        </p>
      </div>
    </section>
  );
};

export default SplitPortraitHero;
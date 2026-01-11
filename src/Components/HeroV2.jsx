import React from "react";
import { motion } from "framer-motion";


const SplitPortraitHero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-neutral-950 text-neutral-50"
    >
        {/* Subtle backdrop */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
        >
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.24)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.14)_0,_transparent_55%)]" />
        </div>

        {/* Main shell – now full height on all screens */}
        <div className="relative flex h-full w-full flex-col overflow-hidden shadow-[0_18px_80px_rgba(0,0,0,0.85)] backdrop-blur-sm lg:flex-row">
            {/* Left column: text */}
            <div className="flex flex-1 flex-col px-6 py-8 sm:px-8 lg:px-14">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.24em] text-neutral-400 mb-6 sm:mb-8">
                {/* <span className="text-[0.68rem]">jr.dev</span> */}
                {/* <div className="hidden items-center gap-4 sm:flex">
                    <a href="#about" className="hover:text-neutral-100 cursor-pointer transition-colors">
                        About
                    </a>
                    <a href="#work" className="hover:text-neutral-100 cursor-pointer transition-colors">
                        Work
                    </a>
                    <a href="#contact" className="hover:text-neutral-100 cursor-pointer transition-colors">
                        Contact
                    </a>
                </div> */}
            </div>

            {/* Core content – flex-1 so it sits nicely center-ish on mobile */}
            <div className="flex-1 flex flex-col justify-center space-y-6 sm:space-y-8">
                <div className="space-y-1 text-lg font-mono uppercase tracking-[0.25em]">
                    <p className="text-neutral-400">
                        Designer <span className="text-neutral-500">by craft</span>
                    </p>

                    <p className="text-neutral-400">
                        Developer <span className="text-neutral-100">by code</span>
                    </p>

                    <p className="pt-2 text-[0.66rem] text-neutral-500 tracking-[0.3em]">
                        From Sri Lanka
                    </p>
                </div>


                <div className="space-y-4">
                    <p className="max-w-md text-sm sm:text-base text-neutral-300 font-mono font-light">
                        I build quiet, intentional, and fast interfaces — from landing pages and dashboards to complete product experiences.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-[0.7rem] font-mono tracking-[0.22em]">
                        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700/80 bg-neutral-900/80 px-3 py-1 text-neutral-300">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
                        </span>
                            Available for work
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom meta – sticks towards bottom but still responsive */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[0.68rem] font-mono uppercase tracking-[0.2em] text-neutral-500">
                <div className="space-y-1">
                    <p>Stack: React / Node / Tailwind</p>
                    <p>Focus: Interfaces, systems, motion</p>
                </div>
                {/* <div className="flex flex-col items-start sm:items-end">
                    <p className="text-neutral-400">Currently crafting</p>
                    <p className="text-neutral-200">Portfolio v2025</p>
                </div> */}
            </div>
        </div>

        {/* Right column: portrait (hidden on mobile, shows on lg+) */}
        <div className="hidden lg:flex flex-1 items-end justify-center overflow-hidden bg-neutral-950">
            {/* Slight vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0,_transparent_55%,_rgba(0,0,0,0.7)_100%)]" />

            <img
                src="/images/Hero_6.png"
                alt="Portrait of Jr"
                className="relative z-[1] h-full w-full object-cover object-center drop-shadow-[0_24px_70px_rgba(0,0,0,0.9)] rounded-3xl"
            />

            {/* Subtle corner rounding mask on large screens */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl border-l border-neutral-700/70" />
            </div>

            {/* Oversized name overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-[-0.2em] select-none overflow-hidden px-4 sm:px-12">
                <p className="font-display text-[5.5rem] leading-none text-neutral-200/10 sm:text-[7.2rem] md:text-[7.2rem] lg:text-[7.2rem]">
                    INAAM . JR
                </p>
            </div>
        </div>
    </section>
  );
};

export default SplitPortraitHero;

import React from "react";

const aboutItems = [
  {
    label: "Projects shipped",
    number: 25,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="section relative"
    >
        <div className="container px-4 sm:px-6 lg:px-8">
            <div className="reveal-up mx-auto max-w-5xl overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/70 px-6 py-8 shadow-[0_18px_80px_rgba(0,0,0,0.85)] backdrop-blur-md sm:px-8 sm:py-10 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] lg:gap-10 lg:px-10 lg:py-12">
                {/* Left copy block */}
                <div className="space-y-4 sm:space-y-6">
                    <p className="text-xs font-mono uppercase tracking-[0.24em] text-zinc-500">
                        About
                    </p>
                    <h3 className="text-2xl font-semibold text-zinc-50 sm:text-3xl">
                        Crafting quiet, intentional interfaces.
                    </h3>
                    <p className="text-sm text-zinc-300 sm:text-base font-light">
                        I&apos;m Inaam Ahamed, a full‑stack developer focused on building
                        digital experiences that feel minimal on the surface and
                        powerful underneath. From landing pages and dashboards to
                        custom tools for clients, I care about clean architecture,
                        sharp visuals, and motion that actually adds clarity.
                    </p>
                    <p className="text-sm text-zinc-400 sm:text-[0.95rem]">
                        I work end‑to‑end: designing in Figma, developing in modern
                        stacks, and shipping production‑ready experiences that are
                        performant, maintainable, and easy to grow.
                    </p>
                </div>

                {/* Metrics + mark */}
                <div className="mt-8 flex flex-col justify-between gap-8 lg:mt-0 lg:items-end">
                    <div className="flex w-full flex-wrap gap-6 sm:gap-8 lg:justify-end">
                        {aboutItems.map(({ label, number }) => (
                            <div key={label} className="min-w-[120px]">
                                <div className="flex items-baseline gap-1 justify-end">
                                    <span className="text-3xl font-semibold text-zinc-50 sm:text-4xl">
                                        {number}
                                    </span>
                                    <span className="text-xl font-semibold text-sky-400">
                                        +
                                    </span>
                                </div>
                                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between gap-4 border-t border-zinc-800 pt-4 lg:pt-5">
                        <div className="space-y-1 text-[0.7rem] font-mono uppercase tracking-[0.2em] text-zinc-500">
                            <p>Based in Colombo, Sri Lanka</p>
                            <p>Open to remote collaborations</p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900/80">
                            <img
                                src="/images/IA_logo.svg"
                                alt="Inaam logo"
                                className="h-6 w-6 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;

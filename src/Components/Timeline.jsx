"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";


export const Timeline = ({ data }) => {
  const listRef = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      setHeight(rect.height);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  // small parallax for the ambient glow
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const items = useMemo(() => data ?? [], [data]);

  return (
    <section ref={containerRef} className="relative w-full">
      {/* Ambient background */}
      <div className="hidden lg:flex pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{ y: glowY }}
          className="absolute -inset-24 opacity-40 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(70% 60% at 30% 10%, black 45%, transparent 80%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative w-full md:px-10">
        <div ref={listRef} className="relative pb-14">
          {/* Timeline rail */}
          <div
            style={{ height: height + "px" }}
            className={
              "absolute left-6 md:left-8 top-0 w-[2px] overflow-hidden " +
              "bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-zinc-800 to-transparent " +
              "[mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            }
            aria-hidden="true"
          >
            <motion.div
              style={{ height: heightTransform, opacity: opacityTransform }}
              className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-sky-400 via-violet-400 to-transparent"
            />
          </div>

          {items.map((item, idx) => (
            <TimelineItem key={idx} item={item} index={idx} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
};

function TimelineItem({ item, index, progress }) {
  const y = useTransform(progress, [0, 1], [12, -12]);
  const cardOpacity = useTransform(progress, [0, 0.2], [0.85, 1]);

  return (
    <div className="relative flex justify-start pb-10 md:pt-28 md:gap-10">
      {/* Sticky column */}
      <div className="md:sticky md:top-40 z-30 self-start w-[84px] md:w-[360px]">
        {/* Dot */}
        <div className="absolute left-1.5 md:left-3 top-[10px]">
          <div className="relative grid place-items-center h-10 w-10 rounded-2xl ring-1 ring-inset ring-white/[0.08] bg-zinc-950/40 backdrop-blur-md">
            {/* pulse */}
            <span
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
              aria-hidden="true"
            />
            <motion.span
              className="absolute -inset-3 rounded-3xl blur-xl bg-gradient-to-br from-sky-400/25 via-violet-400/15 to-transparent"
              aria-hidden="true"
              animate={{ opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative h-3.5 w-3.5 rounded-full bg-zinc-950 ring-1 ring-inset ring-white/[0.16]">
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-sky-400 to-violet-400" />
            </div>
          </div>
        </div>

        {/* Desktop meta */}
        <div className="hidden md:flex flex-col gap-2 pl-24">
          <p className="text-xs tracking-[0.35em] uppercase text-zinc-400/80">
            {item.date}
          </p>
          <h3 className="text-[18px] lg:text-[20px] font-medium tracking-wide text-zinc-100">
            {item.title}
          </h3>
          {item.institution ? (
            <p className="font-mono uppercase font-thin text-[12px] tracking-[0.25em] text-zinc-500">
              {item.institution}
            </p>
          ) : null}
        </div>
      </div>

      {/* Content card */}
      <motion.div
        style={{ y, opacity: cardOpacity }}
        className={
          "relative w-full pl-6 pr-2 md:pl-4 md:pr-0"
        }
      >
        <article className="group relative overflow-hidden rounded-3xl ring-1 ring-inset ring-zinc-800/70 bg-zinc-950/40 backdrop-blur-md">
          {/* hover glow */}
          <div
            className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-sky-400/15 via-violet-400/10 to-transparent"
            aria-hidden="true"
          />

          {/* card grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              maskImage:
                "radial-gradient(70% 70% at 30% 10%, black 45%, transparent 78%)",
            }}
            aria-hidden="true"
          />

          <div className="relative p-5 sm:p-6">
            {/* Mobile meta */}
            <div className="md:hidden">
              <p className="text-xs tracking-[0.35em] uppercase text-zinc-400/80">
                {item.date}
              </p>
              <h3 className="mt-2 text-[16px] font-medium tracking-wide text-zinc-100">
                {item.title}
              </h3>
              {item.institution ? (
                <p className="mt-2 font-mono uppercase font-thin text-[11px] tracking-[0.25em] text-zinc-500">
                  {item.institution}
                </p>
              ) : null}
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            {/* Content bullets */}
            <div className="mt-4 md:mt-0 space-y-3">
              {(item.contents || []).map((content, i) => (
                <p key={i} className="text-sm font-extralight leading-relaxed text-zinc-400/95">
                  {content}
                </p>
              ))}
            </div>

            {/* Edge highlight */}
            <div
              className="pointer-events-none mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          </div>
        </article>
      </motion.div>
    </div>
  );
}

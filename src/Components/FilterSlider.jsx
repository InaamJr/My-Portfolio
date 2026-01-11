import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export default function FilterSlider({ items, active, onChange }) {
  const listRef = useRef(null);

  // Keep the active chip in view when it changes
  useEffect(() => {
    const idx = items.findIndex((i) => i === active);
    const el = listRef.current?.querySelector(`[data-idx="${idx}"]`);
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active, items]);

  return (
    <div className="relative">
      {/* edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-zinc-950 to-transparent rounded-l-xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-zinc-950 to-transparent rounded-r-xl" />

      <div
        ref={listRef}
        role="tablist"
        aria-label="Project categories"
        className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-1"
      >
        {items.map((label, idx) => {
          const selected = label === active;
          return (
            <button
              key={label}
              data-idx={idx}
              role="tab"
              aria-selected={selected}
              onClick={() => onChange(label)}
              className={[
                "shrink-0 snap-start px-4 h-10 rounded-full",
                "backdrop-blur-xl bg-white/5 hover:bg-white/10 active:bg-white/15",
                "ring-1 ring-white/10 text-sm transition",
                selected
                  ? "ring-sky-400/60 bg-white/10 text-white"
                  : "text-zinc-300",
              ].join(" ")}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

FilterSlider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

import { useEffect, useState } from "react";
import PropTypes from "prop-types";


const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< Hello World />";

  useEffect(() => {
    // Disable scroll while loader is visible
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index += 1;

      if (index > fullText.length) {
        clearInterval(interval);

        // Small pause before completing
        const timeout = setTimeout(() => {
          onComplete();
        }, 900);

        return () => clearTimeout(timeout);
      }
    }, 90);

    return () => {
      document.body.style.overflow = previousOverflow || "auto";
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-zinc-100">
        <div className="flex flex-col items-center gap-8">
            {/* Orbital loader */}
            <div className="relative flex flex-col items-center gap-4">
            <div className="relative flex items-center justify-center mb-14">
                {/* Core */}
                <div className="h-20 w-20 rounded-full border border-zinc-800/80 bg-zinc-950/80 shadow-[0_0_40px_rgba(255,255,255,0.18)]" />

                {/* Inner ring */}
                <div className="absolute h-16 w-16 rounded-full border border-zinc-700/70" />

                {/* Orbiting ring */}
                <div className="pointer-events-none absolute h-[92px] w-[92px] rounded-full border border-zinc-500/50 animate-orbit-ring" />

                {/* Faint outer ring */}
                <div className="pointer-events-none absolute h-[112px] w-[112px] rounded-full border border-zinc-900/70" />
            </div>

            {/* Typewriter line */}
            <div className="text-lg sm:text-2xl font-mono font-semibold tracking-[0.12em] text-zinc-100">
                {text}
                <span className="ml-1 inline-block w-[0.6ch] animate-caret-blink">|</span>
            </div>
            </div>

            {/* Minimal progress sweep */}
            <div className="w-48 h-px overflow-hidden rounded-full bg-zinc-900">
            <div className="h-full w-1/2 bg-zinc-100/90 animate-sweep-soft" />
            </div>

            {/* Small status label */}
            <p className="text-[0.65rem] uppercase tracking-[0.26em] text-zinc-500">
                Initializing interface
            </p>
        </div>
    </div>
  );
};

LoadingScreen.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default LoadingScreen;

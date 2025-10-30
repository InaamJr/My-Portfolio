/**
 * Components
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import { Cover } from "./UI/cover";
import { BackgroundBeams } from "./UI/background-beams";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"


const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = "Colombo, Sri Lanka"; // <- change if needed

    useEffect(() => {
        // Set isVisible to true after the component mounts to trigger the animation
        setIsVisible(true);
    }, []);

    return (
        <section 
            id="home"
            className="relative z-10 pt-28 lg:pt-48 lg:pb-48"
        >
            <div className="container relative z-10 items-center lg:grid lg:grid-cols-2 lg:gap-10 lg:px-0">
                <div className="relative z-10">
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img 
                                src="/images/avatar_1.jpg" 
                                width={40}
                                height={40}
                                alt="Inaam Ahamed Portrait"
                                className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-3 text-zinc-400 text-sm font-thin tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[16ch] mt-5 mb-8 lg:mb-10 relative">
                        Building Digital Experiences with <Cover>PASSION</Cover>
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary 
                            label="Download CV"
                            icon="download"
                            href="/InaamAhamedCV.pdf"
                            target="_blank"
                            classes="hover:shadow-lg"
                        />

                        <ButtonOutline 
                            href="#about"
                            label="Scroll Down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>

                {/* Right column — Visual Module */}
                <div className="hidden lg:flex items-center justify-center my-12">
                    <div className="relative mx-auto flex h-[28rem] w-[28rem] max-w-full items-center justify-center md:h-[30rem] md:w-[30rem]">
                        {/* ambient ring */}
                        <motion.div
                            aria-hidden
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 rounded-full border bg-gradient-to-b shadow-2xl backdrop-blur-xl border-white/10 from-white/10 to-white/0"
                        />

                        {/* inner avatar placeholder */}
                        <motion.div
                            initial={{ y: 12, opacity: 0 }}
                            animate={{ y: isVisible ? 0 : 12, opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 grid h-80 w-80 place-items-center overflow-hidden rounded-full border bg-gradient-to-br shadow-lg border-white/10 from-neutral-900 to-neutral-800"
                        >
                            <img src="/images/Hero_8.1.png" alt="Inaam Ahamed" className="h-full w-full object-cover" />
                        </motion.div>

                        {/* floating badges */}
                        <motion.div
                            initial={{ opacity: 0, x: -12, y: -12 }}
                            animate={{ opacity: isVisible ? 1 : 0, x: 0, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="absolute -left-3 -top-3 rounded-xl border px-3 py-2 text-sm font-medium backdrop-blur-md border-white/10 bg-white/5"
                        >
                            <div className="flex items-center gap-2">
                                <Globe className="h-3.5 w-3.5" /> {location}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 12, y: -12 }}
                            animate={{ opacity: isVisible ? 1 : 0, x: 0, y: 0 }}
                            transition={{ delay: 0.55 }}
                            className="absolute -right-3 -top-3 rounded-xl border px-3 py-2 text-sm font-medium backdrop-blur-md border-white/10 bg-white/5"
                        >
                            Shipping AI‑powered products
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 8, y: 12 }}
                            animate={{ opacity: isVisible ? 1 : 0, x: 0, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="absolute -bottom-4 rounded-2xl border px-4 py-3 text-xs backdrop-blur-md border-white/10 bg-white/5"
                        >
                            <div className="flex items-center gap-6">
                                <Metric label="Experience" value="2+ yrs" />
                                <Metric label="Projects" value="25+" />
                                <Metric label="Freelance Clients" value="12" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex absolute bottom-5 right-10 z-30">
                <div className="relative w-20 h-20 flex items-center justify-center">
                    <PulsingBorder
                        colors={["#06b6d4", "#0891b2", "#f97316", "#00FF88", "#FFD700", "#FF6B35", "#ffffff"]}
                        colorBack="#00000000"
                        speed={1.5}
                        roundness={1}
                        thickness={0.1}
                        softness={0.2}
                        intensity={5}
                        spotsPerColor={5}
                        spotSize={0.1}
                        pulse={0.1}
                        smoke={0.5}
                        smokeSize={4}
                        scale={0.65}
                        rotation={0}
                        frame={9161408.251009725}
                        style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        }}
                    />

                    {/* Rotating Text Around the Pulsing Border */}
                    <motion.svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        animate={{ rotate: 360 }}
                        transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        }}
                        style={{ transform: "scale(1.6)" }}
                    >
                        <defs>
                        <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                        </defs>
                        <text className="text-sm fill-white/80 font-medium">
                            <textPath href="#circle" startOffset="0%">
                                • CODE • GRIND • COFFEE • REPEAT •
                            </textPath>
                        </text>
                    </motion.svg>
                </div>
            </div>

            <BackgroundBeams />
        </section>
    )
}

export default Hero

function Metric({ label, value }) {
    return (
      <div className="min-w-[84px] text-left">
        <div className="text-sm font-semibold">{value}</div>
        <div className="text-[12px] text-neutral-400">{label}</div>
      </div>
    );
  }
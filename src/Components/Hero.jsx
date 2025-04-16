/**
 * Components
 */
import { useState, useEffect } from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set isVisible to true after the component mounts to trigger the animation
        setIsVisible(true);
    }, []);

    return (
        <section 
            id="home"
            className="pt-28 lg:pt-72 lg:pb-48"
        >
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10 lg:px-0">
                <div>
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

                        <div className="flex items-center gap-3 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Designing Modern Websites That Grow With You
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary 
                            label="Download CV"
                            icon="download"
                        />

                        <ButtonOutline 
                            href="#about"
                            label="Scroll Down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>

                {/* <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                        <img 
                            src="/images/hero-banner1.png" 
                            width={656}
                            height={800}
                            alt="Inaam Ahamed" 
                            className="w-full" 
                        />
                    </figure>
                </div> */}

                <div className={`hidden lg:block transform transition-all duration-700 delay-200 relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] justify-self-center md:justify-self-end mt-8 md:mt-0 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}>
                    {/* Glow effects */}
                    {/* <div className="absolute inset-8 md:inset-20 bg-sky-300 rounded-full blur-3xl z-2" /> */}

                    {/* Animated dashed circles */}
                    {/* <div className="absolute inset-2 -mt-6 md:-mt-10 rounded-full border-2 border-dashed border-sky-400 animate-spin-regular" />
                    <div className="absolute inset-0 -mt-6 md:-mt-10 rounded-full border-2 border-dashed border-sky-400 animate-spin-wild" /> */}

                    {/* Additional glow effects */}
                    {/* <div className="absolute inset-8 md:inset-10 bg-sky-200 rounded-full blur-3xl z-0" /> */}

                    {/* Image */}
                    {/* <div className="hidden lg:block">
                        <img 
                            src="/images/hero-banner1.png" 
                            // width={656}
                            // height={800}
                            className="relative z-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] mx-auto object-contain drop-shadow-2xl rounded-full -mt-5"
                        />
                    </div> */}

                    {/* <div className="absolute inset-8 md:inset-10 bg-sky-200 rounded-full blur-3xl z-1" /> */}
                </div>
            </div>
        </section>
    )
}

export default Hero

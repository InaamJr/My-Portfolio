/**
 * Components
 */
import { useState, useEffect } from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";
// import Spline from '@splinetool/react-spline';
// import TiltCard from './TiltCard';
// import ActionFigure from '/images/ActionFig1.2.png';
import { Cover } from "./UI/cover";
import { ThreeDCardDemo } from "./UI/3DCard"; 
import { BackgroundBeams } from "./UI/background-beams";


const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

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

                        <div className="flex items-center gap-3 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[16ch] mt-5 mb-8 lg:mb-10 relative">
                        Building Digital Experiences with <Cover>Passion</Cover>
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

                <div className="hidden lg:block">
                    {/* <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                        <img 
                            src="/images/hero-banner1.png" 
                            width={656}
                            height={800}
                            alt="Inaam Ahamed" 
                            className="w-full" 
                        /> 
                    </figure> */}
                    <ThreeDCardDemo />

                    {/* Foreground TiltCard image */}
                    {/* <TiltCard 
                        image={ActionFigure} 
                        className="relative z-10"
                    /> */}
                </div>
            </div>
            <BackgroundBeams />
        </section>
    )
}

export default Hero
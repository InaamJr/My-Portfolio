/**
 * Node Modules 
 */
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to avoid React version discrepancies 


/**
 * Components 
 */
import LoadingScreen from "./Components/LoadingScreen";
import Header from "./Components/Header";
// import Hero from "./Components/Hero";
import HeroV2 from "./Components/HeroV2";
import About from "./Components/About";
import Education from "./Components/Education";
import Skill from "./Components/Skill";
import Work from "./Components/Work";
import Review from "./Components/Review";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./index.css"
import { useState } from "react";



const App = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useGSAP(() => {
        const elements = gsap.utils.toArray(".reveal-up");

        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: '-200 bottom',
                    end: 'bottom 80%',
                    scrub: true
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            })
        });
    });

    return (
        <ReactLenis root>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

                <div className={`w-full h-full transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                    <Header />
                    <main className='p-0 m-0'>
                        {/* Gradient image */}
                        {/* <img className='absolute top-0 right-0 opacity-60 -z-10' src='/images/gradient.png' alt='Gradient-img'/> */}

                        {/* Blur Effect */}
                        {/* <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#63dce9] -rotate-[30deg] -z-10'></div> */}

                        <HeroV2 />
                        <About />
                        <Skill />
                        <Education />
                        <Work />
                        <Review />
                        <Contact />
                    </main>
                    <Footer />
                </div>

        </ReactLenis>
    )
}

export default App;
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
import Hero from "./Components/Hero";
import About from "./Components/About";
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
            <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skill />
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
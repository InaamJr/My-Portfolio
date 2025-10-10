/**
 * Components
 */
import ReviewCard from "./ReviewCard";



/**
 * Node Modules 
 */
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';



/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to avoid React version discrepancies 

const reviews = [
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Sophia Ramirez',
    imgSrc: '/images/people-1.jpg',
    company: 'Freelane Client (UAE)'
  },
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Liam Bennett',
    imgSrc: '/images/people-3.jpg',
    company: 'Freelane Client (Canada)'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Rifky Azad',
    imgSrc: '/images/Amiuriq2.png',
    company: 'CEO Amiuriq (PVT) Ltd'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Imran Janab',
    imgSrc: '/images/RG2.png',
    company: 'Royal Gems'
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Rusiru Salwathura',
    imgSrc: '/images/RS2.png',
    company: 'Syntax Erreur'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Mahmood',
    imgSrc: '/images/people-6.jpg',
    company: 'Otelier'
  }
];


const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000',
    })
  });

  return (
    <section 
        id="reviews"
        className="section overflow-hidden pb-20" 
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                WHAT PEOPLE SAY
            </h2>
            <div className="scrub-slide flex items-stretch gap-3 w-fit">
              {reviews.map(({content, name, imgSrc, company}, key) => (
                <ReviewCard 
                  key={key}
                  name={name}
                  imgSrc={imgSrc}
                  company={company}
                  content={content}
                />
              ))}
            </div>
        </div>
    </section>
  )
}

export default Review
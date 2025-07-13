/**
 * Components
 */
import ProjectCard from "./ProjectCard";

export const Works = [
  {
    imgSrc: '/images/VenomGuard.png',
    title: 'VenomGuard AI',
    tags: ['Python', 'Flask', 'AI', 'Machine Learning', 'NLP'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  },
  {
    imgSrc: '/images/GasByGas.png',
    title: 'GasByGas',
    tags: ['Next.js', 'React Native', 'Tailwind CSS', 'MySQL', 'API'],
    projectLink: 'https://github.com/InaamJr/GasByGas.git'
  },
  {
    imgSrc: '/images/FinAdvisor.png',
    title: 'Financial Advisor Bot',
    tags: ['Python', 'Flask', 'yfinance', 'Q-Learning', 'React'],
    projectLink: 'https://github.com/InaamJr/financial-advisor-bot.git'
  },
  {
    imgSrc: '/images/RoyalGems.png',
    title: 'Royal Gems',
    tags: ['HTML', 'CSS', 'JavaScript'],
    projectLink: 'https://github.com/InaamJr/Royal-Gems.git'
  },
  {
    imgSrc: '/images/MalayKart.png',
    title: 'MalayKart - E-Commerce',
    tags: ['React', 'Tailwind CSS'],
    projectLink: 'https://github.com/InaamJr/MalayKart.git'
  },
  {
    imgSrc: '/images/BookHaven.png',
    title: 'Book Management System',
    tags: ['C#', 'SQL'],
    projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
  },
  {
    imgSrc: '/images/SnookerGame.png',
    title: 'Snooker Game',
    tags: ['JavaScript', 'HTML', 'CSS', 'P5.js', 'Matter.js'],
    projectLink: 'https://github.com/InaamJr/JS-Snooker-Game-.git'
  },
];

const Work = () => {
  return (
    <section 
      id = 'work'
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          MY PORTFOLIO HIGHLIGHTS
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {Works.map(({ imgSrc, title, tags, projectLink}, key) => (
            <ProjectCard 
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work
/**
 * Components
 */
import ProjectCard from "./ProjectCard";

export const Works = [
  {
    imgSrc: "/images/VenomGuard.png",
    title: "VenomGuard AI",
    tags: ["Python", "Flask", "AI", "Machine Learning", "NLP"],
    projectLink: "https://github.com/InaamJr/VenomGuard-AI.git",
    accent: "from-emerald-400/20 via-cyan-400/10 to-transparent",
  },
  {
    imgSrc: "/images/GasByGas.png",
    title: "GasByGas",
    tags: ["Next.js", "React Native", "Tailwind CSS", "MySQL", "API"],
    projectLink: "https://github.com/InaamJr/GasByGas.git",
    accent: "from-fuchsia-400/20 via-purple-400/10 to-transparent",
  },
  {
    imgSrc: "/images/FinAdvisor.png",
    title: "TradeSense AI (Financial Advisor)",
    tags: ["Python", "Flask", "yfinance", "Q-Learning", "React"],
    projectLink: "https://github.com/InaamJr/financial-advisor-bot.git",
    accent: "from-sky-400/20 via-blue-400/10 to-transparent",
  },
  {
    imgSrc: "/images/RoyalGems.png",
    title: "Royal Gems",
    tags: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://github.com/InaamJr/Royal-Gems.git",
    accent: "from-amber-400/20 via-orange-400/10 to-transparent",
  },
  {
    imgSrc: "/images/Axceria.png",
    title: "Axceria - E-Commerce",
    tags: ["React", "Tailwind CSS"],
    projectLink: "https://axceria.vercel.app/",
    accent: "from-indigo-400/20 via-violet-400/10 to-transparent",
  },
  {
    imgSrc: "/images/BookHaven.png",
    title: "Book Management System",
    tags: ["C#", "SQL"],
    projectLink: "https://github.com/InaamJr/BookHaven.git",
    accent: "from-teal-400/20 via-emerald-400/10 to-transparent",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        {/* Header */}
        <div className="flex items-end justify-between gap-6 mb-8 reveal-up">
          <div>
            <p className="mb-6 font-mono text-xs tracking-[0.35em] text-zinc-400/80 uppercase">
              Selected Work
            </p>
            <h2 className="headline-2 mt-3 reveal-up">PORTFOLIO HIGHLIGHTS</h2>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-zinc-400 reveal-up">
            <span className="font-mono inline-flex items-center gap-2 px-3 py-2 rounded-full ring-1 ring-inset ring-zinc-800/70 bg-zinc-950/40">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Minimal • Futuristic • Modern
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:gap-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {Works.map(({ imgSrc, title, tags, projectLink, accent }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              accent={accent}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
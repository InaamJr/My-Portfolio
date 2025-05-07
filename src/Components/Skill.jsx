/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'Artificial Intelligence'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/nxtjs.svg',
    label: 'Next.JS',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/mysql.svg',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: '/images/postman.svg',
    label: 'Postman',
    desc: 'API Management'
  },
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design Tool'
  },
  {
    imgSrc: '/images/framer.svg',
    label: 'Framer Motion',
    desc: 'Animations'
  },
];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
                Essential Tools I Use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Explore the cutting-edge tools and technologies I harness to build exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, Key) => 
                    (
                        <SkillCard 
                            key={Key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skill

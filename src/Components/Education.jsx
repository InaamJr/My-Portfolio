import { Timeline } from './Timeline';
import { education } from '../Constants';

const Education = () => {
  return (
    <section 
      id = 'education'
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 reveal-up">
          MY JOURNEY
        </h2>
        
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          A timeline of my academic journey, showcasing my dedication to software engineering and continuous learning.
        </p>
          
        <div className="reveal-up">
          <Timeline data={education} />
        </div>
        
      </div>
    </section>
  )
}

export default Education




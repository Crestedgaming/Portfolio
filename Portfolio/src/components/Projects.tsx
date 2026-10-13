
import ProjectCard from './ProjectCard';
import { projects } from '../data';

const Projects = () => {
  

  return (
    <div className="projects">
      <h2>Projects</h2>
      <ProjectCard project={projects[0]} />
      <ProjectCard project={projects[1]} />
      <ProjectCard project={projects[2]} />
      <ProjectCard project={projects[3]} />
      <ProjectCard project={projects[4]} />
      <ProjectCard project={projects[5]} />
    </div>
  )
}

export default Projects
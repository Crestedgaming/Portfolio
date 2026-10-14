import {useState} from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

const Projects = () => {
  
useState() 

  return (
    
    <div className="projects" id="projects">
      
      <h2>Projects</h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};

export default Projects
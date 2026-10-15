import {useState} from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data';
import type { Filter } from '../types';
import Filters from './Filters';

const Projects = () => {
  
  const [selectedFilter, setSelectedFilter] = useState<Filter>('All');

  const filteredProjects = selectedFilter === 'All' ? projects : projects.filter((project) => project.technologies.includes(selectedFilter));
  

  return (
    
    <div className="projects" id="projects">
  <h2>Projects</h2>

  <Filters
    selectedFilter={selectedFilter}
    setSelectedFilter={setSelectedFilter}
  />

  <div className="projects-grid">
    {filteredProjects.map((project) => (
      <ProjectCard
        key={project.id}
        project={project}
      />
    ))}
  </div>
</div>
  );
};

export default Projects
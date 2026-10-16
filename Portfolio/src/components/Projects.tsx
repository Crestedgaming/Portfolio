import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data';
import type { Filter } from '../types';
import Filters from './Filters';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState<Filter>('All');
  const availableFilters: Exclude<Filter, 'All'>[] = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ].sort((first, second) => first.localeCompare(second));

  const filteredProjects =
    selectedFilter === 'All'
      ? projects
      : projects.filter((project) => project.technologies.includes(selectedFilter));

  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <Filters
        availableFilters={availableFilters}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects
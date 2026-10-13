import type { types } from '../types';

type ProjectCardProps = {
  project: types;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { id, title, description, image, link, technologies } = project;

  return (
    <div className="project-card" key={id}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      <div className="technologies">
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard
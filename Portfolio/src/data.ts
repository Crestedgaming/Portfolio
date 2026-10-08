
import type { Projects } from './types';

export const projects: Projects[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio website built using React and TypeScript to showcase my projects and skills.",
        image: "/images/portfolio.png",
        link: "https://github.com/yourusername/portfolio",
        technologies: ["React", "TypeScript", "CSS"]
    },
    {
        id: 2,
        title: "E-commerce Platform",
        description: "An e-commerce platform built with Node.js and Express, featuring user authentication, product management, and payment integration.",
        image: "/images/ecommerce.png",
        link: "https://github.com/yourusername/ecommerce",
        technologies: ["Node.js", "Express", "MongoDB"]
    }
]

import type { Projects } from './types';
import soleroImage from './assets/images/solero.png';

export const projects: Projects[] = [
    {
        id: 1,
        title: "Calippo shotts one-page snapshot",
        description: "This is a one-page snapshot of a potential promotion for the return of the popular ice cream that got discontinued in 2020, and after rumors of its return we made this site snapshot as a suggestion for what a return could look like, with some popular flavours from the CocaCola company.",
        image: soleroImage,
        link: "https://github.com/Crestedgaming/fed25d-grafiska-verktyg-bleed-trim",
        technologies: ["HTML", "CSS", "JavaScript", "Biome", "Vite", "Json", "pnpm", "GitHub", "GitHub Pages"]
    },
    {
        id: 2,
        title: "E-commerce Platform",
        description: "An e-commerce platform built with Node.js and Express, featuring user authentication, product management, and payment integration.",
        image: "/images/ecommerce.png",
        link: "https://github.com/yourusername/ecommerce",
        technologies: ["Node.js", "Express", "MongoDB"]
    },
    {
        id: 3,
        title: "Blog Application",
        description: "A full-stack blog application built with Django and React, allowing users to create, edit, and delete blog posts.",
        image: "/images/blog.png",
        link: "https://github.com/yourusername/blog",
        technologies: ["Django", "React", "PostgreSQL"]
    },
    {
        id: 4,
        title: "Task Manager",
        description: "A task management application built with React and TypeScript, allowing users to create, edit, and delete tasks.",
        image: "/images/taskmanager.png",
        link: "https://github.com/yourusername/taskmanager",
        technologies: ["React", "TypeScript", "CSS"]
    },
    {
        id: 5,
        title: "!Weather App",
        description: "A weather application built with React and TypeScript, allowing users to view current weather conditions and forecasts.",
        image: "/images/weather.png",
        link: "https://github.com/yourusername/weather",
        technologies: ["React", "TypeScript", "CSS"]
    },
    {
        id: 6,
        title: "Note Taking App",
        description: "A simple note-taking application built with React and TypeScript, allowing users to create and manage their notes.",
        image: "/images/notes.png",
        link: "https://github.com/yourusername/notes",
        technologies: ["React", "TypeScript", "CSS"]
    }
]
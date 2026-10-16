
import type { types } from './types';
import soleroImage from './assets/images/solero.png';
import practicePortfolioImage from './assets/images/training-portfolio.png';
import aliceImage from './assets/images/Alice.png'
import budgetAppImage from './assets/images/budget.png';
import weatherImage from './assets/images/Weather.png'
import noteImage from './assets/images/Notes App Icon.png'

export const projects: types[] = [
    {
        id: 1,
        title: "Calippo shots one-page snapshot",
        description: "This is a one-page snapshot of a potential promotion for the return of the popular ice cream that got discontinued in 2020, and after rumors of its return we made this site snapshot as a suggestion for what a return could look like, with some popular flavours from the CocaCola company.",
        image: soleroImage,
        link: "https://github.com/Crestedgaming/fed25d-grafiska-verktyg-bleed-trim",
        technologies: ["HTML", "CSS", "JavaScript", "Biome", "Vite", ".Json", "pnpm"]
    },
    {
        id: 2,
        title: "Practice portfolio",
        description: "A small school project to test out my skills in HTML and css",
        image: practicePortfolioImage,
        link: "https://github.com/Crestedgaming/Test-portfolio-school-project",
        technologies: ["HTML", "CSS"]
    },
    {
        id: 3,
        title: "Alice in wonderland game",
        description: "Alice in Wonderland-inspired escape room game built as a team project in the FED25D JavaScript course.The game contains six connected rooms with different puzzle mechanics. As players finish rooms, they collect artifact letters and progress toward the final challenge.",
        image: aliceImage,
        link: "https://github.com/Crestedgaming/Alice-in-wonderland-game",
        technologies: ["TypeScript", "SCSS", "HTML", "CSS", "Vite"]
    },
    {
        id: 4,
        title: "Budget App",
        description: "This is a simple budget-app made as part of the course Front End Developer at Medieinstitutet.",
        image: budgetAppImage,
        link: "https://github.com/yourusername/taskmanager",
        technologies: ["React", "TypeScript", "CSS", "SCSS", "Vite", "Prettier", "Sass"]
    },
    {
        id: 5,
        title: "!Weather App",
        description: "A weather application built with React and TypeScript, allowing users to view current weather conditions and forecasts.",
        image: weatherImage,
        link: "https://github.com/yourusername/weather",
        technologies: ["React", "TypeScript", "CSS"]
    },
    {
        id: 6,
        title: "Note Taking App",
        description: "A simple note-taking application built with React and TypeScript, allowing users to create and manage their notes.",
        image: noteImage,
        link: "https://github.com/yourusername/notes",
        technologies: ["React", "TypeScript", "CSS"]
    }
]
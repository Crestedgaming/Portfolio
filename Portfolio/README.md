# Frontend Developer Portfolio

A responsive single-page portfolio application built with **React, TypeScript, and Vite**.

This project was developed as part of my Frontend Developer education at Mediainstitutet. Its purpose is to showcase my development projects, technical skills, and experience while practicing modern frontend development.

## Live Demo & Screenshots

**Live Demo:** [Add deployment URL]

**GitHub Repository:** https://github.com/Crestedgaming/Portfolio

### Screenshots

Add screenshots of the desktop and mobile versions of the portfolio here.

## Features

- Responsive layout for desktop, tablet, and mobile devices
- Single-page navigation between portfolio sections
- Reusable React components
- Dynamic project cards generated from project data
- Technology tags displaying the tools used in each project
- Project filtering based on technologies
- Links to individual projects and repositories
- About and contact sections

## Technologies Used

| Technology   | Purpose                             |
| ------------ | ----------------------------------- |
| HTML5        | Semantic page structure             |
| CSS3         | Styling, layout, and responsiveness |
| TypeScript   | Type safety and structured data     |
| React        | Component-based user interface      |
| Vite         | Development server and build tool   |
| Figma        | Wireframing and interface design    |
| Git & GitHub | Version control                     |

## Project Structure

The application uses reusable components to keep the code organized and maintainable.

```text
src/
├── components/
│   ├── Header.tsx
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Filters.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data.ts
├── types.ts
├── App.tsx
├── App.css
└── main.tsx
```

_Update this structure to match the final project._

## Installation and Setup

To run the project locally:

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project folder

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

### Production Build

```bash
npm run build
```

## Architecture and Design Decisions

### Component-Based Architecture

The portfolio is divided into smaller React components, making the application easier to maintain and expand.

### Dynamic Project Rendering

Project information is stored separately from the components in `data.ts`.

Each project follows a shared TypeScript type, ensuring consistency between project entries.

The `Projects` component renders project cards dynamically using `.map()`, avoiding repetitive JSX.

### Filtering

The portfolio uses React state to manage the selected technology filter.

Users can filter displayed projects based on the technologies used.

### Responsive Design

The interface was initially planned in Figma with mobile and desktop layouts.

CSS Flexbox, Grid, and media queries are used to adapt the layout to different screen sizes.

## Challenges and Learning Outcomes

During development, I practiced:

- Building reusable components with React
- Passing data between components using props
- Creating and using TypeScript types
- Rendering lists dynamically with `.map()`
- Managing component state with `useState`
- Implementing conditional rendering and filtering
- Building responsive layouts using CSS
- Organizing project data separately from UI components

## Future Improvements

- Add dark mode
- Improve animations and transitions
- Add more projects as my portfolio grows
- Improve accessibility and keyboard navigation
- Add automated testing

## Author

**[Your Name]**

Frontend Developer Student — Mediainstitutet

- GitHub: [Your GitHub profile]
- LinkedIn: [Your LinkedIn profile]
- Portfolio: [Live portfolio URL]

## Project Information

Developed as part of a frontend development assignment at Mediainstitutet.

**Project type:** Individual school assignment

**Framework:** React

**Language:** TypeScript

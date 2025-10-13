/**
 * Project Data for Portfolio
 * This file contains all the projects displayed in the portfolio.
 */

const ProjectsData = [
  {
    id: 1,
    title: "Modern Portfolio Website",
    description:
      "A responsive portfolio website built with React and Tailwind CSS. Features include dark mode, animations, and contact form with EmailJS integration.",
    image: "", // Empty string will trigger default image
    technologies: ["React", "Tailwind CSS", "EmailJS", "Vite"],
    links: {
      live: "https://mayura.dev",
      github: "https://github.com/mayuraabhayasinghe/portfolio",
    },
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description:
      "An admin dashboard for e-commerce platforms with inventory management, sales analytics, and user management features.",
    image: "", // Will use default if this doesn't exist
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Chart.js",
    ],
    links: {
      github: "https://github.com/mayuraabhayasinghe/ecommerce-dashboard",
      linkedin: "https://linkedin.com/in/mayuraabhayasinghe/projects",
    },
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A weather application that provides current weather data and forecasts for any location. Uses OpenWeatherMap API for data retrieval.",
    image: "", // Intentionally empty to test default image
    technologies: [
      "JavaScript",
      "React Native",
      "API Integration",
      "Geolocation",
    ],
    links: {
      live: "https://weather.mayura.dev",
    },
  },
  {
    id: 4,
    title: "Task Management System",
    description:
      "A comprehensive task management system with user authentication, task categorization, deadlines, and progress tracking features.",
    image: "",
    technologies: [
      "React",
      "Firebase",
      "Firestore",
      "Authentication",
      "Material UI",
    ],
    links: {
      github: "https://github.com/mayuraabhayasinghe/task-management",
      live: "https://tasks.mayura.dev",
    },
  },
];

export default ProjectsData;

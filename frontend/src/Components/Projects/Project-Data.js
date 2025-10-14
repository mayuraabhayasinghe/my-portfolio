/**
 * Project Data for Portfolio
 * This file contains all the projects displayed in the portfolio.
 */
import TpbProjectImage from "../../assets/images/ProjectImages/tpb.png";
import DengueGuardImage from "../../assets/images/ProjectImages/dengue-guard.png";
import MoneyMap from "../../assets/images/ProjectImages/money-map.png";

const ProjectsData = [
  {
    id: 1,
    title: "TPB - The Purfect Buddy",
    description:
      "A full-stack web platform that connects tennis players by enabling them to host or join games, send and manage requests, and rank players based on performance.",
    image: TpbProjectImage, // Using imported tpb-project.png image
    technologies: [
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Node.js",
    ],
    links: {
      live: "https://tpb-tennis-community.vercel.app/",
      github: "https://github.com/mayuraabhayasinghe/tpb-tennis-community",
    },
  },
  {
    id: 2,
    title: "MoneyMap - Expense Tracker",
    description:
      "A responsive MERN-based web application to manage personal finances with data visualization and report generation.",
    image: MoneyMap, // Will use default if this doesn't exist
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    links: {
      live: "https://moneymap-frontend.vercel.app",
      github: "https://github.com/mayuraabhayasinghe/moneymap-expense-tracker",
    },
  },
  {
    id: 3,
    title: "DenguGuard",
    description:
      "A MERN stack web application to support real-time dengue patient management & monitoring, including vitals tracking, notifications, and reporting.(Group Project)",
    image: DengueGuardImage, // Intentionally empty to test default image
    technologies: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Express",
      "JWT",
      "Socket.io",
    ],
    links: {
      github:
        "https://github.com/mayuraabhayasinghe/dengue-patient-management-system-grp4",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7379743434968002560/",
    },
  },
  
];

export default ProjectsData;

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import javagameImg from "@/public/java_game.png";
import stmImg from "@/public/stm.jpg";
import wordgameImg from "@/public/word-game.png";
import dictImg from "@/public/longdosub.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Radiant game",
    description:
      "Designed and implemented a Java-based word-fall typing game. Strengthened Java OOP concept and gained experience in event-driven programming.",
    tags: ["Java", "Javafx"],
    imageUrl: javagameImg,
  },
  {
    title: "Plant Watering",
    description:
      "Built a plant watering system using an STM32 F411RE board, integrated with NodeMCU for web connectivity. Applied C programming for firmware and gained understanding of embedded systems and IoT concepts.",
    tags: ["C", "Arduino", "hardware"],
    imageUrl: stmImg,
  },
  {
    title: "Word Game : (intern)",
    description:
      "I enhanced a word game by creating a custom keyboard for character selection and making UI improvements. Using PHP, JavaScript, CSS, and jQuery, I improved the user experience and game accessibility.",
    tags: ["Php", "JavaScript", "XAMPP", "CSS", "Jquery"],
    imageUrl: wordgameImg,
  },
  {
    title: "Open Subtitle : (intern)",
    description:
      "I developed an open subtitle feature that allows users to click on a word within a movie. When a user selects a word, the website retrieves movie subtitles all lines around that word.",
    tags: [
      "VUE3",
      "JavaScript",
      "CSS",
      "ExpressJS",
      "Node",
      "Docker",
      "Postgres",
    ],
    imageUrl: dictImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
  "Node.js",
  "C/C++",
  "VUE",
  "PHP",
  "Express",
  "PostgreSQL",
  "Python",
  "Docker",
] as const;

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm currently a third-year student at Chulalongkorn University, studying
        Computer Engineering. I've always been drawn to the way computers can
        make our lives easier, so I decided to choose this field of study.
        During my studies, I have delved into various aspects of computer
        engineering, including coding, mathematic, complex computer
        architecture, and the dynamics of teamwork. Moreover, I spent time
        during my second year summer to undertake an internship at Metamedia
        Technology. This experience was a valuable blend of expanding my
        knowledge and sharpening my practical skills, all while having a great
        time and gaining insights.
      </p>

      <p>
        I am seeking an internship as a junior developer, where I can further
        explore and understand the different aspects of software development. I
        am open to opportunities in both front-end and back-end development.
      </p>
      <p>
        Beyond the realm of coding and learning, my interests include playing
        video games, indulging in anime, and exploring light novels.
      </p>
    </motion.section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Arrowdown from "./arrowdown";
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-start sm:mb-0 scroll-mt-[100rem] h-screen self-center "
    >
      <motion.h1
        className="mb-6 mt-4 px-4 text-3xl font-medium !leading-[1.5] sm:text-6xl relative text-center sm:text-start"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-start font-bold">HI,</span> <br />
        <span className="font-semibold font-serif ">
          I'm{" "}
          <span className=" text-[#76828b] font-mono">Sirapop Chaddaeng</span>
        </span>
        <div className="absolute top-0 right-0 text-sm text-[#c7c7bf] italic">
          &lt;/&gt;
        </div>
      </motion.h1>

      <motion.h2
        className="mb-10 mt-4 px-6 text-1xl font-medium !leading-[1.5] sm:text-2xl relative py-6 italic"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="absolute top-0 left-0 text-sm text-[#c7c7bf] transform -translate-y-3 -translate-x-4">
          &lt;div/&gt;
        </div>
        <span className="italic">
          Studying Computer Engineering at Chulalongkorn University,{" "}
        </span>{" "}
        <br />
        <span className="font-bold"> I am currently in my third year.</span>
        <div className="absolute bottom-0 right-0 text-sm text-[#c7c7bf] ">
          &lt;/&gt;
        </div>
      </motion.h2>
      <Arrowdown />
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Arrowdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <Link
        href={"#about"}
        className="flex flex-col justify-center items-center cursor-pointer group max-w-0 mx-auto"
      >
        <div className="bg-gray-200 h-16 w-1 rounded-full  dark:bg-opacity-20 group-hover:scale-105 group-hover:bg-gray-400 dark:group-hover:bg-opacity-40"></div>
        <div className="h-5 w-10 border-[gray-200] border-b-4 border-l-4 border-r-4 rounded-b-3xl  dark:bg-opacity-20 group-hover:scale-105 group-hover:border-gray-400 dark:group-hover:border-opacity-40"></div>
      </Link>
    </motion.div>
  );
}

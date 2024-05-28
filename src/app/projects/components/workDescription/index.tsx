"use client"

import { fadeIn } from "@/components/variants";
import { motion } from "framer-motion";

export const WorkDescription = (): JSX.Element => {
  return (
    <div className="text-center 
      flex w-full flex-col mb-14 mt-7"
    >
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className="text-[35px] leading-tight 
        md:text-[54px] md:leading-[1.3] 
        font-semibold"
      >
        Some of my <span className="text-accent">projects...</span>
      </motion.h2>
    </div>
  )
}
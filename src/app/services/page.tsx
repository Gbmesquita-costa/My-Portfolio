"use client"

import { motion } from "framer-motion";

import { ServiceSlider } from "@/components/serviceSlider";
import { Circles } from "@/components/circles";

import { fadeIn } from "@/components/variants";

export default function Services(): JSX.Element {
  return (
    <div className="flex bg-primary/30 min-h-screen w-full flex-col 
    items-center justify-center py-40 xl:py-20">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="text-[35px] leading-tight md:text-[54px] md:leading-[1.3] mb-4 font-semibold"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            className="w-full xl:max-w-[65%] mt-5 xl:mt-0"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Circles />
    </div>
  )
}
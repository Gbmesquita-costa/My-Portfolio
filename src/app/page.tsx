"use client"

import { motion } from "framer-motion";

import { ActionButton } from "@/components/actionButton";
import { Avatar } from "@/components/avatar";

import { ParticlesContainer } from "@/components/particles";
import { fadeIn } from "@/components/variants";

const Home = (): JSX.Element => {
  return (
    <div className="flex bg-primary/30 min-h-screen 
      w-full flex-col items-center justify-center 
      py-40 xl:py-20"
    >
      <div className="text-center flex flex-col justify-center 
        xl:pt-40 xl:text-left h-full container mx-auto z-50"
      >
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="text-[35px] leading-tight md:text-[60px] 
          md:leading-[1.3] mb-8 font-semibold"
        >
          Crafting Innovative <br /> {" "}

          <span className="text-accent">
            Solutions
          </span>
        </motion.h1>

        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
        >
          I&apos;m a Full Stack developer with expertise in Website and Software development.
          Passionate about crafting digital solutions that elevate user experience and drive business success.
          Let&apos;s collaborate to turn your digital ideas into reality!
        </motion.p>

        <div className="flex justify-center xl:hidden relative z-10">
          <ActionButton />
        </div>

        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          className="hidden xl:flex"
        >
          <ActionButton />
        </motion.div>
      </div>
      <div className="w-[1200px] h-full absolute 
      right-0 bottom-0 overflow-hidden">
        {/* <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
          className="bg-none xl:bg-home xl:bg-cover xl:bg-right xl:bg-no-repeat
          w-full h-full absolute mix-blend-color-dodge translate-z-0"
        /> */}

        <div className="w-full h-full">
          <ParticlesContainer />
        </div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
          className="w-full h-full max-w-[930px] max-h-[690px] 
          absolute -bottom-32 lg:-bottom-10 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
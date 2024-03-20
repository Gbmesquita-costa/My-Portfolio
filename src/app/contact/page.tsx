"use client"

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

import { fadeIn } from "@/components/variants";

export default function Contact(): JSX.Element {
  return (
    <div className="flex bg-primary/30 min-h-screen w-full flex-col 
    items-center justify-center py-16 xl:py-20">
      <div className="container mx-auto py-32 text-center xl:text-left flex
      items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="text-[35px] leading-tight md:text-[54px] md:leading-[1.3] 
            font-semibold text-center mb-12"
          >
            Let's <span className="text-accent">connect</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 
                focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light"
              />
              <input
                type="email"
                placeholder="email"
                className="w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 
                focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light"
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 
                focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light"
            />
            <textarea
              placeholder="message"
              className="bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 
              placeholder:text-white/30 placeholder:font-light w-full h-[180px] p-6 capitalize rounded-lg resize-none"
            />
            <button className="h-[52px] rounded-full border border-white/50 max-w-[170px]
             px-8 transition-all duration-300 flex items-center justify-center
             overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all
              duration-300 absolute text-[22px]"/>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}
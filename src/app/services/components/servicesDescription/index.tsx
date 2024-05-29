"use client"

import { motion } from "framer-motion";
import { ServiceSlider } from "@/components/serviceSlider";

import { fadeIn } from "@/components/variants";

export const ServicesDescription = (): JSX.Element => {
    return (
        <>
            <div className="text-center flex xl:w-[30vw] 
                flex-col lg:text-left mb-4 xl:mb-0"
            >
                <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    animate="show"
                    className="text-[35px] leading-tight 
                    md:text-[54px] md:leading-[1.3] mb-4 font-semibold"
                >
                    My Services <span className="text-accent">.</span>
                </motion.h2>
                <motion.p
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    animate="show"
                    className="mb-4 max-w-[400px] mx-auto lg:mx-0"
                >
                    Services designed to elevate the level of your project. From development to deployment and SEO strategies.
                    Get comprehensive solutions tailored to your needs.
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
        </>
    )
}
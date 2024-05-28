"use client"

import { TestimonialSlider } from "@/components/testimonialSlider";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

export const TestimonialsDescription = (): JSX.Element => {
    return (
        <>
            <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                className="text-[35px] leading-tight md:text-[54px] 
                md:leading-[1.3] font-semibold mb-8 xl:mb-0"
            >
                What my clients <span className="text-accent">say...</span>
            </motion.h2>
            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
            >
                <TestimonialSlider />
            </motion.div>
        </>
    )
}
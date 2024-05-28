"use client"

import CountUp from "react-countup";
import { motion } from "framer-motion";

import { fadeIn } from "@/components/variants";

export const AboutDescription = (): JSX.Element => {
    return (
        <div className="flex-1 flex flex-col justify-center">
            <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                className="text-[35px] leading-tight md:text-[48px] md:leading-[1.3] mb-7 font-semibold"
            >
                Shaping <span className="text-accent">digital</span> solutions for
                Businesses & Customers.
            </motion.h2>
            <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                animate="show"
                className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
                4 years ago, I began freelancing as a developer.
                Since then, I&apos;ve collaborated remotely with agencies and startups,
                contributing to digital products for diverse business and consumer needs.
            </motion.p>
            <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                animate="show"
                className="hidden md:flex md:max-w-xl xl:max-w-none 
                mx-auto xl:mx-0 mb-8"
            >
                <div className="flex flex-1 xl:gap-x-6">
                    <div className="relative flex-1 after:w-[1px] after:h-full
                    after:bg-white/10 after:absolute after:top-0 after:right-0">
                        <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                            <CountUp
                                start={0}
                                end={5}
                                duration={5}
                            />
                        </div>
                        <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                            Years of experience
                        </div>
                    </div>
                    <div className="relative flex-1 after:w-[1px] after:h-full
                    after:bg-white/10 after:absolute after:top-0 after:right-0">
                        <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                            <CountUp
                                start={0}
                                end={60}
                                duration={5}
                            />
                        </div>
                        <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                            Satisfied Clients
                        </div>
                    </div>
                    <div className="relative flex-1">
                        <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                            <CountUp
                                start={0}
                                end={60}
                                duration={5}
                            />
                        </div>
                        <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                            Finished Projects
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
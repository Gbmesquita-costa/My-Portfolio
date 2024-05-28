"use client"

import { useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

import { aboutData } from "../../data";

export const Experiences = (): JSX.Element => {
    const [index, setIndex] = useState<number>(0)

    return (
        <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="flex flex-col w-full xl:max-w-[40%] h-[380px] mt-10"
        >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                {
                    aboutData.map(({ title }, itemIndex) => (
                        <div
                            key={itemIndex}
                            className={`${index === itemIndex && `text-accent after:w-[100%] 
                                after:bg-accent after:transition-all after:duration-300`} 
                                cursor-pointer capitalize xl:text-lg relative after:w-8
                                after:h-[2px] after:bg-white after:absolute after:-bottom-1
                                after:left-0`
                            }
                            onClick={() => setIndex(itemIndex)}
                        >
                            {title}
                        </div>
                    ))
                }
            </div>

            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center
                xl:items-start overflow-y-auto scrollbar scrollbar-w-[9px] 
                scrollbar-thumb-rounded-3xl scrollbar-thumb-zinc-400
                hover:scrollbar-thumb-zinc-500 pr-4"
            >
                {
                    aboutData[index].info.map((item, index) => (
                        <div
                            key={index}
                            className="flex-1 flex flex-col 
                            md:flex-row max-w-max gap-x-2 items-center"
                        >
                            <div className="font-light mb-2 md:mb-0">
                                {item.title} {item.stage}
                            </div>
                            <div className="flex gap-x-4">
                                {
                                    item.icons?.map((icon, iconIndex) => (
                                        <div
                                            key={iconIndex}
                                            className="text-2xl text-white"
                                        >
                                            {icon}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}
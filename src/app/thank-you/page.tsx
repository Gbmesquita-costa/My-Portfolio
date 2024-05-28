"use client"

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

import {
    BsArrowLeft,
    BsArrowRight
} from "react-icons/bs";

const ThankYou = (): JSX.Element => {
    const router = useRouter()

    return (
        <div className="container mx-auto py-32 text-center xl:text-left flex flex-col
        items-center justify-center h-full">
            <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                className="text-[35px] leading-tight md:text-[54px] md:leading-[1.3] 
                font-semibold text-center mb-3"
            >
                Thank you for your donate!!
            </motion.h2>

            <span className="text-xl">
                Your donation was successful
            </span>

            <div className="flex mt-16 gap-x-7 items-center">
                <button className="h-[52px] rounded-full border border-white/50 max-w-[260px]
                px-8 transition-all duration-300 flex items-center justify-center
                overflow-hidden hover:border-accent group"
                    onClick={() => router.push("/")}
                >
                    <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
                    transition-all duration-500">
                        Back to home page?
                    </span>
                    <BsArrowLeft className="-translate-y-[120%] opacity-0 group-hover:flex
                    group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                    duration-300 absolute text-[22px]"/>
                </button>

                <span>
                    OR
                </span>

                <button className="h-[52px] rounded-full border border-white/50 max-w-[260px]
                px-8 transition-all duration-300 flex items-center justify-center
                overflow-hidden hover:border-accent group"
                    onClick={() => router.push("/coffee")}
                >
                    <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
                    transition-all duration-500">
                        Make another donation?
                    </span>
                    <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
                    group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                    duration-300 absolute text-[22px]"/>
                </button>
            </div>
        </div>
    )
}

export default ThankYou
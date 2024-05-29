"use client"

import { motion } from "framer-motion";

import { fadeIn } from "@/components/variants";
import { Avatar } from "@/components/avatar";

export const MotionAvatar = (): JSX.Element => {
    return (
        <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="hidden xl:flex 
            absolute -bottom-24 -left-[315px]"
        >
            <Avatar />
        </motion.div>
    )
}

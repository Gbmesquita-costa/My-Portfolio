import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

export const HomeBackground = (): JSX.Element => {
    return (
        <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            transition={{
                duration: 1,
                ease: "easeInOut"
            }}
            className="bg-none xl:bg-home xl:bg-cover xl:bg-right xl:bg-no-repeat
            w-full h-full absolute mix-blend-color-dodge translate-z-0"
        />
    )
}
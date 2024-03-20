"use client"

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import { PageTransition } from "@/components/pageTransition";

interface TransitionProviderProps {
    children: ReactNode;
}

export function TransitionProvider({ children }: TransitionProviderProps): JSX.Element {
    const router = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div key={router} className="h-full">
                <PageTransition />
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
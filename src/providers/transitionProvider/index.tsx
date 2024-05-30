"use client"

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import { PageTransition } from "@/components/pageTransition";

import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

interface TransitionProviderProps {
    children: ReactNode;
}

export function TransitionProvider({ children }: TransitionProviderProps): JSX.Element {
    const router = usePathname()

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div key={router} className="h-full">
                    <PageTransition />
                    <Toaster
                        richColors={true}
                        duration={2000}
                        position="top-right"
                    />
                    {children}
                </motion.div>
            </AnimatePresence>
            <Analytics />
        </>
    )
}
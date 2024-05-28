"use client"

import { fadeIn } from "@/components/variants";
import { motion } from "framer-motion";

interface DonationsProps {
    donations: [{
        name: string;
        message: string;
        amount: number;
    }]
    message: string;
}

export const PreviousDonations = ({ donations, message }: DonationsProps): JSX.Element => {
    const priceFormat = (amount: number): string => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(amount)
    }

    return (
        <div className="flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                className="text-[35px] leading-tight md:text-[45px] md:leading-[1.3] 
                mb-4 font-semibold"
            >
                Previous <span className="text-accent">Donations</span>
            </motion.h2>

            <div className="h-[380px] scrollbar scrollbar-w-[9px] scrollbar-thumb-rounded-3xl 
            scrollbar-thumb-zinc-400 hover:scrollbar-thumb-zinc-500 overflow-y-auto overflow-x-hidden"
            >
                {
                    donations ? donations.map(({ amount, message, name }, index) => (
                        <motion.div
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            animate="show"
                            key={index}
                            className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg p-4 group 
                            cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 
                            mb-2 mt-4 mr-3"
                        >
                            {name} donated | <strong>{priceFormat(amount)}</strong> <br />

                            <p className="mt-2 text-zinc-300">
                                {message}
                            </p>
                        </motion.div>
                    )) : message
                }

                {
                    !donations.length && "Don`t have any previous donations yet"
                }
            </div>
        </div>
    )
}
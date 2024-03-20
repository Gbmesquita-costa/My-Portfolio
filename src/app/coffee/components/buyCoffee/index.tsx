"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

import { BsArrowRight } from "react-icons/bs";
import { SiBuymeacoffee } from "react-icons/si";

import { DONATION_IN_CENTS, MAX_DONATION_IN_CENTS } from "../../../../../config";

export function BuyCoffee(): JSX.Element {
    const router = useRouter()

    const [quantity, setQuantity] = useState<number>(1)

    const [name, setName] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const presets = [1, 3, 5, 7]

    const changePresetValues = (event: string) => {
        let presetValue = Number(event)

        presetValue = presetValue < 1 ? 1 : presetValue
        presetValue = presetValue > MAX_DONATION_IN_CENTS / DONATION_IN_CENTS ? MAX_DONATION_IN_CENTS / DONATION_IN_CENTS : presetValue

        setQuantity(presetValue)
    }

    const handleCheckout = async () => {
        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity,
                name: name || "Anonymous",
                message: message
            })
        })

        const url = await response.json()

        if (url.error) {
            return
        }

        const stripeUrl = url.stripeUrl
        router.push(stripeUrl)
    }

    return (
        <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            className="w-full xl:max-w-[45%] flex flex-col justify-center 
            gap-y-4 mb-20 xl:mb-0 text-center xl:text-left"
        >
            <h1 className="text-[35px] xl:text-lg leading-tight md:text-[45px] 
            md:leading-[1.3] font-semibold">
                Could you help me <span className="text-accent">buying</span> a coffee?
            </h1>
            <div className="flex items-center gap-x-4 w-full">
                <SiBuymeacoffee size={80} />

                <span>
                    X
                </span>

                {
                    presets.map((preset) => (
                        <button
                            key={preset}
                            onClick={() => setQuantity(preset)}
                            className="bg-[rgba(65,47,123,0.55)] text-white px-4 py-2 rounded"
                        >
                            {preset}
                        </button>
                    ))
                }

                <input
                    type="number"
                    id="number"
                    onChange={(event) => changePresetValues(event.target.value)}
                    value={quantity}
                    className="w-full pl-4 py-2 rounded-lg capitalize bg-transparent outline-none focus:ring-1 
                  focus:ring-accent border border-white/20"
                    min={1}
                    max={MAX_DONATION_IN_CENTS / DONATION_IN_CENTS}
                />
            </div>

            <div>
                <input
                    type="text"
                    id="name"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    placeholder="Your name (optional)"
                    className="w-full h-[52px] rounded-lg pl-4 capitalize bg-transparent outline-none focus:ring-1 
                  focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light"
                />
            </div>

            <div>
                <textarea
                    id="message"
                    onChange={(event) => setMessage(event.target.value)}
                    value={message}
                    placeholder="Thank you (optional)"
                    className="bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 
                  placeholder:text-white/30 placeholder:font-light w-full h-[180px] p-4 capitalize rounded-lg resize-none
                    overflow-y-auto scrollbar scrollbar-w-[9px] scrollbar-thumb-rounded-lg scrollbar-thumb-zinc-400
                  hover:scrollbar-thumb-zinc-500 relative"
                />
            </div>

            <button
                className="h-[52px] rounded-full border border-white/50 max-w-[190px]
                px-8 transition-all duration-300 flex items-center justify-center
                overflow-hidden hover:border-accent group"
                onClick={handleCheckout}
            >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
                transition-all duration-500">
                    Donate ${quantity * (DONATION_IN_CENTS / 100)}
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                duration-300 absolute text-[22px]"/>
            </button>
        </motion.div>
    )
}
"use client"

import { useFormStatus } from "react-dom";

import { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

import { BsArrowRight } from "react-icons/bs";
import { SiBuymeacoffee } from "react-icons/si";

import { VscLoading } from "react-icons/vsc";

import { toast } from "sonner";
import { DONATION_IN_CENTS } from "@/../config";

interface DonationFormProps {
    handleChangeQuantity: (value: string) => void;
    handleChangeName: (value: string) => void;
    handleChangeMessage: (value: string) => void;
    message: string;
    quantity: string;
    name: string;
}

export const DonationForm = ({
    handleChangeQuantity, handleChangeName,
    handleChangeMessage, name, message, quantity
}: DonationFormProps) => {
    const { pending } = useFormStatus()
    const presets = [1, 3, 5, 7]

    const handleChangePresetValues = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        if (/^(?!0\d)\d*$/.test(value)) {
            let presetValue = Number(value)

            // Ensure the value is within defined limits
            presetValue = presetValue < 1 ? 1 : presetValue
            presetValue = presetValue > 19 ? 19 : presetValue

            handleChangeQuantity(presetValue.toString())
        }
    }

    return (
        <>
            <h1 className="text-[35px] xl:text-lg leading-tight 
                md:text-[45px] md:leading-[1.3] font-semibold"
            >
                Could you help me <span className="text-accent">buying</span> a coffee?
            </h1>
            <div className="flex items-center gap-x-4 w-full">
                <SiBuymeacoffee size={75} />

                <span>
                    X
                </span>

                {
                    presets.map((preset) => (
                        <Button
                            key={preset}
                            type="button"
                            onClick={() => handleChangeQuantity(preset.toString())}
                            className="bg-[rgba(65,47,123,0.55)] text-white px-4 py-2 
                                rounded disabled:cursor-not-allowed"
                            disabled={pending}
                        >
                            {preset}
                        </Button>
                    ))
                }

                <input
                    type="text"
                    id="quantity"
                    onChange={(event) => handleChangePresetValues(event)}
                    value={quantity}
                    className="w-full pl-4 py-2 rounded-lg capitalize bg-transparent outline-none focus:ring-1 
                        focus:ring-accent border border-white/20 disabled:cursor-not-allowed"
                    min={1}
                    max={19}
                    disabled={pending}
                />
            </div>

            <input
                type="text"
                id="name"
                onChange={(event) => handleChangeName(event.target.value)}
                value={name}
                maxLength={17}
                placeholder="Your name (optional)"
                className="w-full h-[52px] rounded-lg pl-4 capitalize bg-transparent outline-none focus:ring-1 
                    focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light
                    disabled:cursor-not-allowed"
                disabled={pending}
            />

            <textarea
                id="message"
                onChange={(event) => handleChangeMessage(event.target.value)}
                value={message}
                placeholder="Thank you (optional)"
                maxLength={100}
                className="bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 
                    placeholder:text-white/30 placeholder:font-light w-full h-[180px] p-4 capitalize rounded-lg resize-none
                    overflow-y-auto scrollbar scrollbar-w-[9px] scrollbar-thumb-rounded-lg scrollbar-thumb-zinc-400
                    hover:scrollbar-thumb-zinc-500 relative disabled:cursor-not-allowed"
                disabled={pending}
            />

            <button
                type="submit"
                disabled={pending}
                className="h-[52px] rounded-full border border-white/50 w-full xl:max-w-[190px]
                    px-8 transition-all duration-300 flex items-center justify-center
                    overflow-hidden hover:border-accent group disabled:cursor-not-allowed"
            >
                {pending ? (
                    <VscLoading
                        size={27}
                        className="animate-spin text-accent"
                    />
                ) : (
                    <>
                        <span className="group-hover:-translate-y-[120%] 
                            group-hover:opacity-0 transition-all duration-500"
                        >
                            Donate ${Number(quantity) * (DONATION_IN_CENTS / 100)}
                        </span>

                        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
                            group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                            duration-300 absolute text-[22px]"
                        />
                    </>
                )}
            </button>
        </>
    )
}

export const BuyCoffee = (): JSX.Element => {
    const ref = useRef<HTMLFormElement>(null)

    const router = useRouter()
    const [quantity, setQuantity] = useState<string>("1")

    const [name, setName] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const handleCheckout = async () => {
        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: parseInt(quantity, 10),
                name: name,
                message: message
            })
        })

        const url = await response.json()

        if (!response.ok) {
            toast.error(url.message)
            return
        }

        const stripeUrl = url.stripeUrl
        router.push(stripeUrl)
    }

    const handleChangeQuantity = (value: string) => {
        setQuantity(value)
    }

    const handleChangeName = (value: string) => {
        setName(value)
    }

    const handleChangeMessage = (value: string) => {
        setMessage(value)
    }

    return (
        <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            className="w-full xl:max-w-[45%] mb-20 xl:mb-0 
            text-center xl:text-left mt-5"
        >
            <form
                ref={ref}
                action={async (formdata) => {
                    await handleCheckout()
                    ref.current?.reset()
                }}
                className="flex flex-col gap-y-3"
            >
                <DonationForm
                    handleChangeQuantity={handleChangeQuantity}
                    handleChangeName={handleChangeName}
                    handleChangeMessage={handleChangeMessage}
                    message={message}
                    quantity={quantity}
                    name={name}
                />
            </form>
        </motion.div>
    )
}
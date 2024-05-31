"use client"

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

import { toast } from "sonner";
import { DonationForm } from "../donationForm";

export const BuyCoffee = (): JSX.Element => {
    const ref = useRef<HTMLFormElement>(null)

    const router = useRouter()
    const [quantity, setQuantity] = useState<string>("1")

    const [name, setName] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const [currency, setCurrency] = useState<string>("usd")

    const handleCheckout = async () => {
        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: parseInt(quantity, 10),
                name: name,
                message: message,
                currency: currency
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

    const handleChangeCurrency = (value: string) => {
        setCurrency(value)
    }

    return (
        <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            className="w-full xl:max-w-[45%] mb-12 
            text-center xl:text-left"
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
                    handleChangeCurrency={handleChangeCurrency}
                    message={message}
                    quantity={quantity}
                    name={name}
                    currency={currency}
                />
            </form>
        </motion.div>
    )
}
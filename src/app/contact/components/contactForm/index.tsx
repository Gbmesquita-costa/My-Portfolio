"use client"

import { BsArrowRight, BsCopy } from "react-icons/bs";
import { motion } from "framer-motion";

import { fadeIn } from "@/components/variants";

import { toast } from "sonner";
import { useForm } from "react-hook-form";

interface FormWithProps {
    name: string;
    email: string;
    subjects: string;
    message: string;
}

export const ContactForm = (): JSX.Element => {
    const { register, handleSubmit } = useForm<FormWithProps>()

    const clientContact = (formData: FormWithProps): void => {
        window.location.href = `mailto:mesquitag313@gmail.com?subject=${formData.subjects}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

    const copyEmailToClipboard = (): void => {
        navigator.clipboard.writeText("mesquitag313@gmail.com").then(() => {
            toast.success("Email copied to clipboard!")
        })
    }

    return (
        <>
            <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                className="text-[35px] leading-tight md:text-[54px] md:leading-[1.3] 
                font-semibold text-center mb-12"
            >
                Let&apos;s <span className="text-accent">connect</span>
            </motion.h2>

            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
                <div className="flex gap-x-6 w-full">
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="name"
                        className="w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 
                        focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light"
                    />
                    
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="email"
                        className="w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 
                        focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light"
                    />
                </div>

                <input
                    {...register("subjects")}
                    type="text"
                    placeholder="subject"
                    className="w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent outline-none focus:ring-1 
                    focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light"
                />

                <textarea
                    {...register("message")}
                    placeholder="message"
                    className="bg-transparent outline-none focus:ring-1 
                    focus:ring-accent border border-white/20 placeholder:text-white/30 
                    placeholder:font-light w-full h-[180px] p-6 capitalize rounded-lg resize-none"
                />

                <div className="flex gap-x-4 justify-center w-full">
                    <button
                        className="h-[52px] rounded-full border border-white/50 w-full
                        px-8 transition-all duration-300 flex items-center justify-center
                        overflow-hidden hover:border-accent group"
                        type="submit"
                        onClick={handleSubmit(clientContact)}
                    >
                        <span className="group-hover:-translate-y-[120%] 
                        group-hover:opacity-0 transition-all duration-500">
                            Let&apos;s talk
                        </span>
                        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
                        group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                        duration-300 absolute text-[22px]"/>
                    </button>

                    <button
                        className="h-[52px] rounded-full border border-white/50 w-full
                        px-8 transition-all duration-300 flex items-center justify-center
                        overflow-hidden hover:border-accent group"
                        type="submit"
                        onClick={copyEmailToClipboard}
                    >
                        <span className="group-hover:-translate-y-[120%] 
                        group-hover:opacity-0 transition-all duration-500">
                            Copy my e-mail
                        </span>

                        <BsCopy className="-translate-y-[120%] opacity-0 group-hover:flex
                        group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                        duration-300 absolute text-[22px]"/>
                    </button>
                </div>
            </motion.div>
        </>
    )
}
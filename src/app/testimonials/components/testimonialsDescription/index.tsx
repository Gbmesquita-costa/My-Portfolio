"use client"

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

import {
    Swiper,
    SwiperSlide
} from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TestemonailsDetails {
    name: string;
    description: string;
    position: string;
    client_image: string;
}

interface TestemonialsDescription {
    testemonials: TestemonailsDetails[]
}

export const TestimonialsDescription = ({ testemonials }: TestemonialsDescription): JSX.Element => {
    return (
        <>
            <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                className="text-[35px] leading-tight md:text-[54px] 
                md:leading-[1.3] font-semibold mb-8 xl:mb-0"
            >
                What they say about <span className="text-accent">me...</span>
            </motion.h2>
            <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
            >
                <Swiper
                    navigation={true}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Navigation, Pagination]}
                    className="h-[490px] md:h-[480px]"
                >
                    {
                        testemonials.map(({ name, description, client_image, position }, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center 
                                    md:flex-row gap-x-8 h-full px-16"
                                >
                                    <div className="w-full max-w-[300px] flex flex-col 
                                        xl:justify-center items-center relative mx-auto xl:mx-0"
                                    >
                                        <div className="flex flex-col justify-center text-center">
                                            <div className="mb-2 mx-auto">
                                                <Image
                                                    src={client_image}
                                                    width={100}
                                                    height={100}
                                                    alt="testimonial_image"
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <div className="text-lg">
                                                {name}
                                            </div>
                                            <div className="text-[12px] uppercase 
                                                font-extralight tracking-widest"
                                            >
                                                {position}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center before:w-[1px]
                                    xl:before:bg-white/20 xl:before:absolute xl:before:left-0
                                    xl:before:h-[200px] relative xl:pl-20">
                                        <div className="mb-4">
                                            <FaQuoteLeft
                                                className="text-4xl xl:text-6xl text-white/20 mx-auto
                                        md:mx-0"
                                            />
                                        </div>
                                        <div className="xl:text-lg text-center md:text-left">
                                            {description}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </motion.div>
        </>
    )
}
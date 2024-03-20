import Image from "next/image";

import {
    Swiper,
    SwiperSlide
} from "swiper/react";

import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export function WorkSlider(): JSX.Element {
    const workSlides = {
        slides: [
            {
                images: [
                    {
                        title: 'title',
                        path: '/thumb1.jpg',
                    },
                    {
                        title: 'title',
                        path: '/thumb2.jpg',
                    },
                    {
                        title: 'title',
                        path: '/thumb3.jpg',
                    },
                    {
                        title: 'title',
                        path: '/thumb4.jpg',
                    }
                ]
            },
            {
                images: [
                    {
                        title: 'title',
                        path: '/thumb4.jpg',
                    },
                    {
                        title: 'title',
                        path: '/thumb1.jpg',
                    },
                    {
                        title: 'title',
                        path: '/thumb2.jpg',
                    },
                    {
                        title: 'title',
                        path: '/thumb3.jpg',
                    }
                ]
            }
        ]
    }

    return (
        <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-full"
        >
            {
                workSlides.slides.map(({ images }, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4">
                            {
                                images.map(({ path }, index) => (
                                    <div
                                        className="relative rounded-lg overflow-hidden flex
                                        items-center justify-center group"
                                        key={index}
                                    >
                                        <div className="flex items-center justify-center relative
                                        overflow-hidden cursor-pointer group">
                                            <Image
                                                src={path}
                                                width={500}
                                                height={300}
                                                alt="work_image"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-l
                                            from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                                            group-hover:opacity-80 transition-all duration-500"/>

                                            <div className="absolute bottom-0 translate-y-full
                                            group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                                            transition-all duration-300">
                                                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.1em]">
                                                    <div className="delay-100">
                                                        LIVE
                                                    </div>
                                                    <div className="translate-y-[500%] group-hover:translate-y-0
                                                    transition-all duration-300 delay-150">
                                                        PROJECT
                                                    </div>
                                                    <div className="text-xl translate-y-[500%]
                                                    group-hover:translate-y-0 transition-all duration-300
                                                    delay-200">
                                                        <BsArrowRight />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
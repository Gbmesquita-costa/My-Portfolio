import Link from "next/link";

import {
    Swiper,
    SwiperSlide
} from "swiper/react";

import {
    FreeMode,
    Pagination
} from "swiper/modules";

import {
    RxDesktop,
    RxRocket,
    RxArrowTopRight
} from "react-icons/rx";

import { TbSeo } from "react-icons/tb";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const ServiceSlider = (): JSX.Element => {
    const serviceData = [
        {
            icon: <RxDesktop />,
            title: "Development",
            description: "Custom solutions development to meet the specific needs of your project. I m here to turn your ideas into reality.",
            link: "https://brainstation.io/career-guides/what-is-web-development"
        },
        {
            icon: <RxRocket />,
            title: "Deployment",
            description: "I manage the entire process, ensuring your projects are ready to launch  quickly and effectively.",
            link: "https://umbraco.com/knowledge-base/deployment"
        },
        {
            icon: <TbSeo />,
            title: "SEO",
            description: "Increase your ranking on search engines and attract more organic traffic & visibility to your website.",
            link: "https://searchengineland.com/guide/what-is-seo"
        }
    ]

    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className="h-[240px] sm:h-[340px]"
        >
            {
                serviceData.map(({ description, icon, title, link }, index) => (
                    <SwiperSlide key={index}>
                        <Link
                            href={link}
                            className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
                            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
                            transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="text-4xl text-accent mb-4">
                                {icon}
                            </div>
                            <div className="mb-8">
                                <div className="mb-2 text-lg">
                                    {title}
                                </div>
                                <p className="max-w-[350px] leading-normal">
                                    {description}
                                </p>
                            </div>
                            <div className="text-3xl">
                                <RxArrowTopRight className="group-hover:rotate-45
                                group-hover:text-accent transition-all duration-300"/>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
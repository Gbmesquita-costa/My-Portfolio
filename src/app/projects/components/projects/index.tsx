"use client"

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { RiGithubLine } from "react-icons/ri";

import { FaExpand } from "react-icons/fa6";
import Lightbox from "react-image-lightbox";

import { IoRocketOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

import { Pagination, Navigation } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "@/components/variants";
import { ScrollArea } from "@/components/ui/scroll-area";

import "react-image-lightbox/style.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectDetails {
    name: string;
    deployUrl: string;
    description: string;
    gifimage_url: string;
    githubRepo: string;
    thumbnail: string;
}

interface ProjectsProps {
    projects: ProjectDetails[];
}

export const Projects = ({ projects }: ProjectsProps): JSX.Element => {
    const [isLightBoxOpen, setIsLightBoxOpen] = useState<boolean>(false)

    const [lightboxImage, setLightboxImage] = useState<string>("")
    const [openModals, setOpenModals] = useState<{ [key: string]: boolean }>({})

    // Split projects into chunks of 4
    const projectChunks = []

    for (let i = 0; i < projects.length; i += 4) {
        projectChunks.push(projects.slice(i, i + 4))
    }

    const handleOpenModal = (name: string) => {
        setOpenModals((prev) => ({ ...prev, [name]: true }))
    }

    const handleCloseModal = (name: string) => {
        setOpenModals((prev) => ({ ...prev, [name]: false }))
    }

    return (
        <>
            <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                animate="show"
                className="w-full xl:max-w-[95%]"
            >
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="h-full"
                >
                    {projectChunks.map((chunk, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                {chunk.map(({ name, thumbnail, description, gifimage_url, deployUrl, githubRepo }) => (
                                    <div
                                        key={name}
                                        className="relative rounded-lg overflow-hidden 
                                        flex items-center justify-center group"
                                    >
                                        <Dialog
                                            open={!!openModals[name]}
                                            onOpenChange={(open) => open ? handleOpenModal(name) : handleCloseModal(name)}
                                        >
                                            <DialogTrigger>
                                                <div className="flex items-center justify-center 
                                                    relative overflow-hidden cursor-pointer group"
                                                >
                                                    <Image
                                                        src={thumbnail}
                                                        width={900}
                                                        height={200}
                                                        alt="work_image"
                                                        loading="lazy"
                                                        quality={85}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent 
                                                        via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 
                                                        transition-all duration-500"
                                                    />
                                                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 
                                                        group-hover:xl:-translate-y-28 transition-all duration-300"
                                                    >
                                                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.1em]">
                                                            <div className="delay-100">LIVE</div>
                                                            <div className="translate-y-[500%] group-hover:translate-y-0 
                                                                transition-all duration-300 delay-150"
                                                            >
                                                                PROJECT
                                                            </div>
                                                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 
                                                                transition-all duration-300 delay-200"
                                                            >
                                                                <BsArrowRight />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogTrigger>
                                            <DialogContent className="text-white bg-white/10 backdrop-blur-xl border-none max-w-xl">
                                                <DialogHeader>
                                                    <DialogTitle className="mb-3 flex gap-x-2">
                                                        {name}
                                                        {githubRepo && (
                                                            <>
                                                                <span>|</span>
                                                                <Link
                                                                    href={githubRepo}
                                                                    className="hover:text-accent 
                                                                    transition-all duration-300"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <RiGithubLine />
                                                                </Link>
                                                            </>
                                                        )}
                                                        {deployUrl && (
                                                            <>
                                                                <span>|</span>
                                                                <Link
                                                                    href={deployUrl}
                                                                    className="hover:text-accent 
                                                                    transition-all duration-300"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <IoRocketOutline />
                                                                </Link>
                                                            </>
                                                        )}
                                                    </DialogTitle>
                                                    <ScrollArea className="h-72 scrollbar">
                                                        {description.split("||").map((paragraph, index) => (
                                                            <p className="mb-6 text-slate-300 pr-3" key={index}>
                                                                {paragraph.trim()}
                                                            </p>
                                                        ))}
                                                    </ScrollArea>
                                                </DialogHeader>
                                                <div className="relative">
                                                    <div
                                                        className="absolute right-2 top-2 cursor-pointer 
                                                        backdrop-blur-xl p-1 rounded-md"
                                                        onClick={() => {
                                                            setLightboxImage(gifimage_url)

                                                            setIsLightBoxOpen(true)
                                                            handleCloseModal(name)
                                                        }}
                                                    >
                                                        <FaExpand className="text-zinc-900" size={20} />
                                                    </div>
                                                    <Image
                                                        src={gifimage_url}
                                                        height={250}
                                                        width={250}
                                                        alt="project"
                                                        className="rounded-sm w-full"
                                                        loading="lazy"
                                                        quality={80}
                                                    />
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            {isLightBoxOpen && (
                <Lightbox
                    mainSrc={lightboxImage}
                    onCloseRequest={() => setIsLightBoxOpen(false)}
                />
            )}
        </>
    )
}
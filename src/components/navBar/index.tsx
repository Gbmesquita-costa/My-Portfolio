"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope
} from 'react-icons/hi2';

import { SiBuymeacoffee } from "react-icons/si";

export function NavBar(): JSX.Element {
    const searchParams = usePathname()

    const navData = [
        { name: 'home', path: '/', icon: <HiHome /> },
        { name: 'about', path: '/about', icon: <HiUser /> },
        { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
        { name: 'work', path: '/work', icon: <HiViewColumns /> },
        {
            name: 'testimonials',
            path: '/testimonials',
            icon: <HiChatBubbleBottomCenterText />
        },
        {
            name: 'contact',
            path: '/contact',
            icon: <HiEnvelope />
        },
        { name: 'cofee', path: '/coffee', icon: <SiBuymeacoffee /> }
    ]

    return (
        <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed 
        h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md
        xl:h-screen"
        >
            <div className="flex w-full xl:flex-col items-center justify-between
            xl:justify-center gap-y-10 gap-x-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max
            py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full overflow-x-auto overflow-y-hidden"
            >
                {
                    navData.map(({ path, icon, name }, index) => (
                        <Link
                            className={`${searchParams === path && "text-accent"} 
                            relative flex items-center group hover:text-accent transition-all duration-200`}
                            href={path}
                            key={index}
                        >
                            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex transition-all">
                                <div className="bg-white relative flex text-primary items-center 
                                p-[6px] rounded-[3px]">
                                    <div className="text-[12px] leading-none font-semibold capitalize">
                                        {name}
                                    </div>
                                    <div className="border-solid border-l-white border-l-8 border-y-transparent
                                    border-y-[6px] border-r-0 absolute -right-2"/>
                                </div>
                            </div>
                            <div>
                                {icon}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}
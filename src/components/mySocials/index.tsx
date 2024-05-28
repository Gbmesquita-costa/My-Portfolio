import Link from "next/link";

import {
    RiInstagramLine,
    RiGithubLine,
    RiFacebookLine,
    RiLinkedinLine
} from "react-icons/ri";

export const MySocials = (): JSX.Element => {
    const socials = [
        { href: "https://www.instagram.com/gb.mesquita", icon: <RiInstagramLine /> },
        { href: "https://github.com/Gbmesquita-costa", icon: <RiGithubLine /> },
        { href: "https://www.linkedin.com/in/gabriel-mesquita-635600223/", icon: <RiLinkedinLine /> },
        { href: "https://www.facebook.com/don.gabrielmesquita", icon: <RiFacebookLine /> }
    ]

    return (
        <div className="flex items-center gap-x-5 text-xl">
            {
                socials.map(({ href, icon }, index) => (
                    <Link
                        key={index}
                        href={href}
                        className="hover:text-accent transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {icon}
                    </Link>
                ))
            }
        </div>
    )
}
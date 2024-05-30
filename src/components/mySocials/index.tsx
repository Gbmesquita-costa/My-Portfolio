import Link from "next/link";

import {
    RiInstagramLine,
    RiGithubLine,
    RiFacebookLine,
    RiLinkedinLine
} from "react-icons/ri";

export const MySocials = (): JSX.Element => {
    const socials = [
        { href: "https://www.instagram.com/gb.mesquita", icon: <RiInstagramLine />, name: "my instagram" },
        { href: "https://github.com/Gbmesquita-costa", icon: <RiGithubLine />, name: "my github" },
        { href: "https://www.linkedin.com/in/gabriel-mesquita-635600223/", icon: <RiLinkedinLine />, name: "my linkedin" },
        { href: "https://www.facebook.com/don.gabrielmesquita", icon: <RiFacebookLine />, name: "my facebook" }
    ]

    return (
        <div className="flex items-center gap-x-5 text-xl">
            {
                socials.map(({ href, icon, name }, index) => (
                    <Link
                        key={index}
                        href={href}
                        className="hover:text-accent transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                    >
                        {icon}
                    </Link>
                ))
            }
        </div>
    )
}
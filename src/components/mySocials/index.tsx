import Link from "next/link";
import {
    RiInstagramLine,
    RiGithubLine,
    RiFacebookLine,
    RiLinkedinLine
} from "react-icons/ri"

export function MySocials(): JSX.Element {
    return (
        <div className="flex items-center gap-x-5 text-xl">
            <Link href={""} className="hover:text-accent transition-all duration-300">
                <RiInstagramLine />
            </Link>
            <Link href={""} className="hover:text-accent transition-all duration-300">
                <RiGithubLine />
            </Link>
            <Link href={""} className="hover:text-accent transition-all duration-300">
                <RiLinkedinLine />
            </Link>
            <Link href={""} className="hover:text-accent transition-all duration-300">
                <RiFacebookLine />
            </Link>
        </div>
    )
}
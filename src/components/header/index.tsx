import Link from "next/link";
import Image from "next/image";

import { MySocials } from "../mySocials";

export function Header(): JSX.Element {
    return (
        <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6
                py-8">
                    <Link href="/">
                        <Image
                            src="/logo.svg"
                            width={220}
                            height={40}
                            alt="logo_image"
                            priority={true}
                        />
                    </Link>

                    <MySocials/>   
                </div>
            </div>
        </header>
    )   
}
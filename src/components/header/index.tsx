import Link from "next/link";
import { MySocials } from "../mySocials";

export const Header = (): JSX.Element => {
    return (
        <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6
                py-8">
                    <Link href="/">
                        <div className="flex gap-x-2 items-center">
                            <h1 className="leading-tight text-3xl font-bold">
                                Gabriel
                            </h1>

                            <p className="leading-tight text-3xl">
                                Mesquita
                            </p>
                        </div>
                    </Link>

                    <MySocials />
                </div>
            </div>
        </header>
    )
}
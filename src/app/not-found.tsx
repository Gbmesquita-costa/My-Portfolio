import { Metadata } from "next";
import { NotFoundHandling } from "@/components/pageHandlings/notFoundHandling";

export const metadata: Metadata = {
    title: "Page not found 404",
    description: "The page you are looking for was not found | Page not found 404"
}

const NotFound = (): JSX.Element => {
    return (
        <div className="flex bg-primary/30 min-h-screen 
            w-full flex-col items-center justify-center 
            py-40 xl:py-20"
        >
            <div className="container flex flex-col 
                justify-center items-center"
            >
                <NotFoundHandling/>
            </div>
        </div>
    )
}

export default NotFound
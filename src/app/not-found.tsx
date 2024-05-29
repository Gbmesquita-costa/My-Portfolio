import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page not found 404",
    description: "The page that you are looking for was not found | Page not found 404"
}

const NotFound = (): JSX.Element => {
    return (
        <h1>
            Page Not Found : (
        </h1>
    )
}

export default NotFound
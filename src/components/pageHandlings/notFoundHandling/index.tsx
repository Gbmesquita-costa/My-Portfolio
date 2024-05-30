"use client"

import dynamic from "next/dynamic";

const LazyLoadedAnimation = dynamic(
    () => import("./lottie").then((response) => {
        return response.Animation
    }), {
    loading: () => <div>Loading Animation...</div>,
    ssr: false
})

export const NotFoundHandling = () => {
    return (
        <>
            <h1 className="text-4xl md:text-5xl font-semibold text-center">
                Page Not Found  | 404
            </h1>

            <p className="mt-4 text-lg text-zinc-200">
                The page you are looking for was not found
            </p>

            <div className="max-w-[470px]">
                <LazyLoadedAnimation />
            </div>
        </>
    )
}
"use client"

import Lottie from "react-lottie";
import Animation from "@/assets/lottie/404.json";

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
                <Lottie
                    style={{ cursor: "auto" }}
                    isClickToPauseDisabled={true}
                    options={{
                        autoplay: true,
                        loop: true,
                        animationData: Animation
                    }}
                />
            </div>
        </>
    )
}
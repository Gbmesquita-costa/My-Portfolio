import Image from "next/image";

export const Circles = (): JSX.Element => {
    return (
        <div className="w-[200px] hidden xl:flex xl:w-[300px] absolute 
            -right-16 -bottom-2 mix-blend-color-dodge animate-pulse z-10"
        >
            <Image
                src={"/circles.webp"}
                width={260}
                height={200}
                alt="circles_image"
                className="w-full h-full"
                loading="lazy"
                quality={80}
            /> 
        </div>
    )
}
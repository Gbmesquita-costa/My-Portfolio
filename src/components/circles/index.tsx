import Image from "next/image";

export const Circles = (): JSX.Element => {
    return (
        <div className="w-[200px] hidden xl:flex xl:w-[300px] absolute -right-16 -bottom-2
        mix-blend-color-dodge animate-pulse duration-[2000ms] z-10">
            <Image
                src={"/circles.png"}
                width={260}
                height={200}
                alt="circles_image"
                className="w-full h-full"
            /> 
        </div>
    )
}
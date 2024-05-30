import Image from "next/image";

export const TopLeftImage = (): JSX.Element => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge 
      z-10 w-[200px] xl:w-[400px]"
    >
      <Image
        src={"/topLeftImage.webp"}
        width={400}
        height={400}
        alt="topLeftImage"
        loading="lazy"
        quality={80}
      />
    </div>
  )
}
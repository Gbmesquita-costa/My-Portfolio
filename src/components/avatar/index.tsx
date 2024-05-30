import Image from "next/image";
import avatarImage from "@/assets/avatar/avatar.webp";

export const Avatar = (): JSX.Element => {
  return (
    <div className="hidden xl:flex 
      xl:max-w-none w-[600px] h-[600px]"
    >
      <Image
        src={avatarImage}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px), 50vw, 33vw"
        fill
        alt="avatar_image"
        className="object-cover"
        loading="lazy"
      />
    </div>
  )
}
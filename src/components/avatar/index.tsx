import Image from "next/image";
import avatarImage from "@/assets/avatar/avatar.png";

export const Avatar = (): JSX.Element => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
        <Image
          src={avatarImage}
          width={500}
          height={500}
          alt="avatar_image"
          className="translate-z-0 w-full h-full"
        />
    </div>
  )
}
import Image from "next/image";

export function Avatar(): JSX.Element {
  return (
    <div className="hidden xl:flex xl:max-w-none">
        <Image
          src="/avatar.png"
          width={737}
          height={678}
          alt="avatar_image"
          className="translate-z-0 w-full h-full"
        />
    </div>
  )
}
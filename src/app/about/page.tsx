import { Metadata } from "next";
import { Circles } from "@/components/circles";

import { AboutDescription } from "./components/aboutDescription";
import { Experiences } from "./components/experiences";

import { MotionAvatar } from "./components/motionAvatar";

export const metadata: Metadata = {
  title: "About",
  description: "My Portfolio About me"
}

const About = (): JSX.Element => {
  return (
    <div className="flex bg-primary/30 min-h-screen w-full flex-col items-center 
    justify-center pt-56 pb-14 xl:py-20 text-center xl:text-left">
      <Circles />
      <MotionAvatar />

      <div className="container mx-auto h-full flex 
        flex-col items-center xl:flex-row gap-x-10 z-50"
      >
        <AboutDescription />
        <Experiences />
      </div>
    </div>
  )
}

export default About
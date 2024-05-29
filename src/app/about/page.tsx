import { Metadata } from "next";
import { Circles } from "@/components/circles";

import { AboutDescription } from "./components/aboutDescription";
import { Experiences } from "./components/experiences";

import { MotionAvatar } from "./components/motionAvatar";

export const metadata: Metadata = {
  title: "About",
  description: `
    With 4 years of freelancing experience, I've contributed to diverse digital products, leveraging my expertise in 
    front-end and back-end technologies. Explore my skills, credentials, and passions to get to know me better!
  `,
  robots: {
    index: true,
    follow: true
  }
}

const About = (): JSX.Element => {
  return (
    <div className="flex bg-primary/30 min-h-screen w-full flex-col items-center 
    justify-center py-40 xl:py-20 text-center xl:text-left">
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
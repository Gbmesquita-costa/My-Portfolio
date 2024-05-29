import { Metadata } from "next";
import { Circles } from "@/components/circles";

import { ServicesDescription } from "./components/servicesDescription";

export const metadata: Metadata = {
  title: "Services",
  description: `
    Explore a range of comprehensive services designed to elevate your project to new heights. 
    From custom development solutions tailored to your specific needs, to seamless deployment processes 
    ensuring quick and effective launches, and cutting-edge SEO strategies to boost your website's visibility 
    and organic traffic. Let's collaborate to take your digital presence to the next level!
  `,
  robots: {
    index: true,
    follow: true
  }
}

const Services = (): JSX.Element => {
  return (
    <div className="flex bg-primary/30 min-h-screen 
      w-full flex-col items-center justify-center py-40 xl:py-20"
    >
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <ServicesDescription />
        </div>
      </div>
      <Circles />
    </div>
  )
}

export default Services
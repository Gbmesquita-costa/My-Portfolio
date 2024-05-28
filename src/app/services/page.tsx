import { Metadata } from "next";
import { Circles } from "@/components/circles";

import { ServicesDescription } from "./components/servicesDescription";

export const metadata: Metadata = {
  title: "Services",
  description: "My Portfolio | Services"
}

const Services = (): JSX.Element => {
  return (
    <div className="flex bg-primary/30 min-h-screen w-full flex-col 
    items-center justify-center py-40 xl:py-20">
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
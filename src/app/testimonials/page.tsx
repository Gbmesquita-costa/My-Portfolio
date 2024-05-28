import { Metadata } from "next";
import { TestimonialsDescription } from "./components/testimonialsDescription";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "My Portfolio | Testimonials"
}

const Testimonials = (): JSX.Element => {
  return (
    <div className="flex bg-primary/30 min-h-screen w-full flex-col 
    items-center justify-center py-40 xl:py-20 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <TestimonialsDescription />
      </div>
    </div>
  )
}

export default Testimonials
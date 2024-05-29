import { Metadata } from "next";
import { TestimonialsDescription } from "./components/testimonialsDescription";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "My Portfolio | Testimonials"
}

interface TestemonailsDetails {
  name: string;
  description: string;
  position: string;
  client_image: string;
}

interface TestemonialsProps {
  testemonials: TestemonailsDetails[]
}

const Testimonials = async (): Promise<JSX.Element> => {
  const response = await fetch("http://localhost:3000/api/testemonials", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    cache: "no-store"
  })

  const { testemonials } = await response.json() as TestemonialsProps

  return (
    <div className="flex bg-primary/30 min-h-screen w-full flex-col 
    items-center justify-center py-40 xl:py-20 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {
          !testemonials.length ? (
            <h2 className="text-2xl -mt-6">
              No testimonials found : (
            </h2>
          ) : (
            <TestimonialsDescription
              testemonials={testemonials}
            />
          )
        }
      </div>
    </div>
  )
}

export default Testimonials
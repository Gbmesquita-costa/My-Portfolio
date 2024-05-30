import { Metadata } from "next";

import { http } from "@/services/httpRequest";
import { TestimonialsDescription } from "./components/testimonialsDescription";

interface TestemonailsDetails {
  name: string;
  description: string;
  position: string;
  client_image: string;
}

interface TestemonialsProps {
  testemonials: TestemonailsDetails[]
}

export const metadata: Metadata = {
  title: "Testimonials",
  description: `
    Discover what my clients, partners, and collaborators have to say about working with me. Explore a collection 
    of testimonials highlighting their experiences, feedback, and satisfaction with my services. From glowing reviews 
    to personal anecdotes, these testimonials provide insights into the quality of my work and the relationships I build 
    with my clients. Let their words speak to the value I bring to every project!
  `,
  robots: {
    index: true,
    follow: true
  }
}

const Testimonials = async (): Promise<JSX.Element> => {
  const request = `${http}/api/testemonials`

  const response = await fetch(request, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    cache: "no-store"
  })

  const { testemonials } = await response.json() as TestemonialsProps

  return (
    <div className="flex bg-primary/30 min-h-screen w-full flex-col 
      items-center justify-center py-40 xl:py-20 text-center"
    >
      <div className="container mx-auto 
        h-full flex flex-col justify-center"
      >
        {
          !testemonials.length ? (
            <h2 className="text-2xl -mt-6">
              No testimonials found 😢
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
import { Metadata } from "next";
import { ContactForm } from "./components/contactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "My Portfolio | Contact"
}

const Contact = (): JSX.Element => {
  return (
    <div className="flex bg-primary/30 min-h-screen 
      w-full flex-col items-center justify-center py-16 xl:py-20"
    >
      <div className="container mx-auto py-32 text-center 
        xl:text-left flex items-center justify-center h-full"
      >
        <div className="flex flex-col w-full max-w-[700px]">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
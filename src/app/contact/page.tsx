import { Metadata } from "next";
import { ContactForm } from "./components/contactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `
    Reach out and connect with me to discuss your project ideas, collaborations, or any inquiries you may have. 
    Whether you're a potential client, partner, or simply want to say hello, I'm here to listen and assist you 
    in any way I can. Let's start a conversation and work together to bring your vision to life!
  `,
  robots: {
    index: true,
    follow: true
  }
}

const Contact = (): JSX.Element => {
  return (
    <div className="flex bg-primary/30 min-h-screen 
      w-full flex-col items-center justify-center py-10 xl:py-20"
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
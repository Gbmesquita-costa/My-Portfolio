import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import { NavBar } from "@/components/navBar";

import { TopLeftImage } from "@/components/topLeftImage";
import { TransitionProvider } from "@/providers/transitionProvider";

import { http } from "@/services/httpRequest";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(http),
  title: {
    default: "My Portfolio | Gabriel Mesquita da Costa",
    template: "My Portfolio | %s"
  },
  description: `
    Gabriel Mesquita da Costa - Full Stack Developer specialized in Website and Software development. With a 
    passion for creating innovative digital solutions that enhance user experience and drive business success, 
    I collaborate with companies to turn digital ideas into reality. Explore my projects and let's work together!
  `,
  twitter: {
    card: "summary_large_image"
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <TransitionProvider>
          <main className="relative w-full h-screen 
            xl:overflow-hidden text-white overflow-y-auto"
          >
            <TopLeftImage />
            <Header />
            {children}
            <NavBar />
          </main>
        </TransitionProvider>
      </body>
    </html>
  )
}
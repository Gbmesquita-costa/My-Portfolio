import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import { NavBar } from "@/components/navBar";

import { TopLeftImage } from "@/components/topLeftImage";
import { TransitionProvider } from "@/providers/transitionProvider";

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "My Portfolio | Gabriel Mesquita da Costa",
    template: "My Portfolio | %s"
  },
  description: "My Portfolio | Gabriel Mesquita da Costa",
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
    <html lang="en-US" suppressHydrationWarning>
      <body className={inter.className}>
        <TransitionProvider>
          <main className="relative w-full h-screen xl:overflow-hidden text-white overflow-y-auto">
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
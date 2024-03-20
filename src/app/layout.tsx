import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/components/header";
import { NavBar } from "@/components/navBar";

import { TopLeftImage } from "@/components/topLeftImage";
import { TransitionProvider } from "@/providers/transitionProvider";

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Portfolio | Gabriel Mesquita da Costa",
  description: "My Portfolio | Gabriel Mesquita da Costa"
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
            <NavBar />
            <Header />
            {children}
          </main>
        </TransitionProvider>
      </body>
    </html>
  )
}
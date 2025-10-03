import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ScrollRestoration } from "@/components/scroll-restoration"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hey, I'm Pablo",
  description: "Personal portfolio and project showcase",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollRestoration />
        <Navigation />
        {children}
      </body>
    </html>
  )
}


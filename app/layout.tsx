import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Azraq Web Agency - AI-Powered Web Development",
  description:
    "Modern web applications built with AI. Full-stack development, AI integration, and MVP development for startups.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="azraq-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

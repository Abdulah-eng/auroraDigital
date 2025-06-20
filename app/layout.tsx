import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aurora Digital - AI-Powered Web Development",
  description:
    "Modern web applications built with AI. Full-stack development, AI integration, and MVP development for startups.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Basic favicon (ICO format) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Modern SVG favicon (optional) */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Apple Touch Icon (for iOS devices) */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* PWA Manifest (optional) */}
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="aurora-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

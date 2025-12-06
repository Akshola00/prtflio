import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akinshola Akinniyi | Full-Stack Engineer | Rust Specialist",
  description:
    "Portfolio of Akinshola Akinniyi, a full-stack software engineer specializing in Rust, systems engineering, and blockchain development with Cairo, ZK-STARKs, and Stellar Soroban.",
  keywords: [
    "Rust",
    "Systems Engineering",
    "Backend Development",
    "React",
    "Next.js",
    "Cairo",
    "ZK-STARKs",
    "Stellar Soroban",
    "Open Source",
    "Blockchain",
  ],
  authors: [{ name: "Akinshola Akinniyi" }],
  openGraph: {
    title: "Akinshola Akinniyi | Full-Stack Engineer | Rust Specialist",
    description: "Building efficient systems and backend services with Rust",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

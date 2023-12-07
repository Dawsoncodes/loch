import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Loch app",
  description: "Get notified when whales move crypto",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-white")}>{children}</body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SafenodeX - Smart. Secure. Seamless.",
  description:
    "Next-generation software development focused on building smart, secure, and intelligent digital solutions for businesses.",
  creator: 'Edward'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="safenodex-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

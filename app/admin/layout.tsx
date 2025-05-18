import type React from "react"
import { redirect } from "next/navigation"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This is a simple example of protecting admin routes
  // In a real application, you would implement proper authentication
  // and authorization checks here

  // For now, we'll just check if we're in development mode
  const isDevelopment = process.env.NODE_ENV === "development"

  // In production, you would check for admin authentication
  if (!isDevelopment) {
    // Redirect to home page if not authenticated
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-6">
          <h1 className="text-xl font-semibold text-gray-800">SafenodeX Admin</h1>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

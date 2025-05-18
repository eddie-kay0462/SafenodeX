import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server-simple"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    try {
      // Create Supabase server client
      const supabase = createServerClient()

      // Insert the message into the database
      const { data, error } = await supabase
        .from("contact_messages")
        .insert([{ name, email, subject, message }])
        .select()

      if (error) {
        console.error("Error submitting contact form:", error)
        return NextResponse.json({ error: "Failed to submit message. Please try again later." }, { status: 500 })
      }

      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully!",
      })
    } catch (supabaseError) {
      console.error("Supabase connection error:", supabaseError)
      return NextResponse.json({ error: "Database connection error. Please try again later." }, { status: 500 })
    }
  } catch (error) {
    console.error("Error in contact form submission:", error)
    return NextResponse.json({ error: "An unexpected error occurred. Please try again later." }, { status: 500 })
  }
}

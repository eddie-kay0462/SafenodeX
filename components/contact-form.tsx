"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormState {
  loading: boolean
  success: boolean
  error: string | null
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formState, setFormState] = useState<FormState>({
    loading: false,
    success: false,
    error: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset form state
    setFormState({ loading: true, success: false, error: null })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form")
      }

      // Success
      setFormState({
        loading: false,
        success: true,
        error: null,
      })

      // Reset form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Automatically hide success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, success: false }))
      }, 3000)
    } catch (error) {
      setFormState({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : "An unexpected error occurred",
      })
    }
  }

  return (
    <Card className="bg-[#1A2A4A] border-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        {formState.success ? (
          <div className="bg-green-900/20 border border-green-800 rounded-md p-4 flex items-start gap-3 mb-6">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-green-500">Message Sent!</h4>
              <p className="text-green-300 text-sm mt-1">
                Thank you for contacting us. We'll get back to you as soon as possible.
              </p>
              <Button
                className="mt-4 bg-green-700 hover:bg-green-800 text-white"
                onClick={() => setFormState((prev) => ({ ...prev, success: false }))}
              >
                Send Another Message
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {formState.error && (
              <div className="bg-red-900/20 border border-red-800 rounded-md p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-500">Error</h4>
                  <p className="text-red-300 text-sm mt-1">{formState.error}</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-[#14213D] border-[#14213D] text-white placeholder-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Your email"
                  className="bg-[#14213D] border-[#14213D] text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-white">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-[#14213D] border-[#14213D] text-white placeholder-gray-400"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="min-h-[120px] bg-[#14213D] border-[#14213D] text-white placeholder-gray-400"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white"
              disabled={formState.loading}
            >
              {formState.loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

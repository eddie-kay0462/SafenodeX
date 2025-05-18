import { createServerClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"

export const dynamic = "force-dynamic"

export default async function MessagesPage() {
  const supabase = createServerClient()

  const { data: messages, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching messages:", error)
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>Error loading messages. Please try again later.</p>
        </div>
      )}

      {messages && messages.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No messages yet.</p>
        </div>
      )}

      <div className="grid gap-6">
        {messages?.map((message: { id: string; subject: string; name: string; email: string; created_at: string; message: string }) => (
          <Card key={message.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{message.subject}</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">
                    From: {message.name} ({message.email})
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  {formatDistanceToNow(new Date(message.created_at), { addSuffix: true })}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{message.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

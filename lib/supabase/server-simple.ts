import { createClient } from "@supabase/supabase-js"

// Simple Supabase client for server-side operations without cookie handling
export function createServerClient() {
  // Make sure environment variables are defined
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase environment variables are not set. Please check your .env file or Vercel environment variables.",
    )
  }

  // Create a basic Supabase client without cookie handling
  return createClient(supabaseUrl, supabaseKey)
}

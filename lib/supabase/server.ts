import { createClient } from "@supabase/supabase-js"

// Create a Supabase client for server-side operations
export function createServerClient() {
  // Make sure environment variables are defined
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase environment variables are not set. Please check your .env file or Vercel environment variables.",
    )
  }

  // Create the Supabase client with the correct options structure
  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

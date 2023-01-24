import { headers, cookies } from "next/headers"
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs"

export const createServerClient = () =>{
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  })
  return supabase;
}

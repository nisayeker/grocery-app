import "server-only"
import { headers, cookies } from "next/headers"
import { PropsWithChildren } from "react"
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs"

import "../styles/globals.css"
import SupabaseProvider from "@/components/supabase/supabase-provider"
import SupabaseListener from "@/components/supabase/supabase-listener"

const RootLayout = async ({ children }: PropsWithChildren) => {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html>
      <body>
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  )
}

export default RootLayout

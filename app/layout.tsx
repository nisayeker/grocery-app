import SupabaseListener from "@/components/supabase/SupabaseListener"
import SupabaseProvider from "@/components/supabase/SupabaseProvider"
import { createServerClient } from "@/utils/supabase-server"

import "./globals.css"

export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="tr">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <>
          <SupabaseProvider session={session}>
            <SupabaseListener serverAccessToken={session?.access_token} />
            {children}
          </SupabaseProvider>
        </>
      </body>
    </html>
  )
}

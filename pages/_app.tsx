import AuthWrapper from "@/components/Wrapper/AuthWrapper"
import Mantine from "@/components/Wrapper/Mantine"
import "@/styles/globals.css"
import { CustomAppProps } from "@/types/types"
import {
  createBrowserSupabaseClient,
  createServerSupabaseClient,
} from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { GetServerSidePropsContext } from "next"
import { useState } from "react"

export default function App({ Component, pageProps }: CustomAppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Mantine>
        <AuthWrapper>
          {Component.Layout ? (
            <Component.Layout>
              <Component {...pageProps} />
            </Component.Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </AuthWrapper>
      </Mantine>
    </SessionContextProvider>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx)
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return {
    props: {
      initialSession: session,
    },
  }
}

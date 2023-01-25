import type { NextPage } from "next"
import type { AppProps } from "next/app"
import type { Session } from "@supabase/auth-helpers-react"
import { FC, ReactElement, ReactNode } from "react"

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  Layout?: FC<object>
}

export type CustomAppProps = AppProps<{
  initialSession: Session
}> & {
  Component: NextPageWithLayout
}

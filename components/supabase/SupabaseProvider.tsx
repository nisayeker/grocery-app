"use client"
import { createBrowserClient } from "@/utils/supabase-browser"
import type { Session, SupabaseClient } from "@supabase/auth-helpers-nextjs"

import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react"
type MaybeSession = Session | null

type SupabaseContext = {
  supabase: SupabaseClient
  session: MaybeSession
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Context = createContext<SupabaseContext>()

type ContextProps = PropsWithChildren<{
  session: MaybeSession
}>

const SupabaseProvider: FC<ContextProps> = ({ children, session }) => {
  const [supabase] = useState(() => createBrowserClient())

  return (
    <Context.Provider value={{ supabase, session }}>
      {children}
    </Context.Provider>
  )
}

export default SupabaseProvider

export const useSupabase = () => useContext(Context)

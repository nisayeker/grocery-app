'use client'

import { createBrowserClient } from "@/utils/supabase-browser"
import { useRouter } from "next/navigation"
import { FC, useEffect } from "react"

const SupabaseListener: FC<{ serverAccessToken?: string }> = ({
  serverAccessToken,
}) => {
  const supabase = createBrowserClient()
  const router = useRouter()

  useEffect(() => {
    const  {
      data: { subscription}
    } = supabase.auth.onAuthStateChange((event,session) => {
      if(session?.access_token !== serverAccessToken){
        router.refresh();
      }
    })

    return () => {
      subscription.unsubscribe();
    }
  }, [serverAccessToken, router, supabase])
  return null;
}


export default SupabaseListener;

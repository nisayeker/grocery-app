"use client"
import { useSupabase } from "@/components/supabase/SupabaseProvider"

const LoginPage = () => {
  const { supabase, session } = useSupabase()

  const handleGoogleLogin = async () => {
    console.log("asd")
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      
    }) 

    if (error) {
      console.error(error)
    }
  }

  return (
    <>
      <button onClick={() => handleGoogleLogin()}>Google Login</button> 
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  )
}

export default LoginPage

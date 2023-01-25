import { useSupabaseClient } from "@supabase/auth-helpers-react";

const LoginPage = () => {
  const supabase = useSupabaseClient()

  const handleGoogleLogin = async () => {
      const { error, data } = await supabase.auth.signInWithOAuth({ provider: "google" });
  }

  return <>
  <button onClick={handleGoogleLogin}>
    Sign in with Google
  </button>
  </>
}

export default LoginPage;

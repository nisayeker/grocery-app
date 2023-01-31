"use client"
import { supabaseClient } from "@/components/Wrapper/SupabaseWrapper"
import Link from "next/link"

const MainApp = () => {
  const handleSignout = async () => {
    await supabaseClient.auth.signOut()
  }
  return (
    <>
      <button onClick={handleSignout}>Logout</button>
      <Link href={"dashboard/accounts"}>Account</Link>
    </>
  )
}

export default MainApp

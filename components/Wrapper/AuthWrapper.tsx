import { useSessionContext } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"

const AuthWrapper: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const { session, isLoading } = useSessionContext()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!session && !router.asPath.startsWith("/login")) {
    router.replace("/login")
    return null
  }

  if (session && router.asPath.startsWith("/login")) {
    router.replace("/")
    return null
  }
  return <>{children}</>
}

export default AuthWrapper;

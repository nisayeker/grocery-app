import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { NextRequest, NextResponse } from "next/server"

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient({ req, res })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  console.log(session);
  return res
}

export const config = {
  matcher: ["/((?!login|api|_next|static|favicon.ico|manifest.json|icons).*)"],
}

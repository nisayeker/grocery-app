import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"

import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const supabase = createMiddlewareSupabaseClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (req.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next()
  }

  if (req.nextUrl.pathname === "/") {
    req.nextUrl.pathname = "/dashboard"
    return NextResponse.redirect(req.nextUrl)
  }

  if (req.nextUrl.pathname.startsWith("/dashboard") && !session) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = "/login"
    return NextResponse.redirect(redirectUrl)
  }

  if (req.nextUrl.pathname.startsWith("/login") && session) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = "/dashboard"
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

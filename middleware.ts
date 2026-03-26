import { NextRequest, NextResponse } from 'next/server'

const DESTINATION =
  'https://erp.insightpulseai.com/web/login?redirect=%2Fodoo%3F'

export function middleware(_request: NextRequest) {
  return NextResponse.redirect(DESTINATION, 307)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js|map|txt|xml|ico)$).*)',
  ],
}

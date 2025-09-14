import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Check for better-auth session token in cookies
  const sessionToken = request.cookies.get('better-auth.session_token');
  
  if (!sessionToken) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};

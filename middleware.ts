import { NextRequest, NextResponse } from "next/server";

// Use Node.js runtime for better compatibility
export const runtime = 'nodejs';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for API routes, static files, and auth pages
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/assets/') ||
    pathname === '/favicon.ico' ||
    pathname === '/sign-in'
  ) {
    return NextResponse.next();
  }

  // Simple check: if no cookies at all, redirect to sign-in
  // This avoids the cookie name detection issue
  if (request.cookies.size === 0) {
    const signInUrl = new URL('/sign-in', request.url);
    if (pathname !== '/') {
      signInUrl.searchParams.set('callbackUrl', pathname);
    }
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|assets|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

// Define protected routes that require authentication
const protectedPaths = ['/upload', '/profile'];

// Define paths that should be excluded from any middleware
const publicPaths = [
  '/sign-in',
  '/api/auth',
  '/_next',
  '/assets',
  '/favicon.ico',
  '/',
];

export async function middleware(request: NextRequest) {
  try {
    const { pathname } = new URL(request.url);

    // Skip middleware for public paths
    if (publicPaths.some(path => pathname.startsWith(path))) {
      return NextResponse.next();
    }

    // Check authentication for protected paths
    if (protectedPaths.some(path => pathname.startsWith(path))) {
      // Check for session token in cookies
      const sessionToken = request.cookies.get('better-auth.session_token');
      
      if (!sessionToken) {
        const signInUrl = new URL('/sign-in', request.url);
        signInUrl.searchParams.set('callbackUrl', request.url);
        return NextResponse.redirect(signInUrl);
      }
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    // If middleware fails, allow the request to continue
    return NextResponse.next();
  }
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

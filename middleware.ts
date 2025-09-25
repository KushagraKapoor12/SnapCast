import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export const runtime = 'nodejs';

// Define protected routes that require authentication
const protectedPaths = ['/upload', '/profile'];

// Define paths that should be excluded from any middleware
const publicPaths = [
  '/sign-in',
  '/api/auth',
  '/_next',
  '/assets',
  '/favicon.ico',
];

export async function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);

  // Skip middleware for public paths
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check authentication for protected paths
  if (protectedPaths.some(path => pathname.startsWith(path))) {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      const signInUrl = new URL('/sign-in', request.url);
      signInUrl.searchParams.set('callbackUrl', request.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

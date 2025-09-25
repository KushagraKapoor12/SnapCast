import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import aj from "./lib/arcjet";
import { detectBot, shield } from "arcjet";
import { createMiddleware } from "@arcjet/next";

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

  // Optional: Apply rate limiting only if Arcjet is configured
  if (aj) {
    try {
      const validate = aj
        .withRule(shield({ mode: 'LIVE' }))
        .withRule(
          detectBot({
            mode: 'LIVE',
            allow: ['CATEGORY:SEARCH_ENGINE', 'G00G1E_CRAWLER']
          })
        );
      
      const req = await request.clone();
      const decision = await validate.protect(req);
      
      if (decision.isDenied()) {
        return new NextResponse('Too Many Requests', { status: 429 });
      }
    } catch (error) {
      console.error('Arcjet error:', error);
      // Continue if rate limiting fails
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

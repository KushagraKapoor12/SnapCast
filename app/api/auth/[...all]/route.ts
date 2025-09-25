import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/lib/auth";
import aj from "@/lib/arcjet";
import { ArcjetDecision, slidingWindow, validateEmail } from "arcjet";
import { NextRequest } from "next/server";
import ip from "@arcjet/ip";

export const runtime = "nodejs";

const emailValidation = aj.withRule(
  validateEmail({
    mode: "LIVE",
    block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
  })
);

const rateLimit = aj.withRule(
  slidingWindow({
    mode: "LIVE",
    interval: "2m",
    max: 2,
    characteristics: ["fingerprint"],
  })
);

// Auth protection
const protectedAuth = async (req: NextRequest, body?: any): Promise<ArcjetDecision> => {
  const session = await auth.api.getSession({ headers: req.headers });

  const userId = session?.user?.id ?? ip(req) ?? "127.0.0.1";

  if (req.nextUrl.pathname.startsWith("/api/auth/sign-in") && typeof body?.email === "string") {
    return emailValidation.protect(req, { email: body.email });
  }

  return rateLimit.protect(req, { fingerprint: userId });
};

// Handlers
const authHandlers = toNextJsHandler(auth.handler);

export const GET = authHandlers.GET;

export const POST = async (req: NextRequest) => {
  const body = await req.json().catch(() => null);
  const decision = await protectedAuth(req, body);

  if (decision.isDenied()) {
    if (decision.reason.isEmail()) {
      return new Response(JSON.stringify({ error: "Invalid email address." }), { status: 400 });
    }
    if (decision.reason.isRateLimit()) {
      return new Response(JSON.stringify({ error: "Too many requests. Please try again later." }), { status: 429 });
    }
    if (decision.reason.isShield()) {
      return new Response(JSON.stringify({ error: "Request blocked by security policy." }), { status: 403 });
    }
  }

  const forwardReq = body
    ? new Request(req.url, {
        method: req.method,
        headers: req.headers,
        body: JSON.stringify(body),
      })
    : req;

  return authHandlers.POST(forwardReq);
};

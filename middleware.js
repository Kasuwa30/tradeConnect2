// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const authCookie = req.cookies.get("auth");
  const isAuthenticated = authCookie && authCookie.value === "true";
  const url = req.nextUrl.clone();
  // Redirect to /login if user tries to access dashboard without being authenticated
  if (!isAuthenticated && url.pathname.startsWith("/dashboard")) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

// Define protected paths
export const config = {
  matcher: ["/dashboard/:path*"],
};

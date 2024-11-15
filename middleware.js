import { NextResponse } from "next/server";

export function middleware(req) {
  const authCookie = req.cookies.get("auth");
  const isAuthenticated = authCookie?.value === "true"; // Simplified check
  const url = req.nextUrl.clone();
  console.log("url", url, "isAuthenticated", isAuthenticated);
  // Redirect from root `/` to `/home`
  if (url.pathname === "/") {
    url.pathname = "/home";
    return NextResponse.redirect(url);
  }

  // Redirect unauthenticated users accessing `/dashboard` to `/login`
  if (!isAuthenticated && url.pathname.startsWith("/dashboard")) {
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Define protected paths
export const config = {
  matcher: ["/", "/dashboard"], ///dashboard/:path*
};

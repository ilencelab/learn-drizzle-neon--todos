import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request); // 这里尝试从请求里拿出 session cookie，如果没有，说明用户未登录。
  const { pathname } = request.nextUrl;

  const publicRoutes = ["/", "/sign-up", "/sign-in"];

  if (publicRoutes.includes(pathname)) {
    if (sessionCookie) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (pathname.startsWith("/dashboard")) {
    // THIS IS NOT SECURE!
    // This is the recommended approach to optimistically redirect users
    // We recommend handling auth checks in each page/route
    if (!sessionCookie) {
      // return NextResponse.redirect(new URL("/", request.url)); // 如果请求里 没有 session cookie，就重定向到 /（即主页）
      return NextResponse.redirect(new URL("/sign-in", request.url)); // 如果请求里 没有 session cookie，就重定向到 /sign-in（即登录页）
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/sign-up", "/sign-in", "/dashboard/:path*"], // Specify the routes the middleware applies to
};

// Security Warning: The getSessionCookie function only checks for the existence of a session cookie; it does not validate it. Relying solely on this check for security is dangerous, as anyone can manually create a cookie to bypass it. You must always validate the session on your server for any protected actions or pages.

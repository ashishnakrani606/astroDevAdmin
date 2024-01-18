export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  let session = request.cookies.get("logged"); 
  console.log("session", session);
  if (!session) {
    if (!request.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    // if(url.pathname === "/"){
    //   url.pathname = "/dashboard";
    //   return NextResponse.redirect(url);
    // }
  }
}


export const config = {
  matcher: [
    "/",
    "/categories",
    "/faq",
    "/edit/benefit",
    "/add-faq",
    "/add-user-reflection",
    "/benefits",
    "/new-benefit",
    // "/reset-password",
    "/user-reflection",
  ],
};

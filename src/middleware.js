export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";

export function middleware(request) {
  const res = NextResponse.next()
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
  res.headers.append('Access-Control-Allow-Credentials', "true")
  res.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
  res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  res.headers.append(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  return res
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

import { NextResponse } from 'next/server';

export function middleware(request) {
  // if (request.nextUrl.pathname !== "/login") {
  //   console.log("Middleware: Redirecting ");
  //   return NextResponse.redirect(new URL("/login", request.url), {
  //     status: 303,
  // });
  // }

  // if (request.nextUrl.pathname.startsWith('/login')) {
  //   return NextResponse.rewrite(new URL('/', request.url))
  // }
  
  // console.log("Middleware: Allowing access ");
  // return NextResponse.next();

  // if(request.nextUrl.pathname!="/login") {
  //   return NextResponse.redirect(new URL("/login",request.url ))
  // }
}

export const config = {
  matcher: ["/forget-password/:path*"]
}
import { NextResponse } from "next/server";

export default function middleware(request) {
  return new NextResponse.next();
}

export const config = {
    matcher: '/news'
}
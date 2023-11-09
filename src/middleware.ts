import { NextRequest, NextResponse } from "next/server"

export const middleware = async (req: NextRequest) => {
  // return NextResponse.redirect(new URL("/", req.url))
}

export const config = {
  matcher: ["/suggestions", "/suggestions/:path"],
}

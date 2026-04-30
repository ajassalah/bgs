import { NextRequest, NextResponse } from "next/server";

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0"]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0];
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const isLocalHost = host ? LOCAL_HOSTS.has(host) : false;

  if (!isLocalHost && forwardedProto === "http") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

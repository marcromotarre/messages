import { NextResponse } from "next/server";

const signedinPages = ["/", "/room"];

export default function middleware(req: any) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.ACCESS_TOKEN;

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.rewrite(url);
    }
  }
}

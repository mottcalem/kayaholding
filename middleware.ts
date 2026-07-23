import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  LOCALE_COOKIE,
  isEnglishPath,
  pathnameToEn,
  pathnameToTr,
  resolveLocaleFromRequest,
} from "@/lib/locale";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = resolveLocaleFromRequest(
    request.cookies.get(LOCALE_COOKIE)?.value,
    request.headers.get("accept-language")
  );
  const onEnglish = isEnglishPath(pathname);

  if (locale === "en" && !onEnglish) {
    return NextResponse.redirect(new URL(pathnameToEn(pathname), request.url));
  }

  if (locale === "tr" && onEnglish) {
    return NextResponse.redirect(new URL(pathnameToTr(pathname), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.jpg|logo\\.jpg|img/|fonts/|.*\\.(?:jpg|jpeg|gif|webp|png|svg|ico|woff2|woff|ttf|mp4)$).*)",
  ],
};

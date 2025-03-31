import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "cs"];
const defaultLocale = "en";

// Improved locale detection from Accept-Language header
function getLocale(request: NextRequest): string {
  // Get Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "";

  // Parse the header to get language preferences
  const userLocales = acceptLanguage
    .split(",")
    .map((item) => item.split(";")[0].trim().substring(0, 2))
    .filter((locale) => locale);

  // Find the first supported locale
  for (const locale of userLocales) {
    if (locales.includes(locale)) {
      return locale;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip processing of assets and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname.startsWith("/api")
  ) {
    return;
  }

  // Extract first path segment to check for locale
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  // If URL already has a valid locale, don't redirect
  if (locales.includes(firstSegment)) {
    return;
  }

  // Get preferred locale
  const locale = getLocale(request);

  // Create new URL without double slashes
  const newPathname = `/${locale}${
    pathname.startsWith("/") ? pathname : `/${pathname}`
  }`;
  const url = new URL(request.url);
  url.pathname = newPathname;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const routes = ["", "/about", "/work", "/experience"];
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ptakondrej.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries = routes.flatMap((route) => {
    const cleanRoute = route.startsWith("/") ? route.slice(1) : route;

    return routing.locales.map((locale) => {
      const url = `${baseUrl}/${locale}${cleanRoute ? `/${cleanRoute}` : ""}`;

      const alternateLanguages = Object.fromEntries(
        routing.locales
          .filter((altLocale) => altLocale !== locale)
          .map((altLocale) => [
            altLocale,
            `${baseUrl}/${altLocale}${cleanRoute ? `/${cleanRoute}` : ""}`,
          ])
      );

      return {
        url,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: alternateLanguages,
        },
      };
    });
  });
  return sitemapEntries;
}

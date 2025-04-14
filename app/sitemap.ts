import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getProjects } from "@/actions/actions";

const routes = ["", "/about", "/work", "/experience"];
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ptakondrej.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = routes.flatMap((route) => {
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

  const allProjects = await getProjects({});

  const projectEntries = allProjects.flatMap((project) => {
    return routing.locales.map((locale) => {
      const url = `${baseUrl}/${locale}/work/${project.id}`;

      const alternateLanguages = Object.fromEntries(
        routing.locales
          .filter((altLocale) => altLocale !== locale)
          .map((altLocale) => [
            altLocale,
            `${baseUrl}/${altLocale}/work/${project.id}`,
          ])
      );

      return {
        url,
        lastModified: new Date(
          project.lastUpdated || project.createdAt || Date.now()
        ),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: alternateLanguages,
        },
      };
    });
  });

  return [...staticEntries, ...projectEntries];
}

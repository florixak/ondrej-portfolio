import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Locale, routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Define default metadata
  const defaultMetadata: Metadata = {
    title: "Ondřej Pták | Frontend Developer",
    description:
      "Frontend developer with a passion for creating beautiful and functional web applications.",
    keywords: [
      // Role keywords
      "frontend developer",
      "frontend engineer",
      "web developer",
      // Technology keywords
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      // Skill keywords
      "responsive design",
      "web accessibility",
      "internationalization",
      "UI/UX implementation",
      "performance optimization",
      // Specific combinations
      "React frontend developer",
      "Next.js specialist",
      "Next.js entuhsiast",
      "multilingual websites",
    ],
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL,
      languages: {
        "en-US": "/en",
        "cs-CZ": "/cs",
      },
    },
    authors: [
      {
        name: "Ondřej Pták",
        url: "https://github.com/florixak",
      },
    ],
    creator: "Ondřej Pták",
    openGraph: {
      title: "Ondřej Pták | Frontend Developer",
      description: "",
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: "Ondřej Pták | Frontend Developer",
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Ondřej Pták | Frontend Developer",
      description: "",
      creator: "@florixak",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };

  if (!routing.locales.includes(locale)) {
    return defaultMetadata;
  }

  const messages = await getMessages({ locale });

  return {
    ...defaultMetadata,
    title: messages?.metadata?.title || defaultMetadata.title,
    description: messages?.metadata?.description || defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: messages?.metadata?.title || defaultMetadata.title,
      description:
        messages?.metadata?.description || defaultMetadata.description,
      locale,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: messages?.metadata?.title || defaultMetadata.title,
      description:
        messages?.metadata?.description || defaultMetadata.description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`relative antialiased bg-background`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            // disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen flex flex-col my-28 mx-5 gap-10">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

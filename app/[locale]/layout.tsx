import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Locale, routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import ScrollToTop from "@/components/ScrollToTop";
import OfflineBanner from "@/components/OfflineBanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const defaultMetadata: Metadata = {
    title: "Ondřej Pták | Fullstack Developer",
    description:
      "Fullstack developer with a passion for creating beautiful and functional web applications.",
    keywords: [
      // Role keywords
      "Fullstack developer",
      "Fullstack engineer",
      "Web developer",
      // Technology keywords
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      // Skill keywords
      "Responsive design",
      "Web accessibility",
      "Internationalization",
      "UI/UX implementation",
      "Performance optimization",
      // Specific combinations
      "React frontend developer",
      "Next.js specialist",
      "Next.js enthusiast",
      "Multilingual websites",
    ],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}`,
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
      title: "Ondřej Pták | Fullstack Developer",
      description: "",
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: "Ondřej Pták | Fullstack Developer",
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Ondřej Pták | Fullstack Developer",
      description: "",
      creator: "@florixak",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
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
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Ondřej Pták | Fullstack Developer",
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: messages?.metadata?.title || defaultMetadata.title,
      description:
        messages?.metadata?.description || defaultMetadata.description,
      images: ["/og-image.png"],
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
            <ScrollToTop />
            <Header />
            <OfflineBanner />
            <main className="min-h-screen flex flex-col mt-28 gap-10">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

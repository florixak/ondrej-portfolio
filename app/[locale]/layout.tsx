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
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = params;

  // Define default metadata
  const defaultMetadata: Metadata = {
    title: "Ondřej Pták | Frontend Developer",
    description:
      "Frontend developer with a passion for creating beautiful and functional web applications.",
    keywords: [
      "frontend",
      "developer",
      "javascript",
      "typescript",
      "react",
      "nextjs",
      "tailwindcss",
    ],
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
      locale: "en_US",
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
    title: messages?.title || defaultMetadata.title,
    description: messages?.description || defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      locale,
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
            <main className="min-h-screen flex flex-col my-24 mx-5 gap-10">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

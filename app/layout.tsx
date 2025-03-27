import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ondřej Pták | Frontend Developer",
  description: "",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased bg-background`}>
        <Header />
        <main className="min-h-screen flex flex-col justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

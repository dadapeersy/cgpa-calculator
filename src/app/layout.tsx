import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  ),
  title: {
    default: "CGPA & SGPA Calculator for Engineering Students | CheckCGPA",
    template: "%s | CheckCGPA",
  },
  description: "Free CGPA and SGPA calculator for engineering students across India. Supports VTU, Anna University, JNTUH, JNTUK, SPPU, KTU, and MAKAUT grading systems.",
  openGraph: {
    type: "website",
    siteName: "CheckCGPA",
    images: [{ url: "/OG-image.png", width: 1200, height: 630, alt: "CheckCGPA — Free CGPA & SGPA Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/OG-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="w-full flex-1 flex flex-col">
            {children}
          </main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

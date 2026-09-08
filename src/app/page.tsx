import CalculatorApp from "@/components/CalculatorApp";
import UniversityLinks from "@/components/UniversityLinks";
import HeroSection from "@/components/HeroSection";
import HomeFAQSection from "@/components/HomeFAQSection";
import HomeEditorialSection from "@/components/HomeEditorialSection";
import AdUnit from "@/components/AdUnit";
import { faqs } from "@/data/homeFaqs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free CGPA & SGPA Calculator for Engineering Students in India",
  description: "Calculate your Engineering CGPA, SGPA, and Percentage instantly. Free, accurate, and university-specific calculators for VTU, Anna University, JNTUH, JNTUK, SPPU, KTU, and MAKAUT.",
  keywords: "CGPA Calculator, SGPA Calculator, Engineering CGPA Calculator, CGPA to Percentage Calculator, SGPA to CGPA Calculator, How to Calculate CGPA, VTU CGPA Calculator, Anna University CGPA Calculator",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free CGPA & SGPA Calculator for Engineering Students | CheckCGPA",
    description: "Calculate your Engineering CGPA, SGPA, and Percentage instantly. Supports VTU, Anna University, JNTUH, JNTUK, SPPU, KTU, and MAKAUT.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "Free CGPA & SGPA Calculator for Engineering Students | CheckCGPA",
    description: "Calculate your Engineering CGPA, SGPA, and Percentage instantly. Supports VTU, Anna University, JNTUH, JNTUK, SPPU, KTU, and MAKAUT.",
  },
};

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://www.engineeringcgpa.com');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Engineering CGPA Calculator",
    "description": "Calculate your Engineering CGPA, SGPA, and Percentage across multiple universities.",
    "url": `${baseUrl}/`,
    "applicationCategory": "EducationalApplication"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <article className="w-full flex flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* The main calculator app, hero section is injected here */}
      <CalculatorApp hero={<HeroSection />} />

      {/* Middle Ad Slot (In-content) */}
      <AdUnit adSlot="1234567890" className="my-2 sm:mt-8 sm:mb-4 max-w-4xl mx-auto" />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-8 text-center">
        <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
          Free, accurate, and lightning-fast grade calculation. Compute your SGPA, track your CGPA, and convert to percentage using official university formulas — for VTU, Anna University, JNTUH, JNTUK, SPPU, KTU, and MAKAUT.
        </p>
      </section>
      
      <UniversityLinks />

      <HomeEditorialSection />
      
      <HomeFAQSection />
    </article>
  );
}

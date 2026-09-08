import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { universities } from "@/data/universities";
import CalculatorApp from "@/components/CalculatorApp";
import UniversityLinks from "@/components/UniversityLinks";
import FAQAccordion from "@/components/FAQAccordion";
import AdUnit from "@/components/AdUnit";

export async function generateStaticParams() {
  return universities.map((uni) => ({
    slug: uni.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const uni = universities.find((u) => u.slug === resolvedParams.slug);
  
  if (!uni) {
    return { title: "University Not Found" };
  }

  return {
    title: uni.seoTitle,
    description: uni.seoDescription,
    keywords: uni.keywords,
    alternates: {
      canonical: `/${uni.slug}`,
    },
    openGraph: {
      title: uni.seoTitle,
      description: uni.seoDescription,
      url: `/${uni.slug}`,
      type: "website",
      siteName: "CheckCGPA",
      images: [
        {
          url: "/OG-image.png",
          width: 1200,
          height: 630,
          alt: `${uni.name} CGPA Calculator — CheckCGPA`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: uni.seoTitle,
      description: uni.seoDescription,
      images: ["/OG-image.png"],
    },
  };
}

export default async function UniversityPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const uni = universities.find((u) => u.slug === resolvedParams.slug);

  if (!uni) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://www.engineeringcgpa.com');

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `${uni.name} CGPA Calculator`,
    "description": uni.seoDescription,
    "url": `${baseUrl}/${uni.slug}`,
    "applicationCategory": "EducationalApplication"
  };

  const faqJsonLd = uni.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": uni.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <article className="w-full flex flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {/* The Reusable Calculator with injected Hero Section */}
      <CalculatorApp 
        hero={
          <>
            <section className="w-full max-w-4xl mx-auto px-6 pt-12 pb-6 text-center">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/60 bg-surface-hover border border-surface-border rounded-full">
                {uni.state} • {uni.shortName}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4 drop-shadow-sm">
                {uni.name} CGPA Calculator
              </h1>
            </section>
            <AdUnit adSlot="1234567890" className="mb-8" />
          </>
        }
        universitySlug={uni.slug}
      />

      {/* Middle Ad Slot (In-content) */}
      <AdUnit adSlot="0987654321" className="mt-6 mb-2 max-w-4xl mx-auto" />

      <section className="w-full max-w-4xl mx-auto px-6 py-4 sm:py-6 text-center">
        <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
          {uni.intro}
        </p>
      </section>

      {/* SEO Content Section */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 text-foreground/90 space-y-5 sm:space-y-6">
        
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-hover/70 via-surface/40 to-background p-5 sm:p-7 transition-all duration-300 space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/65">
            How to Calculate {uni.shortName} SGPA
          </h2>
          <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">{uni.sgpaDescription}</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-hover/70 via-surface/40 to-background p-5 sm:p-7 transition-all duration-300 space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/65">
            How to Calculate {uni.shortName} CGPA
          </h2>
          <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">{uni.cgpaDescription}</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-hover/70 via-surface/40 to-background p-5 sm:p-7 transition-all duration-300 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/65">
            {uni.shortName} Grading System
          </h2>
          <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">{uni.gradingSystem}</p>

          {uni.gradeTable && uni.gradeTable.length > 0 && (
            <div className="overflow-x-auto mt-4 rounded-xl border border-surface-border/70 bg-surface/50">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-hover/80 border-b border-surface-border text-foreground/80 font-semibold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Letter Grade</th>
                    <th className="px-4 py-3">Grade Point</th>
                    <th className="px-4 py-3">Marks Range</th>
                    <th className="px-4 py-3">Performance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border/60">
                  {uni.gradeTable.map((row, i) => (
                    <tr key={i} className="hover:bg-surface-hover/40 transition-colors">
                      <td className="px-4 py-2.5 font-bold text-foreground">{row.grade}</td>
                      <td className="px-4 py-2.5 font-mono text-primary font-semibold">{row.points}</td>
                      <td className="px-4 py-2.5 text-foreground/75">{row.marksRange}</td>
                      <td className="px-4 py-2.5 text-foreground/75">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {uni.supportedSchemes && uni.supportedSchemes.length > 0 && (
            <div className="mt-4 pt-3 border-t border-surface-border/50">
              <h3 className="text-sm sm:text-base font-semibold text-foreground/80 mb-2">Supported Schemes/Regulations:</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-foreground/70">
                {uni.supportedSchemes.map((scheme, idx) => (
                  <li key={idx}>{scheme}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-hover/70 via-surface/40 to-background p-5 sm:p-7 transition-all duration-300 space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/65">
            {uni.shortName} CGPA to Percentage
          </h2>
          
          {uni.slug === "vtu-cgpa-calculator" ? (
            <div className="leading-relaxed space-y-4 text-sm sm:text-base text-foreground/75">
              <p>
                To convert your Visvesvaraya Technological University (VTU) CGPA to a percentage, use the formula <strong className="text-foreground">Percentage = (CGPA - 0.75) × 10</strong> for older schemes, or <strong className="text-foreground">Percentage = CGPA × 10</strong> depending on your specific regulation scheme.
              </p>

              <h3 className="text-base sm:text-lg font-bold mt-4 mb-2 text-foreground">Conversion Formulas by Scheme</h3>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-foreground">2015, 2017, and 2018 Schemes:</strong> Percentage = (CGPA - 0.75) × 10<br/>
                  <span className="text-foreground/60">Example: If your CGPA is 8.0, the calculation is (8.0 - 0.75) × 10 = 72.50%.</span>
                </li>
                <li>
                  <strong className="text-foreground">2021 and Newer Schemes:</strong> Percentage = CGPA × 10<br/>
                  <span className="text-foreground/60">Example: If your CGPA is 8.0, your percentage is 80.00%.</span>
                </li>
              </ul>

              <h3 className="text-base sm:text-lg font-bold mt-4 mb-2 text-foreground">VTU Division Classifications</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong className="text-foreground">First Class with Distinction:</strong> CGPA ≥ 7.75 (70% or higher)</li>
                <li><strong className="text-foreground">First Class:</strong> CGPA ≥ 6.75 (60% to 69.99%)</li>
                <li><strong className="text-foreground">Second Class:</strong> CGPA ≥ 5.75 (50% to 59.99%)</li>
                <li><strong className="text-foreground">Pass Class:</strong> CGPA ≥ 4.25 (35% to 49.99%)</li>
              </ul>
            </div>
          ) : (
            <p className="leading-relaxed text-sm sm:text-base text-foreground/75">{uni.conversionFormula}</p>
          )}
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-hover/70 via-surface/40 to-background p-5 sm:p-7 transition-all duration-300 space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/65">
            {uni.shortName} SGPA to CGPA
          </h2>
          <p className="leading-relaxed text-sm sm:text-base text-foreground/75">{uni.sgpaToCgpaDescription}</p>
        </div>

        {uni.slug !== "vtu-cgpa-calculator" && (
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-hover/70 via-surface/40 to-background p-5 sm:p-7 transition-all duration-300 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/65">
              Example Calculation
            </h2>
            <p className="leading-relaxed text-sm sm:text-base text-foreground/75">{uni.exampleCalculation}</p>
          </div>
        )}

        {/* Disclaimer Section */}
        <div className="p-6 bg-surface-hover/30 border border-surface-border rounded-2xl space-y-3">
          <p className="text-sm text-foreground/60 italic leading-relaxed">
            <strong>Disclaimer:</strong> This {uni.shortName} CGPA calculator is an independent educational tool and is not affiliated with, endorsed by, or officially associated with {uni.name}. The university name is used only to identify the academic grading system covered by this calculator.
          </p>
          <p className="text-sm text-foreground/60 italic leading-relaxed text-yellow-600/80 dark:text-yellow-400/80">
            <strong>Note on Formulas:</strong> The conversion formulas provided on this website are gathered from Google references and public sources. They are not official formulas provided by our website. Students should verify all official academic regulations, formulas, and results directly with their university.
          </p>
        </div>

        {/* Academic Sources Section */}
        {(uni.sources && uni.sources.length > 0 || uni.lastVerified) && (
          <div className="pt-6 border-t border-surface-border space-y-3">
            <h2 className="text-xl font-bold text-foreground">Verified References</h2>
            {uni.lastVerified && (
              <p className="text-xs text-foreground/50">Information last verified on: {uni.lastVerified}</p>
            )}
            {uni.sources && uni.sources.length > 0 && (
              <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/70">
                {uni.sources.map((source, idx) => (
                  <li key={idx}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Contextual internal linking to other universities */}
        <div className="space-y-4 pt-6 border-t border-surface-border">
          <h2 className="text-2xl font-bold">Explore Other University Calculators</h2>
          <p className="text-foreground/75 text-sm leading-relaxed">
            Need to calculate grades for other universities or transfer regulations? Explore our dedicated grade computation tools:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            {universities
              .filter((u) => u.slug !== uni.slug)
              .map((otherUni) => (
                <Link
                  key={otherUni.slug}
                  href={`/${otherUni.slug}`}
                  className="p-3.5 rounded-xl bg-surface-hover/50 border border-surface-border hover:border-foreground/20 text-sm font-medium transition-colors flex flex-col justify-between group"
                >
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{otherUni.shortName} CGPA Calculator</span>
                  <span className="text-xs text-foreground/50 mt-1">{otherUni.state} • 10-Point Scale →</span>
                </Link>
              ))}
          </div>
        </div>

        <div className="space-y-6 pt-8 border-t border-surface-border">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <FAQAccordion faqs={uni.faqs} />
        </div>

      </section>
      
      {/* Footer Navigation */}
      <section className="w-full bg-surface-hover/30 border-t border-surface-border py-12 mt-12">
        <div className="px-6">
          <UniversityLinks />
        </div>
      </section>
    </article>
  );
}

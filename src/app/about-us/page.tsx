import Link from "next/link";
import { ArrowLeft, BookOpen, Shield, Zap, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CheckCGPA — Free Engineering CGPA & SGPA Calculator India",
  description: "CheckCGPA is a free, privacy-first CGPA and SGPA calculator built for engineering students across India. Learn about our mission to help students at VTU, Anna University, JNTUH, SPPU, KTU, and MAKAUT.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About CheckCGPA — Free Engineering CGPA Calculator",
    description: "CheckCGPA is a free, privacy-first CGPA and SGPA calculator built for engineering students across India.",
    url: "/about-us",
    type: "website",
  },
};

const features = [
  {
    icon: BookOpen,
    title: "University Specific",
    desc: "We support VTU, Anna University, JNTUH, JNTUK, SPPU, KTU, and MAKAUT with verified formulas for each grading system.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    desc: "Your grades are calculated entirely on your device. We never store, transmit, or have access to your academic data.",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    desc: "Built with Next.js and statically generated. Every page loads instantly with zero server delays.",
  },
  {
    icon: Users,
    title: "Built for Students",
    desc: "Designed by developers who went through the same struggle of exam seasons and grade calculations.",
  },
];

const universities = [
  { name: "VTU CGPA Calculator", slug: "vtu-cgpa-calculator", desc: "Karnataka — 2021, 2018, 2017, 2015 Schemes" },
  { name: "Anna University CGPA Calculator", slug: "anna-university-cgpa-calculator", desc: "Tamil Nadu — R2017, R2021" },
  { name: "JNTUH CGPA Calculator", slug: "jntuh-cgpa-calculator", desc: "Telangana — R18, R22" },
  { name: "JNTUK CGPA Calculator", slug: "jntuk-cgpa-calculator", desc: "Andhra Pradesh — R19, R20" },
  { name: "SPPU CGPA Calculator", slug: "sppu-cgpa-calculator", desc: "Maharashtra — 2015, 2019 Pattern" },
  { name: "KTU CGPA Calculator", slug: "ktu-cgpa-calculator", desc: "Kerala — Standard 10-point scale" },
  { name: "MAKAUT CGPA Calculator", slug: "makaut-cgpa-calculator", desc: "West Bengal — 10-point scale" },
];

export default function AboutUs() {
  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-4 sm:py-12 sm:pb-24">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-foreground mb-4 sm:mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" />
        Back to Calculator
      </Link>

      <h1 className="text-3xl sm:text-5xl font-black mb-3 sm:mb-4 tracking-tight">About CheckCGPA</h1>
      <p className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-6 sm:mb-12 max-w-2xl">
        A free, fast, and privacy-first CGPA & SGPA calculator built specifically for engineering students across India — because calculating grades manually is tedious, error-prone, and honestly, a waste of your time.
      </p>

      {/* Why we built it */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-hover/70 via-surface/40 to-background p-5 sm:p-7 transition-all duration-300 space-y-3 sm:space-y-4 mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/65">Our Story & Mission</h2>
        <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
          CheckCGPA was born out of a frustration that every engineering student in India understands: exam results are out, and you spend 30 minutes Googling your university's formula, then another 20 minutes carefully entering numbers into a spreadsheet, only to second-guess the result anyway. We built this tool because students deserve better than that.
        </p>
        <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
          Our mission is simple: provide every engineering student in India — whether studying under VTU in Karnataka, Anna University in Tamil Nadu, JNTUH in Telangana, SPPU in Maharashtra, KTU in Kerala, or MAKAUT in West Bengal — with a beautiful, accurate, and completely free tool to track their academic performance. No sign-ups, no ads on the calculator, no data collection. Just the result you need in under five seconds.
        </p>
        <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
          We believe software built for students should be as premium and polished as any product you'd pay for. Because you deserve tools that respect your time.
        </p>
      </section>

      {/* Features */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-hover/70 via-surface/40 to-background p-5 sm:p-7 transition-all duration-300 mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/65">Why Choose CheckCGPA?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4 p-4 sm:p-5 rounded-xl bg-surface-hover/50 border border-surface-border/60">
              <div className="shrink-0 mt-0.5">
                <f.icon size={22} className="text-foreground/60" />
              </div>
              <div>
                <h3 className="font-bold text-foreground/90 mb-1 text-sm sm:text-base">{f.title}</h3>
                <p className="text-xs sm:text-sm text-foreground/65 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accuracy Commitment */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-hover/70 via-surface/40 to-background p-5 sm:p-7 transition-all duration-300 space-y-3 sm:space-y-4 mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/65">Our Accuracy Commitment</h2>
        <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
          Every CGPA conversion formula and grading system on this website is sourced from the official academic regulations, notifications, or official websites of the respective universities. We clearly display the formula used on every university page and include a disclaimer if a formula is subject to change based on your specific year of admission or regulation scheme.
        </p>
        <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
          We always recommend that students verify their final CGPA and percentage with their official university marksheet or academic transcript. This tool is designed to help you estimate and plan, not to replace your official records. Read our <Link href="/privacy-policy" className="text-foreground underline underline-offset-2 hover:opacity-80">Privacy Policy</Link> to understand how we handle (or rather, don't handle) your data.
        </p>
      </section>

      {/* Supported Universities */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-hover/70 via-surface/40 to-background p-5 sm:p-7 transition-all duration-300 mb-4 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-5 text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/65">Universities We Support</h2>
        <p className="text-foreground/75 leading-relaxed text-sm sm:text-base mb-6">
          We currently provide verified, university-specific CGPA and SGPA calculators for the following institutions:
        </p>
        <ul className="space-y-3">
          {universities.map((uni) => (
            <li key={uni.slug}>
              <Link
                href={`/${uni.slug}`}
                className="flex items-center justify-between px-5 py-4 rounded-xl bg-surface-hover/50 border border-surface-border hover:border-foreground/20 transition-colors group"
              >
                <div>
                  <span className="font-semibold text-foreground group-hover:text-foreground block">{uni.name}</span>
                  <span className="text-xs text-foreground/50 mt-0.5 block">{uni.desc}</span>
                </div>
                <span className="text-foreground/30 group-hover:text-foreground/60 text-sm">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm text-foreground/50 mt-4 italic">
          More universities are added regularly. If your university is missing, <Link href="/contact-us" className="underline hover:opacity-80">contact us</Link> and we will add it.
        </p>
      </section>
    </article>
  );
}

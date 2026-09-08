import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | CheckCGPA — CGPA Calculator Support",
  description: "Have a question about your CGPA calculation, found a bug, or want to request your university? Contact the CheckCGPA team. We support VTU, Anna University, JNTUH, SPPU, KTU, and MAKAUT.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Us | CheckCGPA",
    description: "Have a question or want to request your university? Contact the CheckCGPA team.",
    url: "/contact-us",
    type: "website",
  },
};

export default function ContactUs() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-4 sm:py-12 sm:pb-24">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-foreground mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" />
        Back to Calculator
      </Link>
      
      <h1 className="text-4xl font-black mb-4">Contact Us</h1>
      <p className="text-foreground/60 mb-12 text-lg">We'd love to hear from you. Have a question, feature request, or found a bug?</p>
      
      <div className="grid gap-6 md:grid-cols-2">
        <a href="mailto:hello@universitycalculator.com" className="flex flex-col items-center justify-center p-8 rounded-2xl glass-card border border-surface-border hover:bg-surface-hover transition-colors text-center group">
          <Mail size={32} className="text-foreground/50 mb-4 group-hover:text-foreground transition-colors" />
          <h3 className="font-bold text-lg mb-1">Email Us</h3>
          <p className="text-sm text-foreground/60">hello@universitycalculator.com</p>
        </a>

        <a href="#" className="flex flex-col items-center justify-center p-8 rounded-2xl glass-card border border-surface-border hover:bg-surface-hover transition-colors text-center group">
          <MessageCircle size={32} className="text-foreground/50 mb-4 group-hover:text-foreground transition-colors" />
          <h3 className="font-bold text-lg mb-1">Feedback</h3>
          <p className="text-sm text-foreground/60">Report an issue or contribute</p>
        </a>

        <div className="md:col-span-2 p-8 rounded-2xl bg-surface/50 border border-surface-border mt-4">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">My university is missing. Can you add it?</h4>
              <p className="text-sm text-foreground/70 mt-1">Yes! Please send us an email with a link to your university's official grading scheme and we'll add it in the next update.</p>
            </div>
            <div>
              <h4 className="font-semibold">Is my data saved?</h4>
              <p className="text-sm text-foreground/70 mt-1">No, everything is calculated locally on your browser. We don't have access to your grades.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

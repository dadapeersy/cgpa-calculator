import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | CheckCGPA — Engineering CGPA Calculator",
  description: "Privacy policy for CheckCGPA. Student grade calculations are executed 100% locally in your browser with zero data collection or tracking.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | CheckCGPA",
    description: "CheckCGPA privacy policy. Local client-side calculation with zero personal data collection.",
    url: "/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-4 sm:py-12 sm:pb-24">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-foreground mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" />
        Back to Calculator
      </Link>
      
      <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none text-foreground/80 space-y-6">
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
        <p>
          We do not collect any personal data, names, or identifiable information. This calculator operates entirely on the client side (in your browser). Any grades, credits, or calculation inputs you enter are processed locally on your device and are never sent to our servers.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Cookies and Tracking</h2>
        <p>
          We may use basic analytics tools to understand traffic to the website. These tools may use cookies to collect anonymous, aggregated data (such as page views or device type) to help us improve the tool. We do not track individual users.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Local Storage</h2>
        <p>
          We may use your browser's Local Storage to save your theme preference (e.g., dark or light mode) so that your experience is consistent on return visits.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Third-Party Services</h2>
        <p>
          Our website may contain links to other websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Advertising & Google AdSense</h2>
        <p>
          We use Google AdSense to display advertisements on our website. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
        </p>
        <p className="mt-4">
          Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a>.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
      </div>
    </div>
  );
}

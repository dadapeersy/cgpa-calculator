import Link from "next/link";

const sections = [
  {
    id: "what-is-cgpa",
    heading: "What is CGPA?",
    content: `CGPA stands for Cumulative Grade Point Average. It is the most important academic metric for an engineering student in India, representing your overall academic performance across all completed semesters of your degree. Unlike a single exam score, CGPA gives a holistic view of your consistency and hard work throughout your entire engineering programme. A CGPA is typically measured on a 10-point scale in Indian universities. Most universities consider a CGPA of 7.5 or above to be a strong academic record, and many top companies use a CGPA cutoff (commonly 6.0 or 7.0) as a minimum eligibility criterion for campus placements. Your CGPA directly impacts your eligibility for post-graduate studies, government jobs, research positions, and scholarships.`,
  },
  {
    id: "what-is-sgpa",
    heading: "What is SGPA?",
    content: `SGPA stands for Semester Grade Point Average. It measures your academic performance for a single semester of your engineering degree. Every semester, each of your subjects is assigned a certain number of credits based on its importance and hours of teaching per week. After your exams, you receive a letter grade (like O, A+, A, B+, B, etc.) for each subject, and each letter grade corresponds to a specific grade point on a 10-point scale. Your SGPA is the credit-weighted average of all those grade points. A higher credit subject has a proportionally larger impact on your SGPA than a lower credit one. This is why performing well in core subjects (which tend to have higher credits) is more strategically important than focusing only on electives.`,
  },
  {
    id: "how-to-calculate-cgpa",
    heading: "How to Calculate CGPA from SGPA",
    content: `A very common mistake engineering students make is to simply average their SGPAs to find their CGPA. This is incorrect and will give you a wrong number. The correct method is a weighted average. For every semester you have completed, multiply your SGPA by the total number of credits registered in that semester. Sum all of these products together. Then, divide that total sum by the grand total of all credits across all semesters. For example, if you scored an SGPA of 8.5 in Semester 1 (20 credits) and 7.8 in Semester 2 (22 credits), your CGPA is NOT (8.5 + 7.8) / 2 = 8.15. The correct calculation is: ((8.5 × 20) + (7.8 × 22)) / (20 + 22) = (170 + 171.6) / 42 = 341.6 / 42 = 8.13. Our calculator handles this automatically — just enter your SGPA and credits for each semester.`,
  },
  {
    id: "cgpa-to-percentage",
    heading: "How to Convert CGPA to Percentage in India",
    content: `In India, converting CGPA to a percentage is not universal — it depends entirely on your specific university's official academic regulations. Different universities use different formulas. VTU (2015/2017/2018 Schemes) uses the formula: Percentage = (CGPA − 0.75) × 10. VTU (2021 Scheme and newer) uses: Percentage = CGPA × 10. Anna University (R2017, R2021) uses: Percentage = CGPA × 10. JNTUH uses: Percentage = (CGPA − 0.5) × 10. KTU uses: Percentage = (10 × CGPA) − 3.75. Always verify the exact formula with your university's official notification or academic regulations document before using any converted percentage on a resume or application, as using the wrong formula can create a discrepancy that an HR team or institution might question.`,
  },
  {
    id: "good-cgpa-for-placement",
    heading: "What is a Good CGPA for Placements?",
    content: `Most Indian engineering students worry about what CGPA is "enough" for campus placements. The honest answer is: it depends on the company. Top-tier product companies like Google, Microsoft, and Amazon typically do not have rigid CGPA cutoffs and focus more on competitive programming and problem-solving skills. Mid-tier IT service companies like TCS, Infosys, and Wipro commonly require a minimum CGPA of 6.0 to 7.0. Core engineering companies (PSUs, manufacturing, research labs) often require 7.5 or higher. Government jobs through UPSC, GATE, or similar exams have no CGPA cutoff but a high CGPA demonstrates academic discipline. The safest target is to maintain a CGPA of 7.5 or above throughout your engineering degree, which keeps all doors open for you at the time of placement.`,
  },
  {
    id: "supported-universities",
    heading: "Which Universities Does CheckCGPA Support?",
    content: `Our calculator currently provides specific, verified grading system support for the following major universities across India:`,
    universities: [
      { name: "VTU CGPA Calculator", slug: "vtu-cgpa-calculator", state: "Karnataka" },
      { name: "Anna University CGPA Calculator", slug: "anna-university-cgpa-calculator", state: "Tamil Nadu" },
      { name: "JNTUH CGPA Calculator", slug: "jntuh-cgpa-calculator", state: "Telangana" },
      { name: "JNTUK CGPA Calculator", slug: "jntuk-cgpa-calculator", state: "Andhra Pradesh" },
      { name: "SPPU CGPA Calculator", slug: "sppu-cgpa-calculator", state: "Maharashtra" },
      { name: "KTU CGPA Calculator", slug: "ktu-cgpa-calculator", state: "Kerala" },
      { name: "MAKAUT CGPA Calculator", slug: "makaut-cgpa-calculator", state: "West Bengal" },
    ],
  },
];

export default function HomeEditorialSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8 space-y-4 sm:space-y-6" aria-label="Educational Guide">
      {sections.map((section) => (
        <div 
          key={section.id} 
          id={section.id} 
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-hover/70 via-surface/40 to-background p-5 sm:p-7 transition-all duration-300 scroll-mt-24"
        >
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/65">
            {section.heading}
          </h2>

          <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
            {section.content}
          </p>

          {section.universities && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5 pt-4 border-t border-surface-border/50">
              {section.universities.map((uni) => (
                <li key={uni.slug}>
                  <Link
                    href={`/${uni.slug}`}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-surface-hover/60 border border-surface-border/60 hover:border-foreground/30 hover:bg-surface-hover transition-colors text-xs sm:text-sm font-medium group"
                  >
                    <span className="text-foreground/90 group-hover:text-foreground transition-colors">{uni.name}</span>
                    <span className="text-xs text-foreground/40 group-hover:text-foreground/70">{uni.state} →</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}

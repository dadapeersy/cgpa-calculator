export interface FAQ {
  question: string;
  answer: string;
}

export interface UniversitySource {
  title: string;
  url: string;
}

export interface GradeScaleItem {
  grade: string;
  points: number;
  marksRange: string;
  description: string;
}

export interface UniversityData {
  slug: string;
  name: string;
  shortName: string;
  state: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  intro: string;
  sgpaDescription: string;
  cgpaDescription: string;
  gradingSystem: string;
  conversionFormula: string;
  exampleCalculation: string;
  sgpaToCgpaDescription: string;
  gradeTable?: GradeScaleItem[];
  faqs: FAQ[];
  supportedSchemes?: string[];
  sources?: UniversitySource[];
  lastVerified?: string;
}

export const universities: UniversityData[] = [
  {
    slug: "vtu-cgpa-calculator",
    name: "Visvesvaraya Technological University",
    shortName: "VTU",
    state: "Karnataka",
    seoTitle: "VTU CGPA Calculator – SGPA, CGPA & Percentage Calculator",
    seoDescription: "Calculate your VTU SGPA and CGPA using credits and grades. Check VTU CGPA, SGPA and percentage conversion with our easy-to-use calculator.",
    keywords: "VTU CGPA Calculator, VTU SGPA Calculator, VTU CGPA Calculator 2021 Scheme, VTU SGPA Calculator 2021 Scheme, VTU CGPA to Percentage, VTU SGPA to CGPA, VTU Percentage Calculator, Visvesvaraya Technological University CGPA Calculator",
    intro: "Welcome to the ultimate grade calculation tool for engineering students in Karnataka under Visvesvaraya Technological University (VTU). Easily compute your SGPA for the current semester, track your cumulative CGPA across multiple semesters, and convert your grades to an exact percentage using the official VTU conversion formula.",
    sgpaDescription: "To calculate your VTU SGPA (Semester Grade Point Average), multiply the credit value of each subject by the grade points you earned for that subject. Sum these values across all subjects in the semester, and divide by the total number of credits for the semester.",
    cgpaDescription: "Your VTU CGPA (Cumulative Grade Point Average) is calculated by taking the sum of (SGPA × Total Credits) for every completed semester, divided by the total credits earned across all those semesters. Simply input your previous SGPA and credits to calculate your overall standing.",
    gradingSystem: "VTU follows an absolute grading system (10-point scale) for the CBCS scheme. Outstanding (O) is 10 points, Excellent (A+) is 9 points, Very Good (A) is 8 points, Good (B+) is 7 points, Above Average (B) is 6 points, Average (C) is 5 points, Pass (P) is 4 points, and Fail (F) is 0 points.",
    conversionFormula: "VTU conversion logic is handled dynamically on the page.",
    exampleCalculation: "If a student takes 3 subjects with 4 credits each and scores grade points 9, 8, and 7, the calculation is: ((4×9) + (4×8) + (4×7)) / 12 = 96 / 12 = 8.0 SGPA.",
    sgpaToCgpaDescription: "To convert multiple VTU SGPAs into a final CGPA, you cannot simply average the SGPAs. You must multiply each semester's SGPA by the total credits taken that semester, add them all together, and divide by the total credits across all semesters.",
    gradeTable: [
      { grade: "O", points: 10, marksRange: "90 – 100", description: "Outstanding" },
      { grade: "A+", points: 9, marksRange: "80 – 89", description: "Excellent" },
      { grade: "A", points: 8, marksRange: "70 – 79", description: "Very Good" },
      { grade: "B+", points: 7, marksRange: "60 – 69", description: "Good" },
      { grade: "B", points: 6, marksRange: "55 – 59", description: "Above Average" },
      { grade: "C", points: 5, marksRange: "50 – 54", description: "Average" },
      { grade: "P", points: 4, marksRange: "40 – 49", description: "Pass" },
      { grade: "F", points: 0, marksRange: "0 – 39", description: "Fail" },
    ],
    supportedSchemes: ["2015 Scheme", "2017 Scheme", "2018 Scheme", "2021 Scheme", "2022 Scheme"],
    faqs: [
      { question: "How do I calculate my VTU SGPA?", answer: "To calculate your VTU SGPA, select your letter grades and input the credits for each subject in the SGPA tab. The calculator will automatically multiply grade points by credits and divide by the total credits." },
      { question: "How do I calculate my VTU CGPA?", answer: "Input your SGPA and total credits for each completed semester into the CGPA tab above. The calculator will automatically apply the VTU CGPA formula." },
      { question: "How do I convert VTU CGPA to percentage?", answer: "Use the official formula: (CGPA - 0.75) × 10 for 2015/2017/2018 schemes, or CGPA × 10 for 2021 scheme and newer." },
      { question: "Does this support the 2021 and 2022 schemes?", answer: "Yes, this calculator is fully compatible with VTU's 10-point grading scale used in the 2018, 2021, and 2022 CBCS schemes." },
      { question: "What is First Class with Distinction in VTU?", answer: "In VTU, a student securing a CGPA of 7.75 or higher (equivalent to 70% or above) is awarded First Class with Distinction." },
      { question: "Can I use this calculator for engineering diploma lateral entry in VTU?", answer: "Yes, lateral entry students entering in the 3rd semester can input their semesters starting from semester 3 onwards to compute their accurate cumulative CGPA." }
    ]
  },
  {
    slug: "anna-university-cgpa-calculator",
    name: "Anna University",
    shortName: "Anna University",
    state: "Tamil Nadu",
    seoTitle: "Anna University CGPA Calculator – SGPA & Percentage Calculator",
    seoDescription: "Calculate Anna University SGPA and CGPA using your credits and grades. Easily calculate and understand your semester performance.",
    keywords: "Anna University CGPA Calculator, Anna University SGPA Calculator, Anna University CGPA to Percentage, Anna University Grade Calculator",
    intro: "Track your academic progress with our Anna University grade calculator, designed specifically for engineering students in Tamil Nadu across affiliated and constituent colleges. Whether you need to calculate your semester GPA (SGPA) or your cumulative GPA (CGPA), this tool makes the math instant and error-free.",
    sgpaDescription: "Anna University SGPA (Semester Grade Point Average) is calculated by multiplying the credits of each course by the grade points obtained, summing them up, and dividing by the total credits registered in that semester.",
    cgpaDescription: "CGPA is the weighted average of the SGPA of all completed semesters. It is calculated by summing up the product of SGPA and total credits of each semester, and dividing by the total credits completed up to that point.",
    gradingSystem: "Anna University follows a 10-point scale under the 2017 and 2021 regulations: O (10), A+ (9), A (8), B+ (7), B (6), C (5), and RA / U (0 for Re-Appear / Fail).",
    conversionFormula: "For Anna University (2017/2021 regulations), the standard formula for converting CGPA to percentage is simply: Percentage = CGPA × 10.",
    exampleCalculation: "If you have an O (10) in a 4-credit course, and an A (8) in a 3-credit course, the total points are (4×10) + (3×8) = 64. Divide by 7 total credits to get 9.14 SGPA.",
    sgpaToCgpaDescription: "Multiply each Anna University SGPA by the total credits for that semester, sum all these products, and divide by the total overall credits to accurately find your CGPA.",
    gradeTable: [
      { grade: "O", points: 10, marksRange: "91 – 100", description: "Outstanding" },
      { grade: "A+", points: 9, marksRange: "81 – 90", description: "Excellent" },
      { grade: "A", points: 8, marksRange: "71 – 80", description: "Very Good" },
      { grade: "B+", points: 7, marksRange: "61 – 70", description: "Good" },
      { grade: "B", points: 6, marksRange: "50 – 60", description: "Average" },
      { grade: "RA", points: 0, marksRange: "< 50", description: "Re-Appear (Fail)" },
    ],
    supportedSchemes: ["2017 Regulation (R2017)", "2021 Regulation (R2021)"],
    faqs: [
      { question: "How do I calculate my Anna University SGPA?", answer: "Select your letter grade and enter the credits for each subject in the SGPA tab above to instantly see your result." },
      { question: "How do I calculate my Anna University CGPA?", answer: "Your CGPA is calculated by dividing the sum of (SGPA × Total Credits for that semester) by the total credits earned across all semesters. Use the CGPA tab to instantly calculate this." },
      { question: "How do I convert Anna University CGPA to percentage?", answer: "For the latest regulations (R2017 and R2021), you simply multiply your CGPA by 10. For example, an 8.2 CGPA is 82%." },
      { question: "Which grading regulations does this support?", answer: "It supports the standard 10-point grading system used in the R2017 and R2021 Anna University regulations." },
      { question: "What is the minimum CGPA for First Class in Anna University?", answer: "In Anna University, students who obtain a CGPA of 6.50 or higher and complete the programme within the stipulated time without arrears are eligible for First Class." },
      { question: "What does the RA grade mean in Anna University?", answer: "RA stands for 'Re-Appear'. It carries 0 grade points and indicates the student must appear for the end-semester examination again to clear the subject." }
    ]
  },
  {
    slug: "jntuh-cgpa-calculator",
    name: "Jawaharlal Nehru Technological University Hyderabad",
    shortName: "JNTUH",
    state: "Telangana",
    seoTitle: "JNTUH CGPA Calculator – SGPA, CGPA & Percentage Calculator",
    seoDescription: "Calculate your JNTUH SGPA and CGPA using credits and grades with our easy-to-use university calculator.",
    keywords: "JNTUH CGPA Calculator, JNTUH SGPA Calculator, JNTUH CGPA to Percentage, JNTUH Grade Calculator",
    intro: "For engineering students studying in Telangana under JNTUH, keeping track of your SGPA and CGPA is essential. Use our clean and accurate calculator to compute your grades based on the official JNTUH grading standards across R18 and R22 regulations.",
    sgpaDescription: "Your JNTUH SGPA is computed by dividing the total credit points (Credits × Grade Points) earned in a semester by the total credits registered for that semester.",
    cgpaDescription: "To calculate your JNTUH CGPA, input the SGPA and total credits for each completed semester into our tool. It calculates the cumulative average across all semesters.",
    gradingSystem: "JNTUH uses a 10-point scale under regulations like R18 and R22: O (10), A+ (9), A (8), B+ (7), B (6), C (5), and F (0).",
    conversionFormula: "According to JNTUH academic regulations, the formula to convert your CGPA into a percentage is: Percentage = (CGPA - 0.5) × 10.",
    exampleCalculation: "If you take two 3-credit subjects and score 9 and 8, you earned (3×9) + (3×8) = 51 points. Divided by 6 credits, your SGPA is 8.5.",
    sgpaToCgpaDescription: "For JNTUH students, calculating CGPA from SGPA requires weighting each SGPA by the total credits you completed in that respective semester, rather than a flat average.",
    gradeTable: [
      { grade: "O", points: 10, marksRange: "90 – 100", description: "Outstanding" },
      { grade: "A+", points: 9, marksRange: "80 – 89", description: "Excellent" },
      { grade: "A", points: 8, marksRange: "70 – 79", description: "Very Good" },
      { grade: "B+", points: 7, marksRange: "60 – 69", description: "Good" },
      { grade: "B", points: 6, marksRange: "50 – 59", description: "Average" },
      { grade: "C", points: 5, marksRange: "40 – 49", description: "Pass" },
      { grade: "F", points: 0, marksRange: "< 40", description: "Fail" },
    ],
    supportedSchemes: ["R18 Regulation", "R22 Regulation"],
    faqs: [
      { question: "How do I calculate my JNTUH SGPA?", answer: "Enter your subject credits and select the corresponding grade points in the SGPA calculator above. It instantly computes your semester grade point average." },
      { question: "How do I calculate my JNTUH CGPA?", answer: "Input your past SGPAs and the total credits for each respective semester. The calculator will determine your cumulative weighted average." },
      { question: "How does the JNTUH grading system work?", answer: "JNTUH uses a 10-point scale from O (10 points) down to C (5 points), with F as Fail (0 points)." },
      { question: "How do I convert JNTUH CGPA to percentage?", answer: "Use the formula (CGPA - 0.5) × 10. For example, a CGPA of 8.0 would be (8.0 - 0.5) × 10 = 75%." },
      { question: "Does this calculator support R18 and R22?", answer: "Yes, both R18 and R22 regulations use the 10-point grading system supported by this calculator." },
      { question: "What is First Class with Distinction in JNTUH?", answer: "Under JNTUH regulations, students securing a CGPA of 8.0 and above without backlogs are awarded First Class with Distinction." }
    ]
  },
  {
    slug: "jntuk-cgpa-calculator",
    name: "Jawaharlal Nehru Technological University Kakinada",
    shortName: "JNTUK",
    state: "Andhra Pradesh",
    seoTitle: "JNTUK CGPA Calculator – SGPA & Percentage Calculator",
    seoDescription: "Easily calculate your JNTUK SGPA and CGPA. Compute semester grades and percentage for Andhra Pradesh engineering students.",
    keywords: "JNTUK CGPA Calculator, JNTUK SGPA Calculator, JNTUK CGPA to Percentage",
    intro: "Designed for Andhra Pradesh engineering students, this calculator helps you instantly compute your JNTUK SGPA and CGPA. Avoid manual math errors and easily track your academic performance across R19 and R20 regulations.",
    sgpaDescription: "JNTUK SGPA is determined by multiplying your subject credits by the corresponding grade points, then dividing the sum by the total credits for the semester.",
    cgpaDescription: "Your overall CGPA at JNTUK is calculated by multiplying the SGPA of each semester by the total credits of that semester, and dividing the total sum by the overall credits completed.",
    gradingSystem: "Under the R19 and R20 regulations, JNTUK uses a 10-point grading scale: O (10), S (9), A (8), B (7), C (6), D (5), and F (0). Our tool allows you to input credits and points for every subject.",
    conversionFormula: "For JNTUK students, the generally accepted conversion formula to percentage is: Percentage = (CGPA - 0.75) × 10.",
    exampleCalculation: "If your semester has a total of 20 credits, and your total credit points (sum of credit × grade points for each subject) is 170, your SGPA is 170 / 20 = 8.5.",
    sgpaToCgpaDescription: "JNTUK requires weighting your SGPAs by semester credits to accurately compute the CGPA over multiple semesters.",
    gradeTable: [
      { grade: "O", points: 10, marksRange: "90 – 100", description: "Outstanding" },
      { grade: "S", points: 9, marksRange: "80 – 89", description: "Superior" },
      { grade: "A", points: 8, marksRange: "70 – 79", description: "Excellent" },
      { grade: "B", points: 7, marksRange: "60 – 69", description: "Very Good" },
      { grade: "C", points: 6, marksRange: "50 – 59", description: "Good" },
      { grade: "D", points: 5, marksRange: "40 – 49", description: "Pass" },
      { grade: "F", points: 0, marksRange: "< 40", description: "Fail" },
    ],
    supportedSchemes: ["R19 Regulation", "R20 Regulation", "R23 Regulation"],
    faqs: [
      { question: "How do I calculate my JNTUK SGPA?", answer: "Enter the credits and select the corresponding grade points (10, 9, 8, etc.) for each subject in the SGPA tab." },
      { question: "How do I calculate my JNTUK CGPA?", answer: "Enter the SGPA and total credits for each completed semester. The tool calculates your exact JNTUK CGPA by weighting each semester." },
      { question: "How do I convert JNTUK CGPA to percentage?", answer: "The widely used formula is Percentage = (CGPA - 0.75) × 10. For example, a 7.75 CGPA converts to 70%." },
      { question: "What is the minimum SGPA required to pass a semester in JNTUK?", answer: "In JNTUK, students must score at least grade 'D' (5 points) in each theory course and overall pass all registered subjects to maintain a passing status." },
      { question: "How are backlogs handled in JNTUK CGPA calculation?", answer: "When you clear a backlog exam, your new grade points replace the 0-point fail grade, and your SGPA for that semester is updated, reflecting into your new CGPA." }
    ]
  },
  {
    slug: "sppu-cgpa-calculator",
    name: "Savitribai Phule Pune University",
    shortName: "SPPU",
    state: "Maharashtra",
    seoTitle: "SPPU CGPA Calculator – SGPA & Percentage Calculator",
    seoDescription: "Calculate your SPPU (Pune University) SGPA and CGPA. Understand your semester grades and convert CGPA to percentage easily.",
    keywords: "SPPU CGPA Calculator, SPPU SGPA Calculator, SPPU CGPA to Percentage, SPPU Grade Calculator",
    intro: "Pune University (SPPU) engineering students in Maharashtra can use this premium calculator to compute their SGPA and CGPA. Stay on top of your academic goals with instant calculations based on SPPU 2015 and 2019 patterns.",
    sgpaDescription: "Your SPPU SGPA is the ratio of the sum of the product of the number of credits with the grade points scored in all subjects, divided by the total number of credits of all subjects in the semester.",
    cgpaDescription: "CGPA is calculated exactly like SGPA, but taking into account the SGPA and credits of all semesters completed so far.",
    gradingSystem: "SPPU follows a 10-point grading system for its 2015/2019 patterns: O (10), A+ (9), A (8), B+ (7), B (6), C (5), P (4), and F (0).",
    conversionFormula: "For SPPU 2015 and 2019 patterns, the conversion to percentage depends on the CGPA bracket: for CGPA between 6.75 and 10.0, Percentage = (CGPA × 10) - 5.0.",
    exampleCalculation: "With 22 total semester credits and 185 total grade points earned, your SGPA would be 185 / 22 = 8.40.",
    sgpaToCgpaDescription: "For SPPU, CGPA is the weighted average of your SGPAs. Multiply each SGPA by the total credits of its semester, sum them up, and divide by the total credits across all evaluated semesters.",
    gradeTable: [
      { grade: "O", points: 10, marksRange: "80 – 100", description: "Outstanding" },
      { grade: "A+", points: 9, marksRange: "70 – 79", description: "Excellent" },
      { grade: "A", points: 8, marksRange: "60 – 69", description: "Very Good" },
      { grade: "B+", points: 7, marksRange: "55 – 59", description: "Good" },
      { grade: "B", points: 6, marksRange: "50 – 54", description: "Above Average" },
      { grade: "C", points: 5, marksRange: "45 – 49", description: "Average" },
      { grade: "P", points: 4, marksRange: "40 – 44", description: "Pass" },
      { grade: "F", points: 0, marksRange: "< 40", description: "Fail" },
    ],
    supportedSchemes: ["2015 Pattern", "2019 Pattern"],
    faqs: [
      { question: "How do I calculate my SPPU SGPA?", answer: "Input the credits and grade points for all your subjects in the current semester. The calculator handles the SPPU 10-point scale math instantly." },
      { question: "How do I calculate my SPPU CGPA?", answer: "Switch to the CGPA tab and enter your SGPA and total credits for every semester you have completed." },
      { question: "How does the SPPU grading system work?", answer: "SPPU uses a 10-point system from O (Outstanding, 10 points) down to P (Pass, 4 points). A score below 40 marks is an F (Fail, 0 points)." },
      { question: "Can I use this calculator for different SPPU schemes?", answer: "Yes, as long as your scheme follows the standard 10-point grading system (like the 2015 and 2019 patterns), this tool works perfectly." },
      { question: "What is First Class with Distinction in SPPU?", answer: "In Pune University, students with a CGPA of 7.75 and above are awarded First Class with Distinction." }
    ]
  },
  {
    slug: "ktu-cgpa-calculator",
    name: "APJ Abdul Kalam Technological University",
    shortName: "KTU",
    state: "Kerala",
    seoTitle: "KTU CGPA Calculator – SGPA & Percentage Calculator",
    seoDescription: "Instant KTU SGPA and CGPA calculator for Kerala engineering students. Convert your KTU CGPA to percentage effortlessly.",
    keywords: "KTU CGPA Calculator, KTU SGPA Calculator, KTU CGPA to Percentage",
    intro: "Engineering students in Kerala under KTU can effortlessly calculate their SGPA and CGPA with this tool. Enter your subject credits and grades to instantly see your academic performance based on KTU ordinances.",
    sgpaDescription: "KTU SGPA is calculated by dividing the sum of the credit points (Credits × Grade Points) for all registered courses by the total registered credits for the semester.",
    cgpaDescription: "The KTU CGPA is calculated similarly by taking the weighted average of the SGPAs over all completed semesters.",
    gradingSystem: "KTU follows a 10-point scale: S (10), A+ (9), A (8.5), B+ (8), B (7), C (6), P (5), and F (0). Note that KTU uniquely uses half-points (8.5 for Grade A).",
    conversionFormula: "According to KTU regulations, the conversion formula from CGPA to percentage is: Percentage = 10 × CGPA - 3.75.",
    exampleCalculation: "If you score S (10) in a 4-credit course and A+ (9) in a 3-credit course, the total is (4×10) + (3×9) = 67. Divide by 7 credits to get 9.57 SGPA.",
    sgpaToCgpaDescription: "KTU students must weight their SGPAs by total semester credits before averaging them to determine the final CGPA.",
    gradeTable: [
      { grade: "S", points: 10, marksRange: "90 – 100", description: "Outstanding" },
      { grade: "A+", points: 9, marksRange: "85 – 89", description: "Excellent" },
      { grade: "A", points: 8.5, marksRange: "80 – 84", description: "Very Good" },
      { grade: "B+", points: 8, marksRange: "75 – 79", description: "Good" },
      { grade: "B", points: 7, marksRange: "65 – 74", description: "Above Average" },
      { grade: "C", points: 6, marksRange: "55 – 64", description: "Average" },
      { grade: "P", points: 5, marksRange: "45 – 54", description: "Pass" },
      { grade: "F", points: 0, marksRange: "< 45", description: "Fail" },
    ],
    faqs: [
      { question: "How do I calculate my KTU SGPA?", answer: "Select the corresponding grade points (10, 9, 8.5, etc.) and credits for each subject in the SGPA tab." },
      { question: "How do I calculate my KTU CGPA?", answer: "Calculate your KTU CGPA by inputting your SGPA and the total registered credits for each completed semester into the calculator." },
      { question: "How do I convert KTU CGPA to percentage?", answer: "Use the official KTU formula: Percentage = (10 × CGPA) - 3.75. For example, a CGPA of 8.0 would be (80 - 3.75) = 76.25%." },
      { question: "Does KTU use 8.5 grade points?", answer: "Yes, KTU is unique in assigning 8.5 grade points to letter grade 'A' (80-84 marks). Our calculator fully accounts for this scale." },
      { question: "What is the requirement for B.Tech Honours in KTU?", answer: "KTU students must maintain a CGPA of 8.5 or higher up to the 4th semester with no backlogs to be eligible for B.Tech (Honours)." }
    ]
  },
  {
    slug: "makaut-cgpa-calculator",
    name: "Maulana Abul Kalam Azad University of Technology",
    shortName: "MAKAUT",
    state: "West Bengal",
    seoTitle: "MAKAUT CGPA Calculator – SGPA & Percentage Calculator",
    seoDescription: "Calculate your MAKAUT SGPA and CGPA. Essential tool for West Bengal engineering students to track grades and percentage.",
    keywords: "MAKAUT CGPA Calculator, MAKAUT SGPA Calculator, MAKAUT CGPA to Percentage",
    intro: "For engineering students at MAKAUT in West Bengal, calculating your SGPA and CGPA has never been easier. Use our precise calculator to track your grades throughout your degree across all CBCS semesters.",
    sgpaDescription: "MAKAUT calculates SGPA (Semester/YGPA) by dividing the total points earned in a semester by the total credits registered.",
    cgpaDescription: "The DGPA (Degree Grade Point Average) or CGPA is the weighted average of all semester SGPAs.",
    gradingSystem: "MAKAUT uses a 10-point system: O (10), E (9), A (8), B (7), C (6), D (5), and F (0). Our tool allows you to select the exact grade points to match this scheme.",
    conversionFormula: "For MAKAUT, the standard formula to convert CGPA to percentage is: Percentage = (CGPA - 0.75) × 10.",
    exampleCalculation: "If a MAKAUT student earns 160 total grade points across 20 credits in a semester, the SGPA is 160 / 20 = 8.0.",
    sgpaToCgpaDescription: "To calculate DGPA (CGPA) from YGPA (SGPA), multiply each semester's SGPA by the total credits for that semester, sum them, and divide by the total cumulative credits.",
    gradeTable: [
      { grade: "O", points: 10, marksRange: "90 – 100", description: "Outstanding" },
      { grade: "E", points: 9, marksRange: "80 – 89", description: "Excellent" },
      { grade: "A", points: 8, marksRange: "70 – 79", description: "Very Good" },
      { grade: "B", points: 7, marksRange: "60 – 69", description: "Good" },
      { grade: "C", points: 6, marksRange: "50 – 59", description: "Fair" },
      { grade: "D", points: 5, marksRange: "40 – 49", description: "Below Average" },
      { grade: "F", points: 0, marksRange: "< 40", description: "Failed" },
    ],
    faqs: [
      { question: "How do I calculate my MAKAUT SGPA?", answer: "Simply select the grade (O, E, A, B, etc.) and credits for each of your subjects. The calculator will immediately display your YGPA/SGPA." },
      { question: "How do I calculate my MAKAUT CGPA?", answer: "To find your DGPA/CGPA, enter your SGPA and credits for all completed semesters. The calculator determines your cumulative weighted average." },
      { question: "How do I convert MAKAUT CGPA to percentage?", answer: "The widely used formula for MAKAUT is: Percentage = (CGPA - 0.75) × 10." },
      { question: "Does this calculator support MAKAUT's grading scale?", answer: "Yes, by selecting the corresponding 10-point scale grades (including grade E for 9 points), you can accurately calculate your MAKAUT SGPA and CGPA." },
      { question: "What is DGPA in MAKAUT?", answer: "DGPA stands for Degree Grade Point Average. It is calculated by taking the credit-weighted average of all semester SGPAs/YGPAs and is the equivalent of final CGPA on your degree certificate." }
    ]
  }
];

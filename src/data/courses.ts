export interface Course {
  id: string;
  title: string;
  level: string;
  category: string;
  awardingBody: string;
  image: string;
  description?: string;
}

export const allCourses: Course[] = [
  // Management
  {
    id: "q-l3-im",
    title: "Qualifi Level 3 Diploma in Introduction to Management",
    level: "Level 3",
    category: "Management",
    awardingBody: "Qualifi",
    image: "/pexels-jibarofoto-18255287.jpg"
  },
  {
    id: "q-l3-edbms",
    title: "Qualifi Level 3 Extended Diploma in Business, Management and Study Skills",
    level: "Level 3",
    category: "Management",
    awardingBody: "Qualifi",
    image: "/pexels-karola-g-8106690.jpg"
  },
  {
    id: "q-l3-idbm",
    title: "Qualifi Level 3 Integrated Diploma in Business and Management",
    level: "Level 3",
    category: "Management",
    awardingBody: "Qualifi",
    image: "/pexels-vantha-thang-1224068-2361316.jpg"
  },
  {
    id: "q-l4-bm",
    title: "Qualifi Level 4 Diploma in Business Management",
    level: "Level 4",
    category: "Management",
    awardingBody: "Qualifi",
    image: "/pexels-vantha-thang-1224068-2332083.jpg"
  },
  {
    id: "q-l5-bm",
    title: "Qualifi Level 5 Diploma in Business Management",
    level: "Level 5",
    category: "Management",
    awardingBody: "Qualifi",
    image: "/online-student-5d.jpg"
  },
  {
    id: "q-l7-sml",
    title: "Qualifi Level 7 Diploma in Strategic Management and Leadership",
    level: "Level 7",
    category: "Management",
    awardingBody: "Qualifi",
    image: "/online-student-2r.jpg"
  },
  {
    id: "o-l7-sml",
    title: "OTHM Level 7 Diploma in Strategic Management and Leadership",
    level: "Level 7",
    category: "Management",
    awardingBody: "OTHM",
    image: "/online-student-3ff-1.jpg"
  },
  // IT & Cyber Security
  {
    id: "q-l3-it",
    title: "Qualifi Level 3 Diploma in Information Technology",
    level: "Level 3",
    category: "IT & Cyber Security",
    awardingBody: "Qualifi",
    image: "/help desk hero.jpg"
  },
  {
    id: "o-l4-it",
    title: "OTHM Level 4 Diploma in Information Technology",
    level: "Level 4",
    category: "IT & Cyber Security",
    awardingBody: "OTHM",
    image: "/pexels-jibarofoto-18255287.jpg"
  },
  {
    id: "o-l5-it",
    title: "OTHM Level 5 Diploma in Information Technology",
    level: "Level 5",
    category: "IT & Cyber Security",
    awardingBody: "OTHM",
    image: "/pexels-karola-g-8106690.jpg"
  },
  {
    id: "o-l6-it",
    title: "OTHM Level 6 Diploma in Information Technology",
    level: "Level 6",
    category: "IT & Cyber Security",
    awardingBody: "OTHM",
    image: "/pexels-vantha-thang-1224068-2361316.jpg"
  },
  {
    id: "o-l7-ai",
    title: "OTHM Level 7 Diploma in Artificial Intelligence",
    level: "Level 7",
    category: "IT & Cyber Security",
    awardingBody: "OTHM",
    image: "/online-student-5d.jpg"
  },
  {
    id: "o-l7-ds",
    title: "OTHM Level 7 Diploma in Data Science",
    level: "Level 7",
    category: "IT & Cyber Security",
    awardingBody: "OTHM",
    image: "/online-student-2r.jpg"
  },
  {
    id: "q-l7-cs",
    title: "Qualifi Level 7 Diploma in Cyber Security",
    level: "Level 7",
    category: "IT & Cyber Security",
    awardingBody: "Qualifi",
    image: "/help desk hero.jpg"
  },
  // Health & Social Care
  {
    id: "q-l2-c",
    title: "Qualifi Level 2 Diploma in Care",
    level: "Level 2",
    category: "Health & Social Care",
    awardingBody: "Qualifi",
    image: "/online-student-3ff-1.jpg"
  },
  {
    id: "q-l3-hsc",
    title: "Qualifi Level 3 Diploma in Health and Social Care",
    level: "Level 3",
    category: "Health & Social Care",
    awardingBody: "Qualifi",
    image: "/pexels-jibarofoto-18255287.jpg"
  },
  {
    id: "q-l4-hsc",
    title: "Qualifi Level 4 Diploma in Health and Social Care",
    level: "Level 4",
    category: "Health & Social Care",
    awardingBody: "Qualifi",
    image: "/pexels-karola-g-8106690.jpg"
  },
  {
    id: "q-l5-hsc",
    title: "Qualifi Level 5 Diploma in Health and Social Care",
    level: "Level 5",
    category: "Health & Social Care",
    awardingBody: "Qualifi",
    image: "/online-student-5d.jpg"
  },
  {
    id: "o-l7-hscm",
    title: "OTHM Level 7 Diploma in Health and Social Care Management",
    level: "Level 7",
    category: "Health & Social Care",
    awardingBody: "OTHM",
    image: "/online-student-2r.jpg"
  },
  // Accounting & Finance
  {
    id: "q-l3-af",
    title: "Qualifi Level 3 Diploma in Accounting and Finance",
    level: "Level 3",
    category: "Accounting & Finance",
    awardingBody: "Qualifi",
    image: "/pexels-vantha-thang-1224068-2361316.jpg"
  },
  {
    id: "q-l4-af",
    title: "Qualifi Level 4 Diploma in Accounting and Finance",
    level: "Level 4",
    category: "Accounting & Finance",
    awardingBody: "Qualifi",
    image: "/pexels-vantha-thang-1224068-2332083.jpg"
  },
  {
    id: "q-l7-af",
    title: "Qualifi Level 7 Diploma in Accounting and Finance",
    level: "Level 7",
    category: "Accounting & Finance",
    awardingBody: "Qualifi",
    image: "/online-student-3ff-1.jpg"
  },
  // Entrepreneurship
  {
    id: "q-l3-bie",
    title: "Qualifi Level 3 Diploma in Business Innovation and Entrepreneurship",
    level: "Level 3",
    category: "Innovation & Entrepreneurship",
    awardingBody: "Qualifi",
    image: "/help desk hero.jpg"
  },
  {
    id: "q-l4-e",
    title: "Qualifi Level 4 Diploma in Entrepreneurship",
    level: "Level 4",
    category: "Innovation & Entrepreneurship",
    awardingBody: "Qualifi",
    image: "/pexels-jibarofoto-18255287.jpg"
  },
  // HR & Psychology
  {
    id: "q-l5-dp",
    title: "Qualifi Level 5 Professional Diploma in Psychology",
    level: "Level 5",
    category: "HR & Psychology",
    awardingBody: "Qualifi",
    image: "/pexels-karola-g-8106690.jpg"
  },
  {
    id: "q-l7-hrm",
    title: "Qualifi Level 7 Diploma in Human Resource Management",
    level: "Level 7",
    category: "HR & Psychology",
    awardingBody: "Qualifi",
    image: "/online-student-5d.jpg"
  },
  // Logistics
  {
    id: "o-l6-lscm",
    title: "OTHM Level 6 Diploma in Logistics and Supply Chain Management",
    level: "Level 6",
    category: "Logistics & Supply Chain",
    awardingBody: "OTHM",
    image: "/online-student-2r.jpg"
  },
  {
    id: "q-l7-lscm",
    title: "Qualifi Level 7 Diploma in Logistics and Supply Chain Management",
    level: "Level 7",
    category: "Logistics & Supply Chain",
    awardingBody: "Qualifi",
    image: "/online-student-3ff-1.jpg"
  },
  // Education
  {
    id: "o-l7-eml",
    title: "OTHM Level 7 Diploma in Education Management and Leadership",
    level: "Level 7",
    category: "Education & Training",
    awardingBody: "OTHM",
    image: "/help desk hero.jpg"
  },
  // First Aid
  {
    id: "q-l3-blsma",
    title: "Qualifi Level 3 Award in Basic Life Support and Management of Anaphylaxis",
    level: "Level 3",
    category: "First Aid & Life Support",
    awardingBody: "Qualifi",
    image: "/pexels-jibarofoto-18255287.jpg"
  },
  {
    id: "q-l3-aefaw",
    title: "Qualifi Level 3 Award in Emergency First Aid at Work",
    level: "Level 3",
    category: "First Aid & Life Support",
    awardingBody: "Qualifi",
    image: "/pexels-karola-g-8106690.jpg"
  },
  // Tourism
  {
    id: "q-l4-thm",
    title: "Qualifi Level 4 Diploma in Tourism and Hospitality Management",
    level: "Level 4",
    category: "Tourism and Hospitality",
    awardingBody: "Qualifi",
    image: "/pexels-vantha-thang-1224068-2361316.jpg"
  },
  {
    id: "q-l5-thm",
    title: "Qualifi Level 5 Diploma in Tourism and Hospitality Management",
    level: "Level 5",
    category: "Tourism and Hospitality",
    awardingBody: "Qualifi",
    image: "/pexels-vantha-thang-1224068-2332083.jpg"
  },
  {
    id: "q-l7-thm",
    title: "Qualifi Level 7 Diploma in Tourism and Hospitality Management",
    level: "Level 7",
    category: "Tourism and Hospitality",
    awardingBody: "Qualifi",
    image: "/online-student-5d.jpg"
  },
  // Engineering
  {
    id: "o-l3-des",
    title: "OTHM Level 3 Diploma in Engineering and Surveying",
    level: "Level 3",
    category: "Engineering and Surveying",
    awardingBody: "OTHM",
    image: "/help desk hero.jpg"
  }
];

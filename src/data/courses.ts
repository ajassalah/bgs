export interface Course {
  id: string;
  title: string;
  level: string;
  category: string;
  awardingBody: string;
  image: string;
  description?: string;
  overview?: string;
  learningOutcomes?: string[];
  progression?: string[];
  entryRequirements?: string[];
  curriculum?: string[];
  duration?: string;
  deliveryMode?: string;
  assessment?: string;
}

export const allCourses: Course[] = [
  // Management
  {
    id: "q-l3-im",
    title: "Qualifi Level 3 Diploma in Introduction to Management",
    level: "Level 3",
    category: "Management",
    awardingBody: "Qualifi",
    image: "/pexels-jibarofoto-18255287.jpg",
    overview: "The Qualifi Level 3 Diploma in Introduction to Management is designed to develop and reward learners who are seeking or already pursuing a career in a business or management-related sector. This UK-accredited qualification equips learners with foundational knowledge and skills that are essential for understanding business operations, leadership, teamwork, finance, and organisational culture. It supports both academic and professional development, preparing learners to move forward in their careers or progress into higher-level qualifications in management and business.",
    learningOutcomes: [
      "Understand and critically evaluate business literature and data",
      "Apply subject knowledge to solve familiar and unfamiliar business problems",
      "Recognise ethical and moral considerations in business practices",
      "Demonstrate awareness of the interdisciplinary nature of management",
      "Engage in mature discussions and debates with both specialists and non-specialists",
      "Develop transferable skills to adapt to changes in the business environment",
      "Be motivated for further study and career progression within management"
    ],
    progression: [
      "Progress to a Qualifi Level 4 qualification in Business, Management or a related field.",
      "Enter directly into employment in a business or management-related role."
    ],
    entryRequirements: [
      "Hold a Level 2 qualification (or equivalent)",
      "Have relevant work experience in a business environment with clear career ambitions",
      "Hold a Level 3 qualification in another discipline and wish to transition into a career in management"
    ],
    curriculum: [
      "Managing Business Operations",
      "An Introduction to Finance",
      "Working in Teams",
      "An Introduction to Leadership Skills",
      "Organisational Culture",
      "Workplace Welfare"
    ],
    duration: "10 Weeks",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l3-edbms",
    title: "Qualifi Level 3 Extended Diploma in Business, Management and Study Skills",
    level: "Level 3",
    category: "Management",
    awardingBody: "Qualifi",
    image: "/pexels-karola-g-8106690.jpg",
    overview: "The Qualifi Level 3 Extended Diploma in Business, Management and Study Skills is designed to support learners aiming for a career in business-related fields. This comprehensive, UK-accredited qualification offers essential academic and professional development, making it an ideal pathway to higher education or employment.",
    learningOutcomes: [
      "Critically understand and apply academic literature",
      "Think independently and solve both familiar and novel problems",
      "Apply business knowledge to real-world scenarios",
      "Recognise ethical considerations in business and research",
      "Understand the interdisciplinary nature of business operations"
    ],
    progression: [
      "Qualifi Level 4 qualification in Business or related fields",
      "Direct employment in a business, administration, or management role",
      "Undergraduate degree at a UK or international university"
    ],
    entryRequirements: [
      "Level 2 qualification or equivalent",
      "Relevant work experience demonstrating clear career goals",
      "Interest in transitioning into business from another discipline"
    ],
    curriculum: [
      "Introduction to the Business Environment",
      "Business Resources",
      "Introduction to Marketing",
      "Human Resource Management",
      "Business Communication",
      "English for University Studies",
      "Thinking Entrepreneurially"
    ],
    duration: "10 Weeks",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l3-idbm",
    title: "Qualifi Level 3 Integrated Diploma in Business and Management",
    level: "Level 3",
    category: "Management",
    awardingBody: "Qualifi",
    image: "/pexels-vantha-thang-1224068-2361316.jpg",
    overview: "This comprehensive programme delivers key knowledge and practical skills to support both academic and professional development. Learners will explore essential areas of business, management, communication, and leadership to prepare for higher education.",
    learningOutcomes: [
      "Read and use academic and business literature with full understanding",
      "Think independently and solve complex business problems",
      "Apply knowledge to familiar and unfamiliar business scenarios",
      "Understand and apply ethical and professional standards in business"
    ],
    progression: [
      "Qualifi Level 4 qualification",
      "Year 1 of an undergraduate degree at a UK university",
      "Employment in a business, management, or administrative role"
    ],
    entryRequirements: [
      "Level 2 qualifications and/or work experience",
      "Level 3 qualification in another discipline wishing to transition",
      "Clear career ambitions in business"
    ],
    curriculum: [
      "Business Environment",
      "Marketing Principles",
      "Human Resource Management",
      "Health and Safety in the Workplace",
      "Business Operations",
      "Leadership Skills"
    ],
    duration: "10 Weeks",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l4-bm",
    title: "Qualifi Level 4 Diploma in Business Management",
    level: "Level 4",
    category: "Management",
    awardingBody: "Qualifi",
    image: "/pexels-vantha-thang-1224068-2332083.jpg",
    overview: "The Qualifi Level 4 Diploma in Business Management is designed to provide learners with an understanding of business management and to develop the skills needed to manage people and processes. It provides a structured progression for those seeking to enter or advance in the business sector.",
    learningOutcomes: [
      "Develop management and leadership skills",
      "Understand business environment and decision making",
      "Manage resources and communication effectively",
      "Apply marketing and finance principles in business",
      "Enhance professional and academic development"
    ],
    progression: [
      "Qualifi Level 5 Diploma in Business Management",
      "Second year of a UK Honours Degree in Business Management",
      "Entry-level management roles in various organizations"
    ],
    entryRequirements: [
      "Level 3 qualification (A-Levels or equivalent)",
      "Relevant work experience",
      "Interview assessment for suitability"
    ],
    curriculum: [
      "Communication in Organizations",
      "Leadership and the Organization",
      "Financial Awareness",
      "Managing Change",
      "Business Operations",
      "Developing Teams"
    ],
    duration: "10 Weeks",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l5-bm",
    title: "Qualifi Level 5 Diploma in Business Management",
    level: "Level 5",
    category: "Management",
    awardingBody: "Qualifi",
    image: "/online-student-5d.jpg",
    overview: "The Level 5 Diploma in Business Management builds on the Level 4 qualification, providing a deeper understanding of management. It focuses on strategic thinking, complex decision-making, and organizational performance management.",
    learningOutcomes: [
      "Apply strategic management techniques",
      "Evaluate organizational performance and culture",
      "Lead and manage complex business projects",
      "Analyze and manage corporate finance",
      "Develop strategic marketing plans"
    ],
    progression: [
      "Final year (Top-up) of a UK Honours Degree",
      "Qualifi Level 6 or 7 qualifications in Management",
      "Middle management roles in diverse industries"
    ],
    entryRequirements: [
      "Level 4 qualification in Business or related field",
      "Significant relevant work experience",
      "Minimum age 18"
    ],
    curriculum: [
      "Responding to the Changing Business Environment",
      "Effective Decision Making",
      "Business Development",
      "Business Models and Growing Organizations",
      "Customer Management",
      "Risk Management and Organizations"
    ],
    duration: "10 Weeks",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l7-sml",
    title: "Qualifi Level 7 Diploma in Strategic Management and Leadership",
    level: "Level 7",
    category: "Management",
    awardingBody: "Qualifi",
    image: "/online-student-2r.jpg",
    overview: "The Qualifi Level 7 Diploma in Strategic Management and Leadership is an MBA advanced entry course (120 credits). It is designed for managers who have the authority and personal inspiration to translate organizational strategy into effective operational performance.",
    learningOutcomes: [
      "Analyze and apply strategic management tools",
      "Translate strategy into operational performance",
      "Lead and manage strategic change",
      "Engage in corporate governance and ethical practice",
      "Support strategic decision-making with data"
    ],
    progression: [
      "MBA Top-up (Dissertation stage) at a UK University",
      "Senior management roles: Director, CEO, or Analyst",
      "Strategic consultancy positions"
    ],
    entryRequirements: [
      "A Level 6 qualification or first degree",
      "Possess at least 3 years management experience",
      "Minimum 21 years of age"
    ],
    curriculum: [
      "Manage Team Performance to Support Strategy",
      "Information Management and Strategic Decision Making",
      "Leading a Strategic Management Project",
      "Strategic Direction",
      "Strategic Planning",
      "Development as a Strategic Manager"
    ],
    duration: "6-9 Months",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "o-l7-sml",
    title: "OTHM Level 7 Diploma in Strategic Management and Leadership",
    level: "Level 7",
    category: "Management",
    awardingBody: "OTHM",
    image: "/online-student-3ff-1.jpg",
    overview: "This Level 7 Diploma is designed for strategic managers and leaders who want to focus on developing their abilities to translate organizational strategy into effective operational performance. It provides a pathway to a Master's degree top-up.",
    learningOutcomes: [
      "Critically evaluate management tools and models",
      "Develop high-level leadership and management skills",
      "Plan and implement strategic initiatives",
      "Manage organizational resources strategically",
      "Evaluate corporate social responsibility and ethics"
    ],
    progression: [
      "MSc or MA in Management Top-up",
      "Senior management and leadership roles",
      "Professional development and consultancy"
    ],
    entryRequirements: [
      "Honours degree or UK Level 6 diploma",
      "Relevant work experience at management level",
      "Minimum 21 years of age"
    ],
    curriculum: [
      "Leadership Qualities and Practice",
      "Personal Leadership Development as a Strategic Manager",
      "Strategy Development in Organizations",
      "Strategic Human Resource Management",
      "Strategic Financial Management",
      "Strategic Marketing"
    ],
    duration: "6-9 Months",
    deliveryMode: "Distance Learning / Blended",
    assessment: "Assignments"
  },
  // IT & Cyber Security
  {
    id: "q-l3-it",
    title: "Qualifi Level 3 Diploma in Information Technology",
    level: "Level 3",
    category: "IT & Cyber Security",
    awardingBody: "Qualifi",
    image: "/help desk hero.jpg",
    overview: "The Qualifi Level 3 Diploma in Information Technology provides foundational skills and knowledge to begin a career in the IT sector. It focuses on practical aspects like coding, networking, and cyber security, while also exploring social media's role in business.",
    learningOutcomes: [
      "Understand computer systems operation",
      "Develop foundational coding skills",
      "Understand networking technologies",
      "Explore mobile communication in business",
      "Gain knowledge in cyber security threats",
      "Utilize social media for business growth"
    ],
    progression: [
      "Qualifi Level 4 Diploma in Information Technology",
      "Associate IT roles in various sectors",
      "Further technical certifications"
    ],
    entryRequirements: [
      "Age 16 or over",
      "Interest or informal experience in IT",
      "Subject to interview assessment"
    ],
    curriculum: [
      "Computer Systems",
      "Coding and Website Development",
      "Networks",
      "Mobile Communications",
      "Cyber Security",
      "Social Media for Business"
    ],
    duration: "10 Weeks",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "o-l4-it",
    title: "OTHM Level 4 Diploma in Information Technology",
    level: "Level 4",
    category: "IT & Cyber Security",
    awardingBody: "OTHM",
    image: "/pexels-jibarofoto-18255287.jpg",
    overview: "The OTHM Level 4 Diploma in Information Technology provides a strong foundation for a career in the IT industry. It aims to make learners 'business ready' with detailed knowledge of IT and the skills to adapt to technical changes.",
    learningOutcomes: [
      "Develop programming foundations in various languages",
      "Perform systems analysis and architectural design",
      "Develop web and multimedia applications",
      "Understand computer and network technology principles",
      "Manage business information effectively within IT systems"
    ],
    progression: [
      "OTHM Level 5 Diploma in Information Technology",
      "Second year of a UK Bachelor's degree (advanced entry)",
      "Technical support or junior developer roles"
    ],
    entryRequirements: [
      "Level 3 qualification or equivalent",
      "Min 18 years of age",
      "English language competency"
    ],
    curriculum: [
      "Programming Foundations",
      "Systems Analysis and Design",
      "Web and Multimedia Applications",
      "Computer and Network Technology",
      "Software Development",
      "Managing Business Information"
    ],
    duration: "1 Year",
    deliveryMode: "Blended / Online",
    assessment: "Assignments"
  },
  {
    id: "o-l5-it",
    title: "OTHM Level 5 Diploma in Information Technology",
    level: "Level 5",
    category: "IT & Cyber Security",
    awardingBody: "OTHM",
    image: "/pexels-karola-g-8106690.jpg",
    overview: "Equivalent to the second year of a UK degree, this diploma provides an advanced understanding of IT management, software engineering, and database systems.",
    learningOutcomes: [
      "Apply advanced software engineering principles",
      "Design and manage complex database systems",
      "Perform advanced systems analysis for large-scale projects",
      "Apply IT project management methodologies"
    ],
    progression: [
      "OTHM Level 6 Diploma in Information Technology",
      "Final year (Top-up) of a UK Bachelor's degree",
      "Systems analyst or database administrator roles"
    ],
    entryRequirements: [
      "OTHM Level 4 Diploma in IT or equivalent",
      "Min 18 years of age",
      "English proficiency"
    ],
    curriculum: [
      "Software Engineering",
      "Database Systems",
      "Advanced Systems Analysis and Design",
      "Management Information Systems",
      "Network Information Systems",
      "IT Project Management"
    ],
    duration: "1 Year",
    deliveryMode: "Blended / Online",
    assessment: "Assignments"
  },
  {
    id: "o-l6-it",
    title: "OTHM Level 6 Diploma in Information Technology",
    level: "Level 6",
    category: "IT & Cyber Security",
    awardingBody: "OTHM",
    image: "/pexels-vantha-thang-1224068-2361316.jpg",
    overview: "Equivalent to the final year of a UK degree, this qualification focuses on high-level IT strategy, advanced networking, and system security management.",
    learningOutcomes: [
      "Develop and implement strategic IT solutions",
      "Manage advanced network infrastructures",
      "Apply high-level cyber security protocols",
      "Lead enterprise-wide IT projects"
    ],
    progression: [
      "Master's Degree (MSc) in Information Technology/Cyber Security",
      "OTHM Level 7 Diploma in relevant field",
      "Senior IT Manager or Technical Lead roles"
    ],
    entryRequirements: [
      "Level 5 Diploma in IT or equivalent",
      "Relevant technical work experience",
      "Min 18 years of age"
    ],
    curriculum: [
      "Strategic Management of IT Systems",
      "Advanced Computer Networking",
      "Information Systems Security",
      "Emerging Technologies",
      "Enterprise Systems",
      "IT Professional Project"
    ],
    duration: "1 Year",
    deliveryMode: "Blended / Online",
    assessment: "Assignments"
  },
  {
    id: "o-l7-ai",
    title: "OTHM Level 7 Diploma in Artificial Intelligence",
    level: "Level 7",
    category: "IT & Cyber Security",
    awardingBody: "OTHM",
    image: "/online-student-5d.jpg",
    overview: "A postgraduate qualification focusing on advanced AI methodologies, deep learning, and intelligent agents, preparing learners for strategic innovation roles.",
    learningOutcomes: [
      "Develop and apply deep learning models",
      "Design and implement intelligent agents",
      "Evaluate ethical concerns and sustainability in AI",
      "Apply AI to complex sector-specific problems"
    ],
    progression: [
      "MSc in Artificial Intelligence (Top-up)",
      "Senior roles: AI Researcher, ML Engineer",
      "PhD or doctoral studies in AI"
    ],
    entryRequirements: [
      "Honours degree in a related field (Comp Sci/Eng)",
      "Level 6 qualification or significant relevant experience",
      "Min 21 years of age"
    ],
    curriculum: [
      "Deep Learning and Neural Networks",
      "Intelligent Agents",
      "Ethical, Legal and Social Implications of AI",
      "AI for Sustainability",
      "Advanced Machine Learning",
      "Research Methods for AI"
    ],
    duration: "6-8 Months",
    deliveryMode: "Online",
    assessment: "Assignments"
  },
  {
    id: "o-l7-ds",
    title: "OTHM Level 7 Diploma in Data Science",
    level: "Level 7",
    category: "IT & Cyber Security",
    awardingBody: "OTHM",
    image: "/online-student-2r.jpg",
    overview: "Designed for professionals seeking to extract business-focused insights from data using advanced statistical and programming techniques.",
    learningOutcomes: [
      "Apply R and Python for advanced data analysis",
      "Implement predictive modeling and time series analysis",
      "Clean and structure large datasets for business intelligence",
      "Apply machine learning techniques to real-world data"
    ],
    progression: [
      "MSc in Data Science (Top-up)",
      "Senior Data Scientist or Business Intelligence Manager",
      "Advanced Doctoral research"
    ],
    entryRequirements: [
      "Honours degree in Mathematics, CS, or related field",
      "Level 6 qualification or management experience",
      "Min 21 years of age"
    ],
    curriculum: [
      "Data Evaluation and Mining",
      "Statistical Analysis",
      "Programming for Data Science",
      "Machine Learning",
      "Data Visualization",
      "Advanced Research Methods"
    ],
    duration: "6-9 Months",
    deliveryMode: "Online / Blended",
    assessment: "Assignments"
  },
  {
    id: "q-l7-cs",
    title: "Qualifi Level 7 Diploma in Cyber Security",
    level: "Level 7",
    category: "IT & Cyber Security",
    awardingBody: "Qualifi",
    image: "/help desk hero.jpg",
    overview: "The QUALIFI Level 7 Diploma in Cyber Security provides learners with advanced knowledge in the cybersecurity industry, deepening their understanding of cyber threats, vulnerabilities, and security technologies. It is designed to equip individuals with the foundational knowledge and skills necessary for a high-level career in the cybersecurity sector, covering everything from digital forensics to secure systems architecture.",
    learningOutcomes: [
      "Understand cryptographic principles and their applications",
      "Navigate relevant standards, regulations, and digital laws",
      "Plan and execute professional digital investigations",
      "Understand business continuity management for major incidents",
      "Evaluate management streams and performance monitoring related to security",
      "Lead incident response teams effectively"
    ],
    progression: [
      "Progress to a University partner to complete a full Master's degree (MSc) in Cyber Security.",
      "Career paths: Cyber Security Analyst, Information Security Manager, Penetration Tester, or Security Architect.",
      "Professional certification advancement."
    ],
    entryRequirements: [
      "A relevant Level 6 Award/Diploma or a Bachelor's degree",
      "Possess a GCE/GCSE equivalent qualification",
      "Relevant work experience may be considered for mature learners",
      "Minimum age of 18 or 21 depending on specific entry route"
    ],
    curriculum: [
      "Cryptography",
      "Digital Investigations and Forensics",
      "Network and Systems Security",
      "Security Management and Governance",
      "Incident Management and Response"
    ],
    duration: "6-12 Months",
    deliveryMode: "Online / Blended",
    assessment: "Assignments & Practical Evaluations"
  },
  // Health & Social Care
  {
    id: "q-l2-c",
    title: "Qualifi Level 2 Diploma in Care",
    level: "Level 2",
    category: "Health & Social Care",
    awardingBody: "Qualifi",
    image: "/online-student-3ff-1.jpg",
    overview: "The Qualifi Level 2 Diploma in Care is a vocationally related qualification that develops the skills and knowledge needed to work in the health and social care sector. It provides a clear career path for those who wish to work in care or pursue further study.",
    learningOutcomes: [
      "Understand adult care environments and professional responsibilities",
      "Develop analytical and problem-solving skills in care settings",
      "Strengthen abilities to use care-based techniques and practices",
      "Promote effective use of resources and evaluate information critically"
    ],
    progression: [
      "Healthcare Assistant, Support Worker, or Adult Care Worker roles",
      "Qualifi Level 3 Diploma in Health and Social Care",
      "Level 3 Lead Adult Care Worker Apprenticeship"
    ],
    entryRequirements: [
      "At least 16 years of age",
      "Demonstrate interest or involvement in the care sector",
      "Access to suitable work or placement opportunities in care"
    ],
    curriculum: [
      "Principles of Care",
      "Health and Safety in Care",
      "Communication in Care Settings",
      "Personal Development in Care",
      "Equality and Inclusion"
    ],
    duration: "10 Weeks",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l3-hsc",
    title: "Qualifi Level 3 Diploma in Health and Social Care",
    level: "Level 3",
    category: "Health & Social Care",
    awardingBody: "Qualifi",
    image: "/pexels-jibarofoto-18255287.jpg",
    overview: "This qualification aims to develop and recognize current and future health and social care workers, promoting professionalism in the sector. It is equivalent to an A-level qualification in the UK.",
    learningOutcomes: [
      "Critically read and use relevant care literature",
      "Solve problems and apply subject knowledge to care issues",
      "Recognize moral and ethical issues in care practice",
      "Understand ethical standards and professional codes of conduct"
    ],
    progression: [
      "Qualifi Level 4 Certificate/Diploma in Health and Social Care",
      "First year of a 3-year Honours Degree at a UK University",
      "UCAS points for university entry"
    ],
    entryRequirements: [
      "Level 2 qualifications or relevant work experience",
      "Level 3 qualification in another discipline wishing to transition",
      "Ambition to work in the health and social care sector"
    ],
    curriculum: [
      "Introduction to Health and Social Care",
      "Communication for Health and Social Care",
      "Promoting Health in the Population",
      "Person-Centered Care",
      "Optional units: Diabetes, Stroke, or Dementia Care"
    ],
    duration: "6 Months",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l4-hsc",
    title: "Qualifi Level 4 Diploma in Health and Social Care",
    level: "Level 4",
    category: "Health & Social Care",
    awardingBody: "Qualifi",
    image: "/pexels-karola-g-8106690.jpg",
    overview: "The Qualifi Level 4 Diploma in Health and Social Care supports current and aspiring professionals by equipping them with essential management and care skills. It fosters professional development by focusing on core principles, ethical responsibilities, and effective communication in a rapidly evolving care environment.",
    learningOutcomes: [
      "Critically analyse healthcare information",
      "Apply problem-solving skills in care contexts",
      "Understand ethical and professional standards",
      "Communicate effectively with diverse stakeholders",
      "Use reflective practice for continuous improvement",
      "Adapt to professional changes in care settings"
    ],
    progression: [
      "Qualifi Level 5 Diploma in Health and Social Care",
      "Second year of a UK Honours Degree in a related field",
      "Supervisory or managerial roles in the care sector"
    ],
    entryRequirements: [
      "Level 3 qualification (A-Levels or equivalent)",
      "Relevant work experience in health or social care",
      "Ambition for career progression in the sector"
    ],
    curriculum: [
      "Academic Study Skills",
      "Communication for Health and Social Care",
      "Introduction to Healthcare Policy",
      "Reflective Practice",
      "Managing People in Health and Social Care",
      "Sociology: Concepts in Health and Ill Health"
    ],
    duration: "10 Weeks",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l5-hsc",
    title: "Qualifi Level 5 Diploma in Health and Social Care",
    level: "Level 5",
    category: "Health & Social Care",
    awardingBody: "Qualifi",
    image: "/online-student-5d.jpg",
    overview: "This Level 5 qualification builds on the Level 4 diploma, focusing on management-level competencies in healthcare environments, including strategic decision-making and ethical leadership.",
    learningOutcomes: [
      "Lead and manage teams in healthcare settings",
      "Analyze health policy and its impact on service delivery",
      "Apply advanced management techniques to care services",
      "Manage resources and partnership working in care"
    ],
    progression: [
      "Final year (Top-up) of a UK Bachelor's degree in Care",
      "Qualifi Level 7 Diploma in Health and Social Care Management",
      "Management roles in residential care, hospitals, or social services"
    ],
    entryRequirements: [
      "Level 4 Diploma in Health and Social Care or equivalent",
      "Significant relevant work experience",
      "Min 18 years of age"
    ],
    curriculum: [
      "Principles of Health and Social Care Management",
      "Managing Health and Social Care Services",
      "Health and Social Care Research",
      "Leadership and Management in Care",
      "Advanced Care Practice"
    ],
    duration: "1 Year",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "o-l7-hscm",
    title: "OTHM Level 7 Diploma in Health and Social Care Management",
    level: "Level 7",
    category: "Health & Social Care",
    awardingBody: "OTHM",
    image: "/online-student-2r.jpg",
    overview: "The Level 7 Diploma in Health and Social Care Management is a postgraduate-level qualification aimed at developing management and leadership skills within the health and social care sector. It enhances learners' capabilities in managing human resources, finance, service delivery, strategies, and policies, providing a pathway to senior managerial roles or a Master's degree at the dissertation stage.",
    learningOutcomes: [
      "Manage organizational resources and finance in healthcare settings",
      "Develop and implement strategic health and social care policies",
      "Lead and manage change within diverse care environments",
      "Apply research methods to solve professional problems",
      "Enhance professional practice through reflective leadership",
      "Manage people and service delivery effectively"
    ],
    progression: [
      "Progress to a Master's degree (MSc/MA) in Health and Social Care Management Top-up.",
      "Senior managerial roles: CEO, Directorships, or Operational Manager in healthcare.",
      "Consultancy and policy development roles."
    ],
    entryRequirements: [
      "An honors degree in a related subject or a UK Level 6 diploma",
      "Equivalent overseas qualification verified for parity",
      "Mature learners with relevant management experience",
      "Minimum 21 years of age and English language competency"
    ],
    curriculum: [
      "Health and Social Care Leadership",
      "Managing People in Health and Social Care",
      "Managing Finance in Health and Social Care",
      "Health and Social Care Strategies and Policies",
      "Leading Change in Health and Social Care",
      "Research Methods for Healthcare Professionals"
    ],
    duration: "6-9 Months",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  // Accounting & Finance
  {
    id: "q-l3-af",
    title: "Qualifi Level 3 Diploma in Accounting and Finance",
    level: "Level 3",
    category: "Accounting & Finance",
    awardingBody: "Qualifi",
    image: "/pexels-vantha-thang-1224068-2361316.jpg",
    overview: "This diploma provides a strong foundation in core financial and accounting principles. It develops analytical and practical skills needed to succeed in the finance sector, offering a gateway to both academic advancement and career development.",
    learningOutcomes: [
      "Accurately record financial transactions",
      "Understand cost and management accounting",
      "Utilize ICT systems for financial management",
      "Understand accounting concepts for decision-making"
    ],
    progression: [
      "Qualifi Level 4 Diploma in Accounting and Finance",
      "Junior analyst or financial administrator roles",
      "Accounting assistant positions"
    ],
    entryRequirements: [
      "Age 16 or over",
      "English proficiency (IELTS 6.0 equivalent)",
      "Approved center assessment"
    ],
    curriculum: [
      "Financial Transactions Record-Keeping",
      "Cost and Management Information",
      "Financial Records Maintenance"
    ],
    duration: "10 Weeks",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l4-af",
    title: "Qualifi Level 4 Diploma in Accounting and Finance",
    level: "Level 4",
    category: "Accounting & Finance",
    awardingBody: "Qualifi",
    image: "/pexels-vantha-thang-1224068-2332083.jpg",
    overview: "The Qualifi Level 4 Diploma in Accounting and Finance is designed to develop technical knowledge and skills in financial accounting and management, providing a route to higher-level qualifications.",
    learningOutcomes: [
      "Prepare complex financial statements",
      "Apply management accounting techniques for decision-making",
      "Understand and apply tax principles",
      "Manage audits and internal controls"
    ],
    progression: [
      "Qualifi Level 5/7 Diploma in Accounting and Finance",
      "Second year of a UK degree in Finance/Accounting",
      "Professional accounting body exemptions (ACCA/CIMA)"
    ],
    entryRequirements: [
      "Level 3 Diploma in Accounting or equivalent (A-Levels)",
      "Min 18 years of age",
      "English proficiency"
    ],
    curriculum: [
      "Financial Accounting",
      "Management Accounting",
      "Business Law and Environment",
      "Taxation for Business",
      "Advanced Record Keeping"
    ],
    duration: "1 Year",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l7-af",
    title: "Qualifi Level 7 Diploma in Accounting and Finance",
    level: "Level 7",
    category: "Accounting & Finance",
    awardingBody: "Qualifi",
    image: "/online-student-3ff-1.jpg",
    overview: "A postgraduate-level qualification that covers advanced financial strategies, corporate reporting, and investment management for senior finance professionals.",
    learningOutcomes: [
      "Evaluate corporate financial performance and strategy",
      "Apply advanced reporting standards to complex entities",
      "Manage strategic investment and risk",
      "Lead financial audit and compliance projects"
    ],
    progression: [
      "MSc in Accounting and Finance (Top-up)",
      "Senior Finance Manager, CFO, or Financial Controller roles",
      "Advanced professional accreditation"
    ],
    entryRequirements: [
      "Honours degree in Finance/Accounting or Level 6 equivalent",
      "Significant professional experience in finance",
      "Min 21 years of age"
    ],
    curriculum: [
      "Advanced Financial Accounting",
      "Corporate Finance",
      "Advanced Management Accounting",
      "Investment and Financial Analysis",
      "Research Methods for Finance"
    ],
    duration: "9 Months",
    deliveryMode: "Blended / Online",
    assessment: "Assignments"
  },
  // Entrepreneurship
  {
    id: "q-l3-bie",
    title: "Qualifi Level 3 Diploma in Business Innovation and Entrepreneurship",
    level: "Level 3",
    category: "Innovation & Entrepreneurship",
    awardingBody: "Qualifi",
    image: "/help desk hero.jpg",
    overview: "Designed to cultivate business innovators and entrepreneurs, this diploma offers an alternative to A-Levels and Access to Higher Education Diplomas. It professionalizes sectors by developing graduates with globally-recognized innovation skills.",
    learningOutcomes: [
      "Translate innovative ideas into business opportunities",
      "Think independently to solve entrepreneurial problems",
      "Understand the interdisciplinary nature of business innovation",
      "Conduct professional debate and business communication"
    ],
    progression: [
      "Qualifi Level 4 Diploma",
      "First year of an Honours Degree at a UK University",
      "Direct employment as a business innovator or entrepreneur"
    ],
    entryRequirements: [
      "Level 2 qualifications",
      "Work experience in business or enterprise sector",
      "Ambition to start or scale a business"
    ],
    curriculum: [
      "Innovation for Business",
      "English for Business Communication",
      "Thinking Entrepreneurially",
      "Business Planning",
      "Entrepreneurial Marketing",
      "Entrepreneurial Finance"
    ],
    duration: "10 Weeks",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l4-e",
    title: "Qualifi Level 4 Diploma in Entrepreneurship",
    level: "Level 4",
    category: "Innovation & Entrepreneurship",
    awardingBody: "Qualifi",
    image: "/pexels-jibarofoto-18255287.jpg",
    overview: "Designed for aspiring entrepreneurs, this diploma offers a foundation in key business disciplines like operations, marketing, finance, and entrepreneurial psychology.",
    learningOutcomes: [
      "Apply leadership and management principles",
      "Implement decision-making strategies",
      "Develop entrepreneurial thinking",
      "Plan finance and marketing functions",
      "Understand entrepreneurial motivation",
      "Scale business ventures effectively"
    ],
    progression: [
      "Qualifi Level 5 Diploma in Business Management",
      "Second year of a UK degree in Business",
      "Scale your own business venture"
    ],
    entryRequirements: [
      "Level 3 qualification (A-Levels or equivalent)",
      "Relevant work experience",
      "Entrepreneurial ambition"
    ],
    curriculum: [
      "Managing Business Operations",
      "Business Environment",
      "Personal Effectiveness",
      "The Entrepreneurial Manager",
      "Business Planning and Goal Setting",
      "The Manager’s Toolkit",
      "Managing and Using Finance",
      "Managing and Using Marketing",
      "Psychology of Entrepreneurship",
      "Innovation and Creativity"
    ],
    duration: "10 Weeks",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  // HR & Psychology
  {
    id: "q-l5-dp",
    title: "Qualifi Level 5 Professional Diploma in Psychology",
    level: "Level 5",
    category: "HR & Psychology",
    awardingBody: "Qualifi",
    image: "/pexels-karola-g-8106690.jpg",
    overview: "The Qualifi Level 5 Professional Diploma in Psychology provides a detailed understanding of the core areas of psychology, including biological, cognitive, and social development, as well as research methods.",
    learningOutcomes: [
      "Understand the biological bases of behavior",
      "Analyze cognitive processes such as memory and perception",
      "Evaluate social psychology theories and their applications",
      "Apply psychological research methods to simple studies"
    ],
    progression: [
      "Final year (Top-up) of a UK Honours Degree in Psychology",
      "Graduate Basis for Chartered Membership (GBC) pathways",
      "Entry-level roles in social work, HR, or mental health support"
    ],
    entryRequirements: [
      "Level 4 qualification in Psychology or related field",
      "Interest in human behavior and mental processes",
      "Min 18 years of age"
    ],
    curriculum: [
      "Biological Psychology",
      "Cognitive Psychology",
      "Developmental Psychology",
      "Social Psychology",
      "Personality and Individual Differences",
      "Psychology Research Methods"
    ],
    duration: "1 Year",
    deliveryMode: "Blended Learning",
    assessment: "Assignments & Practical Portfolio"
  },
  {
    id: "q-l7-hrm",
    title: "Qualifi Level 7 Diploma in Human Resource Management",
    level: "Level 7",
    category: "HR & Psychology",
    awardingBody: "Qualifi",
    image: "/online-student-5d.jpg",
    overview: "This postgraduate-level qualification is designed for senior and middle managers and HR professionals seeking to enhance their skills in advanced HR practices, strategic management, and organizational development.",
    learningOutcomes: [
      "Analyze problems and apply various problem-solving techniques",
      "Manage personal development and growth within an HR context",
      "Apply contemporary HRM principles to global business environments",
      "Investigate complex business issues from an HR perspective"
    ],
    progression: [
      "Final year (Top-up) of a postgraduate degree (MBA/MA HRM)",
      "Qualifi Level 8 Diploma in Strategic Management and Leadership",
      "Senior HR roles such as HR Director or Consultant"
    ],
    entryRequirements: [
      "Level 6 qualification or a first degree",
      "Managers with significant experience but no formal qualifications may be considered",
      "English proficiency at IELTS 6.5 or equivalent"
    ],
    curriculum: [
      "Contemporary HRM",
      "Leading, Managing and HR Development",
      "Resourcing, Talent Management and Development",
      "Performance Management",
      "Employee Relations",
      "Investigating a Business Issue from an HR Perspective"
    ],
    duration: "7-8 Months",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  // Logistics
  {
    id: "o-l6-lscm",
    title: "OTHM Level 6 Diploma in Logistics and Supply Chain Management",
    level: "Level 6",
    category: "Logistics & Supply Chain",
    awardingBody: "OTHM",
    image: "/online-student-2r.jpg",
    overview: "Equivalent to the final year of a UK degree, this qualification focuses on the strategic management of global supply chains, inventory control, and sustainable logistics operations.",
    learningOutcomes: [
      "Design and manage strategic global supply chains",
      "Apply advanced inventory and warehouse management techniques",
      "Implement sustainable and green logistics practices",
      "Lead complex logistics operations in international environments"
    ],
    progression: [
      "Master's degree (MSc) in Logistics or Supply Chain Management",
      "Level 7 Diploma in Logistics",
      "Senior Supply Chain Manager or Logistics Director roles"
    ],
    entryRequirements: [
      "Level 5 Diploma in Logistics or equivalent",
      "Relevant management experience in the sector",
      "Min 18 years of age"
    ],
    curriculum: [
      "Global Supply Chain Management",
      "Strategic Logistics Operations",
      "Supply Chain Planning and Control",
      "Logistics and Supply Chain Research",
      "Sustainable Logistics",
      "Inventory and Warehouse Management"
    ],
    duration: "1 Year",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l7-lscm",
    title: "Qualifi Level 7 Diploma in Logistics and Supply Chain Management",
    level: "Level 7",
    category: "Logistics & Supply Chain",
    awardingBody: "Qualifi",
    image: "/online-student-3ff-1.jpg",
    overview: "A postgraduate-level qualification (120 credits) designed for senior managers to develop strategic leadership in global logistics and supply chain optimization.",
    learningOutcomes: [
      "Evaluate global strategic issues in logistics",
      "Lead organizational change in supply chain environments",
      "Manage strategic financial resources in logistics",
      "Conduct high-level research into supply chain innovation"
    ],
    progression: [
      "MSc in Logistics and Supply Chain Management (Top-up)",
      "Executive level roles: Supply Chain Director, COO",
      "Independent consultancy in global logistics"
    ],
    entryRequirements: [
      "Honours degree or UK Level 6 diploma in a related field",
      "Significant management experience in logistics",
      "Min 21 years of age"
    ],
    curriculum: [
      "Strategic Supply Chain Management",
      "Global Logistics and Finance",
      "Strategic Leadership in Supply Chains",
      "Supply Chain Risk and Sustainability",
      "Research Methods for Managers"
    ],
    duration: "9 Months",
    deliveryMode: "Blended / Online",
    assessment: "Assignments"
  },
  // Education
  {
    id: "o-l7-eml",
    title: "OTHM Level 7 Diploma in Education Management and Leadership",
    level: "Level 7",
    category: "Education & Training",
    awardingBody: "OTHM",
    image: "/help desk hero.jpg",
    overview: "Designed for education professionals in senior management, this qualification develops strategic leadership skills for managing educational institutions and programs.",
    learningOutcomes: [
      "Lead and manage educational change and development",
      "Apply strategic management in educational contexts",
      "Evaluate educational policy and its impact on leadership",
      "Manage quality and standards in education delivery"
    ],
    progression: [
      "MA in Education Management (Top-up)",
      "Headteacher, Principal, or Education Director roles",
      "Academic research in educational leadership"
    ],
    entryRequirements: [
      "Honours degree or Level 6 diploma",
      "Professional experience in an educational management role",
      "Min 21 years of age"
    ],
    curriculum: [
      "Contemporary Issues in Education: Theory, Policy and Practice",
      "The Management of Educational Change",
      "Managing Strategy in Education",
      "Educational Leadership",
      "Human Resource Management in Education",
      "Research Methods for Education Managers"
    ],
    duration: "9 Months",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  // First Aid
  {
    id: "q-l3-blsma",
    title: "Qualifi Level 3 Award in Basic Life Support and Management of Anaphylaxis",
    level: "Level 3",
    category: "First Aid & Life Support",
    awardingBody: "Qualifi",
    image: "/pexels-jibarofoto-18255287.jpg",
    overview: "This award equips learners with the essential knowledge and practical skills needed to provide basic life support and manage anaphylactic reactions in emergency situations.",
    learningOutcomes: [
      "Perform basic life support (CPR) effectively",
      "Identify signs and symptoms of anaphylaxis",
      "Administer adrenaline using an auto-injector",
      "Manage an casualty after an allergic reaction"
    ],
    progression: [
      "Advanced First Aid qualifications",
      "Enhanced workplace safety roles",
      "Standard requirement for various healthcare and public-facing roles"
    ],
    entryRequirements: [
      "Min 16 years of age",
      "Physically able to perform CPR on a manikin",
      "No specific prior qualifications required"
    ],
    curriculum: [
      "Basic Life Support Principles",
      "Anaphylaxis Management",
      "Emergency Protocol",
      "Post-Event Care"
    ],
    duration: "1 Day (Intensive)",
    deliveryMode: "In-person / Blended",
    assessment: "Practical Observation"
  },
  {
    id: "q-l3-aefaw",
    title: "Qualifi Level 3 Award in Emergency First Aid at Work",
    level: "Level 3",
    category: "First Aid & Life Support",
    awardingBody: "Qualifi",
    image: "/pexels-karola-g-8106690.jpg",
    overview: "A nationally recognized qualification that meets HSE requirements for emergency first aiders in the workplace, covering everything from minor injuries to life-threatening conditions.",
    learningOutcomes: [
      "Assess a workplace emergency safely",
      "Provide first aid to an unresponsive casualty",
      "Manage wounds, bleeding, and shock",
      "Provide emergency care for choking and seizure"
    ],
    progression: [
      "Level 3 First Aid at Work (3-day course)",
      "Workplace Health and Safety Officer roles",
      "Professional development for all sectors"
    ],
    entryRequirements: [
      "Min 16 years of age",
      "Physical capability to deliver first aid treatment",
      "Open to all learners"
    ],
    curriculum: [
      "Role and Responsibility of the First Aider",
      "Incident Assessment",
      "Unresponsive Casualty Management (CPR)",
      "Choking and Bleeding",
      "Shock and Minor Injuries"
    ],
    duration: "1 Day (Intensive)",
    deliveryMode: "In-person / Blended",
    assessment: "Practical Observation & Multiple Choice Quiz"
  },
  // Tourism
  {
    id: "q-l4-thm",
    title: "Qualifi Level 4 Diploma in Tourism and Hospitality Management",
    level: "Level 4",
    category: "Tourism and Hospitality",
    awardingBody: "Qualifi",
    image: "/pexels-vantha-thang-1224068-2361316.jpg",
    overview: "The Qualifi Level 4 Diploma in Tourism and Hospitality Management is designed to provide learners with a foundational understanding of the tourism and hospitality industry. It focuses on developing practical and academic skills essential for supervisory roles in this dynamic sector.",
    learningOutcomes: [
      "Understand the global tourism and hospitality landscape",
      "Manage customer relations and service delivery effectively",
      "Apply marketing principles within tourism contexts",
      "Understand the operational aspects of hospitality venues",
      "Develop professional and communication skills for the industry"
    ],
    progression: [
      "Qualifi Level 5 Diploma in Tourism and Hospitality Management",
      "Second year of a UK Honours Degree in Tourism/Hospitality",
      "Entry-level supervisory roles in hotels, travel agencies, or resorts"
    ],
    entryRequirements: [
      "Level 3 qualification (A-Levels or equivalent)",
      "Relevant work experience in the hospitality sector",
      "Interview to assess motivation and suitability"
    ],
    curriculum: [
      "The Tourism and Hospitality Industry",
      "Principles of Marketing in Tourism and Hospitality",
      "Customer Service Management",
      "Facility and Venue Management",
      "Personal and Professional Development"
    ],
    duration: "10 Weeks",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l5-thm",
    title: "Qualifi Level 5 Diploma in Tourism and Hospitality Management",
    level: "Level 5",
    category: "Tourism and Hospitality",
    awardingBody: "Qualifi",
    image: "/pexels-vantha-thang-1224068-2332083.jpg",
    overview: "This Level 5 Diploma builds on the Level 4 qualification, deepening learners' knowledge of management within the tourism and hospitality sector. It emphasizes strategic management, financial control, and sustainable practices.",
    learningOutcomes: [
      "Apply strategic management concepts to hospitality operations",
      "Analyze and manage financial performance in tourism",
      "Implement sustainable and ethical practices in the industry",
      "Lead and manage diverse teams in hospitality settings",
      "Evaluate global trends and their impact on tourism"
    ],
    progression: [
      "Final year (Top-up) of a UK Honours Degree",
      "Qualifi Level 6 or 7 qualifications in Management",
      "Middle management roles in international hospitality brands"
    ],
    entryRequirements: [
      "Qualifi Level 4 Diploma in Tourism and Hospitality Management",
      "Significant relevant work experience",
      "Minimum age 18"
    ],
    curriculum: [
      "Strategic Management in Tourism and Hospitality",
      "Financial Management and Control",
      "Sustainable Tourism and Hospitality",
      "Human Resource Management in Hospitality",
      "International Tourism and Hospitality"
    ],
    duration: "10 Weeks",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  {
    id: "q-l7-thm",
    title: "Qualifi Level 7 Diploma in Tourism and Hospitality Management",
    level: "Level 7",
    category: "Tourism and Hospitality",
    awardingBody: "Qualifi",
    image: "/online-student-5d.jpg",
    overview: "The Qualifi Level 7 Diploma in Tourism and Hospitality Management is a postgraduate-level qualification (120 credits) designed to develop senior-level management and leadership skills. It provides a pathway to a Master's degree top-up.",
    learningOutcomes: [
      "Evaluate global strategic issues in tourism and hospitality",
      "Develop and implement strategic marketing plans",
      "Manage organizational performance and culture strategically",
      "Conduct professional research in the tourism sector",
      "Lead change and innovation in hospitality organizations"
    ],
    progression: [
      "MSc in International Tourism and Hospitality Management Top-up",
      "Senior executive roles: Hotel Manager, CEO, or Consultant",
      "Academic and professional research opportunities"
    ],
    entryRequirements: [
      "Honours degree or UK Level 6 diploma in a related subject",
      "Significant management experience in the industry",
      "Minimum 21 years of age"
    ],
    curriculum: [
      "Strategic Management in Tourism and Hospitality",
      "Strategic Marketing",
      "Strategic Financial Management",
      "Strategic Change Management",
      "Corporate Governance and Ethics",
      "Research Methods"
    ],
    duration: "6-9 Months",
    deliveryMode: "Blended Learning",
    assessment: "Assignments"
  },
  // Engineering
  {
    id: "o-l3-des",
    title: "OTHM Level 3 Diploma in Engineering and Surveying",
    level: "Level 3",
    category: "Engineering and Surveying",
    awardingBody: "OTHM",
    image: "/help desk hero.jpg",
    overview: "The OTHM Level 3 Diploma in Engineering and Surveying provides foundational technical knowledge for those entering the civil engineering and land surveying sectors.",
    learningOutcomes: [
      "Understand core engineering principles and mathematics",
      "Perform basic land surveying and data collection",
      "Understand construction materials and technology",
      "Apply health and safety standards in engineering environments"
    ],
    progression: [
      "OTHM Level 4 Diploma in Civil Engineering",
      "Entry-level roles as Surveying Assistant or Junior Technician",
      "Advanced technical apprenticeships"
    ],
    entryRequirements: [
      "Secondary education completion",
      "Interest in engineering and technical design",
      "Min 16 years of age"
    ],
    curriculum: [
      "Engineering Principles",
      "Land Surveying Fundamentals",
      "Construction Technology",
      "Engineering Mathematics",
      "Health and Safety in Engineering"
    ],
    duration: "6 Months",
    deliveryMode: "Blended Learning",
    assessment: "Assignments & Practical Tasks"
  }
];

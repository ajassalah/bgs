export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "grad-ceremony-2024",
    title: "Kensley Graduate School – Graduation Ceremony 2024 – OTHM & ATHE",
    excerpt: "Kensley Graduate School held its spectacular graduation ceremony at the BMICH Lotus Hall. The event marked the culmination of years of hard work, and we are excited to share these unforgettable moments with you! The full livestream is now available.",
    date: "September 19, 2024",
    author: "KGS Admin",
    category: "Events",
    image: "/pexels-karola-g-8106690.jpg"
  },
  {
    id: "ai-webinar-future",
    title: "The Future of Artificial Intelligence-Webinar",
    excerpt: "Following our exclusive AI event, we’ve compiled a comprehensive Q&A session featuring questions from our engaged audience. Gain further clarity on how AI is reshaping the global workforce and uncovering additional technical perspectives.",
    date: "March 22, 2024",
    author: "Rune Christoffer",
    category: "Webinar",
    image: "/online-student-5d.jpg"
  },
  {
    id: "pgdip-education-benefits",
    title: "Why should a Teacher get a PgDip in Education Management?",
    excerpt: "As a teacher, you’re always on the look out to find ways to improve your skills. A Postgraduate Diploma in Education Management helps you personally and professionally, helping you engage better with students under your supervision.",
    date: "October 18, 2021",
    author: "KGS Editorial",
    category: "Education",
    image: "/online-student-2r.jpg"
  },
  {
    id: "mba-after-engineering",
    title: "6 Benefits of MBA after Engineering",
    excerpt: "Though an Engineering degree gives you the technical skills to start your career, it alone isn’t enough for the long professional journey ahead. Learn why an MBA provides the strategic edge required by top global companies.",
    date: "October 8, 2021",
    author: "KGS Editorial",
    category: "Career Advice",
    image: "/pexels-vantha-thang-1224068-2361316.jpg"
  },
  {
    id: "what-is-mba-advanced-entry",
    title: "What is MBA Advanced Entry Route?",
    excerpt: "The Advanced Entry Route is designed for professionals with significant experience. It allows you to fast-track your Master's degree by using your prior work experience and qualifications as credit toward the program.",
    date: "August 15, 2021",
    author: "Sarah Thompson",
    category: "Higher Education",
    image: "/pexels-vantha-thang-1224068-2332083.jpg"
  },
  {
    id: "e-learning-beginning",
    title: "E – Learning: The Beginning",
    excerpt: "The shift to digital learning has changed the face of education. Witness the journey of E-learning and how it continues to provide access to high-quality qualifications for students globally, regardless of their location.",
    date: "June 12, 2021",
    author: "KGS Editorial",
    category: "Technology",
    image: "/online-student-3ff-1.jpg"
  }
];

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
    title: "British Graduate School - Graduation Ceremony 2024 - OTHM & Qualifi",
    excerpt: "The British Graduate School celebrated its class of 2024 in a grand ceremony held in Leicester, awarding diplomas from OTHM and Qualifi...",
    date: "September 19, 2024",
    author: "BGS Admin",
    category: "Events",
    image: "/pexels-karola-g-8106690.jpg"
  },
  {
    id: "ai-webinar-future",
    title: "The Future of Artificial Intelligence - Exclusive Webinar",
    excerpt: "Discover how AI is reshaping the global workforce and what skills you need to stay ahead in the 21st century tech landscape...",
    date: "March 22, 2024",
    author: "Dr. James Wilson",
    category: "Webinar",
    image: "/online-student-5d.jpg"
  },
  {
    id: "pgdip-education-benefits",
    title: "Why should a Teacher get a PgDip in Education Management?",
    excerpt: "As the educational landscape evolves, teachers are moving into leadership roles. A Postgraduate Diploma provides the strategic lens required...",
    date: "October 18, 2021",
    author: "BGS Editorial",
    category: "Education",
    image: "/online-student-2r.jpg"
  },
  {
    id: "mba-after-engineering",
    title: "6 Benefits of Pursuing an MBA after Engineering",
    excerpt: "Engineers with business acumen are in high demand. Learn why an MBA Top-Up is the perfect career catalyst for technical professionals...",
    date: "October 8, 2021",
    author: "BGS Editorial",
    category: "Career Advice",
    image: "/pexels-vantha-thang-1224068-2361316.jpg"
  },
  {
    id: "it-career-growth",
    title: "Unlocking Career Growth in IT with OTHM Level 7",
    excerpt: "The OTHM Level 7 Diploma in Information Technology offers a clear pathway to senior technical leadership and MSc top-up programs...",
    date: "August 15, 2021",
    author: "Sarah Thompson",
    category: "Technology",
    image: "/pexels-vantha-thang-1224068-2332083.jpg"
  },
  {
    id: "international-study-benefits",
    title: "The Benefits of an International Learning Environment",
    excerpt: "Studying in a globally recognized institution like BGS prepares you for diverse workplace cultures and global employability...",
    date: "June 12, 2021",
    author: "BGS Editorial",
    category: "Student Life",
    image: "/online-student-3ff-1.jpg"
  }
];

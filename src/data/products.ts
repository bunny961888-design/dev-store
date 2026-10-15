export interface Product {
  id: string;
  title: string;
  category: "Major Project" | "Mini Project" | "Template";
  price: number;
  originalPrice: number;
  techStack: string[];
  description: string;
  demoUrl?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "ai-attendance-system",
    title: "AI Face Recognition Attendance System",
    category: "Major Project",
    price: 1499,
    originalPrice: 2999,
    techStack: ["Python", "OpenCV", "Flask", "SQLite"],
    description: "Complete automated attendance tool with real-time face tracking, PPT, documentation, and source code.",
    demoUrl: "https://github.com",
  },
  {
    id: "fullstack-ecommerce-nextjs",
    title: "Full Stack E-Commerce & Dashboard",
    category: "Major Project",
    price: 1999,
    originalPrice: 3499,
    techStack: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    description: "Production ready e-commerce web app with authentication, cart, order tracking, and admin dashboard.",
    demoUrl: "https://github.com",
  },
  {
    id: "portfolio-resume-template",
    title: "Developer Portfolio & Blog Template",
    category: "Template",
    price: 499,
    originalPrice: 999,
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    description: "Modern dark-mode developer portfolio template optimized for fast loading and great SEO.",
    demoUrl: "https://github.com",
  },
];
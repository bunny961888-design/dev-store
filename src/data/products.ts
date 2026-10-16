export interface Product {
  id: string;
  title: string;
  category: "Major Project" | "Mini Project" | "Template";
  price: number;
  originalPrice: number;
  techStack: string[];
  description: string;
  demoUrl?: string;
  downloadUrl?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "ai-attendance-system",
    title: "AI Face Recognition Attendance System",
    category: "Major Project",
    price: 1499,
    originalPrice: 2999,
    techStack: ["Python", "OpenCV", "Flask", "SQLite"],
    description: "Complete automated attendance tool with real time face tracking, PPT, documentation, and base paper.",
    demoUrl: "https://github.com",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1kjV6l4lxLNTjjb0mkerlt0uLajZl-6mk",
  },
  {
    id: "fullstack-ecommerce-nextjs",
    title: "Full Stack E-Commerce & Dashboard",
    category: "Major Project",
    price: 1,
    originalPrice: 1999,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    description: "Production ready e-commerce platform with admin portal, cart, and payment gateway integration.",
    demoUrl: "https://github.com",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1kjV6l4lxLNTjjb0mkerlt0uLajZl-6mk",
  },
];
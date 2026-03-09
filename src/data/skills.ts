export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  icon?: string;
}

export const skills: Skill[] = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 92, category: "Frontend" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 82, category: "Backend" },
  { name: "Go", level: 75, category: "Backend" },
  { name: "PostgreSQL", level: 80, category: "Backend" },
  { name: "Docker", level: 78, category: "DevOps" },
  { name: "AWS", level: 76, category: "DevOps" },
  { name: "CI/CD", level: 82, category: "DevOps" },
  { name: "Kubernetes", level: 70, category: "DevOps" },
  { name: "Figma", level: 72, category: "Design" },
  { name: "Git", level: 92, category: "Tools" },
  { name: "GraphQL", level: 80, category: "Tools" },
  { name: "Redis", level: 74, category: "Tools" },
];

export const categories = ["Frontend", "Backend", "DevOps", "Design", "Tools"];

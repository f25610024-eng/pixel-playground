export interface Project {
  id: number;
  title: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  tags: string[];
  link: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ai-code-reviewer",
    description: "An intelligent code review tool powered by machine learning that analyzes pull requests and suggests improvements.",
    language: "TypeScript",
    languageColor: "hsl(212, 92%, 67%)",
    stars: 1243,
    forks: 189,
    tags: ["AI", "DevTools", "TypeScript"],
    link: "#",
  },
  {
    id: 2,
    title: "cloud-deploy-cli",
    description: "A CLI tool for seamless cloud deployments across AWS, GCP, and Azure with zero-config setup.",
    language: "Go",
    languageColor: "hsl(194, 66%, 61%)",
    stars: 876,
    forks: 124,
    tags: ["CLI", "Cloud", "DevOps"],
    link: "#",
  },
  {
    id: 3,
    title: "react-motion-kit",
    description: "A comprehensive animation library for React with GPU-accelerated transitions and gesture support.",
    language: "TypeScript",
    languageColor: "hsl(212, 92%, 67%)",
    stars: 2341,
    forks: 312,
    tags: ["React", "Animation", "UI"],
    link: "#",
  },
  {
    id: 4,
    title: "data-pipeline-engine",
    description: "High-performance data processing engine with support for real-time streaming and batch operations.",
    language: "Rust",
    languageColor: "hsl(28, 90%, 55%)",
    stars: 567,
    forks: 78,
    tags: ["Data", "Backend", "Performance"],
    link: "#",
  },
  {
    id: 5,
    title: "design-system-core",
    description: "A modular design system with accessible components, theming support, and comprehensive documentation.",
    language: "TypeScript",
    languageColor: "hsl(212, 92%, 67%)",
    stars: 1890,
    forks: 256,
    tags: ["Design", "Components", "A11y"],
    link: "#",
  },
  {
    id: 6,
    title: "api-gateway-proxy",
    description: "Lightweight API gateway with rate limiting, caching, and automatic load balancing capabilities.",
    language: "Go",
    languageColor: "hsl(194, 66%, 61%)",
    stars: 432,
    forks: 67,
    tags: ["API", "Microservices", "Backend"],
    link: "#",
  },
];

// Pure utilities — no Node.js deps, safe to import in client components

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export interface PostMeta {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
  featured: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Automatización: { bg: "#E6F1FB", text: "#185FA5" },
  Bots: { bg: "#FAEEDA", text: "#BA7517" },
  "Casos de uso": { bg: "#E1F5EE", text: "#1D9E75" },
  Tutoriales: { bg: "#F3E8FF", text: "#7C3AED" },
  Novedades: { bg: "#FEF3C7", text: "#D97706" },
  Automation: { bg: "#E6F1FB", text: "#185FA5" },
  "Use cases": { bg: "#E1F5EE", text: "#1D9E75" },
  Tutorials: { bg: "#F3E8FF", text: "#7C3AED" },
  News: { bg: "#FEF3C7", text: "#D97706" },
  自动化: { bg: "#E6F1FB", text: "#185FA5" },
  机器人: { bg: "#FAEEDA", text: "#BA7517" },
  案例研究: { bg: "#E1F5EE", text: "#1D9E75" },
  教程: { bg: "#F3E8FF", text: "#7C3AED" },
  新闻: { bg: "#FEF3C7", text: "#D97706" },
};

export function getCategoryColor(category: string): { bg: string; text: string } {
  return CATEGORY_COLORS[category] ?? { bg: "#f8f7f4", text: "#888780" };
}

export function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr);
  const localeMap: Record<string, string> = {
    es: "es-UY",
    en: "en-US",
    zh: "zh-CN",
  };
  return date.toLocaleDateString(localeMap[locale] ?? "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function extractHeadings(content: string): { text: string; id: string }[] {
  return content
    .split("\n")
    .filter((line) => /^## /.test(line))
    .map((line, i) => {
      const text = line.replace(/^## /, "").trim();
      const id = slugify(text) || `heading-${i}`;
      return { text, id };
    });
}

// Server-only — uses fs/path. Never import this in client components.
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post, PostMeta } from "./blog-utils";

export type { Post, PostMeta };
export {
  slugify,
  getCategoryColor,
  formatDate,
  extractHeadings,
} from "./blog-utils";

const contentDir = path.join(process.cwd(), "src/content/blog");

function readPostsFromDir(locale: string): Post[] {
  const dir = path.join(contentDir, locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    return {
      title: data.title as string,
      excerpt: data.excerpt as string,
      date: data.date as string,
      category: data.category as string,
      readTime: data.readTime as string,
      slug: data.slug as string,
      featured: (data.featured as boolean) ?? false,
      content,
    };
  });
}

export function getAllPosts(locale: string): Post[] {
  return readPostsFromDir(locale).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllPostsMeta(locale: string): PostMeta[] {
  return getAllPosts(locale).map(({ content: _content, ...meta }) => meta);
}

export function getPostBySlug(slug: string, locale: string): Post | null {
  return getAllPosts(locale).find((p) => p.slug === slug) ?? null;
}

export function getFeaturedPosts(locale: string): PostMeta[] {
  return getAllPostsMeta(locale).filter((p) => p.featured);
}

export function getRelatedPosts(post: Post, locale: string, limit = 2): PostMeta[] {
  return getAllPostsMeta(locale)
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}

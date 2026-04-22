import { getAllPosts } from "@/lib/blog";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ["es", "en"];
  const baseUrl = "https://syneratechnologies.com";

  const staticPages = ["", "/about", "/services", "/pricing", "/contact", "/blog"];

  const staticRoutes = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: (page === "/blog" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: page === "" ? 1 : 0.8,
    }))
  );

  const blogRoutes = locales.flatMap((locale) => {
    const posts = getAllPosts(locale);
    return posts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  });

  return [...staticRoutes, ...blogRoutes];
}

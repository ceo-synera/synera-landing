import { getAllPostsMeta } from "@/lib/blog";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogClient from "@/components/sections/blog/BlogClient";

const titles: Record<string, string> = {
  es: "Blog — Ideas y casos de uso sobre IA",
  en: "Blog — AI Ideas and Use Cases",
  zh: "博客 — AI创意和使用案例",
};

const descriptions: Record<string, string> = {
  es: "Artículos prácticos sobre automatización, bots e inteligencia artificial aplicada a negocios reales.",
  en: "Practical articles about automation, bots and artificial intelligence applied to real businesses.",
  zh: "关于自动化、机器人和人工智能应用于实际业务的实用文章。",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale in titles ? locale : "es";
  return {
    title: titles[loc],
    description: descriptions[loc],
    openGraph: {
      title: titles[loc],
      description: descriptions[loc],
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getAllPostsMeta(locale);

  return (
    <>
      <BlogHero />
      <BlogClient posts={posts} locale={locale} />
    </>
  );
}

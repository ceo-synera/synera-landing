import { getAllPostsMeta } from "@/lib/blog";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogClient from "@/components/sections/blog/BlogClient";

export const metadata = {
  title: "Blog | Synera Technologies",
  description: "Ideas, casos de uso y novedades sobre automatización con IA",
};

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

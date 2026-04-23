import { getAllPostsMeta } from "@/lib/blog";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogClient from "@/components/sections/blog/BlogClient";

const titles: Record<string, string> = {
  es: "Blog de Automatización con IA para Negocios | Synera Technologies",
  en: "AI Automation Blog for Business | Synera Technologies",
};

const descriptions: Record<string, string> = {
  es: "Guías, casos de uso y tutoriales prácticos sobre automatización de procesos, chatbots para WhatsApp, check-in digital y cómo implementar IA en tu negocio.",
  en: "Guides, use cases and practical tutorials on process automation, WhatsApp chatbots, digital check-in and how to implement AI in your business.",
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

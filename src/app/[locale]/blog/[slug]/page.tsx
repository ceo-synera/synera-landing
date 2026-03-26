import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getPostBySlug,
  getAllPostsMeta,
  getRelatedPosts,
  getCategoryColor,
  extractHeadings,
  formatDate,
  slugify,
} from "@/lib/blog";
import TableOfContents from "@/components/sections/blog/TableOfContents";
import { getTranslations } from "next-intl/server";

// ── MDX custom components ─────────────────────────────────────────────────────

let headingCounter = 0;

function headingId(children: React.ReactNode): string {
  const text = Array.isArray(children)
    ? children.map((c) => (typeof c === "string" ? c : "")).join("")
    : typeof children === "string"
    ? children
    : "";
  return slugify(text) || `heading-${headingCounter++}`;
}

const mdxComponents = {
  h2: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 id={headingId(children)} className="blog-h2" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 id={headingId(children)} className="blog-h3" {...props}>
      {children}
    </h3>
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="blog-p" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="blog-ul" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="blog-ol" {...props} />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li className="blog-li" {...props} />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="blog-blockquote" {...props} />
  ),
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a className="blog-link" {...props} />
  ),
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="blog-strong" {...props} />
  ),
  hr: () => <hr className="blog-hr" />,
  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <div className="overflow-x-auto my-6">
      <table className="blog-table" {...props} />
    </div>
  ),
  th: (props: React.ComponentPropsWithoutRef<"th">) => (
    <th className="blog-th" {...props} />
  ),
  td: (props: React.ComponentPropsWithoutRef<"td">) => (
    <td className="blog-td" {...props} />
  ),
  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code className="blog-code" {...props} />
  ),
};

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);
  if (!post) return {};
  return {
    title: `${post.title} | Synera Technologies`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/opengraph-image.png"],
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);
  if (!post) notFound();

  const t = await getTranslations("blog");
  const { bg, text: textColor } = getCategoryColor(post.category);
  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(post, locale, 2);

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=https://syneratechnologies.com/${locale}/blog/${post.slug}`;

  return (
    <>
      {/* ── Article header ── */}
      <header className="pt-28 pb-10 bg-white border-b border-border-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted mb-6 flex-wrap">
            <Link href={`/${locale}`} className="hover:text-primary transition-colors">
              {t("breadcrumb_home")}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/blog`} className="hover:text-primary transition-colors">
              {t("hero_label")}
            </Link>
            <span>/</span>
            <span className="text-primary font-medium line-clamp-1">{post.title}</span>
          </nav>

          {/* Category */}
          <span
            className="inline-block text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: bg, color: textColor }}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4 max-w-3xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-muted font-light leading-relaxed mb-6 max-w-2xl">
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{t("by")} <span className="font-medium text-primary">{t("author")}</span></span>
            <span className="w-1 h-1 rounded-full bg-border-light inline-block" />
            <span>{formatDate(post.date, locale)}</span>
            <span className="w-1 h-1 rounded-full bg-border-light inline-block" />
            <span>{post.readTime} {t("read_time")}</span>
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          {/* Main content */}
          <main>
            <div className="blog-prose">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* Inline CTA */}
            <div className="mt-10 rounded-2xl border border-accent p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{ backgroundColor: "#E6F1FB" }}>
              <p className="font-sora font-semibold text-primary text-lg">
                {t("cta_title")}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="shrink-0 bg-accent text-white font-semibold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                {t("cta_button")}
              </Link>
            </div>

            {/* Footer */}
            <div className="mt-10 pt-8 border-t border-border-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href={`/${locale}/blog`}
                className="text-sm font-medium text-muted hover:text-primary transition-colors"
              >
                {t("back_to_blog")}
              </Link>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent hover:underline"
              >
                {t("share_linkedin")}
              </a>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-6">
              {/* TOC */}
              <TableOfContents headings={headings} tocLabel={t("toc")} />

              {/* Related */}
              {related.length > 0 && (
                <div className="bg-surface border border-border-light rounded-2xl p-5">
                  <p className="font-sora font-semibold text-primary text-sm mb-4">
                    {t("related")}
                  </p>
                  <div className="flex flex-col gap-4">
                    {related.map((r) => {
                      const { bg: rb, text: rt } = getCategoryColor(r.category);
                      return (
                        <Link
                          key={r.slug}
                          href={`/${locale}/blog/${r.slug}`}
                          className="group flex flex-col gap-1.5"
                        >
                          <span
                            className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full self-start"
                            style={{ backgroundColor: rb, color: rt }}
                          >
                            {r.category}
                          </span>
                          <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors leading-snug">
                            {r.title}
                          </span>
                          <span className="text-xs text-muted font-light line-clamp-2">
                            {r.excerpt}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

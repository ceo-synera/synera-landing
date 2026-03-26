import Link from "next/link";
import { PostMeta, getCategoryColor, formatDate } from "@/lib/blog-utils";

interface ArticleCardProps {
  post: PostMeta;
  locale: string;
  readMoreLabel: string;
  readTimeLabel: string;
}

export default function ArticleCard({
  post,
  locale,
  readMoreLabel,
  readTimeLabel,
}: ArticleCardProps) {
  const { bg, text } = getCategoryColor(post.category);
  const href = `/${locale}/blog/${post.slug}`;

  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl border border-border-light overflow-hidden flex flex-col hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
    >
      {/* Category badge */}
      <div className="px-5 pt-5 pb-0">
        <span
          className="inline-block text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ backgroundColor: bg, color: text }}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="px-5 pt-3 pb-5 flex flex-col gap-2 flex-1">
        <h3 className="font-sora font-semibold text-primary text-base leading-snug group-hover:text-accent transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted font-light leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 mt-auto border-t border-border-light">
          <span className="text-xs text-muted">
            {formatDate(post.date, locale)}
          </span>
          <span className="text-xs text-muted">
            {post.readTime} {readTimeLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}

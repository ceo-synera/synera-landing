"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import ArticleCard from "./ArticleCard";
import { PostMeta } from "@/lib/blog-utils";

interface BlogClientProps {
  posts: PostMeta[];
  locale: string;
}

export default function BlogClient({ posts, locale }: BlogClientProps) {
  const t = useTranslations("blog");

  const categories = [
    t("filter_all"),
    t("cat_cases"),
    t("cat_bots"),
    t("cat_tutorials"),
    t("cat_automation"),
    t("cat_news"),
  ];

  const [selected, setSelected] = useState(t("filter_all"));

  const filtered =
    selected === t("filter_all")
      ? posts
      : posts.filter((p) => p.category === selected);

  return (
    <section className="py-12 bg-surface border-b border-border-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className="text-sm font-medium px-4 py-2 rounded-full border transition-all"
              style={
                selected === cat
                  ? { backgroundColor: "#1a1917", color: "#fff", borderColor: "#1a1917" }
                  : { backgroundColor: "#f8f7f4", color: "#888780", borderColor: "#d0cec8" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted font-light">
            {t("no_posts")}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <ArticleCard
                key={post.slug}
                post={post}
                locale={locale}
                readMoreLabel={t("read_more")}
                readTimeLabel={t("read_time")}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

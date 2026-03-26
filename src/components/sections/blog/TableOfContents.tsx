"use client";

import { useEffect, useState } from "react";

interface Heading {
  text: string;
  id: string;
}

interface TableOfContentsProps {
  headings: Heading[];
  tocLabel: string;
}

export default function TableOfContents({ headings, tocLabel }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="bg-surface border border-border-light rounded-2xl p-5">
      <p className="font-sora font-semibold text-primary text-sm mb-3">{tocLabel}</p>
      <nav>
        <ul className="flex flex-col gap-1.5">
          {headings.map(({ text, id }, i) => (
            <li key={id || i}>
              <a
                href={`#${id}`}
                className="text-sm font-light transition-colors leading-snug block py-0.5"
                style={{
                  color: activeId === id ? "#185FA5" : "#888780",
                  fontWeight: activeId === id ? 500 : 300,
                }}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

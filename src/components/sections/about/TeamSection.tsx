"use client";

import { useTranslations } from "next-intl";
import { useInView } from "@/hooks/useInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface TeamCardProps {
  initials: string;
  avatarBg: string;
  avatarColor: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
  tagBg: string;
  tagColor: string;
  style?: React.CSSProperties;
}

function TeamCard({
  initials,
  avatarBg,
  avatarColor,
  name,
  role,
  bio,
  tags,
  tagBg,
  tagColor,
  style,
}: TeamCardProps) {
  return (
    <div
      className="bg-white rounded-2xl border border-border-light p-6 flex flex-col gap-4"
      style={style}
    >
      {/* Avatar */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center font-sora font-bold text-lg"
        style={{ backgroundColor: avatarBg, color: avatarColor }}
      >
        {initials}
      </div>

      {/* Info */}
      <div>
        <h3 className="font-sora font-bold text-primary text-lg">{name}</h3>
        <p className="text-sm font-medium" style={{ color: avatarColor }}>
          {role}
        </p>
      </div>

      {/* Bio */}
      <p className="text-sm text-muted font-light leading-relaxed">{bio}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ backgroundColor: tagBg, color: tagColor }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TeamSection() {
  const t = useTranslations("about_page");
  const { ref, inView } = useInView();

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  const members = [
    {
      initials: t("member1_initials"),
      avatarBg: "#E6F1FB",
      avatarColor: "#185FA5",
      name: t("member1_name"),
      role: t("member1_role"),
      bio: t("member1_bio"),
      tags: [t("member1_tag1"), t("member1_tag2"), t("member1_tag3")],
      tagBg: "#E6F1FB",
      tagColor: "#185FA5",
    },
    {
      initials: t("member2_initials"),
      avatarBg: "#E1F5EE",
      avatarColor: "#1D9E75",
      name: t("member2_name"),
      role: t("member2_role"),
      bio: t("member2_bio"),
      tags: [t("member2_tag1"), t("member2_tag2"), t("member2_tag3")],
      tagBg: "#E1F5EE",
      tagColor: "#1D9E75",
    },
    {
      initials: t("member3_initials"),
      avatarBg: "#FAEEDA",
      avatarColor: "#BA7517",
      name: t("member3_name"),
      role: t("member3_role"),
      bio: t("member3_bio"),
      tags: [t("member3_tag1"), t("member3_tag2"), t("member3_tag3")],
      tagBg: "#FAEEDA",
      tagColor: "#BA7517",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-border-light">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12" style={fadeStyle(0)}>
          <SectionLabel color="accent">{t("team_label")}</SectionLabel>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-primary">
            {t("team_title")}
          </h2>
          <p className="text-muted font-light text-lg max-w-xl leading-relaxed">
            {t("team_subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((member, i) => (
            <TeamCard key={member.name} {...member} style={fadeStyle(0.1 + i * 0.12)} />
          ))}
        </div>
      </div>
    </section>
  );
}

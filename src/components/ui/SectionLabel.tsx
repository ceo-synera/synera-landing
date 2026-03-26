interface SectionLabelProps {
  children: React.ReactNode;
  color?: "accent" | "teal" | "amber";
}

const colorClasses = {
  accent: "text-accent bg-accent-light",
  teal: "text-teal bg-teal-light",
  amber: "text-amber bg-amber-light",
};

export function SectionLabel({ children, color = "accent" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest ${colorClasses[color]}`}
    >
      {children}
    </span>
  );
}

import { ExternalLink, Github, FileText } from "lucide-react";

interface ProjectMetric {
  label: string;
}

interface ProjectLink {
  type: "github" | "demo" | "case-study";
  label: string;
  href: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  metrics: ProjectMetric[];
  links: ProjectLink[];
}

const linkIcons = {
  github: Github,
  demo: ExternalLink,
  "case-study": FileText,
};

export default function ProjectCard({
  title,
  description,
  tags,
  metrics,
  links,
}: ProjectCardProps) {
  return (
    <div
      className="rounded-xl border flex flex-col gap-5 overflow-hidden transition-colors duration-200 hover:border-blue-500/50"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* Header bar */}
      <div
        className="h-1 w-full"
        style={{ backgroundColor: "var(--accent)" }}
      />

      <div className="px-6 pb-6 flex flex-col gap-5">
        {/* Title */}
        <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
          {title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full font-mono"
              style={{
                backgroundColor: "rgba(37, 99, 235, 0.12)",
                color: "#93c5fd",
                border: "1px solid rgba(37, 99, 235, 0.25)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          {description}
        </p>

        {/* Metrics */}
        <div
          className="grid grid-cols-3 gap-3 p-4 rounded-lg"
          style={{ backgroundColor: "var(--surface-elevated)" }}
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p
                className="text-xs font-medium"
                style={{ color: "var(--muted-foreground)" }}
              >
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {links.map((link) => {
            const Icon = linkIcons[link.type];
            return (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border transition-colors duration-200 hover:text-white"
                style={{
                  color: "var(--muted-foreground)",
                  borderColor: "var(--border)",
                }}
              >
                <Icon size={14} />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div
      className="rounded-xl p-6 border flex flex-col gap-4 transition-colors duration-200 hover:border-blue-500/50"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: "rgba(37, 99, 235, 0.15)" }}
      >
        <Icon size={22} style={{ color: "var(--accent)" }} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
        {description}
      </p>

      {/* Feature list */}
      <ul className="flex flex-col gap-2 mt-auto">
        {features.map((feature) => (
          <li
            key={feature}
            className="text-sm flex items-center gap-2"
            style={{ color: "var(--muted-foreground)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "var(--accent)" }}
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

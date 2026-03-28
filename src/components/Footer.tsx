import Link from "next/link";
import { Github, Linkedin, Twitter, Zap } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/tranhoangtu-it" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/tranhoangtu" },
  { icon: Twitter, label: "Twitter/X", href: "https://x.com/tranhoangtu" },
];

export default function Footer() {
  return (
    <footer
      className="border-t mt-20"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 font-mono font-bold text-lg w-fit"
              style={{ color: "var(--accent)" }}
            >
              <Zap size={18} />
              <span>ai.engineer</span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Building custom AI automation systems that save businesses 20+ hours per week.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
              Quick Links
            </h4>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:text-white w-fit"
                style={{ color: "var(--muted-foreground)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-lg transition-colors duration-200 hover:text-white"
                  style={{
                    color: "var(--muted-foreground)",
                    backgroundColor: "var(--surface-elevated)",
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm mt-2" style={{ color: "var(--muted-foreground)" }}>
              tranhoangtu.it@gmail.com
            </p>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t text-sm text-center"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        >
          © {new Date().getFullYear()} AI Automation Engineer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

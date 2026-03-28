import type { Metadata } from "next";
import { Mail, Github, Linkedin, Twitter, Calendar } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | AI Automation Engineer",
  description: "Get in touch to discuss your AI automation project. Book a free 30-minute consultation.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "tranhoangtu.it@gmail.com",
    href: "mailto:tranhoangtu.it@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/tranhoangtu-it",
    href: "https://github.com/tranhoangtu-it",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/tranhoangtu",
    href: "https://linkedin.com/in/tranhoangtu",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@tranhoangtu",
    href: "https://x.com/tranhoangtu",
  },
];

export default function ContactPage() {
  return (
    <div className="px-4 sm:px-6 py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="text-center flex flex-col gap-4">
          <span
            className="text-xs font-mono px-3 py-1.5 rounded-full border mx-auto w-fit"
            style={{
              color: "var(--accent)",
              borderColor: "rgba(37,99,235,0.4)",
              backgroundColor: "rgba(37,99,235,0.08)",
            }}
          >
            Let&apos;s Work Together
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold">Get in Touch</h1>
          <p
            className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Have an automation project in mind? I&apos;d love to hear about it.
            Typical response time is under 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: contact info + calendar CTA */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Calendar CTA */}
            <div
              className="rounded-xl border p-6 flex flex-col gap-4"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(37,99,235,0.15)" }}
              >
                <Calendar size={20} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <h3 className="font-bold text-base">Book a Free Call</h3>
                <p
                  className="text-sm mt-1 leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Prefer to talk? Book a free 30-minute discovery call and let&apos;s
                  figure out how AI can save you time.
                </p>
              </div>
              {/* TODO: Replace href with a real Calendly or Cal.com booking link, e.g. https://cal.com/tranhoangtu/30min */}
              <a
                href="#"
                className="text-sm font-medium px-4 py-2.5 rounded-lg text-center transition-colors duration-200"
                style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
                aria-disabled="true"
              >
                Schedule 30-min Consultation
              </a>
            </div>

            {/* Contact details */}
            <div
              className="rounded-xl border p-6 flex flex-col gap-4"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <h3 className="font-bold text-base">Contact Details</h3>
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--surface-elevated)" }}
                  >
                    <Icon size={15} style={{ color: "var(--muted-foreground)" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--muted)" }}
                    >
                      {label}
                    </div>
                    <div
                      className="text-sm group-hover:text-white transition-colors"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Bot, Workflow, Wrench, ArrowRight, Search, Hammer, Rocket } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & RAG Systems",
    description:
      "Custom Q&A bots trained on your documents, delivering accurate answers with source citations and conversation memory.",
    features: [
      "Document intelligence & PDF ingestion",
      "Streaming responses with citations",
      "Customer support automation",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "n8n and Make.com workflows that connect your tools, eliminate manual data entry, and run 24/7 without supervision.",
    features: [
      "API integrations & webhooks",
      "Shopify, Slack, Google Sheets",
      "Process automation pipelines",
    ],
  },
  {
    icon: Wrench,
    title: "AI-Powered Tools",
    description:
      "End-to-end AI applications: content pipelines, multi-agent systems, and custom dashboards built for production.",
    features: [
      "Content generation pipelines",
      "Multi-agent orchestration",
      "Custom AI applications",
    ],
  },
];

const stats = [
  { value: "4+", label: "Portfolio Projects" },
  { value: "20+", label: "Hours Saved Weekly" },
  { value: "100%", label: "Enterprise-Grade Security" },
  { value: "Prod", label: "Production-Ready Code" },
];

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description: "We discuss your workflows and pain points to identify the highest-ROI automation opportunities.",
  },
  {
    icon: Hammer,
    number: "02",
    title: "Build",
    description: "I design and develop your custom AI solution with full transparency and weekly check-ins.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Support",
    description: "Deploy, monitor, and optimize your system with optional monthly retainer for ongoing improvements.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative px-4 sm:px-6 py-24 sm:py-36 text-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.18) 0%, transparent 70%), var(--background)",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-6">
          <span
            className="text-xs font-mono px-3 py-1.5 rounded-full border"
            style={{
              color: "var(--accent)",
              borderColor: "rgba(37,99,235,0.4)",
              backgroundColor: "rgba(37,99,235,0.08)",
            }}
          >
            Available for new projects
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            I Build AI Systems That{" "}
            <span style={{ color: "var(--accent)" }}>Automate</span> Your Business
          </h1>

          <p
            className="text-lg sm:text-xl max-w-2xl leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            From intelligent chatbots to workflow automation — I help businesses save{" "}
            <strong style={{ color: "var(--foreground)" }}>20+ hours/week</strong> with custom AI
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/portfolio"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
            >
              View Portfolio
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border transition-colors duration-200 hover:text-white"
              style={{
                borderColor: "var(--border)",
                color: "var(--muted-foreground)",
                backgroundColor: "var(--surface)",
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-xl border p-6"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold font-mono" style={{ color: "var(--accent)" }}>
                  {stat.value}
                </div>
                <div className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold">What I Build</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Focused on three core service lines that deliver measurable ROI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="px-4 sm:px-6 py-20"
        style={{ backgroundColor: "var(--surface)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              A simple three-step process to get your automation live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-4xl font-bold font-mono opacity-20"
                      style={{ color: "var(--accent)" }}
                    >
                      {step.number}
                    </span>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "rgba(37,99,235,0.15)" }}
                    >
                      <Icon size={20} style={{ color: "var(--accent)" }} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Automate Your Business?
          </h2>
          <p className="text-base" style={{ color: "var(--muted-foreground)" }}>
            Book a free 30-minute discovery call and find out how much time AI can save you.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
            >
              Book Free Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

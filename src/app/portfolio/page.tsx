import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Portfolio | AI Automation Engineer",
  description: "Real-world AI automation projects — RAG chatbots, workflow automation, content pipelines, and multi-agent systems.",
};

const projects = [
  {
    title: "RAG Customer Support Bot",
    description:
      "AI-powered document Q&A system with source citations, streaming responses, and conversation memory. Built for enterprise support teams handling large knowledge bases.",
    tags: ["Python", "FastAPI", "LangChain", "ChromaDB", "Next.js"],
    metrics: [
      { label: "85% answer accuracy" },
      { label: "22 automated tests" },
      { label: "<500ms first token" },
    ],
    links: [
      { type: "github" as const, label: "GitHub", href: "https://github.com/tranhoangtu-it/rag-chatbot" },
      { type: "demo" as const, label: "Live Demo", href: "#" },
    ],
  },
  {
    title: "mcpman — MCP Server Manager",
    description:
      "CLI tool for managing Model Context Protocol servers with v2.1.0 featuring 46 commands, streamlined server lifecycle management, config validation, and structured logging.",
    tags: ["Go", "MCP", "CLI", "DevTools"],
    metrics: [
      { label: "v2.1.0 — 46 commands" },
      { label: "Multi-server management" },
      { label: "Config validation" },
    ],
    links: [
      { type: "github" as const, label: "GitHub", href: "https://github.com/tranhoangtu-it/mcpman" },
    ],
  },
  {
    title: "MedAgent — AI Healthcare Assistant",
    description:
      "Secure multi-agent healthcare assistant with Row-Level Security (RLS) enforcement, protobuf compilation for typed service contracts, and HIPAA-aligned data access controls.",
    tags: ["Python", "Protobuf", "RLS", "Multi-agent", "PostgreSQL"],
    metrics: [
      { label: "RLS enforcement" },
      { label: "Protobuf compilation" },
      { label: "HIPAA-aligned security" },
    ],
    links: [
      { type: "github" as const, label: "GitHub", href: "https://github.com/tranhoangtu-it/medagent" },
    ],
  },
  {
    title: "Multi-Agent Business Assistant",
    description:
      "A collaborative team of AI agents handling market research, competitor analysis, and meeting summarization. Reduces 4-hour research tasks to under 10 minutes.",
    tags: ["Python", "OpenAI", "Streamlit"],
    metrics: [
      { label: "3 use cases" },
      { label: "4-hour task in 10 min" },
      { label: "Structured reports" },
    ],
    links: [
      { type: "github" as const, label: "GitHub", href: "https://github.com/tranhoangtu-it/multi-agent-assistant" },
      { type: "demo" as const, label: "Live Demo", href: "#" },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <div className="px-4 sm:px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
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
            Selected Work
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold">Portfolio</h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Production-ready AI systems built for real business problems. Each project
            includes full source code, tests, and deployment documentation.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="rounded-xl border p-8 text-center flex flex-col gap-4"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <h2 className="text-2xl font-bold">Have a Project in Mind?</h2>
          <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            I&apos;m open to new projects. Let&apos;s discuss your automation needs.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200"
              style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

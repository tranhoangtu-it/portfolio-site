import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://tuth.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Automation Engineer | Hoang Tu Tran",
    template: "%s | Hoang Tu Tran",
  },
  description:
    "I build custom AI systems that automate business workflows — chatbots, RAG pipelines, n8n automations, and multi-agent solutions.",
  keywords: [
    "AI automation",
    "RAG chatbot",
    "workflow automation",
    "n8n",
    "LangChain",
    "AI engineer",
    "full-stack engineer",
    "security engineer",
  ],
  authors: [{ name: "Hoang Tu Tran", url: siteUrl }],
  creator: "Hoang Tu Tran",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "AI Automation Engineer | Hoang Tu Tran",
    description:
      "I build custom AI systems that automate business workflows — chatbots, RAG pipelines, n8n automations, and multi-agent solutions.",
    url: siteUrl,
    siteName: "Hoang Tu Tran — AI Engineer",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Hoang Tu Tran — AI Automation Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Engineer | Hoang Tu Tran",
    description:
      "I build custom AI systems that automate business workflows — chatbots, RAG pipelines, n8n automations, and multi-agent solutions.",
    creator: "@tranhoangtu",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hoang Tu Tran",
  url: siteUrl,
  email: "tranhoangtu.it@gmail.com",
  jobTitle: "Full-Stack & Security Engineer, AI/ML Infrastructure",
  sameAs: [
    "https://github.com/tranhoangtu-it",
    "https://linkedin.com/in/tranhoangtu",
    "https://x.com/tranhoangtu",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hoang Tu Tran — AI Engineer",
  url: siteUrl,
  description:
    "Custom AI systems, RAG pipelines, workflow automation, and multi-agent solutions.",
  author: {
    "@type": "Person",
    name: "Hoang Tu Tran",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
          style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

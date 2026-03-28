"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Formspree / mailto fallback — replace action URL with real endpoint
    const mailto = `mailto:tranhoangtu.it@gmail.com?subject=Project Inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 600);
  }

  const inputStyle = {
    backgroundColor: "var(--surface-elevated)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
    borderRadius: "8px",
    padding: "10px 14px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
  };

  if (submitted) {
    return (
      <div
        className="rounded-xl border p-10 flex flex-col items-center gap-4 text-center"
        style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
      >
        <CheckCircle size={48} style={{ color: "var(--accent)" }} />
        <h3 className="text-xl font-bold">Message Sent!</h3>
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border p-6 sm:p-8 flex flex-col gap-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>
          Your Name
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Jane Smith"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="jane@company.com"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>
          Tell me about your project
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="I need help automating our customer support with AI..."
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200 disabled:opacity-60"
        style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
        onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = "var(--accent-hover)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)")}
      >
        <Send size={16} />
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

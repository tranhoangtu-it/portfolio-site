"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

// TODO: Replace FORM_ID_HERE with your real Formspree form ID.
// Sign up at https://formspree.io, create a form, and paste the ID here.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/FORM_ID_HERE";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateFields(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!validateEmail(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.message.trim()) errors.message = "Message is required.";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  // Honeypot field — must remain empty; bots tend to fill all fields
  const [honeypot, setHoneypot] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Silently reject if honeypot is filled (bot detected)
    if (honeypot) {
      setSubmitStatus("success");
      return;
    }

    const errors = validateFields(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setSubmitStatus("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });

      if (res.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  }

  const inputBase: React.CSSProperties = {
    backgroundColor: "var(--surface-elevated)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
    borderRadius: "8px",
    padding: "10px 14px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
  };

  const inputError: React.CSSProperties = {
    ...inputBase,
    border: "1px solid #ef4444",
  };

  if (submitStatus === "success") {
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
      noValidate
      className="rounded-xl border p-6 sm:p-8 flex flex-col gap-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
    >
      {/* Submission error banner */}
      {submitStatus === "error" && (
        <div
          className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm"
          style={{ backgroundColor: "rgba(239,68,68,0.1)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.3)" }}
          role="alert"
        >
          <AlertCircle size={16} />
          Something went wrong. Please try again or email me directly.
        </div>
      )}

      {/* Honeypot — hidden from real users, visible to bots */}
      <div aria-hidden="true" style={{ display: "none" }}>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>
          Your Name <span aria-hidden="true" style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          aria-required="true"
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          aria-invalid={!!fieldErrors.name}
          placeholder="Jane Smith"
          value={form.name}
          onChange={handleChange}
          style={fieldErrors.name ? inputError : inputBase}
        />
        {fieldErrors.name && (
          <span id="name-error" className="text-xs" style={{ color: "#ef4444" }} role="alert">
            {fieldErrors.name}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>
          Email Address <span aria-hidden="true" style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          aria-required="true"
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          aria-invalid={!!fieldErrors.email}
          placeholder="jane@company.com"
          value={form.email}
          onChange={handleChange}
          style={fieldErrors.email ? inputError : inputBase}
        />
        {fieldErrors.email && (
          <span id="email-error" className="text-xs" style={{ color: "#ef4444" }} role="alert">
            {fieldErrors.email}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>
          Tell me about your project <span aria-hidden="true" style={{ color: "#ef4444" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          aria-invalid={!!fieldErrors.message}
          rows={5}
          placeholder="I need help automating our customer support with AI..."
          value={form.message}
          onChange={handleChange}
          style={fieldErrors.message ? { ...inputError, resize: "vertical" } : { ...inputBase, resize: "vertical" }}
        />
        {fieldErrors.message && (
          <span id="message-error" className="text-xs" style={{ color: "#ef4444" }} role="alert">
            {fieldErrors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={submitStatus === "loading"}
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200 disabled:opacity-60"
        style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
        onMouseEnter={(e) => submitStatus !== "loading" && (e.currentTarget.style.backgroundColor = "var(--accent-hover)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)")}
      >
        <Send size={16} />
        {submitStatus === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

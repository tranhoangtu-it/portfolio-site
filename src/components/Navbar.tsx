"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "var(--background)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono font-bold text-lg"
          style={{ color: "var(--accent)" }}
        >
          <Zap size={20} />
          <span>ai.engineer</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-white"
              style={{ color: "var(--muted-foreground)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
            style={{
              backgroundColor: "var(--accent)",
              color: "#ffffff",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--accent)")
            }
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--muted-foreground)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-4 py-4 flex flex-col gap-4"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-2"
              style={{ color: "var(--muted-foreground)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-medium px-4 py-2 rounded-lg text-center mt-2"
            style={{ backgroundColor: "var(--accent)", color: "#ffffff" }}
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}

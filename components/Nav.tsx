"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

const sections = [
  { id: "hero",           label: "Hero" },
  { id: "about",          label: "About" },
  { id: "experience",     label: "Experience" },
  { id: "projects",       label: "Projects" },
  { id: "skills",         label: "Skills" },
  { id: "certifications", label: "Credentials" },
  { id: "contact",        label: "Contact" },
];

export function Nav() {
  const [activeId, setActiveId] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(5, 5, 5, 0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 focus-visible:outline-none group"
          aria-label="Muhammad Ghufran – go to top"
        >
          <div
            className="w-8 h-8 flex items-center justify-center rounded-[3px] border transition-colors duration-200"
            style={{
              borderColor: "var(--copper)",
              color: "var(--copper)",
              backgroundColor: "rgba(201,122,61,0.1)",
            }}
          >
            <Zap size={16} strokeWidth={2.5} />
          </div>
          <span
            className="text-[0.85rem] font-semibold tracking-[0.05em] uppercase hidden sm:block"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              color: "var(--paper)",
            }}
          >
            M. Ghufran
          </span>
        </button>

        {/* Desktop nav */}
        <ol className="hidden lg:flex items-center gap-1" role="list">
          {sections.map((s, i) => {
            const isActive = activeId === s.id;
            return (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className="px-3 py-2 rounded-[3px] transition-colors duration-200 group flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--copper)]"
                  style={{ color: isActive ? "var(--copper)" : "var(--paper-muted)" }}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className="text-[0.6rem] font-medium tracking-[0.08em]"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      color: isActive ? "var(--copper)" : "var(--line-grid)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[0.72rem] font-medium tracking-[0.06em] uppercase"
                    style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                  >
                    {s.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/resume"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-[3px] border text-[0.75rem] font-medium tracking-[0.06em] uppercase transition-all duration-200"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              borderColor: "var(--copper)",
              color: "var(--copper)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--copper)";
              (e.currentTarget as HTMLElement).style.color = "var(--bg-blueprint)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--copper)";
            }}
          >
            Résumé
          </a>

          {/* Mobile hamburger */}
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <button
                className="lg:hidden p-2 rounded-[3px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--copper)]"
                style={{ color: "var(--paper-muted)" }}
                aria-label="Open navigation menu"
              >
                <Menu size={22} />
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay
                className="fixed inset-0 z-50"
                style={{ backgroundColor: "rgba(11,24,38,0.7)", backdropFilter: "blur(4px)" }}
              />
              <Dialog.Content
                className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col p-6"
                style={{
                  backgroundColor: "var(--bg-panel)",
                  borderLeft: "1px solid var(--line-grid)",
                }}
                aria-label="Navigation menu"
              >
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-[0.7rem] font-medium tracking-[0.1em] uppercase"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      color: "var(--paper-muted)",
                    }}
                  >
                    Navigation
                  </span>
                  <Dialog.Close asChild>
                    <button
                      className="p-1 rounded-[3px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--copper)]"
                      style={{ color: "var(--paper-muted)" }}
                      aria-label="Close navigation"
                    >
                      <X size={20} />
                    </button>
                  </Dialog.Close>
                </div>

                <ol className="flex flex-col gap-1" role="list">
                  {sections.map((s, i) => {
                    const isActive = activeId === s.id;
                    return (
                      <li key={s.id}>
                        <button
                          onClick={() => scrollTo(s.id)}
                          className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-[3px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--copper)]"
                          style={{
                            backgroundColor: isActive ? "rgba(201,122,61,0.1)" : "transparent",
                            color: isActive ? "var(--copper)" : "var(--paper-muted)",
                          }}
                          aria-current={isActive ? "true" : undefined}
                        >
                          <span
                            className="text-[0.6rem] font-medium tracking-[0.08em]"
                            style={{
                              fontFamily: "var(--font-ibm-plex-mono), monospace",
                              color: isActive ? "var(--copper)" : "var(--line-grid)",
                            }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className="text-[0.8rem] font-medium tracking-[0.06em] uppercase"
                            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
                          >
                            {s.label}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>

                <div className="mt-auto pt-6 border-t" style={{ borderColor: "var(--line-grid)" }}>
                  <a
                    href="/resume"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 rounded-[3px] border text-[0.75rem] font-medium tracking-[0.06em] uppercase transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      borderColor: "var(--copper)",
                      color: "var(--copper)",
                    }}
                  >
                    Download Résumé
                  </a>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </nav>
  );
}

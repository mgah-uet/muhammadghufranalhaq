import { Zap } from "lucide-react";
import { personal } from "@/data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 border-t"
      style={{
        backgroundColor: "var(--bg-blueprint)",
        borderColor: "var(--line-grid)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 flex items-center justify-center rounded-[3px] border"
              style={{
                borderColor: "var(--copper)",
                color: "var(--copper)",
                backgroundColor: "rgba(201,122,61,0.1)",
              }}
              aria-hidden="true"
            >
              <Zap size={14} strokeWidth={2.5} />
            </div>
            <div>
              <p
                className="text-[0.85rem] font-semibold"
                style={{ color: "var(--paper)" }}
              >
                {personal.name}
              </p>
              <p
                className="text-[0.7rem]"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  color: "var(--paper-muted)",
                }}
              >
                {personal.tagline}
              </p>
            </div>
          </div>

          {/* Social + copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-[var(--copper)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--copper)] focus-visible:rounded-[3px]"
              style={{ color: "var(--paper-muted)" }}
              aria-label="Muhammad Ghufran on LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span
                className="text-[0.75rem] font-medium"
                style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
              >
                LinkedIn
              </span>
            </a>

            <span
              className="text-[0.72rem]"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                color: "var(--paper-muted)",
              }}
            >
              © {currentYear} {personal.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

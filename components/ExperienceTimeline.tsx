"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/experience";
import type { ExperienceSymbol } from "@/data/experience";
import { internships } from "@/data/internships";

/* ─── SLD Symbol SVGs ─────────────────────────────────────────── */

function TransformerSymbol({ active }: { active: boolean }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="14" cy="20" r="8" stroke={active ? "var(--copper)" : "var(--paper-muted)"} strokeWidth="2" fill={active ? "rgba(255,94,0,0.15)" : "transparent"} />
      <circle cx="26" cy="20" r="8" stroke={active ? "var(--copper)" : "var(--paper-muted)"} strokeWidth="2" fill={active ? "rgba(255,94,0,0.15)" : "transparent"} />
      <line x1="20" y1="12" x2="20" y2="28" stroke={active ? "var(--copper)" : "var(--line-grid)"} strokeWidth="1.5" strokeDasharray="2 2" />
      {active && <circle cx="20" cy="20" r="16" fill="rgba(255,94,0,0.06)" />}
    </svg>
  );
}

function BreakerSymbol({ active }: { active: boolean }) {
  const color = active ? "var(--copper)" : "var(--paper-muted)";
  const fill = active ? "rgba(255,94,0,0.1)" : "transparent";
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="10" y="10" width="20" height="20" rx="2" stroke={color} strokeWidth="2" fill={fill} />
      <line x1="14" y1="26" x2="26" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DisconnectSymbol({ active }: { active: boolean }) {
  const color = active ? "var(--copper)" : "var(--paper-muted)";
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <line x1="4" y1="20" x2="14" y2="20" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="20" x2="22" y2="13" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="20" x2="36" y2="20" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="26" cy="20" r="2.5" fill={color} />
    </svg>
  );
}

function SLDSymbol({ symbol, active }: { symbol: ExperienceSymbol; active: boolean }) {
  switch (symbol) {
    case "transformer": return <TransformerSymbol active={active} />;
    case "breaker": return <BreakerSymbol active={active} />;
    case "disconnect": return <DisconnectSymbol active={active} />;
  }
}

/* ─── Date formatting ─────────────────────────────────────────── */

function formatDate(d: string): string {
  const [year, month] = d.split("-").map(Number);
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

/* ─── Main ExperienceTimeline component ──────────────────────── */

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-24 text-center lg:text-left"
          ref={ref}
        >
          <span className="mono-label block mb-4" style={{ color: "var(--copper)" }}>
            03 / EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Career Timeline</h2>
          <p className="text-lg md:text-xl" style={{ color: "var(--paper-muted)", maxWidth: "600px" }}>
            My professional journey across Kuwait and Saudi Arabia, detailed in a clean vertical flow.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical continuous trace line */}
          <div
            className="absolute left-[31px] md:left-[39px] top-0 bottom-0 w-[2px]"
            style={{
              background: "repeating-linear-gradient(to bottom, var(--line-grid) 0, var(--line-grid) 8px, transparent 8px, transparent 12px)",
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-16">
            {experience.map((entry, i) => {
              const isActive = entry.end === null;
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-4 md:gap-10 group"
                >
                  {/* Left Icon Node */}
                  <div className="relative z-10 flex flex-col items-center shrink-0">
                    <div
                      className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-110 bg-[var(--bg-panel)]"
                      style={{
                        borderColor: isActive ? "var(--copper)" : "var(--line-grid)",
                        backgroundColor: isActive ? "rgba(255,94,0,0.12)" : "rgba(17, 17, 17, 0.4)",
                        boxShadow: isActive ? "0 0 20px rgba(255,94,0,0.25)" : "none",
                      }}
                    >
                      <SLDSymbol symbol={entry.symbol} active={isActive} />
                    </div>
                  </div>

                  {/* Right Content Card */}
                  <div
                    className="flex-1 min-w-0 p-5 md:p-10 rounded-2xl border border-[rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[var(--copper)] hover:shadow-[0_0_20px_rgba(255,94,0,0.15)] backdrop-blur-md"
                    style={{
                      backgroundColor: "rgba(17, 17, 17, 0.4)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <p
                          className="text-[0.85rem] font-bold tracking-widest uppercase mb-2"
                          style={{
                            fontFamily: "var(--font-ibm-plex-mono), monospace",
                            color: isActive ? "var(--copper)" : "var(--copper-bright)",
                          }}
                        >
                          {entry.role}
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: "var(--paper)" }}>
                          {entry.company}
                        </h3>
                      </div>
                      <div
                        className="text-[0.85rem] shrink-0"
                        style={{
                          fontFamily: "var(--font-ibm-plex-mono), monospace",
                          color: "var(--paper-muted)",
                        }}
                      >
                        {formatDate(entry.start)} – {entry.end ? formatDate(entry.end) : "Present"}
                        <br />
                        <span className="opacity-75">{entry.location}</span>
                      </div>
                    </div>

                    <p className="text-[1.05rem] leading-relaxed mb-8" style={{ color: "var(--paper-muted)" }}>
                      {entry.summary}
                    </p>

                    {entry.responsibilities.length > 0 && (
                      <div className="mb-8">
                        <h4
                          className="text-[0.75rem] font-bold tracking-[0.1em] uppercase mb-4"
                          style={{
                            fontFamily: "var(--font-ibm-plex-mono), monospace",
                            color: "var(--paper)",
                          }}
                        >
                          Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {entry.responsibilities.map((r, idx) => (
                            <li key={idx} className="flex gap-4 text-[0.95rem]" style={{ color: "var(--paper-muted)" }}>
                              <span style={{ color: "var(--copper)", flexShrink: 0, marginTop: "2px" }}>▹</span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {entry.projects.length > 0 && (
                      <div>
                        <h4
                          className="text-[0.75rem] font-bold tracking-[0.1em] uppercase mb-4"
                          style={{
                            fontFamily: "var(--font-ibm-plex-mono), monospace",
                            color: "var(--paper)",
                          }}
                        >
                          Key Projects
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {entry.projects.map((p, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 rounded-md text-[0.85rem] font-medium transition-colors hover:bg-[var(--copper)] hover:text-white bg-opacity-[0.08]"
                              style={{
                                backgroundColor: "rgba(255,94,0,0.08)",
                                border: "1px solid rgba(255,94,0,0.2)",
                                color: "var(--copper-bright)",
                              }}
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Internships Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative flex gap-4 md:gap-10 group mt-8"
            >
              <div className="relative z-10 flex flex-col items-center shrink-0">
                <div
                  className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    borderColor: "var(--line-grid)",
                    backgroundColor: "rgba(17, 17, 17, 0.4)",
                  }}
                >
                  <DisconnectSymbol active={false} />
                </div>
              </div>
              
              <div
                className="flex-1 min-w-0 p-5 md:p-10 rounded-2xl border border-[rgba(255,255,255,0.05)] backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(17, 17, 17, 0.4)",
                }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-8" style={{ color: "var(--paper)" }}>
                  Internships & Foundations
                </h3>
                
                <div className="space-y-10">
                  {internships.map((intern, idx) => (
                    <div key={intern.id} className={idx !== internships.length - 1 ? "border-b border-[var(--line-grid)] pb-10" : ""}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                        <div>
                          <p
                            className="text-[0.75rem] font-bold tracking-widest uppercase mb-1"
                            style={{
                              fontFamily: "var(--font-ibm-plex-mono), monospace",
                              color: "var(--copper-bright)",
                            }}
                          >
                            {intern.role}
                          </p>
                          <h4 className="text-lg font-bold" style={{ color: "var(--paper)" }}>
                            {intern.company}
                          </h4>
                        </div>
                        <div
                          className="text-[0.8rem]"
                          style={{
                            fontFamily: "var(--font-ibm-plex-mono), monospace",
                            color: "var(--paper-muted)",
                          }}
                        >
                          {intern.period} · {intern.location}
                        </div>
                      </div>
                      <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--paper-muted)" }}>
                        {intern.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

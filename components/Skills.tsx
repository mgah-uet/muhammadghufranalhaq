"use client";

import { SectionWrapper, FadeItem } from "@/components/ui/SectionWrapper";
import { skills } from "@/data/skills";

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span
        className="text-[0.78rem] font-medium shrink-0"
        style={{
          fontFamily: "var(--font-ibm-plex-mono), monospace",
          color: "var(--paper)",
        }}
      >
        {name}
      </span>
      {/* 10-segment CSS bar */}
      <div className="flex gap-[3px]" aria-label={`Proficiency: ${level} of 10`} role="img">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="w-3.5 h-2 rounded-[1px] transition-colors duration-200"
            style={{
              backgroundColor:
                i < level ? "var(--copper)" : "var(--line-grid)",
              opacity: i < level ? 1 : 0.4,
            }}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

function CompetencyTag({ label }: { label: string }) {
  return (
    <div
      className="flex items-start gap-2 py-2 px-3 rounded-lg border border-[rgba(255,255,255,0.05)] text-[0.82rem] leading-snug backdrop-blur-md transition-colors hover:border-[var(--copper)]"
      style={{
        backgroundColor: "rgba(17, 17, 17, 0.4)",
        color: "var(--paper)",
      }}
    >
      <span
        style={{ color: "var(--copper)", flexShrink: 0, fontFamily: "var(--font-ibm-plex-mono), monospace", fontSize: "0.65rem", marginTop: "2px" }}
        aria-hidden="true"
      >
        ▸
      </span>
      {label}
    </div>
  );
}

export function Skills() {
  return (
    <div>
    <SectionWrapper
      id="skills"
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <FadeItem>
        <div className="mb-12">
          <span className="mono-label block mb-3" style={{ color: "var(--copper)" }}>
            05 / SKILLS & TOOLS
          </span>
          <h2>Skills & Tools</h2>
        </div>
      </FadeItem>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Software column */}
        <FadeItem>
          <div
            className="p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] h-full backdrop-blur-md"
            style={{
              backgroundColor: "rgba(17, 17, 17, 0.4)",
            }}
          >
            <h3
              className="text-[0.7rem] font-medium tracking-[0.1em] uppercase mb-5"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                color: "var(--copper)",
              }}
            >
              Design & Analysis Software
            </h3>
            <div className="flex flex-col gap-3">
              {skills.software.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>
        </FadeItem>

        {/* Competencies column */}
        <FadeItem>
          <div
            className="p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] h-full backdrop-blur-md"
            style={{
              backgroundColor: "rgba(17, 17, 17, 0.4)",
            }}
          >
            <h3
              className="text-[0.7rem] font-medium tracking-[0.1em] uppercase mb-5"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                color: "var(--copper)",
              }}
            >
              Core Engineering Competencies
            </h3>
            <div className="flex flex-col gap-2">
              {skills.competencies.map((c) => (
                <CompetencyTag key={c} label={c} />
              ))}
            </div>
          </div>
        </FadeItem>

        {/* Soft skills + languages column */}
        <FadeItem>
          <div className="flex flex-col gap-6">
            <div
              className="p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] backdrop-blur-md"
              style={{
                backgroundColor: "rgba(17, 17, 17, 0.4)",
              }}
            >
              <h3
                className="text-[0.7rem] font-medium tracking-[0.1em] uppercase mb-5"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  color: "var(--copper)",
                }}
              >
                Professional Skills
              </h3>
              <div className="flex flex-col gap-2">
                {skills.soft.map((s) => (
                  <CompetencyTag key={s} label={s} />
                ))}
              </div>
            </div>

            <div
              className="p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] backdrop-blur-md"
              style={{
                backgroundColor: "rgba(17, 17, 17, 0.4)",
              }}
            >
              <h3
                className="text-[0.7rem] font-medium tracking-[0.1em] uppercase mb-4"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  color: "var(--copper)",
                }}
              >
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 rounded-lg text-[0.75rem] font-medium transition-colors hover:bg-[var(--copper)] hover:text-white"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      backgroundColor: "rgba(255,94,0,0.08)",
                      border: "1px solid rgba(255,94,0,0.2)",
                      color: "var(--copper-bright)",
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeItem>
      </div>
    </SectionWrapper>
    </div>
  );
}

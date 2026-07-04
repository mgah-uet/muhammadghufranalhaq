"use client";

import { SectionWrapper, FadeItem } from "@/components/ui/SectionWrapper";
import { personal } from "@/data/personal";

const stats = [
  { label: "Yrs Experience", value: personal.yearsExperience },
  { label: "Major Projects", value: personal.projectCount },
  { label: "Region", value: "Kuwait · KSA" },
  { label: "Credential", value: "LEED® GA" },
];

export function About() {
  return (
    <SectionWrapper id="about">
      {/* Section header */}
      <FadeItem>
        <div className="mb-12">
          <span
            className="mono-label block mb-3"
            style={{ color: "var(--copper)" }}
          >
            02 / ABOUT
          </span>
          <h2>About</h2>
        </div>
      </FadeItem>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
        {/* Bio */}
        <FadeItem>
          <div
            className="p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] backdrop-blur-md"
            style={{
              backgroundColor: "rgba(17, 17, 17, 0.4)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            }}
          >
            <p
              className="text-[1.05rem] leading-[1.8] mb-5"
              style={{ color: "var(--paper)" }}
            >
              Ambitious and precise, I&rsquo;ve spent over a decade across the full electrical
              engineering lifecycle — from tendering and estimation, to site supervision and
              hospital maintenance, to leading electrical design for large-scale developments
              today.
            </p>
            <p
              className="text-[1.05rem] leading-[1.8] mb-5"
              style={{ color: "var(--paper-muted)" }}
            >
              I&rsquo;m equally comfortable running load-flow studies in ETAP as I am
              coordinating trades on a live construction site. My work spans commercial and
              residential high-rises, hospitals, petrochemical facilities, and
              mixed-use megaprojects — always with a focus on precision, code compliance, and
              cross-discipline coordination.
            </p>
            <p
              className="text-[1.05rem] leading-[1.8]"
              style={{ color: "var(--paper-muted)" }}
            >
              Currently, I&rsquo;m focused on electrical design for some of the most ambitious
              developments in the GCC — including NEOM&rsquo;s Aquellum and Oxagon projects —
              while holding LEED® Green Associate certification and active membership in KSE,
              PEC, APEK, and IET.
            </p>
          </div>
        </FadeItem>

        {/* Stat chips */}
        <FadeItem>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl border border-[rgba(255,255,255,0.05)] flex flex-col gap-1 transition-all duration-300 hover:border-[var(--copper)] hover:shadow-[0_0_20px_rgba(255,94,0,0.15)] backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(17, 17, 17, 0.4)",
                }}
              >
                <span
                  className="text-[1.4rem] font-bold"
                  style={{
                    fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
                    color: "var(--copper)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[0.65rem] font-medium tracking-[0.08em] uppercase"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    color: "var(--paper-muted)",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div
            className="mt-4 p-5 rounded-2xl border border-[rgba(255,255,255,0.05)] backdrop-blur-md"
            style={{
              backgroundColor: "rgba(17, 17, 17, 0.4)",
            }}
          >
            <span
              className="text-[0.65rem] font-medium tracking-[0.08em] uppercase block mb-2"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                color: "var(--paper-muted)",
              }}
            >
              Languages
            </span>
            <div className="flex flex-wrap gap-1.5">
              {personal.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1.5 rounded-lg text-[0.75rem] font-medium transition-colors hover:bg-[var(--copper)] hover:text-white"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    backgroundColor: "rgba(255,94,0,0.08)",
                    color: "var(--copper-bright)",
                    border: "1px solid rgba(255,94,0,0.2)",
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </FadeItem>
      </div>
    </SectionWrapper>
  );
}

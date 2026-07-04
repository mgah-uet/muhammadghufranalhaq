"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionWrapper, FadeItem } from "@/components/ui/SectionWrapper";
import { designProjects, flagshipProjects } from "@/data/projects";

type Tab = "design" | "site";

export function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("design");

  return (
    <SectionWrapper id="projects">
      <FadeItem>
        <div className="mb-8">
          <span className="mono-label block mb-3" style={{ color: "var(--copper)" }}>
            04 / PROJECTS
          </span>
          <h2>Selected Projects</h2>
        </div>
      </FadeItem>

      {/* Tab filter */}
      <FadeItem>
        <div
          className="flex gap-1 p-2 rounded-xl border border-[rgba(255,255,255,0.05)] mb-10 w-fit backdrop-blur-md"
          style={{
            backgroundColor: "rgba(17, 17, 17, 0.4)",
          }}
          role="tablist"
          aria-label="Project categories"
        >
          {([["design", "Design"], ["site", "Site & Maintenance"]] as [Tab, string][]).map(
            ([tab, label]) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`tab-panel-${tab}`}
                id={`tab-${tab}`}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 rounded-lg text-[0.75rem] font-medium tracking-[0.06em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--copper)]"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  backgroundColor:
                    activeTab === tab ? "var(--copper)" : "transparent",
                  color:
                    activeTab === tab ? "var(--bg-blueprint)" : "var(--paper-muted)",
                }}
              >
                {label}
              </button>
            )
          )}
        </div>
      </FadeItem>

      {/* Design projects grid */}
      {activeTab === "design" && (
        <div
          id="tab-panel-design"
          role="tabpanel"
          aria-labelledby="tab-design"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {designProjects.map((project, i) => (
            <FadeItem key={project.id}>
              <div
                className="p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] h-full flex flex-col gap-2 transition-all duration-300 hover:border-[var(--copper)] hover:shadow-[0_0_20px_rgba(255,94,0,0.15)] group backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(17, 17, 17, 0.4)",
                }}
              >
                <span
                  className="text-[0.6rem] font-medium tracking-[0.1em]"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    color: "var(--line-grid)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-[0.95rem] font-semibold transition-colors duration-200 group-hover:text-[var(--copper)]"
                  style={{ color: "var(--paper)" }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-[0.78rem] font-medium"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    color: "var(--copper)",
                  }}
                >
                  {project.location}
                </p>
                <p
                  className="text-[0.85rem] leading-relaxed flex-1"
                  style={{ color: "var(--paper-muted)" }}
                >
                  {project.description}
                </p>
              </div>
            </FadeItem>
          ))}
        </div>
      )}

      {/* Flagship / site projects */}
      {activeTab === "site" && (
        <div
          id="tab-panel-site"
          role="tabpanel"
          aria-labelledby="tab-site"
          className="flex flex-col gap-8"
        >
          {flagshipProjects.map((project) => (
            <FadeItem key={project.id}>
              <div
                className="rounded-2xl border border-[rgba(255,255,255,0.05)] overflow-hidden transition-all duration-300 hover:border-[var(--copper)] hover:shadow-[0_0_20px_rgba(255,94,0,0.15)] backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(17, 17, 17, 0.4)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
                  {/* Image */}
                  <div
                    className="relative h-48 lg:h-auto min-h-[200px]"
                    style={{ backgroundColor: "var(--bg-blueprint)" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 280px"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to right, transparent 60%, rgba(17,17,17,0.4))",
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Spec-sheet data */}
                  <div className="p-6">
                    <h3 className="text-[1.1rem] font-bold mb-1" style={{ color: "var(--paper)" }}>
                      {project.name}
                    </h3>
                    <p
                      className="text-[0.78rem] mb-4"
                      style={{
                        fontFamily: "var(--font-ibm-plex-mono), monospace",
                        color: "var(--copper)",
                      }}
                    >
                      {project.location}
                    </p>
                    <p
                      className="text-[0.875rem] leading-relaxed mb-5"
                      style={{ color: "var(--paper-muted)" }}
                    >
                      {project.description}
                    </p>

                    {/* Nameplate data grid */}
                    <div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[rgba(255,255,255,0.05)]"
                    >
                      <SpecField label="Client" value={project.client} />
                      {project.consultant && (
                        <SpecField label="Consultant" value={project.consultant} />
                      )}
                      {project.electricalContractor && (
                        <SpecField
                          label="Elec. Contractor"
                          value={project.electricalContractor}
                        />
                      )}
                      {project.mainContractor && (
                        <SpecField label="Main Contractor" value={project.mainContractor} />
                      )}
                      {project.valueElectrical && (
                        <SpecField
                          label="Electrical Value"
                          value={project.valueElectrical}
                          highlight
                        />
                      )}
                      {project.valueTotal && (
                        <SpecField label="Total Value" value={project.valueTotal} />
                      )}
                      <SpecField label="Duration" value={project.duration} />
                    </div>
                  </div>
                </div>
              </div>
            </FadeItem>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}

function SpecField({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <span
        className="block text-[0.6rem] font-medium tracking-[0.1em] uppercase mb-0.5"
        style={{
          fontFamily: "var(--font-ibm-plex-mono), monospace",
          color: "var(--paper-muted)",
        }}
      >
        {label}
      </span>
      <span
        className="block text-[0.8rem] font-semibold"
        style={{
          fontFamily: "var(--font-ibm-plex-mono), monospace",
          color: highlight ? "var(--copper)" : "var(--paper)",
        }}
      >
        {value}
      </span>
    </div>
  );
}

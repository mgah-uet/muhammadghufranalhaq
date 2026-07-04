"use client";

import Image from "next/image";
import { SectionWrapper, FadeItem } from "@/components/ui/SectionWrapper";
import { certifications } from "@/data/certifications";
import { memberships } from "@/data/memberships";
import { Award } from "lucide-react";

import { ImageModal } from "@/components/ui/ImageModal";
export function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <FadeItem>
        <div className="mb-12">
          <span className="mono-label block mb-3" style={{ color: "var(--copper)" }}>
            06 / CREDENTIALS
          </span>
          <h2>Certifications & Memberships</h2>
        </div>
      </FadeItem>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
        {/* Certifications badge grid */}
        <FadeItem>
          <h3
            className="text-[0.7rem] font-medium tracking-[0.1em] uppercase mb-5"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              color: "var(--copper)",
            }}
          >
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl border border-[rgba(255,255,255,0.05)] flex gap-4 items-start transition-all duration-300 hover:border-[var(--copper)] hover:shadow-[0_0_20px_rgba(255,94,0,0.15)] group backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(17, 17, 17, 0.4)",
                }}
              >
                {/* Cert image or fallback icon */}
                {cert.image ? (
                  <ImageModal
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    thumbnailClassName="relative w-14 h-14 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.05)] shrink-0 bg-[rgba(17,17,17,0.4)]"
                  />
                ) : (
                  <div
                    className="relative w-14 h-14 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.05)] shrink-0 bg-[rgba(17,17,17,0.4)]"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Award size={24} style={{ color: "var(--copper)" }} />
                    </div>
                  </div>
                )}

                <div className="min-w-0">
                  <p
                    className="text-[0.85rem] font-semibold leading-snug transition-colors duration-200 group-hover:text-[var(--copper)]"
                    style={{ color: "var(--paper)" }}
                  >
                    {cert.name}
                  </p>
                  <p
                    className="text-[0.72rem] mt-0.5"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      color: "var(--paper-muted)",
                    }}
                  >
                    {cert.issuer}
                  </p>
                  <span
                    className="inline-block mt-2 px-3 py-1 rounded-md text-[0.65rem] font-medium tracking-[0.08em]"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      backgroundColor: "rgba(255,94,0,0.08)",
                      border: "1px solid rgba(255,94,0,0.2)",
                      color: "var(--copper-bright)",
                    }}
                  >
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeItem>

        {/* Memberships sidebar */}
        <FadeItem>
          <h3
            className="text-[0.7rem] font-medium tracking-[0.1em] uppercase mb-5"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              color: "var(--copper)",
            }}
          >
            Professional Memberships
          </h3>
          <div className="flex flex-col gap-3">
            {memberships.map((m) => (
              <div
                key={m.id}
                className="p-5 rounded-2xl border border-[rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[var(--copper)] hover:shadow-[0_0_20px_rgba(255,94,0,0.15)] backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(17, 17, 17, 0.4)",
                }}
              >
                <p
                  className="text-[0.88rem] font-semibold mb-1"
                  style={{ color: "var(--paper)" }}
                >
                  {m.org}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="text-[0.68rem] font-medium"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      color: "var(--paper-muted)",
                    }}
                  >
                    Ref: {m.ref}
                  </span>
                  <span
                    className="text-[0.65rem] px-2 py-1 rounded-md"
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono), monospace",
                      backgroundColor: "rgba(58,219,143,0.08)",
                      border: "1px solid rgba(58,219,143,0.2)",
                      color: "var(--signal-green)",
                    }}
                  >
                    Since {m.year}
                  </span>
                </div>
                {/* Render images if available */}
                {"images" in m && Array.isArray(m.images) && m.images.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {m.images.map((imgSrc, idx) => (
                      <ImageModal
                        key={idx}
                        src={imgSrc}
                        alt={`${m.org} document ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeItem>
      </div>
    </SectionWrapper>
  );
}

import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Résumé — Muhammad Ghufran | Senior Electrical Engineer",
  description:
    "Download or view the résumé of Muhammad Ghufran, Senior Electrical Engineer with 10+ years of experience in Kuwait and the GCC.",
};

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex flex-col" style={{ paddingTop: "72px" }}>
        <div className="max-w-5xl mx-auto w-full px-6 py-12 flex-1">
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span
                className="mono-label block mb-2"
                style={{ color: "var(--copper)" }}
              >
                Résumé
              </span>
              <h1
                className="text-[clamp(1.5rem,3vw,2.5rem)]"
                style={{ color: "var(--paper)" }}
              >
                Muhammad Ghufran
              </h1>
              <p
                className="text-[0.9rem] mt-1"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono), monospace",
                  color: "var(--paper-muted)",
                }}
              >
                Senior Electrical Engineer — Design, Estimation & Maintenance
              </p>
            </div>
            <Button
              variant="solid"
              size="md"
              href="/resume.pdf"
              download
            >
              <Download size={16} />
              Download PDF
            </Button>
          </div>

          <div
            className="rounded-[6px] border overflow-hidden w-full"
            style={{
              borderColor: "var(--line-grid)",
              backgroundColor: "var(--bg-panel)",
              minHeight: "80vh",
            }}
          >
            <iframe
              src="/resume.pdf"
              className="w-full"
              style={{ height: "80vh", border: "none" }}
              title="Muhammad Ghufran Résumé PDF"
            />
          </div>

          <p
            className="mt-4 text-center text-[0.8rem]"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              color: "var(--paper-muted)",
            }}
          >
            If the PDF doesn&rsquo;t display,{" "}
            <a
              href="/resume.pdf"
              download
              className="underline underline-offset-4 transition-colors duration-200 hover:text-[var(--copper)]"
              style={{ color: "var(--paper)" }}
            >
              download it directly
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

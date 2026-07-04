"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { personal } from "@/data/personal";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const prefersReduced = useReducedMotion();
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    // Only animate once per session
    const key = "hero-animated";
    if (!sessionStorage.getItem(key)) {
      setPlayed(false);
      sessionStorage.setItem(key, "1");
    } else {
      setPlayed(true);
    }
  }, []);

  const shouldAnimate = !prefersReduced && !played;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "72px" }}
    >
      {/* Glowing orange circle */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, var(--copper) 0%, transparent 70%)",
          opacity: 0.18,
        }}
      />
      {/* Blueprint grid background */}
      <motion.div
        className="blueprint-grid"
        variants={gridVariants}
        initial={shouldAnimate ? "hidden" : "visible"}
        animate="visible"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,122,61,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial={shouldAnimate ? "hidden" : "visible"}
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-5">
              <span
                className="mono-label flex items-center gap-2"
                style={{ color: "var(--signal-green)" }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--signal-green)" }}
                  aria-hidden="true"
                />
                ELECTRICAL ENGINEER · KUWAIT
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="mb-3"
              style={{ color: "var(--paper)" }}
            >
              {personal.name}
            </motion.h1>

            {/* Subhead with animated underline */}
            <motion.div variants={fadeUp} className="mb-6">
              <h2
                className="text-[clamp(1.1rem,2.5vw,1.5rem)] font-medium"
                style={{ color: "var(--copper)", letterSpacing: "-0.01em" }}
              >
                Senior Electrical Engineer
                <span style={{ color: "var(--paper-muted)", fontWeight: 400 }}>
                  {" "}— Design, Estimation & Maintenance
                </span>
              </h2>
              {/* SLD current-flow underline */}
              <motion.div
                className="mt-2 h-[2px] rounded-full"
                style={{ backgroundColor: "var(--copper)", originX: 0 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: shouldAnimate ? 1 : 1 }}
                transition={{
                  delay: shouldAnimate ? 0.9 : 0,
                  duration: shouldAnimate ? 0.7 : 0,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
              />
            </motion.div>

            {/* Supporting line */}
            <motion.p
              variants={fadeUp}
              className="text-[1.05rem] max-w-xl leading-relaxed mb-8"
              style={{ color: "var(--paper-muted)" }}
            >
              {personal.yearsExperience} years engineering electrical systems for hospitals,
              petrochemical facilities, and high-rise developments across Kuwait and Saudi Arabia —
              from single-line diagrams and load calculations through site supervision and
              maintenance.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-8">
              <Button
                variant="solid"
                size="lg"
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Experience
              </Button>
              <Button variant="outline" size="lg" href="/resume">
                Download Résumé
              </Button>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-lg border border-[rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[var(--copper)] hover:shadow-[0_0_20px_rgba(255,94,0,0.15)] backdrop-blur-md group"
                style={{ backgroundColor: "rgba(17, 17, 17, 0.4)" }}
                aria-label="LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-colors duration-200 group-hover:text-[var(--copper)] text-[var(--paper-muted)]"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </motion.div>

            {/* Credential row */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              <Badge variant="green">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--signal-green)" }}
                />
                Available for Opportunities
              </Badge>
              {personal.credentialsShort.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </motion.div>
          </motion.div>

          {/* Headshot */}
          <motion.div
            initial={shouldAnimate ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: shouldAnimate ? 0.5 : 0 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -inset-3 rounded-[8px] border"
                style={{
                  borderColor: "var(--copper)",
                  opacity: 0.25,
                }}
                aria-hidden="true"
              />
              <div
                className="absolute -inset-1.5 rounded-[6px] border"
                style={{
                  borderColor: "var(--line-grid)",
                }}
                aria-hidden="true"
              />

              {/* Photo */}
              <div
                className="relative w-52 h-64 sm:w-64 sm:h-80 overflow-hidden rounded-[4px]"
                style={{ border: "2px solid var(--copper)" }}
              >
                <Image
                  src="/images/profile.png"
                  alt="Muhammad Ghufran — Senior Electrical Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 208px, 256px"
                />
              </div>

              {/* Status tag */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-[3px] border whitespace-nowrap"
                style={{
                  backgroundColor: "var(--bg-panel)",
                  borderColor: "var(--line-grid)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--signal-green)" }}
                  aria-hidden="true"
                />
                <span
                  className="text-[0.65rem] font-medium tracking-[0.08em] uppercase"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    color: "var(--signal-green)",
                  }}
                >
                  Open to Work
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldAnimate ? 1.5 : 0.3, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span
            className="text-[0.6rem] tracking-[0.12em] uppercase"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              color: "var(--paper-muted)",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={16} style={{ color: "var(--paper-muted)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

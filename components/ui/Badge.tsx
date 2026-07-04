"use client";

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "mono" | "green" | "copper";
  className?: string;
}

export function Badge({ children, variant = "mono", className = "" }: BadgeProps) {
  const variants = {
    mono: "border-[var(--line-grid)] text-[var(--paper-muted)] bg-[var(--bg-panel)]",
    green:
      "border-[var(--signal-green)] text-[var(--signal-green)] bg-[rgba(58,219,143,0.08)]",
    copper:
      "border-[var(--copper)] text-[var(--copper)] bg-[rgba(201,122,61,0.08)]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-[3px] border text-[0.7rem] font-medium tracking-[0.08em] uppercase font-mono ${variants[variant]} ${className}`}
      style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
    >
      {children}
    </span>
  );
}

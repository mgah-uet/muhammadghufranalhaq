"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: boolean | string;
  children: React.ReactNode;
}

export function Button({
  variant = "solid",
  size = "md",
  href,
  download,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer border rounded-[4px] focus-visible:outline-[2px] focus-visible:outline-offset-[3px]";

  const variants = {
    solid:
      "bg-[var(--copper)] text-[var(--bg-blueprint)] border-[var(--copper)] hover:bg-[var(--copper-bright)] hover:border-[var(--copper-bright)]",
    outline:
      "bg-transparent text-[var(--copper)] border-[var(--copper)] hover:bg-[var(--copper)] hover:text-[var(--bg-blueprint)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[0.95rem]",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} download={download}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

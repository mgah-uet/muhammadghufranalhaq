"use client";

import { useState } from "react";
import { SectionWrapper, FadeItem } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Send, AlertCircle, CheckCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      subject: data.get("subject") as string,
      message: data.get("message") as string,
      company: data.get("company") as string, // honeypot
    };

    setState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error || "Something went wrong.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error — please try again.");
      setState("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.05)] text-[0.95rem] outline-none transition-all duration-300 focus:border-[var(--copper)] focus:ring-1 focus:ring-[var(--copper)] backdrop-blur-md";
  const inputStyle = {
    backgroundColor: "rgba(17, 17, 17, 0.4)",
    color: "var(--paper)",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
  };
  const labelStyle = {
    fontFamily: "var(--font-ibm-plex-mono), monospace",
    fontSize: "0.7rem",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--paper-muted)",
    display: "block",
    marginBottom: "6px",
  };

  return (
    <section
      id="contact"
      className="relative z-10"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="mono-label block mb-3" style={{ color: "var(--copper)" }}>
              07 / CONTACT
            </span>
            <h2 className="mb-4">Let&rsquo;s Talk</h2>
            <p className="text-[1.05rem] leading-relaxed" style={{ color: "var(--paper-muted)" }}>
              Open to new opportunities in electrical design, estimation, and site engineering
              across the GCC. Let&rsquo;s talk.
            </p>
          </div>

          {/* Form */}
          <div
            className="p-8 md:p-10 rounded-2xl border border-[rgba(255,255,255,0.05)] backdrop-blur-xl"
            style={{
              backgroundColor: "rgba(17, 17, 17, 0.4)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            {state === "success" ? (
              <div className="text-center py-8 flex flex-col items-center gap-4">
                <CheckCircle size={40} style={{ color: "var(--signal-green)" }} />
                <p
                  className="text-[1.05rem] font-semibold"
                  style={{ color: "var(--paper)" }}
                >
                  Message sent — I&rsquo;ll get back to you soon.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="text-[0.8rem] underline underline-offset-4 transition-colors duration-200 hover:text-[var(--copper)]"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    color: "var(--paper-muted)",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot — visually hidden, never display:none alone */}
                <div
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    top: "-9999px",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                  }}
                  aria-hidden="true"
                >
                  <label htmlFor="company-hp">Leave this field blank</label>
                  <input
                    type="text"
                    id="company-hp"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" style={labelStyle}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="Your name"
                        required
                        minLength={2}
                        maxLength={100}
                        className={inputClass}
                        style={inputStyle}
                        disabled={state === "loading"}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" style={labelStyle}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        className={inputClass}
                        style={inputStyle}
                        disabled={state === "loading"}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" style={labelStyle}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      minLength={2}
                      maxLength={150}
                      className={inputClass}
                      style={inputStyle}
                      disabled={state === "loading"}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" style={labelStyle}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Your message..."
                      required
                      minLength={10}
                      maxLength={5000}
                      rows={6}
                      className={inputClass}
                      style={{ ...inputStyle, resize: "vertical" }}
                      disabled={state === "loading"}
                    />
                  </div>

                  {state === "error" && (
                    <div
                      className="flex items-start gap-3 p-4 rounded-[3px] border text-[0.875rem]"
                      style={{
                        backgroundColor: "rgba(201,122,61,0.08)",
                        borderColor: "rgba(201,122,61,0.3)",
                        color: "var(--copper-bright)",
                      }}
                      role="alert"
                    >
                      <AlertCircle size={16} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>
                        {errorMsg} Try again or{" "}
                        <a
                          href="https://www.linkedin.com/in/mgahuet222"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-4"
                        >
                          reach out on LinkedIn
                        </a>
                        .
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="solid"
                    size="lg"
                    className="w-full justify-center"
                    disabled={state === "loading"}
                  >
                    {state === "loading" ? (
                      "Sending…"
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* LinkedIn link */}
          <p
            className="mt-6 text-center text-[0.85rem]"
            style={{ color: "var(--paper-muted)" }}
          >
            Or connect on{" "}
            <a
              href="https://www.linkedin.com/in/mgahuet222"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors duration-200 hover:text-[var(--copper)] underline underline-offset-4"
              style={{ color: "var(--paper)" }}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

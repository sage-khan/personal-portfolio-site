"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertTriangle } from "lucide-react";

const EMAIL = "sagekhanofficial@gmail.com";

type Status = "idle" | "sending" | "sent" | "logged" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function fallbackToMailto() {
    const subject = encodeURIComponent(form.subject || `Message from ${form.name || "the dossier site"}`);
    const body = encodeURIComponent(`${form.message}\n\n—\n${form.name}${form.email ? ` <${form.email}>` : ""}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Request failed");
      }

      setStatus(data.mode === "email" ? "sent" : "logged");
    } catch {
      // contact-api unreachable (e.g. plain `npm run dev` with no backend
      // running) — fall back to opening the visitor's own mail client.
      fallbackToMailto();
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded border border-panel-border bg-panel px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-signal";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block font-mono text-xs uppercase tracking-wide text-muted">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block font-mono text-xs uppercase tracking-wide text-muted">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block font-mono text-xs uppercase tracking-wide text-muted">
          Subject
        </label>
        <input
          id="subject"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          className={inputClasses}
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block font-mono text-xs uppercase tracking-wide text-muted">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClasses}
          placeholder="Tell me about the project, role, or question…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded bg-signal px-5 py-3 font-mono text-sm uppercase tracking-wide text-white transition-colors hover:bg-tide disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"} <Send size={16} />
      </button>

      <p className="flex items-start gap-2 font-mono text-xs text-muted">
        {status === "sent" && (
          <>
            <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-signal" /> Message sent — thanks, I&rsquo;ll reply soon.
          </>
        )}
        {status === "logged" && (
          <>
            <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-signal" /> Message received and logged.
          </>
        )}
        {status === "error" && (
          <>
            <AlertTriangle size={14} className="mt-0.5 shrink-0" /> Couldn&rsquo;t reach the contact service — opening your email client instead.
          </>
        )}
        {(status === "idle" || status === "sending") && `Delivered to the contact-api service, addressed to ${EMAIL}.`}
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/site";
import { cn, isPlaceholder } from "@/lib/utils";

type Status = "idle" | "info";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const channels = [
    { label: "Email", value: SITE.contact.email, href: isPlaceholder(SITE.contact.email) ? "" : `mailto:${SITE.contact.email}` },
    { label: "WhatsApp", value: SITE.contact.whatsapp, href: SITE.contact.whatsappUrl },
    { label: "GitHub", value: SITE.contact.github, href: isPlaceholder(SITE.contact.github) ? "" : SITE.contact.github },
    { label: "LinkedIn", value: SITE.contact.linkedin, href: isPlaceholder(SITE.contact.linkedin) ? "" : SITE.contact.linkedin },
  ];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Maqueta visual: el envío real se conecta a Formspree u otro servicio.
    setStatus("info");
  };

  return (
    <section id="contact" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        {/* Texto + canales */}
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
              [ {SITE.contactSection.eyebrow} ]
            </p>
            <h2 className="mt-4 text-balance text-5xl font-light tracking-tight sm:text-6xl">
              {SITE.contactSection.title}
            </h2>
            <p className="mt-6 max-w-md text-base text-muted">
              {SITE.contactSection.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {channels.map((c) => {
                const placeholder = isPlaceholder(c.value) || !c.href;
                const content = (
                  <div className="flex items-center justify-between py-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted">
                      {c.label}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-sm",
                        placeholder ? "text-muted/50 italic" : "text-bone"
                      )}
                    >
                      {c.value}
                      {!placeholder && <span className="ml-2 text-amber">↗</span>}
                    </span>
                  </div>
                );
                return (
                  <li key={c.label}>
                    {placeholder ? (
                      content
                    ) : (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="cursor-target block transition-colors hover:text-amber"
                      >
                        {content}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        {/* Formulario (maqueta) */}
        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-ink-800 p-7 ring-hairline sm:p-9"
          >
            <div className="space-y-5">
              <Field label="Nombre" name="name" placeholder="[Tu nombre]" />
              <Field label="Email" name="email" type="email" placeholder="[tu@email.com]" />
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="[Contame sobre tu proyecto o vacante]"
                  className="w-full resize-none rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-bone placeholder:text-muted/50 outline-none transition-colors focus:border-amber"
                />
              </div>

              <button
                type="submit"
                className="cursor-target w-full rounded-full bg-amber px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.02]"
              >
                Enviar mensaje
              </button>

              {status === "info" && (
                <p className="text-center font-mono text-xs text-phosphor">
                  Formulario en modo demo — conectar Formspree para envío real.
                </p>
              )}
              <p className="text-center font-mono text-[11px] text-muted/60">
                {SITE.contactSection.formNote}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-bone placeholder:text-muted/50 outline-none transition-colors focus:border-amber"
      />
    </div>
  );
}

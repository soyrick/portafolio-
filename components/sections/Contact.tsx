import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/site";
import { cn, isPlaceholder } from "@/lib/utils";

export default function Contact() {
  const channels = [
    { label: "Email", value: SITE.contact.email, href: isPlaceholder(SITE.contact.email) ? "" : `mailto:${SITE.contact.email}` },
    { label: "WhatsApp", value: SITE.contact.whatsapp, href: SITE.contact.whatsappUrl },
    { label: "GitHub", value: SITE.contact.github, href: isPlaceholder(SITE.contact.github) ? "" : SITE.contact.github },
    { label: "LinkedIn", value: SITE.contact.linkedin, href: isPlaceholder(SITE.contact.linkedin) ? "" : SITE.contact.linkedin },
  ];

  return (
    <section id="contact" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="scanlines relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-ink-800 px-8 py-16 text-center ring-hairline sm:px-14 sm:py-24">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-amber/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-signal/10 blur-3xl" />

        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            [ {SITE.contactSection.eyebrow} ]
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-6xl">
            {SITE.contactSection.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted">
            {SITE.contactSection.subtitle}
          </p>

          <ul className="mx-auto mt-12 max-w-xl divide-y divide-white/10 border-y border-white/10 text-left">
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
        </div>
      </Reveal>
    </section>
  );
}

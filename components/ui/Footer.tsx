import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-amber/40 bg-amber/10 font-mono text-sm font-bold text-amber">
              {SITE.shortName}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {SITE.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted">{SITE.role}</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {SITE.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-bone"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/5 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono">
          © {SITE.year} {SITE.name} · {SITE.location}
        </span>
        <span className="font-mono">
          Built with Next.js · Tailwind — diseño propio
        </span>
      </div>
    </footer>
  );
}

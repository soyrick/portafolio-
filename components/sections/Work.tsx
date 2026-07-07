import Reveal from "@/components/ui/Reveal";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import { PROJECTS } from "@/data/projects";
import { cn, isPlaceholder } from "@/lib/utils";

export default function Work() {
  return (
    <section id="work" className="relative px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-balance text-4xl font-light tracking-tight sm:text-6xl">
            Proyectos Principales
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 sm:gap-28">
          {PROJECTS.map((project, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal
                key={project.id}
                className={cn(
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
                  flip && "lg:[direction:rtl]"
                )}
              >
                {/* Carrusel de capturas */}
                <div className="[direction:ltr]">
                  <ProjectCarousel
                    title={project.title}
                    screenshots={project.screenshots}
                  />
                </div>

                {/* Meta */}
                <div className="[direction:ltr]">
                  {/* Número FUERA del cuadro de imagen */}
                  <span className="block font-mono text-5xl font-bold text-amber/40 sm:text-6xl">
                    {project.index}
                  </span>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="rounded-full border border-amber/30 bg-amber/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-amber">
                      {project.status}
                    </span>
                    <span className="font-mono text-xs text-muted">{project.tagline}</span>
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {project.title}
                  </h3>

                  <p
                    className={cn(
                      "mt-4 max-w-md text-base leading-relaxed",
                      isPlaceholder(project.description) ? "text-muted/60 italic" : "text-muted"
                    )}
                  >
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      Tecnologías
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((tech, t) => (
                        <span
                          key={t}
                          className={cn(
                            "rounded-md border px-3 py-1 font-mono text-xs",
                            isPlaceholder(tech)
                              ? "border-white/5 text-muted/50"
                              : "border-white/10 text-bone"
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {(project.repoUrl || project.demoUrl || project.privateCode) && (
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-amber px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-ink"
                        >
                          Ver demo
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/15 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-bone hover:border-amber hover:text-amber"
                        >
                          Ver repo
                        </a>
                      )}
                      {project.privateCode && (
                        <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                          [ Código privado — confidencialidad del cliente ]
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

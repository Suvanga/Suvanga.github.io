import type { CaseStudy as CaseStudyData } from '../data/caseStudies';
import { caseStudies } from '../data/caseStudies';
import { Diagram } from '../components/Diagram';
import { Markdown } from '../components/Markdown';

export function CaseStudy({ study }: { study: CaseStudyData }) {
  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8">
      <a href="/#work" className="text-dust underline-offset-4 hover:text-star hover:underline">
        Back to all work
      </a>
      <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6rem)] leading-[0.98]">{study.title}</h1>
      <p className="mt-6 max-w-[52ch] text-xl leading-relaxed text-star/90 sm:text-2xl">{study.intro}</p>

      <dl className="mt-12 grid gap-6 border-y border-line py-8 sm:grid-cols-2 lg:grid-cols-4">
        {study.facts.map((f) => (
          <div key={f.label}>
            <dt className="text-sm text-dust">{f.label}</dt>
            <dd className="mt-1 text-star">{f.value}</dd>
          </div>
        ))}
      </dl>

      {study.links.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {study.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-comet underline underline-offset-4 hover:text-star">
              {l.label}
            </a>
          ))}
        </div>
      )}

      <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_22rem] lg:gap-20">
        <div className="space-y-14">
          {study.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">{s.heading}</h2>
              <div className="mt-5">
                <Markdown source={s.body} />
              </div>
            </section>
          ))}
        </div>
        <aside className="lg:pt-2">
          <div className="lg:sticky lg:top-24">
            {study.diagram && <Diagram data={study.diagram} />}
            {study.image && (
              <figure className="overflow-hidden rounded-2xl border border-line bg-panel/60">
                <a href={study.image.src} target="_blank" rel="noopener noreferrer">
                  <img src={study.image.src} alt={study.image.alt} loading="lazy" className="w-full" />
                </a>
                <figcaption className="p-4 text-sm text-dust">{study.image.caption}</figcaption>
              </figure>
            )}
          </div>
        </aside>
      </div>

      {next && next.slug !== study.slug && (
        <a href={`/work/${next.slug}/`} className="group mt-24 block border-t border-line pt-10">
          <span className="text-dust">Next case study</span>
          <span className="mt-2 block font-display text-4xl transition-colors group-hover:text-ember sm:text-5xl">{next.title}</span>
        </a>
      )}
    </article>
  );
}

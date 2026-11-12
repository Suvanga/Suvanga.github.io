import type { ReactNode } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { StarChart } from '../components/StarChart';
import { education, experience, featured, profile, projects, recognition, skills } from '../data/site';
import { posts } from '../data/posts';
import { formatDate } from '../lib/format';

function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <h2 id={`${id}-title`} className="font-display text-4xl leading-tight sm:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-3 max-w-[60ch] text-dust">{intro}</p>}
      <div className="mt-12">{children}</div>
    </section>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-32 sm:px-8 md:min-h-[92vh] md:grid-cols-[1.15fr_0.85fr] md:pt-24">
      <div>
        <p className="text-dust">
          Founding CTO at{' '}
          <a href="https://getinthemeetingroom.com" className="text-star underline decoration-ember/60 underline-offset-4 hover:decoration-ember">
            The Meeting Room
          </a>
        </p>
        <h1 className="mt-4 font-display text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.95] tracking-[-0.01em]">
          Suvanga
          <br />
          Dhakal
        </h1>
        <p className="mt-8 max-w-[36ch] text-xl leading-relaxed text-star/90 sm:text-2xl">{profile.pitch}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#work" className="rounded-full bg-ember px-6 py-3 font-medium text-space transition-colors hover:bg-[#f7cda3]">
            See my work
          </a>
          <a href={profile.resume} className="rounded-full border border-line px-6 py-3 font-medium text-star transition-colors hover:border-dust">
            Download resume
          </a>
        </div>
        <div className="mt-8 flex gap-5 text-dust">
          <a href={profile.github} aria-label="GitHub" className="hover:text-star"><Github className="h-5 w-5" /></a>
          <a href={profile.linkedin} aria-label="LinkedIn" className="hover:text-star"><Linkedin className="h-5 w-5" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-star"><Mail className="h-5 w-5" /></a>
        </div>
      </div>
      <div className="mx-auto w-full max-w-md md:max-w-none">
        <StarChart />
      </div>
    </section>
  );
}

function Work() {
  return (
    <Section id="work" title="Selected work" intro="Three projects I’d point to first, each with a write-up of the problem, the decisions, and the results.">
      <div className="divide-y divide-line border-y border-line">
        {featured.map((f) => (
          <article key={f.slug} className="group relative grid gap-4 py-10 md:grid-cols-[1fr_1.4fr] md:gap-12">
            <h3 className="font-display text-4xl leading-tight transition-colors group-hover:text-ember sm:text-[2.75rem]">
              <a href={`/work/${f.slug}/`} className="after:absolute after:inset-0">
                {f.title}
              </a>
            </h3>
            <div>
              <p className="text-star/90">{f.summary}</p>
              <p className="mt-4 flex gap-3 text-star">
                <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-ember" />
                {f.outcome}
              </p>
              <p className="mt-4 text-sm text-dust">{f.tags.join(', ')}</p>
              <p className="mt-5 text-comet underline underline-offset-4">Read the case study</p>
            </div>
          </article>
        ))}
      </div>

      <h3 id="projects" className="mt-20 font-display text-3xl">More projects</h3>
      <div className="mt-8 grid gap-10 md:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title}>
            <h4 className="text-lg font-semibold">{p.title}</h4>
            <p className="mt-2 text-star/85">{p.summary}</p>
            <p className="mt-3 text-sm text-dust">{p.tags.join(', ')}</p>
            <div className="mt-4 flex gap-5 text-[0.9375rem]">
              {p.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-comet underline underline-offset-4 hover:text-star">
                  {l.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-l border-line pl-8 sm:pl-10">
        {experience.map((job) => (
          <li key={`${job.org}-${job.period}`} className="relative pb-14 last:pb-0">
            <span aria-hidden="true" className="absolute -left-[calc(2rem+4px)] top-2 h-2 w-2 rotate-45 bg-ember sm:-left-[calc(2.5rem+4px)]" />
            <div className="grid gap-2 md:grid-cols-[12rem_1fr] md:gap-10">
              <p className="text-sm text-dust md:pt-1">
                {job.period}
                <br className="hidden md:block" />
                <span className="md:hidden">, </span>
                {job.place}
              </p>
              <div>
                <h3 className="text-xl font-semibold">
                  {job.role},{' '}
                  {job.href ? (
                    <a href={job.href} className="underline decoration-ember/60 underline-offset-4 hover:decoration-ember">{job.org}</a>
                  ) : (
                    job.org
                  )}
                </h3>
                <ul className="mt-4 max-w-[68ch] space-y-2 text-star/85">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.7rem] h-px w-3 shrink-0 bg-dust" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-14 text-dust">
        {education.degree}, {education.school}, {education.period}
      </p>
    </Section>
  );
}

function Writing() {
  return (
    <Section id="writing" title="Writing" intro="System design exercises and lessons from building AI systems.">
      <ul className="divide-y divide-line border-y border-line">
        {posts.slice(0, 3).map((p) => (
          <li key={p.slug} className="group relative grid gap-2 py-7 md:grid-cols-[10rem_1fr] md:gap-10">
            <time dateTime={p.date} className="text-sm text-dust md:pt-1.5">{formatDate(p.date)}</time>
            <div>
              <h3 className="text-xl font-semibold transition-colors group-hover:text-ember">
                <a href={`/writing/${p.slug}/`} className="after:absolute after:inset-0">{p.title}</a>
              </h3>
              <p className="mt-2 max-w-[68ch] text-star/80">{p.summary}</p>
            </div>
          </li>
        ))}
      </ul>
      <a href="/writing/" className="mt-8 inline-block text-comet underline underline-offset-4 hover:text-star">
        All writing
      </a>
    </Section>
  );
}

function Recognition() {
  return (
    <Section id="recognition" title="Leadership and recognition">
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {recognition.map((r) => (
          <div key={r.title}>
            <h3 className="font-semibold">{r.title}</h3>
            <p className="mt-1 text-star/80">{r.detail}</p>
            <p className="mt-1 text-sm text-dust">{r.period}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Tools I work with">
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-2 py-5 md:grid-cols-[12rem_1fr] md:gap-10">
            <dt className="text-dust">{s.group}</dt>
            <dd className="text-star/90">{s.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <h2 id="contact-title" className="max-w-[18ch] font-display text-5xl leading-[1.05] sm:text-7xl">
        Building something in sports, health, or AI? Let’s talk.
      </h2>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a href={`mailto:${profile.email}`} className="rounded-full bg-ember px-6 py-3 font-medium text-space transition-colors hover:bg-[#f7cda3]">
          Email {profile.email}
        </a>
        <a href={profile.linkedin} className="rounded-full border border-line px-6 py-3 font-medium text-star transition-colors hover:border-dust">
          Connect on LinkedIn
        </a>
      </div>
      <p className="mt-6 text-dust">Based in {profile.location}.</p>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Experience />
      <Writing />
      <Recognition />
      <Skills />
      <Contact />
    </>
  );
}

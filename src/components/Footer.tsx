import { profile } from '../data/site';

export function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-dust sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React and Vite.
        </p>
        <div className="flex gap-6">
          <a href={profile.github} className="hover:text-star">GitHub</a>
          <a href={profile.linkedin} className="hover:text-star">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-star">Email</a>
          <a href={profile.resume} className="hover:text-star">Resume</a>
        </div>
      </div>
    </footer>
  );
}

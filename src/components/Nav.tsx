import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/site';

const links = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Writing', href: '/writing/' },
  { label: 'Contact', href: '/#contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-space/75 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="font-display text-2xl leading-none text-star">
          {profile.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.9375rem] text-dust transition-colors hover:text-star">
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            className="rounded-full border border-ember/60 px-4 py-1.5 text-[0.9375rem] text-ember transition-colors hover:bg-ember hover:text-space"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 p-2 text-dust hover:text-star md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line/60 bg-space px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-star">
              {l.label}
            </a>
          ))}
          <a href={profile.resume} className="mt-2 inline-block rounded-full border border-ember/60 px-5 py-2 text-ember">
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

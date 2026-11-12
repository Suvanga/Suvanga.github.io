import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import { caseStudies } from './src/data/caseStudies';
import { posts } from './src/data/posts';

const SITE = 'https://suvanga.github.io';

const pages = [
  { path: '/', title: 'Suvanga Dhakal, founding CTO and AI engineer', description: 'Suvanga Dhakal is the founding CTO of The Meeting Room and an AI engineer who builds products end to end, from medical imaging models to production platforms.' },
  ...caseStudies.map((c) => ({ path: `/work/${c.slug}/`, title: `${c.title}: case study by Suvanga Dhakal`, description: c.description })),
  { path: '/writing/', title: 'Writing by Suvanga Dhakal', description: 'Notes on system design, AI engineering, and building products.' },
  ...posts.map((p) => ({ path: `/writing/${p.slug}/`, title: `${p.title} | Suvanga Dhakal`, description: p.summary })),
];

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// After each build, write one HTML file per page (so every URL loads with its own
// title and description), plus a sitemap, robots.txt, and a 404 page.
function staticPages(): Plugin {
  return {
    name: 'static-pages',
    apply: 'build',
    writeBundle(options) {
      const out = options.dir!;
      const shell = fs.readFileSync(path.join(out, 'index.html'), 'utf8');
      const render = (p: (typeof pages)[number]) =>
        shell
          .replace(/<title>[^<]*<\/title>/, `<title>${escape(p.title)}</title>`)
          .replace(/(<meta name="description" content=")[^"]*/, `$1${escape(p.description)}`)
          .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(p.title)}`)
          .replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(p.description)}`)
          .replace(/(<meta property="og:url" content=")[^"]*/, `$1${SITE}${p.path}`)
          .replace(/(<link rel="canonical" href=")[^"]*/, `$1${SITE}${p.path}`);
      for (const p of pages) {
        const dir = path.join(out, p.path);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), render(p));
      }
      fs.writeFileSync(path.join(out, '404.html'), render({ path: '/404', title: 'Page not found | Suvanga Dhakal', description: pages[0].description }));
      const today = new Date().toISOString().slice(0, 10);
      fs.writeFileSync(
        path.join(out, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
          .map((p) => `  <url><loc>${SITE}${p.path}</loc><lastmod>${today}</lastmod></url>`)
          .join('\n')}\n</urlset>\n`,
      );
      fs.writeFileSync(path.join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), staticPages()],
  base: '/',
  build: {
    target: 'es2020',
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
});

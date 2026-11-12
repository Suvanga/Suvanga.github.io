import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { StarField } from './components/StarField';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';
import { Post, WritingIndex } from './pages/Writing';
import { caseStudies } from './data/caseStudies';
import { posts } from './data/posts';

// Each URL is a real page (the build writes an HTML file for every route),
// so plain links work and no router library is needed.
function route(pathname: string) {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path === '/') return { page: <Home />, title: null, reading: false };

  const work = path.match(/^\/work\/([\w-]+)$/);
  const study = work && caseStudies.find((c) => c.slug === work[1]);
  if (study) return { reading: true, page: <CaseStudy study={study} />, title: `${study.title}: case study by Suvanga Dhakal` };

  if (path === '/writing') return { reading: false, page: <WritingIndex />, title: 'Writing by Suvanga Dhakal' };

  const writing = path.match(/^\/writing\/([\w-]+)$/);
  const post = writing && posts.find((p) => p.slug === writing[1]);
  if (post) return { reading: true, page: <Post post={post} />, title: `${post.title} | Suvanga Dhakal` };

  return {
    reading: false,
    page: (
      <div className="mx-auto max-w-6xl px-5 pb-32 pt-40 sm:px-8">
        <h1 className="font-display text-6xl">This page doesn’t exist.</h1>
        <p className="mt-6 text-xl text-dust">
          The link may be out of date.{' '}
          <a href="/" className="text-comet underline underline-offset-4">Go to the home page</a> to find what you need.
        </p>
      </div>
    ),
    title: 'Page not found | Suvanga Dhakal',
  };
}

export default function App() {
  const { page, title, reading } = route(window.location.pathname);

  useEffect(() => {
    if (title) document.title = title;
    // Content renders after load, so jump to #section links ourselves.
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [title]);

  return (
    <>
      <a href="#main" className="sr-only z-[60] rounded bg-ember px-4 py-2 text-space focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <StarField dim={reading} />
      <Nav />
      <main id="main">{page}</main>
      <Footer />
    </>
  );
}

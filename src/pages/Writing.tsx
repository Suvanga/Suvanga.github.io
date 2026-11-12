import type { Post as PostData } from '../data/posts';
import { posts } from '../data/posts';
import { Markdown } from '../components/Markdown';
import { formatDate } from '../lib/format';
import { profile } from '../data/site';

export function WritingIndex() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8">
      <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.98]">Writing</h1>
      <p className="mt-6 max-w-[52ch] text-xl text-star/90">System design exercises and lessons from building AI systems.</p>
      <ul className="mt-14 divide-y divide-line border-y border-line">
        {posts.map((p) => (
          <li key={p.slug} className="group relative grid gap-2 py-8 md:grid-cols-[10rem_1fr] md:gap-10">
            <time dateTime={p.date} className="text-sm text-dust md:pt-1.5">{formatDate(p.date)}</time>
            <div>
              <h2 className="text-2xl font-semibold transition-colors group-hover:text-ember">
                <a href={`/writing/${p.slug}/`} className="after:absolute after:inset-0">{p.title}</a>
              </h2>
              <p className="mt-2 max-w-[68ch] text-star/80">{p.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Post({ post }: { post: PostData }) {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
      <a href="/writing/" className="text-dust underline-offset-4 hover:text-star hover:underline">
        All writing
      </a>
      <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.02]">{post.title}</h1>
      <p className="mt-5 text-dust">
        <time dateTime={post.date}>{formatDate(post.date)}</time>, by {profile.name}
      </p>
      <div className="mt-12">
        <Markdown source={post.body} />
      </div>
      <div className="mt-16 border-t border-line pt-8 text-dust">
        Questions or feedback?{' '}
        <a href={`mailto:${profile.email}`} className="text-comet underline underline-offset-4 hover:text-star">
          Email me
        </a>
        .
      </div>
    </article>
  );
}

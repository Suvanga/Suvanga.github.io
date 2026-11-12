# suvanga.github.io

Personal site of Suvanga Dhakal: founding CTO of The Meeting Room and AI engineer.

## Edit content

All text lives in three files. You rarely need to touch anything else.

| What | File |
| --- | --- |
| Home page: bio, featured work, projects, experience, skills, recognition | `src/data/site.ts` |
| Case study pages (`/work/<slug>/`) | `src/data/caseStudies.ts` |
| Writing (`/writing/<slug>/`) | `src/data/posts.ts` |

Case studies and posts use simple Markdown: paragraphs, `## headings`, `- lists`, `1. lists`, `**bold**`, `*italic*`, `` `code` ``, `[links](https://...)`, and fenced code blocks.

To add a post, copy an existing entry in `posts.ts`, give it a new `slug`, and put it at the top of the list. The build creates its page and adds it to the sitemap automatically.

Replace your resume by overwriting `public/resume.pdf`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build in ./build
```

## Deploy

Pushing to `main` deploys automatically: the GitHub Action in `.github/workflows/deploy.yml` builds the site and publishes `build/` to the `gh-pages` branch. Check progress in the repo's **Actions** tab.

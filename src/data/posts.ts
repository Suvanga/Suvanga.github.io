// Writing at /writing/<slug>. Newest first. Bodies use simple Markdown:
// paragraphs, ## headings, - lists, 1. lists, **bold**, *italic*, `code`, [links](https://...), and ``` code blocks.

export type Post = { slug: string; title: string; date: string; summary: string; body: string };

export const posts: Post[] = [
  {
    slug: 'agents-write-code-engineers-design-systems',
    title: 'Agents write the code. Engineers decide what breaks first.',
    date: '2026-11-08',
    summary:
      'Coding with AI agents is faster and better when it is done correctly. But most new SaaS is shipping with the same security holes, and system design is the skill that closes them.',
    body: `Most of the code in a new SaaS product can now be written by an AI agent. I think that is good news. I also think it is why so many new products are one curious user away from a breach. Both are true, and the gap between them is system design.

## Coding with agents is better, when it is done correctly

Give an agent a clear spec, a test suite, and a small scope, and it will produce working code faster than any person can type it. It does not get bored on the fortieth test case or skip the migration script. Done correctly, agentic coding looks like this:

- **Spec first.** Write down the inputs, the outputs, the failure cases, and what must never happen, before the agent writes a line.
- **Tests are the contract.** The work is done when the tests pass, and a human writes or reviews those tests.
- **Small changes.** One change, one diff that can be read in full. If nobody can explain a diff, it does not merge.
- **Least privilege.** The agent works in a sandbox with staging credentials. It never holds production keys.
- **Security stated, then checked.** Ask for the security requirements in the prompt, then verify them with scanners and review in the pipeline.

The opposite of this is prompting until the demo works and shipping whatever came out. That is not agentic engineering. That is hoping.

## Code that compiles is not code that is safe

[Veracode's Spring 2026 testing](https://veracode.com/blog/spring-2026-genai-code-security) found that current models write syntactically correct code more than 95% of the time, while only about 55% of tasks came out secure, a figure that has barely moved in two years. Defenses against cross-site scripting passed 15% of the time. Log injection passed 13%.

The models got much better at making code run. They did not get better at making it safe, unless someone asks and checks.

## What is breaking in SaaS right now

- **Databases with the front door open.** CVE-2025-48757 covers apps generated on the Lovable platform that shipped without proper row-level security: [170 of 1,645 scanned apps](https://www.superblocks.com/blog/lovable-rls-breach) let anyone read or write their tables. Moltbook, a vibe-coded social network, was [breached within three days of launch](https://thenextweb.com/news/lovable-vibe-coding-security-crisis-exposed) through the same kind of misconfiguration, exposing 1.5 million API tokens and 35,000 email addresses.
- **Agents holding production keys.** In April 2026 a coding agent working on a staging task at PocketOS used a broadly scoped token to [delete the production database and its volume-level backups](https://www.scworld.com/brief/ai-coding-agent-deletes-production-database-in-seconds) in a single API call, in under ten seconds.
- **Dependencies that do not exist.** Models invent package names. In one study of 576,000 generated code samples, [about a fifth of the suggested packages were not real](https://www.infosecurity-magazine.com/news/ai-hallucinations-slopsquatting/). Attackers can register those names and wait for an agent to install them. The attack is called slopsquatting.
- **Agents that can be talked into things.** The [OWASP Top 10 for Agentic Applications](https://cycode.com/blog/owasp-top-10-agentic-applications/) leads with goal hijacking, tool misuse, and identity and privilege abuse: an agent that reads a poisoned document or web page can be steered into using its real tools against its owner.

None of these are typos. Each one is a design decision that nobody made.

## System design is what separates us from the agents

An agent optimizes for the prompt in front of it. It does not know that the table it just created will hold every customer's data, that the token in the environment can delete production, or that the endpoint it wrote will be called ten thousand times a second next year. Nobody told it, because nobody had decided.

That decision is the engineer's job. **We should know what breaks first when the system scales, before it breaks.** These are the questions I answer before any agent starts typing:

1. **What breaks first at ten times the load?** The database, the queue, the fan-out, or the bill.
2. **Where are the trust boundaries?** Tenant isolation is enforced on the server and in the database, never in the client.
3. **What is the blast radius of each credential?** If this key leaks or an agent misuses it, what is the worst that happens?
4. **What cannot be undone?** Destructive actions need a human confirmation, and backups live somewhere the same key cannot reach.
5. **How will we know?** Logs, alerts, and an audit trail for everything an agent does.

An agent can implement every one of these answers well. It cannot be trusted to ask the questions.

## The rule I work by

Agents own the typing. Engineers own the design, the trust boundaries, and the answer to what breaks first. The teams that keep that division will ship faster than everyone else, and they will still be standing after their first million users.`,
  },
  {
    slug: 'design-team-messaging',
    title: 'System design: team messaging for 10,000 athletic programs',
    date: '2026-09-05',
    summary:
      'A design exercise: how I would build Slack-style messaging for coaching staffs, from requirements and estimates to fan-out, attachments, and search.',
    body: `This is a design exercise in the format of a system design interview. The numbers are assumptions I chose to make the trade-offs concrete.

## Requirements

**Functional:** direct messages, group threads, staff channels, @mentions, read receipts, attachments of any size (including film clips), and search across a program’s history.

**Non-functional:** messages delivered in under 500 ms, nothing lost, history kept for years, and strict isolation so one program can never see another program’s data.

## Estimates

- 10,000 programs, about 30 active staff each: 300,000 users.
- About 100 messages per user per day: 30 million messages a day, roughly 350 per second on average and 3,500 at peak.
- About 1 KB per message: 30 GB of text a day, about 11 TB a year before replication.
- Attachments dominate storage. Film is large, so it never goes through the message path.

## API

\`\`\`
POST /channels/{id}/messages     { text, attachmentIds[], clientMsgId }
GET  /channels/{id}/messages?before={cursor}&limit=50
POST /attachments                → { attachmentId, uploadUrl }
WS   /realtime                   ← message.created, message.read, typing
\`\`\`

The client generates \`clientMsgId\` so retries are idempotent: a message sent twice on a flaky connection is stored once.

## Data model

Partition everything by program. Messages live in a wide-column or partitioned SQL table keyed by \`(channel_id, message_id)\`, where \`message_id\` is time-sortable (a Snowflake-style ID). That makes “latest 50 messages in a channel” a single range read.

## Architecture

1. The client sends a message over HTTPS to the message service.
2. The service writes it to the message store, then publishes \`message.created\` to a queue.
3. A fan-out worker looks up channel members and pushes the event to each online user’s WebSocket gateway through a pub/sub layer such as Redis.
4. Offline users get a push notification and catch up with the paginated history API when they return.

Writing first and fanning out second means a message is never shown before it is safely stored.

## Attachments

Uploads go straight to object storage with a pre-signed URL, so a 2 GB film file never touches the API servers. A background job generates thumbnails and transcodes video, then marks the attachment ready. This is also how every attachment lands in the program’s library automatically: the library is just an index over attachments.

## Search

Messages stream from the queue into a search index, partitioned by program. Every query is filtered by program ID on the server, never trusted from the client.

## Where it breaks first

Large channels. One announcement to a 500-person department means 500 deliveries. For big channels, switch from pushing to every member to having clients pull the latest messages when they open the channel. That hybrid is the same trade-off news feeds make for accounts with millions of followers.`,
  },
  {
    slug: 'accuracy-lies',
    title: 'Why accuracy lies: what a 99% false-positive rate taught me about medical AI',
    date: '2026-11-04',
    summary:
      'Training a chest X-ray model, I fixed class imbalance the standard way and made the model flag a rare disease on almost every healthy scan. Here is what fixed it.',
    body: `When I started MediScan, a model that detects 15 conditions in chest X-rays, my first model looked great on paper. It was also useless.

## The trap

The NIH Chest X-ray dataset has more than 100,000 images, and it is extremely imbalanced. Infiltration appears in 17.7% of images. Hernia appears in 0.2%. A model can ignore Hernia completely and lose almost nothing in accuracy, because there is so little Hernia to get wrong.

In medicine that is backwards. The rare, missed case is exactly the one that matters.

## The standard fix made it worse

The textbook answer is to weight the loss by class frequency, so mistakes on rare classes cost more. With a 493-fold imbalance, that meant a 493.9x penalty for Hernia.

It worked, in the sense that the model stopped ignoring Hernia. It started seeing Hernia everywhere. The false-positive rate for Hernia hit 99%. In a hospital, that is alarm fatigue: doctors learn to ignore the model, and then it is worse than no model at all.

## What worked

Two changes:

1. **Square-root loss scaling.** Instead of weighting by the raw imbalance ratio, I weighted by its square root. The Hernia penalty dropped from 493.9x to 22.2x: still strong enough to keep the model paying attention, without the panic.
2. **Calibration after training.** I adjusted each class’s output bias after training so the decision thresholds matched reality. The Hernia false-positive rate went from 99% to 1%, while recall stayed high.

One detail that is easy to get wrong: I computed every weight and statistic on the training split only. Computing them on the full dataset leaks information from the test set and makes the results look better than they are.

## The lesson

Accuracy and loss curves told me the first model was fine. Per-class recall and false-positive rates told me the truth. For any safety-critical model, I now look at calibration before I look at accuracy.

I wrote this up in more detail in my paper, *Beyond Accuracy*. You can [read it on GitHub](https://github.com/Suvanga/Mediscan/blob/main/BeyondAccuracy.pdf) or [try the model](https://xrayai.suvanga.com).`,
  },
].sort((a, b) => b.date.localeCompare(a.date));

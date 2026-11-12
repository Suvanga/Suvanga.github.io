// Writing at /writing/<slug>. Newest first. Bodies use simple Markdown:
// paragraphs, ## headings, - lists, 1. lists, **bold**, *italic*, `code`, [links](https://...), and ``` code blocks.

export type Post = { slug: string; title: string; date: string; summary: string; body: string };

export const posts: Post[] = [
  {
    slug: 'design-team-messaging',
    title: 'System design: team messaging for 10,000 athletic programs',
    date: '2026-11-11',
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
];

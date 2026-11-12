import type { ReactNode } from 'react';

// A small Markdown renderer for case studies and posts. It builds React elements
// (never raw HTML), so content can't inject scripts.

function inline(text: string, key = 0): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = `${key}-${i++}`;
    if (m[2]) out.push(<strong key={k}>{m[2]}</strong>);
    else if (m[3]) out.push(<em key={k}>{m[3]}</em>);
    else if (m[4]) out.push(<code key={k}>{m[4]}</code>);
    else if (m[5]) {
      const external = /^https?:/.test(m[6]);
      out.push(
        <a key={k} href={m[6]} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {m[5]}
        </a>,
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Markdown({ source }: { source: string }) {
  const lines = source.split('\n');
  const blocks: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const k = blocks.length;

    if (line.trim() === '') {
      i++;
    } else if (line.startsWith('```')) {
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) code.push(lines[i++]);
      i++;
      blocks.push(
        <pre key={k}>
          <code>{code.join('\n')}</code>
        </pre>,
      );
    } else if (line.startsWith('## ')) {
      blocks.push(<h2 key={k}>{inline(line.slice(3), k)}</h2>);
      i++;
    } else if (/^- /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^- /.test(lines[i])) items.push(lines[i++].slice(2));
      blocks.push(
        <ul key={k}>
          {items.map((t, j) => (
            <li key={j}>{inline(t, k * 100 + j)}</li>
          ))}
        </ul>,
      );
    } else if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) items.push(lines[i++].replace(/^\d+\. /, ''));
      blocks.push(
        <ol key={k}>
          {items.map((t, j) => (
            <li key={j}>{inline(t, k * 100 + j)}</li>
          ))}
        </ol>,
      );
    } else {
      const para: string[] = [];
      while (i < lines.length && lines[i].trim() !== '' && !/^(## |- |\d+\. |```)/.test(lines[i])) para.push(lines[i++]);
      blocks.push(<p key={k}>{inline(para.join(' '), k)}</p>);
    }
  }

  return <div className="prose-space max-w-[68ch] text-[1.0625rem] leading-[1.75] text-star/90">{blocks}</div>;
}

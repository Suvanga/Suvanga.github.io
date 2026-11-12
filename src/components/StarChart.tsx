// The hero: my projects plotted as a constellation. Bright stars have case studies.
const stars = [
  { id: 'deepcls', label: 'DeepCLS', x: 82, y: 118, href: '/work/deepcls/', major: true, lx: -6, ly: -16, anchor: 'start' },
  { id: 'mediscan', label: 'MediScan', x: 196, y: 172, href: '/work/mediscan/', major: true, lx: 0, ly: 30, anchor: 'middle' },
  { id: 'tmr', label: 'The Meeting Room', x: 306, y: 82, href: '/work/the-meeting-room/', major: true, lx: 0, ly: -20, anchor: 'middle' },
  { id: 'silbells', label: 'SilBells', x: 352, y: 228, href: '/#projects', major: false, lx: 12, ly: 6, anchor: 'start' },
  { id: 'moneymate', label: 'MoneyMate', x: 252, y: 304, href: '/#projects', major: false, lx: 0, ly: 26, anchor: 'middle' },
  { id: 'momentum', label: 'Momentum', x: 108, y: 272, href: '/#projects', major: false, lx: 0, ly: 26, anchor: 'middle' },
] as const;

const lines: [string, string][] = [
  ['deepcls', 'mediscan'],
  ['mediscan', 'tmr'],
  ['tmr', 'silbells'],
  ['silbells', 'moneymate'],
  ['moneymate', 'momentum'],
  ['momentum', 'mediscan'],
];

const byId = Object.fromEntries(stars.map((s) => [s.id, s]));

export function StarChart() {
  return (
    <figure className="w-full">
      <svg viewBox="0 0 420 360" className="h-auto w-full overflow-visible" role="group" aria-label="Star chart of my projects">
        {/* Chart grid, like the coordinate lines on an old star atlas */}
        <g fill="none" stroke="#2a2350" strokeWidth="1">
          <circle cx="210" cy="190" r="168" />
          <circle cx="210" cy="190" r="108" strokeDasharray="2 6" />
          <path d="M42 190h336M210 22v336" strokeDasharray="2 6" />
        </g>

        <g stroke="#9d98b8" strokeOpacity="0.55" strokeWidth="1">
          {lines.map(([a, b], i) => (
            <line
              key={`${a}-${b}`}
              x1={byId[a].x}
              y1={byId[a].y}
              x2={byId[b].x}
              y2={byId[b].y}
              pathLength={1}
              className="chart-line"
              style={{ animationDelay: `${0.35 + i * 0.18}s` }}
            />
          ))}
        </g>

        {stars.map((s, i) => (
          <a key={s.id} href={s.href} aria-label={s.major ? `${s.label} case study` : s.label} className="group outline-none">
            <g className="chart-star" style={{ animationDelay: `${i * 0.08}s` }}>
              <circle cx={s.x} cy={s.y} r="18" fill="transparent" />
              {s.major && <circle cx={s.x} cy={s.y} r="11" fill="#f2b880" fillOpacity="0.14" />}
              <circle
                cx={s.x}
                cy={s.y}
                r={s.major ? 5.5 : 3.5}
                fill={s.major ? '#f2b880' : '#ece9f6'}
                className="transition-[r] duration-200 group-hover:[r:8] group-focus-visible:[r:8]"
              />
              <circle
                cx={s.x}
                cy={s.y}
                r="14"
                fill="none"
                stroke="#f2b880"
                strokeWidth="1.5"
                className="opacity-0 group-focus-visible:opacity-100"
              />
              <text
                x={s.x + s.lx}
                y={s.y + s.ly}
                textAnchor={s.anchor}
                className="fill-dust font-display text-[19px] transition-colors group-hover:fill-star group-focus-visible:fill-star"
              >
                {s.label}
              </text>
            </g>
          </a>
        ))}
      </svg>
      <figcaption className="mt-2 text-center text-sm text-dust">
        My work as a star chart. The bright stars have full case studies.
      </figcaption>
    </figure>
  );
}

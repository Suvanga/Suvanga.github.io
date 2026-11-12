import type { Diagram as DiagramData } from '../data/caseStudies';

// Architecture diagram: one row per layer, requests flow top to bottom.
export function Diagram({ data }: { data: DiagramData }) {
  return (
    <figure className="rounded-2xl border border-line bg-panel/70 p-5 sm:p-6">
      <ol>
        {data.layers.map((layer, i) => (
          <li key={layer.label}>
            <p className="text-sm text-dust">{layer.label}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {layer.nodes.map((n) => (
                <span key={n} className="rounded-lg border border-line bg-space/80 px-3 py-1.5 text-[0.9375rem] text-star">
                  {n}
                </span>
              ))}
            </div>
            {i < data.layers.length - 1 && <div aria-hidden="true" className="ml-4 my-2 h-5 w-px bg-ember/60" />}
          </li>
        ))}
      </ol>
      <figcaption className="mt-5 border-t border-line pt-4 text-sm text-dust">{data.caption}</figcaption>
    </figure>
  );
}

import { useEffect, useRef } from 'react';

// A still field of stars drawn once (and again on resize). No animation loop,
// so it costs nothing while you scroll or read.
export function StarField({ dim = false }: { dim?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Same stars on every draw, so resizing doesn't reshuffle the sky.
    let seed = 7;
    const random = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    const stars = Array.from({ length: 260 }, () => ({
      x: random(),
      y: random(),
      r: random() ** 3 * 1.6 + 0.3,
      a: random() * 0.45 + 0.12,
      warm: random() < 0.08,
    }));

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.warm ? `rgba(242,184,128,${s.a})` : `rgba(236,233,246,${s.a})`;
        ctx.fill();
      }
    };

    let timer: number | undefined;
    const onResize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(draw, 150);
    };
    draw();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.clearTimeout(timer);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none fixed inset-0 -z-10 h-full w-full ${dim ? 'opacity-35' : ''}`} />;
}

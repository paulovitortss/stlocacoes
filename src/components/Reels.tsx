import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { REELS, instagramLink, type Reel } from '../config';

function ReelCard({ reel }: { reel: Reel }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    // Pausa os outros reels para não tocarem juntos.
    document.querySelectorAll<HTMLVideoElement>('video[data-reel]').forEach((v) => v !== ref.current && v.pause());
    setPlaying(true);
    ref.current?.play();
  };

  return (
    <figure className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-brand-950 shadow-lg ring-1 ring-white/10">
      <video
        ref={ref}
        data-reel
        src={reel.video}
        poster={reel.poster}
        preload="none"
        playsInline
        controls={playing}
        onPause={() => ref.current?.ended && setPlaying(false)}
        className="h-full w-full object-cover"
      />
      {!playing && (
        <button
          type="button"
          onClick={start}
          className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-950/90 via-transparent to-transparent p-4 text-left text-white"
          aria-label={`Assistir: ${reel.title}`}
        >
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/50 backdrop-blur transition group-hover:scale-110 group-hover:bg-brand-500">
            <Play className="ml-1 h-7 w-7 fill-white" />
          </span>
          <figcaption>
            <span className="block text-base font-bold">{reel.title}</span>
            <span className="block text-sm text-white/70">{reel.subtitle}</span>
          </figcaption>
        </button>
      )}
    </figure>
  );
}

export default function Reels() {
  return (
    <section id="na-obra" className="bg-brand-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-300">Na obra</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Nossa frota trabalhando de verdade.</h2>
            <p className="mt-4 text-lg text-white/70">
              Máquinas e caminhões da ST em operação no Piauí. Toque para assistir com som.
            </p>
          </div>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="btn-ghost shrink-0">
            Mais vídeos no Instagram
          </a>
        </div>

        <div className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {REELS.map((r) => (
            <div key={r.video} className="w-[68%] shrink-0 snap-center sm:w-auto">
              <ReelCard reel={r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

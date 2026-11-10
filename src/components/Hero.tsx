import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { CONTACT, whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

export default function Hero() {
  const video = useRef<HTMLVideoElement>(null);

  // Quem prefere menos movimento vê só a imagem parada.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) video.current?.pause();
  }, []);

  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-brand-950 text-white">
      <video
        ref={video}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/media/hero.mp4"
        poster="/media/hero.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950 via-brand-950/70 to-brand-950/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/80 via-brand-950/30 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-8">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
          Locação de máquinas pesadas · Piauí
        </p>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="mark">A máquina certa</span> mantém sua obra avançando.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
          Escavadeiras, patrol, trator de esteira, rolos, vibroacabadora e caminhões basculantes e pipa para terraplenagem,
          pavimentação e infraestrutura.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-4 text-base">
            <WhatsAppIcon />
            Solicitar orçamento
          </a>
          <a href="#equipamentos" className="btn-ghost px-7 py-4 text-base">
            Ver equipamentos
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-4 border-t border-white/15 pt-6 text-sm sm:grid-cols-4">
          {[
            ['Frota própria', 'máquinas e caminhões'],
            ['Equipe técnica', 'operadores qualificados'],
            ['Todo o Piauí', 'base em Teresina'],
            [CONTACT.phoneLabel, 'WhatsApp'],
          ].map(([a, b]) => (
            <div key={a}>
              <p className="font-bold">{a}</p>
              <p className="text-white/60">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

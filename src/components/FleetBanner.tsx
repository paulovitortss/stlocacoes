import { whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

export default function FleetBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900 text-white">
      <img
        src="/media/frota-basculantes.jpg"
        alt="Frota de caminhões basculantes da ST Locações enfileirada no pátio"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/95 via-brand-900/80 to-brand-900/20" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="eyebrow text-brand-300">Transporte de materiais</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Sua obra <span className="mark">precisa</span> de caminhões basculantes?
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/80">
            A ST Locações tem a frota para atender sua demanda — transporte de materiais com agilidade e eficiência.
          </p>
          <a
            href={whatsappLink('Olá! Vim pelo site e gostaria de um orçamento de caminhões basculantes.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-8 bg-white text-brand-900 hover:bg-brand-50"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            Consultar disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}

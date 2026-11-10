import { useEffect } from 'react';
import { Instagram, RefreshCw } from 'lucide-react';
import { CONTACT, instagramLink } from '../config';

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const EMBED_SCRIPT = 'https://www.instagram.com/embed.js';

/*
 * Embed oficial do perfil do Instagram: mostra o cabeçalho do perfil e os posts mais recentes.
 * Atualiza sozinho a cada nova publicação — não precisa de token, API ou serviço pago.
 */
export default function InstagramFeed() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
    const s = document.createElement('script');
    s.src = EMBED_SCRIPT;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section id="instagram" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <p className="eyebrow">Instagram</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">@{CONTACT.instagram}</h2>
          <p className="mt-4 text-lg text-slate-600">
            Acompanhe a frota em ação, obras em andamento e os equipamentos disponíveis para locação.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
            <RefreshCw className="h-4 w-4" />
            Atualizado automaticamente com as últimas publicações
          </p>
          <div className="mt-8">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Instagram className="h-4 w-4" />
              Seguir no Instagram
            </a>
          </div>
        </div>

        <div className="ig-embed lg:col-span-7">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={`${instagramLink}?utm_source=ig_embed&utm_campaign=loading`}
            data-instgrm-version="14"
          >
            {/* Aparece só se o Instagram não carregar */}
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-6 font-semibold text-brand-700">
              <Instagram className="h-6 w-6" />
              Ver as publicações de @{CONTACT.instagram} no Instagram
            </a>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

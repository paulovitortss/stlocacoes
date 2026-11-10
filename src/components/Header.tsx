import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

const LINKS = [
  { href: '#equipamentos', label: 'Equipamentos' },
  { href: '#na-obra', label: 'Na obra' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#instagram', label: 'Instagram' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="ST Locações — início" className="shrink-0">
          <img
            src="/media/logo.png"
            alt="ST Locações"
            width={272}
            height={54}
            className={`h-9 w-auto transition ${solid ? '' : 'logo-white'}`}
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors ${
                solid ? 'text-slate-700 hover:text-brand-500' : 'text-white/90 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary hidden px-5 py-2.5 sm:inline-flex">
            <WhatsAppIcon className="h-4 w-4" />
            Solicitar orçamento
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className={`rounded-lg p-2 lg:hidden ${solid ? 'text-slate-800' : 'text-white'}`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 pb-6 pt-2 lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-slate-100 py-3 font-semibold text-slate-800"
            >
              {l.label}
            </a>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 w-full">
            <WhatsAppIcon className="h-4 w-4" />
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  );
}

import { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { ALSO_AVAILABLE, EQUIPMENT, whatsappLink, type Category } from '../config';

const FILTERS: (Category | 'Todos')[] = ['Todos', 'Terraplenagem', 'Transporte', 'Pavimentação'];

export default function Equipment() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('Todos');
  const items = filter === 'Todos' ? EQUIPMENT : EQUIPMENT.filter((e) => e.category === filter);

  return (
    <section id="equipamentos" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Equipamentos</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
              A máquina que sua obra precisa <span className="text-brand-500">está aqui.</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Frota de máquinas pesadas e caminhões para diferentes etapas da sua obra, do corte do terreno ao asfalto.
            </p>
          </div>

          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0" role="tablist" aria-label="Filtrar equipamentos">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === f ? 'bg-brand-900 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-brand-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((e) => (
            <article
              key={e.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={e.image}
                  alt={e.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-800 backdrop-blur">
                  {e.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-brand-950">{e.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-600">{e.pitch}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{e.description}</p>
                <a
                  href={whatsappLink(`Olá! Vim pelo site e gostaria de um orçamento para locação de ${e.name.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-500"
                >
                  Pedir orçamento
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
          <span className="font-semibold text-slate-500">Também disponíveis:</span>
          {ALSO_AVAILABLE.map((name) => (
            <span key={name} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-semibold text-slate-700 ring-1 ring-slate-200">
              <Plus className="h-3.5 w-3.5 text-brand-500" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

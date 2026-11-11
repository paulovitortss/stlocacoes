import { HardHat, MapPin, Truck, Wrench } from 'lucide-react';

const PILLARS = [
  { icon: Truck, title: 'Logística própria', text: 'Levamos o equipamento até a sua obra com frota própria de transporte.' },
  { icon: HardHat, title: 'Equipe qualificada', text: 'Operadores experientes para manter a obra produtiva e segura.' },
  { icon: Wrench, title: 'Suporte técnico', text: 'Manutenção e atendimento rápido para evitar máquina parada.' },
  { icon: MapPin, title: 'Piauí e Maranhão', text: 'Base em Teresina e atendimento em obras nos dois estados.' },
];

const AREAS = ['Infraestrutura', 'Terraplenagem', 'Pavimentação', 'Mineração'];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative">
          <img
            src="/media/eq-escavadeira.jpg"
            alt="Escavadeira CASE carregando caminhão basculante em obra de terraplenagem"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 right-4 max-w-[16rem] rounded-2xl bg-brand-500 p-5 text-white shadow-xl sm:-right-6">
            <p className="text-sm font-semibold text-white/80">Mais produtividade,</p>
            <p className="text-lg font-extrabold leading-snug">menos paradas e um cronograma que segue em frente.</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">Quem somos</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">
            Empresa piauiense, feita para a obra não parar.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            A ST Locações é especializada na locação de máquinas pesadas de linha amarela e caminhões, com forte atuação em
            obras de infraestrutura, terraplenagem, pavimentação e mineração. Atendemos obras de pequeno, médio e grande
            porte com equipamentos revisados e flexibilidade de contrato.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <span key={a} className="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-800">
                {a}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-brand-300">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-brand-950">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

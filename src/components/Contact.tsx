import { useState, type FormEvent } from 'react';
import { Instagram, Mail, MapPin, Send } from 'lucide-react';
import { ALSO_AVAILABLE, CONTACT, EQUIPMENT, instagramLink, whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

const field =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15';

export default function Contact() {
  const [form, setForm] = useState({ nome: '', cidade: '', equipamento: '', periodo: '', mensagem: '' });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // Monta a mensagem e abre o WhatsApp — não depende de servidor para enviar.
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Vim pelo site e gostaria de um orçamento.',
      `*Nome:* ${form.nome}`,
      form.cidade && `*Cidade da obra:* ${form.cidade}`,
      form.equipamento && `*Equipamento:* ${form.equipamento}`,
      form.periodo && `*Período:* ${form.periodo}`,
      form.mensagem && `*Detalhes:* ${form.mensagem}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener');
  };

  const contacts = [
    { icon: WhatsAppIcon, label: 'WhatsApp', value: CONTACT.phoneLabel, href: whatsappLink() },
    { icon: Mail, label: 'E-mail', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Instagram, label: 'Instagram', value: `@${CONTACT.instagram}`, href: instagramLink },
    { icon: MapPin, label: 'Atendimento', value: CONTACT.region },
  ];

  return (
    <section id="contato" className="relative overflow-hidden bg-brand-900 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand-500/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <p className="eyebrow text-brand-300">Contato</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Conte o que sua obra precisa.</h2>
          <p className="mt-4 text-lg text-white/70">Nossa equipe está pronta para entender a sua demanda e retornar com um orçamento.</p>

          <ul className="mt-10 space-y-5">
            {contacts.map(({ icon: Icon, label, value, href }) => {
              const body = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-white/50">{label}</span>
                    <span className="block break-all font-semibold">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-brand-300">
                      {body}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <form onSubmit={submit} className="rounded-3xl bg-white p-6 text-slate-800 shadow-2xl sm:p-8 lg:col-span-3">
          <h3 className="text-2xl font-extrabold text-brand-950">Solicitar orçamento</h3>
          <p className="mt-1 text-sm text-slate-500">Ao enviar, abrimos o WhatsApp com a sua mensagem pronta.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold">Nome</span>
              <input required value={form.nome} onChange={set('nome')} className={field} placeholder="Seu nome ou empresa" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold">Cidade da obra</span>
              <input value={form.cidade} onChange={set('cidade')} className={field} placeholder="Ex.: Teresina" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold">Equipamento</span>
              <select value={form.equipamento} onChange={set('equipamento')} className={field}>
                <option value="">Selecione</option>
                {[...EQUIPMENT.map((e) => e.name), ...ALSO_AVAILABLE, 'Mais de um / não sei'].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold">Período</span>
              <input value={form.periodo} onChange={set('periodo')} className={field} placeholder="Ex.: 30 dias a partir de março" />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-semibold">Detalhes da obra</span>
              <textarea rows={4} value={form.mensagem} onChange={set('mensagem')} className={field} placeholder="Tipo de serviço, volume, prazo…" />
            </label>
          </div>

          <button type="submit" className="btn mt-6 w-full bg-[#25D366] py-4 text-base text-white hover:bg-[#1ebe5b]">
            <Send className="h-4 w-4" />
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

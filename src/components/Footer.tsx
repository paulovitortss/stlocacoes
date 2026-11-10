import { CONTACT, EQUIPMENT, instagramLink, whatsappLink } from '../config';
import { WhatsAppIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-brand-950 pb-24 pt-16 text-white/70 sm:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <img src="/media/logo.png" alt="ST Locações" width={272} height={54} className="logo-white h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Locação de máquinas pesadas de linha amarela e caminhões para obras de infraestrutura em todo o Piauí.
          </p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
            <WhatsAppIcon className="h-4 w-4" />
            {CONTACT.phoneLabel}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Equipamentos</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {EQUIPMENT.map((e) => (
              <li key={e.name}>
                <a href="#equipamentos" className="hover:text-white">
                  {e.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contato</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{CONTACT.phoneLabel}</li>
            <li className="break-all">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                @{CONTACT.instagram}
              </a>
            </li>
            <li>{CONTACT.region}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs sm:px-6 lg:px-8">
        © {new Date().getFullYear()} ST Locações. Todos os direitos reservados.
      </div>
    </footer>
  );
}

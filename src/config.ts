// Dados de contato e conteúdo central do site — altere aqui e o site inteiro acompanha.

export const CONTACT = {
  // Número que aparece nas artes novas do Instagram (86 98127-3757).
  whatsapp: '5586981273757',
  phoneLabel: '(86) 98127-3757',
  email: 'stengenharia.contato@gmail.com',
  instagram: 'st.locacoes',
  region: 'Piauí e Maranhão',
};

export const whatsappLink = (message = 'Olá! Vim pelo site e gostaria de solicitar um orçamento.') =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const instagramLink = `https://www.instagram.com/${CONTACT.instagram}/`;

export type Category = 'Terraplenagem' | 'Transporte de materiais' | 'Pavimentação';

export const CATEGORIES: Category[] = ['Terraplenagem', 'Transporte de materiais', 'Pavimentação'];

export interface Equipment {
  name: string;
  categories: Category[];
  image: string;
  /** Enquadramento da foto no card (CSS object-position) */
  position?: string;
  pitch: string;
  description: string;
}

export const EQUIPMENT: Equipment[] = [
  // Terraplenagem
  {
    name: 'Escavadeira hidráulica',
    categories: ['Terraplenagem'],
    image: '/media/eq-escavadeira.webp',
    position: 'center 55%',
    pitch: 'A máquina certa mantém sua obra avançando.',
    description: 'Escavação, carga de caminhões e movimentação de terra com mais produtividade e menos paradas.',
  },
  {
    name: 'Retroescavadeira',
    categories: ['Terraplenagem'],
    image: '/media/eq-retroescavadeira.webp',
    position: 'center 60%',
    pitch: 'Serviço parado é prejuízo.',
    description: 'Versátil para abertura de valas, carregamento e os serviços do dia a dia da obra.',
  },
  {
    name: 'Motoniveladora (patrol)',
    categories: ['Terraplenagem'],
    image: '/media/eq-patrol.jpg',
    pitch: 'Terreno irregular? A patrol coloca sua obra no nível.',
    description: 'Nivelamento, regularização do solo e abertura de vias com mais precisão e produtividade.',
  },
  {
    name: 'Trator de esteira',
    categories: ['Terraplenagem'],
    image: '/media/eq-trator-esteira.jpg',
    pitch: 'Força para preparar o terreno.',
    description: 'Desmatamento, espalhamento de material e corte de terreno em áreas de difícil acesso.',
  },
  {
    name: 'Trator agrícola com grade',
    categories: ['Terraplenagem'],
    image: '/media/eq-trator-agricola.webp',
    position: 'center 60%',
    pitch: 'Solo preparado para a próxima etapa.',
    description: 'Gradeamento e destorroamento do solo, limpeza de área e preparo do terreno antes da compactação.',
  },
  {
    name: 'Rolo compactador pé de carneiro',
    categories: ['Terraplenagem'],
    image: '/media/eq-rolo-pe-de-carneiro.webp',
    position: 'center 55%',
    pitch: 'Compactação profunda do solo.',
    description: 'Ideal para aterros e solos argilosos, garantindo base firme e uniforme para a obra.',
  },
  {
    name: 'Caminhão-pipa',
    categories: ['Terraplenagem', 'Pavimentação'],
    image: '/media/eq-pipa.webp',
    position: 'center 60%',
    pitch: 'Menos poeira. Mais produtividade na obra.',
    description:
      'Na terraplenagem, umedece o solo, auxilia a compactação e controla a poeira. Na pavimentação, prepara e umidifica as camadas de base e sub-base antes do asfalto.',
  },
  // Transporte de materiais
  {
    name: 'Caminhão basculante',
    categories: ['Transporte de materiais'],
    image: '/media/eq-basculante.jpg',
    pitch: 'Frota pronta para atender sua demanda.',
    description: 'Transporte de terra, brita e materiais com agilidade e eficiência, do corte ao bota-fora.',
  },
  // Pavimentação
  {
    name: 'Caminhão espargidor',
    categories: ['Pavimentação'],
    image: '/media/eq-espargidor.webp',
    position: 'center 55%',
    pitch: 'Imprimação e pintura de ligação.',
    description: 'Aplicação uniforme de emulsão asfáltica na base, preparando a pista para receber o revestimento.',
  },
  {
    name: 'Vibroacabadora',
    categories: ['Pavimentação'],
    image: '/media/eq-vibroacabadora.webp',
    position: 'center 60%',
    pitch: 'Mais produtividade na pavimentação.',
    description: 'Aplicação de asfalto com eficiência, melhor acabamento e agilidade no andamento da obra.',
  },
  {
    name: 'Rolo misto',
    categories: ['Pavimentação'],
    image: '/media/eq-rolo-misto.webp',
    position: 'center 60%',
    pitch: 'Terreno mais firme e uniforme.',
    description: 'Cilindro liso na frente e pneus atrás: compactação e acabamento do asfalto em uma só máquina.',
  },
  {
    name: 'Rolo de pneus',
    categories: ['Pavimentação'],
    image: '/media/eq-rolo-pneus.webp',
    position: 'center 60%',
    pitch: 'Acabamento selado e uniforme.',
    description: 'Compactação do revestimento asfáltico com pneus, fechando a superfície e melhorando a durabilidade.',
  },
];

export const ALSO_AVAILABLE = ['Pá carregadeira'];

export interface Reel {
  title: string;
  subtitle: string;
  video: string;
  poster: string;
}

export const REELS: Reel[] = [
  { title: 'Trator de esteira', subtitle: 'Espalhamento de material', video: '/media/reel-trator.mp4', poster: '/media/reel-trator.jpg' },
  { title: 'Frota de basculantes', subtitle: 'Pronta para o transporte', video: '/media/reel-basculantes.mp4', poster: '/media/reel-basculantes.jpg' },
  { title: 'Retroescavadeira', subtitle: 'Serviço parado é prejuízo', video: '/media/reel-retro.mp4', poster: '/media/reel-retro.jpg' },
  { title: 'O motivo do atraso', subtitle: 'Logística faz a diferença', video: '/media/reel-atraso.mp4', poster: '/media/reel-atraso.jpg' },
];


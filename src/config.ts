// Dados de contato e conteúdo central do site — altere aqui e o site inteiro acompanha.

export const CONTACT = {
  // Número que aparece nas artes novas do Instagram (86 98127-3757).
  whatsapp: '5586981273757',
  phoneLabel: '(86) 98127-3757',
  email: 'stengenharia.contato@gmail.com',
  instagram: 'st.locacoes',
  region: 'Teresina e todo o Piauí',
};

export const whatsappLink = (message = 'Olá! Vim pelo site e gostaria de solicitar um orçamento.') =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const instagramLink = `https://www.instagram.com/${CONTACT.instagram}/`;

export type Category = 'Terraplenagem' | 'Transporte' | 'Pavimentação';

export interface Equipment {
  name: string;
  category: Category;
  image: string;
  pitch: string;
  description: string;
}

export const EQUIPMENT: Equipment[] = [
  {
    name: 'Escavadeira hidráulica',
    category: 'Terraplenagem',
    image: '/media/eq-escavadeira.jpg',
    pitch: 'A máquina certa mantém sua obra avançando.',
    description: 'Escavação, carga de caminhões e movimentação de terra com mais produtividade e menos paradas.',
  },
  {
    name: 'Caminhão basculante',
    category: 'Transporte',
    image: '/media/eq-basculante.jpg',
    pitch: 'Frota pronta para atender sua demanda.',
    description: 'Transporte de terra, brita e materiais com agilidade e eficiência, do corte ao bota-fora.',
  },
  {
    name: 'Motoniveladora (patrol)',
    category: 'Terraplenagem',
    image: '/media/eq-patrol.jpg',
    pitch: 'Terreno irregular? A patrol coloca sua obra no nível.',
    description: 'Nivelamento, regularização do solo e abertura de vias com mais precisão e produtividade.',
  },
  {
    name: 'Trator de esteira',
    category: 'Terraplenagem',
    image: '/media/eq-trator-esteira.jpg',
    pitch: 'Força para preparar o terreno.',
    description: 'Desmatamento, espalhamento de material e corte de terreno em áreas de difícil acesso.',
  },
  {
    name: 'Retroescavadeira',
    category: 'Terraplenagem',
    image: '/media/eq-retroescavadeira.jpg',
    pitch: 'Serviço parado é prejuízo.',
    description: 'Versátil para abertura de valas, carregamento e os serviços do dia a dia da obra.',
  },
  {
    name: 'Caminhão-pipa',
    category: 'Transporte',
    image: '/media/eq-pipa.jpg',
    pitch: 'Menos poeira. Mais produtividade na obra.',
    description: 'Controle de poeira, umectação de base e apoio à compactação para uma operação mais eficiente.',
  },
  {
    name: 'Rolo compactador',
    category: 'Pavimentação',
    image: '/media/eq-rolo.jpg',
    pitch: 'Terreno mais firme e uniforme.',
    description: 'Mais qualidade na compactação de solo e asfalto, com suporte para diversos tipos de projeto.',
  },
  {
    name: 'Vibroacabadora',
    category: 'Pavimentação',
    image: '/media/eq-vibroacabadora.jpg',
    pitch: 'Mais produtividade na pavimentação.',
    description: 'Aplicação de asfalto com eficiência, melhor acabamento e agilidade no andamento da obra.',
  },
];

export const ALSO_AVAILABLE = ['Pá carregadeira', 'Rolo de pneus', 'Rolo misto'];

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


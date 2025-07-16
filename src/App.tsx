import React from 'react';
import { Phone, Mail, Instagram, MapPin, CheckCircle, Truck, Wrench, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="assets\ST_Locações_page-0001-removebg-preview.png" alt="" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-[#0898b7] transition-colors">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-[#0898b7] transition-colors">Sobre</a>
              <a href="#equipamentos" className="text-gray-700 hover:text-[#0898b7] transition-colors">Equipamentos</a>
              <a href="#cobertura" className="text-gray-700 hover:text-[#0898b7] transition-colors">Cobertura</a>
              <a href="#contato" className="text-gray-700 hover:text-[#0898b7] transition-colors">Contato</a>
            </div>
            <a 
              href="https://wa.me/5586994275737" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0898b7] text-white px-3 py-2 text-sm rounded-lg hover:bg-[#5bb0bf] transition-colors whitespace-nowrap"
            >
              Solicitar Orçamento
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-[#0898b7] to-[#5bb0bf] text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="relative min-h-screen flex items-center bg-cover bg-center"
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/496119890/de/foto/neue-road-construction.jpg?s=612x612&w=0&k=20&c=mCagF32iOGZUvdIOMxrh5Mv-oTuPdPBfx2m3Fz609b4=')"
          }}
        >
          <div className="absolute inset-0 bg-[#0898b7] opacity-85"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
              <div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Excelência em locação de Equipamentos e Caminhões
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-gray-100">
                  Locação de máquinas pesadas e caminhões basculantes para obras de infraestrutura em todo o Piauí
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#equipamentos"
                    className="bg-white text-[#0898b7] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Ver Equipamentos
                  </a>
                  <a 
                    href="https://wa.me/5586994275737" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0898b7] transition-colors text-center"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Quem Somos</h3>
            <p className="text-xl text-gray-600">Especialistas em locação de equipamentos pesados no Piauí</p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A ST Locações é uma empresa piauiense especializada na locação de máquinas pesadas de linha amarela e caminhões basculantes, com forte atuação em obras de infraestrutura, terraplenagem, pavimentação e mineração.
            </p>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Contamos com uma equipe técnica qualificada, equipamentos modernos e a flexibilidade para atender obras de pequeno, médio e grande porte em todo o estado do Piauí.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Wrench className="h-12 w-12 text-[#0898b7] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">Equipamentos Modernos</h4>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-[#0898b7] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">Suporte Rápido</h4>
              </div>
              <div className="text-center">
                <Truck className="h-12 w-12 text-[#0898b7] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">Logística Própria</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipamentos */}
      <section id="equipamentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossos Equipamentos</h3>
            <p className="text-xl text-gray-600">Frota completa para atender todas as necessidades da sua obra</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Escavadeiras Hidráulicas', 
                image: 'https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/99e9a6743d344b73a0478032df99c931?v=a2aad639',
                description: 'Equipamentos para escavação e movimentação de terra'
              },
              { 
                name: 'Pá Carregadeiras', 
                image: 'https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/112b84aa69174222bbda506f24da1d62?v=f5580358',
                description: 'Carregamento e transporte de materiais'
              },
              { 
                name: 'Retroescavadeiras', 
                image: 'https://www.brasifmaquinas.com.br/wp-content/uploads/2021/08/580N.png',
                description: 'Versatilidade em obras de pequeno e médio porte'
              },
              { 
                name: 'Motoniveladoras', 
                image: 'https://www.deere.com.br/assets/images/region-3/products/motor-graders/620g/620gxt_motor_grader_r4c011587_large_c8e616fe8c4c3e98ed6770f472acce4f91c9ae98.jpg',
                description: 'Nivelamento e acabamento de superfícies'
              },
              { 
                name: 'Caminhões Basculantes', 
                image: 'https://vrental.com.br/wp-content/uploads/2023/12/caminhao-Basculante.webp',
                description: 'Modelos 6x4 e 4x2 para transporte de materiais'
              },
              { 
                name: 'Rolo Compactador', 
                image: 'https://img.directindustry.com/pt/images_di/photo-mg/50713-17489409.jpg',
                description: 'Compactação de solos e pavimentação'
              }
            ].map((equipment, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#0898b7] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{equipment.name}</h4>
                  <p className="text-gray-600">{equipment.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Equipamentos Adicionais</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Tratores de Esteira',
                'Vibroacabadora',
                'Rolo de Pneus',
                'Rolo Misto'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#0898b7] mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section id="cobertura" className="py-20 bg-[#0898b7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Cobertura em Todo o Piauí</h3>
            <p className="text-xl text-blue-100">Atendemos com agilidade e compromisso em todas as regiões</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-[#5bb0bf] mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-3">Teresina</h4>
              <p className="text-blue-100">Atendimento prioritário na capital com equipe local</p>
            </div>
            <div className="text-center">
              <Truck className="h-16 w-16 text-[#5bb0bf] mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-3">Logística Própria</h4>
              <p className="text-blue-100">Transporte dos equipamentos com frota própria</p>
            </div>
            <div className="text-center">
              <Wrench className="h-16 w-16 text-[#5bb0bf] mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-3">Suporte Técnico</h4>
              <p className="text-blue-100">Manutenção e suporte rápido em todo o estado</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h4 className="text-2xl font-bold mb-6">Atendemos Obras de Todos os Portes</h4>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                'Infraestrutura',
                'Terraplenagem',
                'Pavimentação',
                'Mineração'
              ].map((area, index) => (
                <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                  <h5 className="font-semibold">{area}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h3>
            <p className="text-xl text-gray-600">Solicite seu orçamento e tire suas dúvidas</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-center">
                  <Phone className="h-8 w-8 text-[#0898b7] mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone / WhatsApp</h4>
                    <p className="text-gray-600">(86) 99427-5737</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-8 w-8 text-[#0898b7] mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">stengenharia.contato@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Instagram className="h-8 w-8 text-[#0898b7] mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Instagram</h4>
                    <p className="text-gray-600">@st.locacoes</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <a 
                  href="https://wa.me/5586994275737" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0898b7] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#5bb0bf] transition-colors inline-flex items-center gap-3"
                >
                  <Phone className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Orçamento</h4>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0898b7] focus:border-[#0898b7] outline-none"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0898b7] focus:border-[#0898b7] outline-none"
                    placeholder="(86) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Equipamento de Interesse</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0898b7] focus:border-[#0898b7] outline-none">
                    <option>Selecione um equipamento</option>
                    <option>Escavadeira Hidráulica</option>
                    <option>Pá Carregadeira</option>
                    <option>Retroescavadeira</option>
                    <option>Caminhão Basculante</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#0898b7] focus:border-[#0898b7] outline-none"
                    placeholder="Descreva sua necessidade..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#0898b7] text-white py-3 rounded-lg font-semibold hover:bg-[#5bb0bf] transition-colors"
                >
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Truck className="h-8 w-8 text-[#0898b7] mr-3" />
                <h4 className="text-2xl font-bold">ST Locações</h4>
              </div>
              <p className="text-gray-400">
                Especializada em locação de equipamentos de linha amarela e caminhões basculantes no Piauí.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Equipamentos</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Escavadeiras Hidráulicas</li>
                <li>Pá Carregadeiras</li>
                <li>Retroescavadeiras</li>
                <li>Caminhões Basculantes</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Serviços</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Infraestrutura</li>
                <li>Terraplenagem</li>
                <li>Pavimentação</li>
                <li>Mineração</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <div className="space-y-2 text-gray-400">
                <p>(86) 99427-5737</p>
                <p>stengenharia.contato@gmail.com</p>
                <p>@st.locacoes</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ST Locações. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
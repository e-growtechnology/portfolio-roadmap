import React, { useState } from 'react';
import { CheckCircle, Circle, Search, FileText, Smartphone, Code, Globe, Rocket, ChevronDown, ChevronUp } from 'lucide-react';

interface RoadmapItem {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  date: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
}

const RoadmapInterativo: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const roadmapItems: RoadmapItem[] = [
    {
      id: 1,
      title: "Descoberta & Pesquisa",
      description: "Análise competitiva, pesquisa com usuários e definição do público-alvo para a rede social de portfólios profissionais.",
      status: 'planned',
      date: 'Semanas 1-4',
      icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'bg-blue-500',
      details: [
        "Análise competitiva (Behance, Dribbble, LinkedIn)",
        "Pesquisa com usuários potenciais (15-20 entrevistas)",
        "Definição do público-alvo e nichos prioritários",
        "Benchmark de funcionalidades essenciais"
      ]
    },
    {
      id: 2,
      title: "Estratégia & Planejamento",
      description: "Definição da proposta de valor única, mapeamento de funcionalidades do MVP e criação dos wireframes iniciais.",
      status: 'planned',
      date: 'Semanas 5-8',
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'bg-purple-500',
      details: [
        "Definição da proposta de valor única (UVP)",
        "Mapeamento de funcionalidades do MVP",
        "Wireframes de baixa fidelidade das telas principais",
        "Estratégia de go-to-market inicial"
      ]
    },
    {
      id: 3,
      title: "Design & Prototipagem",
      description: "Criação da identidade visual, design system e protótipos de alta fidelidade com foco mobile-first.",
      status: 'planned',
      date: 'Semanas 9-12',
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'bg-green-500',
      details: [
        "Identidade visual e branding da plataforma",
        "Design system e biblioteca de componentes",
        "Protótipos de alta fidelidade (mobile-first)",
        "Testes de usabilidade com protótipo"
      ]
    },
    {
      id: 4,
      title: "Definição Técnica",
      description: "Escolha da stack tecnológica, arquitetura do sistema e planejamento dos sprints de desenvolvimento.",
      status: 'planned',
      date: 'Semanas 13-16',
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'bg-orange-500',
      details: [
        "Escolha da stack tecnológica (Front, Back, DB)",
        "Arquitetura do sistema e infraestrutura",
        "Planejamento de sprints de desenvolvimento",
        "Definição de APIs e integrações necessárias"
      ]
    },
    {
      id: 5,
      title: "Desenvolvimento MVP",
      description: "Implementação das funcionalidades core: perfis, upload de projetos, feed de descoberta e sistema de interação.",
      status: 'planned',
      date: 'Semanas 17-20',
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'bg-red-500',
      details: [
        "Sistema de autenticação e perfis de usuário",
        "Upload e gerenciamento de projetos",
        "Feed de portfólios e sistema de interação",
        "Testes automatizados e QA"
      ]
    },
    {
      id: 6,
      title: "Preparação & Lançamento",
      description: "Testes beta, ajustes baseados no feedback, setup de analytics e lançamento oficial da plataforma.",
      status: 'planned',
      date: 'Semanas 21-24',
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: 'bg-indigo-500',
      details: [
        "Testes beta com usuários selecionados",
        "Ajustes baseados no feedback do beta",
        "Setup de analytics e métricas de sucesso",
        "Lançamento oficial e monitoramento"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />;
      case 'in-progress':
        return <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 animate-pulse" />;
      default:
        return <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Concluído';
      case 'in-progress':
        return 'Em Progresso';
      default:
        return 'Planejado';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-3 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent px-2">
            Rede Social de Portfólios
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Roadmap completo para desenvolvimento da plataforma em 6 meses
          </p>
        </div>

        {/* Indicação de interatividade para mobile */}
        <div className="sm:hidden mt-6 text-center">
          <p className="text-xs text-gray-400 my-auto py-4">
            Toque nos cards para ver mais detalhes das tarefas
          </p>
        </div>

        <div className="relative">
          {/* Linha vertical do roadmap - oculta em mobile muito pequeno */}
          <div className="hidden sm:block absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 lg:w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {roadmapItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative transition-all duration-300 ${
                  selectedItem === item.id ? 'transform scale-[1.02]' : ''
                }`}
              >
                {/* Layout para mobile */}
                <div className="sm:hidden">
                  <div
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transition-all duration-300 ${
                      selectedItem === item.id ? 'bg-white/20 border-purple-400' : 'active:bg-white/15'
                    }`}
                    onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                  >
                    <div className="flex items-start space-x-3 mb-3">
                      <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full ${item.color} shadow-lg`}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-semibold text-white truncate pr-2">{item.title}</h3>
                          {selectedItem === item.id ? 
                            <ChevronUp className="w-5 h-5 text-gray-300 flex-shrink-0" /> : 
                            <ChevronDown className="w-5 h-5 text-gray-300 flex-shrink-0" />
                          }
                        </div>
                        
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-400">{item.date}</span>
                          {getStatusIcon(item.status)}
                        </div>

                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                          item.status === 'in-progress' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {getStatusText(item.status)}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {selectedItem === item.id && (
                      <div className="mt-3 p-3 bg-white/5 rounded-lg border border-white/10">
                        <h4 className="text-xs font-medium text-purple-300 mb-2">Principais Tarefas:</h4>
                        <ul className="space-y-1.5">
                          {item.details.map((detail, index) => (
                            <li key={index} className="text-xs text-gray-400 flex items-start">
                              <span className="text-purple-400 mr-2 mt-0.5">•</span>
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Layout para desktop */}
                <div 
                  className="hidden sm:flex items-start cursor-pointer"
                  onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                >
                  {/* Ícone do item */}
                  <div className={`relative z-10 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full ${item.color} shadow-lg flex-shrink-0`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>

                  {/* Conteúdo do item */}
                  <div className="ml-6 lg:ml-8 flex-1">
                    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 transition-all duration-300 ${
                      selectedItem === item.id ? 'bg-white/20 border-purple-400' : 'hover:bg-white/15'
                    }`}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg lg:text-xl font-semibold text-white">{item.title}</h3>
                        <div className="flex items-center space-x-3">
                          <span className="text-xs lg:text-sm text-gray-300">{item.date}</span>
                          {getStatusIcon(item.status)}
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                          item.status === 'in-progress' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {getStatusText(item.status)}
                        </span>
                      </div>

                      <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                        {item.description}
                      </p>

                      {selectedItem === item.id && (
                        <div className="mt-4 p-3 lg:p-4 bg-white/5 rounded-lg border border-white/10">
                          <h4 className="text-sm font-medium text-purple-300 mb-3">Principais Tarefas:</h4>
                          <ul className="space-y-2">
                            {item.details.map((detail, index) => (
                              <li key={index} className="text-sm text-gray-400 flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estatísticas - Grid responsivo */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-xs sm:text-sm">Concluído</p>
                <p className="text-xl sm:text-2xl font-bold text-green-400">0/6</p>
              </div>
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-xs sm:text-sm">Em Progresso</p>
                <p className="text-xl sm:text-2xl font-bold text-blue-400">0/6</p>
              </div>
              <Circle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 animate-pulse" />
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-xs sm:text-sm">Planejado</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-400">6/6</p>
              </div>
              <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            Desenvolvido por Maria Degan - 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapInterativo;
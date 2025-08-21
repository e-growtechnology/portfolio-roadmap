import React, { useState } from 'react';
import { CheckCircle, Circle, Search, FileText, Smartphone, Code, Globe, Rocket } from 'lucide-react';

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
      icon: <Search className="w-6 h-6" />,
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
      icon: <FileText className="w-6 h-6" />,
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
      icon: <Smartphone className="w-6 h-6" />,
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
      icon: <Code className="w-6 h-6" />,
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
      icon: <Globe className="w-6 h-6" />,
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
      icon: <Rocket className="w-6 h-6" />,
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
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Circle className="w-5 h-5 text-blue-500 animate-pulse" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Rede Social de Portfólios
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Roadmap completo para desenvolvimento da plataforma - "Portfólio" em 6 meses
          </p>
        </div>

        <div className="relative">
          {/* Linha vertical do roadmap */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-start cursor-pointer transition-all duration-300 ${
                  selectedItem === item.id ? 'transform scale-105' : ''
                }`}
                onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
              >
                {/* Ícone do item */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${item.color} shadow-lg`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>

                {/* Conteúdo do item */}
                <div className="ml-8 flex-1">
                  <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all duration-300 ${
                    selectedItem === item.id ? 'bg-white/20 border-purple-400' : 'hover:bg-white/15'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-300">{item.date}</span>
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

                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>

                    {selectedItem === item.id && (
                      <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
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
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Concluído</p>
                <p className="text-2xl font-bold text-green-400">2/6</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Em Progresso</p>
                <p className="text-2xl font-bold text-blue-400">1/6</p>
              </div>
              <Circle className="w-8 h-8 text-blue-400 animate-pulse" />
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Planejado</p>
                <p className="text-2xl font-bold text-gray-400">3/6</p>
              </div>
              <Rocket className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapInterativo;


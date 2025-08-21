import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Clock, User, Code, Rocket, Search, FileText, Smartphone, Globe } from 'lucide-react';

const Roadmap = () => {
  const [completedTasks, setCompletedTasks] = useState(new Set());

  const toggleTask = (taskId) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const phases = [
    {
      phase: "Fase 1: Descoberta & Pesquisa",
      duration: "Semanas 1-4",
      color: "bg-blue-500",
      icon: <Search className="w-5 h-5" />,
      tasks: [
        { id: 1, task: "Análise competitiva (Behance, Dribbble, LinkedIn)", deliverable: "Relatório comparativo" },
        { id: 2, task: "Pesquisa com usuários potenciais (15-20 entrevistas)", deliverable: "Personas & User Journey" },
        { id: 3, task: "Definição do público-alvo e nichos prioritários", deliverable: "Segmentação de usuários" },
        { id: 4, task: "Benchmark de funcionalidades essenciais", deliverable: "Feature Matrix" },
        { id: 5, task: "Análise de monetização e modelo de negócio", deliverable: "Business Model Canvas" }
      ]
    },
    {
      phase: "Fase 2: Estratégia & Planejamento",
      duration: "Semanas 5-8",
      color: "bg-purple-500",
      icon: <FileText className="w-5 h-5" />,
      tasks: [
        { id: 6, task: "Definição da proposta de valor única (UVP)", deliverable: "Value Proposition Canvas" },
        { id: 7, task: "Mapeamento de funcionalidades do MVP", deliverable: "Product Backlog priorizado" },
        { id: 8, task: "Wireframes de baixa fidelidade das telas principais", deliverable: "Wireframes & User Flow" },
        { id: 9, task: "Definição da arquitetura de informação", deliverable: "Sitemap & Taxonomia" },
        { id: 10, task: "Estratégia de go-to-market inicial", deliverable: "Plano de lançamento" }
      ]
    },
    {
      phase: "Fase 3: Design & Prototipagem",
      duration: "Semanas 9-12",
      color: "bg-green-500",
      icon: <Smartphone className="w-5 h-5" />,
      tasks: [
        { id: 11, task: "Identidade visual e branding da plataforma", deliverable: "Brand Guidelines" },
        { id: 12, task: "Design system e biblioteca de componentes", deliverable: "UI Kit & Style Guide" },
        { id: 13, task: "Protótipos de alta fidelidade (mobile-first)", deliverable: "Protótipo interativo" },
        { id: 14, task: "Testes de usabilidade com protótipo", deliverable: "Relatório de UX testing" },
        { id: 15, task: "Refinamento do design baseado nos testes", deliverable: "Design final validado" }
      ]
    },
    {
      phase: "Fase 4: Definição Técnica",
      duration: "Semanas 13-16",
      color: "bg-orange-500",
      icon: <Code className="w-5 h-5" />,
      tasks: [
        { id: 16, task: "Escolha da stack tecnológica (Front, Back, DB)", deliverable: "Tech Stack definida" },
        { id: 17, task: "Arquitetura do sistema e infraestrutura", deliverable: "Documento de arquitetura" },
        { id: 18, task: "Planejamento de sprints de desenvolvimento", deliverable: "Sprint Planning" },
        { id: 19, task: "Setup do ambiente de desenvolvimento", deliverable: "Dev Environment pronto" },
        { id: 20, task: "Definição de APIs e integrações necessárias", deliverable: "API Documentation" }
      ]
    },
    {
      phase: "Fase 5: Desenvolvimento MVP",
      duration: "Semanas 17-20",
      color: "bg-red-500",
      icon: <Globe className="w-5 h-5" />,
      tasks: [
        { id: 21, task: "Desenvolvimento das funcionalidades core", deliverable: "Features principais" },
        { id: 22, task: "Sistema de autenticação e perfis de usuário", deliverable: "Auth & User Management" },
        { id: 23, task: "Feed de portfólios e sistema de interação", deliverable: "Core Social Features" },
        { id: 24, task: "Upload e gerenciamento de projetos", deliverable: "Portfolio Management" },
        { id: 25, task: "Testes automatizados e QA", deliverable: "Test Suite & Bug fixes" }
      ]
    },
    {
      phase: "Fase 6: Preparação & Lançamento",
      duration: "Semanas 21-24",
      color: "bg-indigo-500",
      icon: <Rocket className="w-5 h-5" />,
      tasks: [
        { id: 26, task: "Testes beta com usuários selecionados", deliverable: "Beta testing results" },
        { id: 27, task: "Ajustes baseados no feedback do beta", deliverable: "Produto otimizado" },
        { id: 28, task: "Setup de analytics e métricas de sucesso", deliverable: "Analytics dashboard" },
        { id: 29, task: "Preparação do marketing de lançamento", deliverable: "Campanha de lançamento" },
        { id: 30, task: "Lançamento oficial e monitoramento", deliverable: "Produto no ar!" }
      ]
    }
  ];

  const completionRate = Math.round((completedTasks.size / 30) * 100);

  return (
    <>
      <Head>
        <title>Roadmap - Rede Social de Portfólios</title>
        <meta name="description" content="Roadmap completo para desenvolvimento de rede social de portfólios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            🚀 Roadmap: Rede Social de Portfólios
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Da ideação ao lançamento em 6 meses - Seu "Instagram profissional"
          </p>
          
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Progresso Geral</h3>
                <p className="text-blue-100">Acompanhe sua evolução</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{completionRate}%</div>
                <div className="text-sm">{completedTasks.size}/30 tarefas</div>
              </div>
            </div>
            <div className="w-full bg-blue-300 rounded-full h-3 mt-4">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-300"
                style={{ width: `${completionRate}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`${phase.color} text-white p-6`}>
                <div className="flex items-center gap-3">
                  {phase.icon}
                  <div>
                    <h2 className="text-xl font-bold">{phase.phase}</h2>
                    <p className="opacity-90">{phase.duration}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {phase.tasks.map((item) => (
                    <div 
                      key={item.id}
                      className={`flex items-start gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        completedTasks.has(item.id) 
                          ? 'border-green-300 bg-green-50' 
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => toggleTask(item.id)}
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        completedTasks.has(item.id)
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-300'
                      }`}>
                        {completedTasks.has(item.id) && <Check className="w-4 h-4 text-white" />}
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className={`font-medium ${completedTasks.has(item.id) ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                          {item.task}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          <strong>Entregável:</strong> {item.deliverable}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Funcionalidades Principais do MVP</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Core Features</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Perfis profissionais personalizáveis</li>
                <li>• Upload de projetos com múltiplas mídias</li>
                <li>• Feed algorítmico de descoberta</li>
                <li>• Sistema de likes e comentários</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Diferenciais</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Filtros por categoria profissional</li>
                <li>• Sistema de avaliações de qualidade</li>
                <li>• Ferramentas de networking</li>
                <li>• Integração com plataformas de freelance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 mt-8">
          <h3 className="text-xl font-bold mb-2">🎯 Próximos Passos</h3>
          <p className="mb-4">Comece pela Fase 1 - Descoberta & Pesquisa. É fundamental entender bem seu mercado antes de construir!</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Análise Competitiva</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Entrevistas de Usuário</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Definição de Personas</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
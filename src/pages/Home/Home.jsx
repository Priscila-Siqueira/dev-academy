// Aqui eu estou importando o hook useState do React para gerenciar o estado local
// e também importando os meus componentes de interface (cards e layout) que vou montar na tela
import { useState } from 'react'
import { CourseCard } from '../../components/layout/CourseCard/CourseCard'
import { PathCard } from '../../components/layout/PathCard/PathCard'
import { StatCard } from '../../components/layout/StatCard/StatCard'
import { Header } from '../../components/layout/Header/Header'
import { Sidebar } from '../../components/layout/Sidebar/Sidebar'

// Aqui eu defino o componente da minha página inicial
// Ele recebe a prop 'onNavigate', que eu vou usar para fazer o roteamento/navegação manual
export function Home({ onNavigate }) {
  
  // Aqui eu crio um estado chamado 'sidebarOpen' para controlar a visibilidade do meu menu lateral (Sidebar)
  // Ele começa como 'false' para que o menu inicie fechado
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background lg:flex">
      
      {/* Aqui eu chamo a minha Sidebar. Passo o valor do meu estado (sidebarOpen) para ela saber se deve aparecer ou não 
          Também passo uma função no 'onClose' para que, quando o usuário quiser fechar o menu
          eu atualize o meu estado de volta para 'false' */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-h-screen flex-1 flex-col">
        
        {/* Aqui eu renderizo o cabeçalho
            No 'onMenuClick', eu mudo o meu estado da sidebar para 'true', fazendo ela abrir
            No 'onLogout', eu uso aquela prop que recebi lá em cima (onNavigate) para redirecionar o usuário para a tela de 'login' */}
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          onLogout={() => onNavigate('login')}
        />

        <main className="flex-1 p-4 lg:p-8">
          
          {/* Esta é a minha seção de boas-vindas, um banner de destaque para o usuário */}
          <section className="mb-8 rounded-3xl bg-primary p-6 text-white shadow-lg lg:p-8">
            <p className="text-sm font-medium text-white/80">Bem-vindo de volta</p>
            <h2 className="mt-2 text-3xl font-bold">Continue sua evolução em tecnologia</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/80">
              Acompanhe cursos, trilhas, certificados e progresso acadêmico em um único painel.
            </p>
          </section>

          {/* Aqui eu criei uma grade (grid) para mostrar meus cards de estatísticas rápidas do usuário */}
          <section className="grid gap-4 md:grid-cols-3">
            <StatCard title="Cursos ativos" value="8" description="2 novos esta semana" />
            <StatCard title="Progresso médio" value="74%" description="Ritmo acima da média" />
            <StatCard title="Certificados" value="5" description="Emitidos no semestre" />
          </section>

          {/* Esta seção final é dividida em duas colunas (em telas maiores): 
              a esquerda para os cursos em andamento e a direita para as trilhas */}
          <section className="mt-8 grid gap-6 xl:grid-cols-[2fr_1fr]">
            
            {/* Bloco dos meus cursos que estão em andamento */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-text-main">Cursos em andamento</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <CourseCard
                  title="React Fundamentos"
                  description="Componentes, props, estado e renderização."
                  level="Iniciante"
                  progress={82}
                />

                <CourseCard
                  title="JavaScript Moderno"
                  description="ES Modules, arrays, objetos e boas práticas."
                  level="Intermediário"
                  progress={65}
                />
              </div>
            </div>

            {/* Bloco das trilhas que eu recomendo para o usuário continuar os estudos */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-text-main">Trilha recomendada</h2>

              <PathCard title="Front-end Developer" courses="12" duration="48h" />
            </div>
            
          </section>
        </main>
      </div>
    </div>
  )
}
import React, { useState } from 'react';
import WhatsAppButton from './components/WhatsAppButton';
import { CodeIcon, LayoutIcon, DatabaseIcon, SmartphoneIcon, XIcon } from './components/Icons';
import { Project, Service } from './types';

// Data Mock
const services: Service[] = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description: "Sites modernos, rápidos e responsivos utilizando React, Next.js e Tailwind CSS.",
    icon: <LayoutIcon className="w-8 h-8 text-cyan-400" />
  },
  {
    id: 2,
    title: "Sistemas Personalizados",
    description: "Softwares sob medida para gestão de empresas, CRMs e ERPs.",
    icon: <CodeIcon className="w-8 h-8 text-emerald-400" />
  },
  {
    id: 3,
    title: "Apps Mobile",
    description: "Aplicativos para Android e iOS com ótima experiência de usuário.",
    icon: <SmartphoneIcon className="w-8 h-8 text-purple-400" />
  },
  {
    id: 4,
    title: "Integração de APIs",
    description: "Conexão entre sistemas, automações e criação de APIs robustas.",
    icon: <DatabaseIcon className="w-8 h-8 text-amber-400" />
  }
];

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Premium",
    description: "Plataforma completa de vendas com painel administrativo e gateway de pagamento.",
    tags: ["React", "Node.js", "Stripe"],
    imageUrl: "https://images.tcdn.com.br/static_inst/meiosdepagamento/wp-content/uploads/2021/07/opencommerces.jpg"
  },
  {
    id: 2,
    title: "Dashboard Financeiro",
    description: "Sistema de controle financeiro com gráficos interativos e relatórios em tempo real.",
    tags: ["TypeScript", "Recharts", "Tailwind"],
    imageUrl: "https://xperiun.com/wp-content/uploads/2023/05/DASHBOARD_FINANCEIRO-1-1024x575.png"
  },
  {
    id: 3,
    title: "Landing Page SaaS",
    description: "Página de alta conversão otimizada para SEO e performance.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    imageUrl: "https://saaslandingpage.com/wp-content/uploads/2023/12/Link-Share-Img@2x.png"
  }
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsAppLink = (text: string) => {
    const phoneNumber = "5513988460017";
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 relative overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full z-30 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 font-bold text-2xl tracking-tighter text-white">
              Lucas <span className="text-cyan-500">Devs</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Início</a>
                <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Serviços</a>
                <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Projetos</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Contato</a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Abrir menu</span>
                {isMobileMenuOpen ? (
                  <XIcon className="block h-6 w-6" />
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 absolute w-full left-0 top-20 shadow-2xl z-40">
            <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-cyan-400 hover:bg-slate-800/50 block px-3 py-3 rounded-xl text-lg font-medium w-full text-center transition-colors">Início</a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-cyan-400 hover:bg-slate-800/50 block px-3 py-3 rounded-xl text-lg font-medium w-full text-center transition-colors">Serviços</a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-cyan-400 hover:bg-slate-800/50 block px-3 py-3 rounded-xl text-lg font-medium w-full text-center transition-colors">Projetos</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="bg-cyan-600 text-white font-bold hover:bg-cyan-500 block px-3 py-3 rounded-xl text-lg w-full text-center mt-4 transition-colors">Contato</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 lg:pt-48 lg:pb-32 px-4 relative flex flex-col items-center">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Transformando ideias em <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 block mt-2 md:mt-0">
              Sistemas Digitais
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 mb-10 px-2">
            Olá, sou o Lucas. Especialista em desenvolvimento de software de alta performance. 
            Crio soluções tecnológicas que impulsionam o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-sm sm:max-w-none mx-auto">
            <a 
              href={getWhatsAppLink("Olá Lucas, gostaria de fazer um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              Fazer Orçamento
            </a>
            <a 
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')} 
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3.5 px-8 rounded-full border border-slate-700 transition-all w-full sm:w-auto text-center"
            >
              Ver Portfólio
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Meus Serviços</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-400 text-sm md:text-base">Soluções completas para suas necessidades digitais</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:bg-slate-800 group">
                <div className="mb-4 bg-slate-900 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Projetos Recentes</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-400 text-sm md:text-base">Conheça um pouco do meu trabalho</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all group shadow-xl flex flex-col">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>
                  <a 
                    href={getWhatsAppLink(`Olá Lucas, vi o projeto "${project.title}" no seu portfólio e gostaria de saber mais.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 text-sm font-semibold hover:text-emerald-300 flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer mt-auto py-2"
                  >
                    Ver Detalhes <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Pronto para iniciar seu projeto?</h2>
          <p className="text-base md:text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como a tecnologia pode transformar seu negócio. 
            Entre em contato agora mesmo para uma consultoria gratuita.
          </p>
          <div className="bg-slate-800/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-slate-700 inline-block shadow-2xl w-full md:w-auto">
            <a 
              href={getWhatsAppLink("Olá Lucas, quero iniciar um projeto!")}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-900/20 w-full md:w-auto"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-8.683-2.03-9.667-.272-.099-.47-.149-.669-.149-.198 0-.42.001-.643.001-.223 0-.583.085-.89.421-.306.336-1.166 1.139-1.166 2.776 0 1.638 1.189 3.221 1.354 3.443.165.222 2.341 3.575 5.672 5.014 2.215.957 2.667.766 3.138.718.47-.048 1.511-.617 1.724-1.213.212-.595.212-1.104.148-1.213.074-.124.272-.198.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Lucas Devs. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Persistent Components */}
      <WhatsAppButton />
      
    </div>
  );
}

export default App;
import React from 'react';
import { Music, Wrench, Phone, MapPin, Clock, MessageCircle, ChevronDown, Guitar, Speaker, Tv, Microwave, GraduationCap, Mic, Piano, PlusCircle } from 'lucide-react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Megatom Music</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-600 transition-colors">Início</Link>
            <Link to="/aulas" className="hover:text-blue-600 transition-colors">Aulas de Música</Link>
            <a href="#servicos" className="hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Seu Instrumento em Boas Mãos
            </h1>
            <p className="text-xl mb-8 animate-fade-in-delay">
              Especialistas em reparos de instrumentos musicais e equipamentos de áudio
            </p>
            <a href="#contato" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
              Agende um Reparo
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800"
              alt="Oficina de Instrumentos"
              className="rounded-lg shadow-xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  const services = [
    { icon: Guitar, title: 'Instrumentos Musicais', desc: 'Reparos e manutenção de todos os tipos de instrumentos' },
    { icon: Speaker, title: 'Equipamentos de Áudio', desc: 'Conserto de caixas de som e mesas de som' },
    { icon: Tv, title: 'Televisores', desc: 'Reparos em TVs de todas as marcas' },
    { icon: Microwave, title: 'Microondas', desc: 'Conserto e manutenção de microondas' },
  ];

  const repairExamples = [
    {
      title: "Restauração de Violão",
      image: "https://images.unsplash.com/photo-1556449895-a33c9dba33dd?auto=format&fit=crop&w=800",
      description: "Realizamos a troca de trastes, regulagem completa do braço, ajuste de ação das cordas e recuperação de marchetaria. Seu violão voltará a tocar como novo!"
    },
    {
      title: "Reparo de Caixa Amplificada",
      image: "https://images.unsplash.com/photo-1558583055-d7ac93676f99?auto=format&fit=crop&w=800",
      description: "Conserto de placas amplificadoras, substituição de alto-falantes danificados e reparo em conexões. Devolvemos a potência original ao seu equipamento."
    },
    {
      title: "Manutenção de Mesa de Som",
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=800",
      description: "Limpeza de potenciômetros, reparo de faders, correção de mau contato e calibração dos canais. Garantimos o funcionamento perfeito do seu equipamento."
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">Exemplos de Reparos</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {repairExamples.map((example, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={example.image} alt={example.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">{example.title}</h4>
                <p className="text-gray-600">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <p>Rua Coronel Francisco Soares 70, Centro - Nova Iguaçu, RJ</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <p>+55 21 98795-0493</p>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="w-6 h-6 text-blue-600" />
              <p>Segunda à Sábado: 9h às 18h</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.8990926040137!2d-43.45161682375576!3d-22.75914377934012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9966b6e07b7e3f%3A0x6c2c1b4e0dd6b0a8!2sR.%20Cel.%20Francisco%20Soares%2C%2070%20-%20Centro%2C%20Nova%20Igua%C3%A7u%20-%20RJ!5e0!3m2!1sen!2sbr!4v1709901234567!5m2!1sen!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function MusicLessons() {
  const benefits = [
    'Desenvolvimento cognitivo e criativo',
    'Melhora da coordenação motora',
    'Aumento da concentração',
    'Redução do estresse',
    'Socialização através da música'
  ];

  const lessons = [
    {
      title: "Aulas de Canto",
      icon: Mic,
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800",
      description: "Desenvolva sua voz com técnicas profissionais. Aprenda respiração, projeção vocal, afinação e interpretação."
    },
    {
      title: "Aulas de Teclado",
      icon: Piano,
      image: "https://images.unsplash.com/photo-1552056776-9b8a42a9dd1c?auto=format&fit=crop&w=800",
      description: "Do básico ao avançado: teoria musical, técnica, harmonia e repertório variado."
    },
    {
      title: "Aulas de Violão",
      icon: Guitar,
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800",
      description: "Aprenda violão do zero: acordes, ritmos, dedilhado e música popular brasileira."
    },
    {
      title: "Aulas de Guitarra",
      icon: Guitar,
      image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800",
      description: "Técnicas de guitarra para todos os estilos: rock, blues, jazz e muito mais."
    }
  ];

  return (
    <div className="pt-24">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="container mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Aulas de Música</h1>
          <p className="text-xl mb-8">Descubra o músico que existe em você</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Por que estudar música?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Music className="w-5 h-5 text-blue-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&w=800"
                alt="Aulas de Música"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Aulas</h2>
          <div className="space-y-8">
            {lessons.map((lesson, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={lesson.image} 
                      alt={lesson.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <lesson.icon className="w-8 h-8 text-blue-600" />
                      <h3 className="text-2xl font-bold">{lesson.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg">{lesson.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center mt-8">
              <div className="inline-flex items-center space-x-2 text-blue-600 text-lg font-semibold">
                <PlusCircle className="w-6 h-6" />
                <span>E muito mais! Entre em contato para saber sobre outros instrumentos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Informações das Aulas</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-semibold">Duração da Aula</span>
                <span>1 hora</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-semibold">Frequência</span>
                <span>1 vez por semana</span>
              </div>
              <div className="flex items-center justify-between border-b pb-4">
                <span className="font-semibold">Modalidade</span>
                <span>Aulas individuais</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Valor Mensal</span>
                <span className="text-2xl font-bold text-blue-600">R$ 170,00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ServicesSection />
              <ContactSection />
            </>
          } />
          <Route path="/aulas" element={<MusicLessons />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
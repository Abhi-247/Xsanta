import React, { useState, useEffect } from 'react';
import { Code, Zap, Shield, Users, CheckCircle, ArrowRight, ChevronRight, Star, Layers, Globe, Database, Server, Monitor } from 'lucide-react';

export default function FullStack() {
  const [, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [typedText, setTypedText] = useState('');
  const fullText = 'npm run build';

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) { setTypedText(fullText.slice(0, i + 1)); i++; }
      else { clearInterval(timer); }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: <Globe className="w-12 h-12" />, title: "Frontend Development", description: "Build responsive, interactive user interfaces with React, Vue, Angular and modern CSS frameworks for exceptional UX." },
    { icon: <Layers className="w-12 h-12" />, title: "Backend Development", description: "Develop robust server-side applications with Node.js, Python, Java, and scalable database architectures." },
    { icon: "🔗", title: "API Integration", description: "Create and integrate RESTful and GraphQL APIs to connect frontend, backend, and third-party services seamlessly." },
    { icon: <Code className="w-12 h-12" />, title: "DevOps & Deployment", description: "Implement CI/CD pipelines, cloud infrastructure, monitoring, and automated deployment workflows." }
  ];

  const technologies = [
    { icon: "⚛️", name: "React", type: "Frontend" },
    { icon: "🟢", name: "Node.js", type: "Backend" },
    { icon: "🐍", name: "Python", type: "Backend" },
    { icon: "🎨", name: "TypeScript", type: "Language" },
    { icon: "🍃", name: "MongoDB", type: "Database" },
    { icon: "🐘", name: "PostgreSQL", type: "Database" },
    { icon: "🐳", name: "Docker", type: "DevOps" },
    { icon: "☁️", name: "AWS/Azure", type: "Cloud" }
  ];

  const process = [
    { number: "01", title: "Discovery & Planning", description: "Understand requirements, define tech stack, and create comprehensive architecture for frontend and backend." },
    { number: "02", title: "UI/UX & Database Design", description: "Design intuitive interfaces and efficient database schemas that support business logic." },
    { number: "03", title: "Full Stack Development", description: "Build frontend and backend simultaneously with continuous integration and testing throughout." },
    { number: "04", title: "Deploy & Scale", description: "Launch with cloud infrastructure, monitoring, and optimization for performance and growth." }
  ];

  const features = [
    { icon: <Zap className="w-8 h-8" />, title: "End-to-End Solutions", description: "Complete application development from database to user interface" },
    { icon: <Shield className="w-8 h-8" />, title: "Scalable Architecture", description: "Built to handle growth with microservices and cloud-native design" },
    { icon: <Users className="w-8 h-8" />, title: "Expert Team", description: "Skilled developers proficient in modern frontend and backend" },
    { icon: <Star className="w-8 h-8" />, title: "Rapid Development", description: "Agile methodology for faster time-to-market and iterations" }
  ];

  const benefits = ["Single team for entire project", "Consistent code quality & standards", "Faster development cycles", "Seamless frontend-backend integration", "Modern tech stack selection", "Comprehensive testing & QA", "Performance optimization", "Ongoing maintenance & support"];
  const applicationTypes = ["Web Applications & SaaS", "Progressive Web Apps (PWA)", "Enterprise Dashboards", "Social Media Platforms", "Real-time Chat Applications", "Booking & Reservation Systems", "Content Management Systems", "Marketplace Platforms"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Updated */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">Full Stack Development</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">Complete end-to-end application development with modern frontend frameworks, robust backend systems, and scalable cloud infrastructure.</p>
              <a href="/contact">
                <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <div className="flex flex-wrap gap-4 mt-8">
                {["Frontend + Backend", "Cloud Native", "Agile Development"].map((feature, index) => (
                  <div key={index} className="bg-white px-6 py-3 rounded-full text-purple-600 font-semibold border-2 border-purple-200 shadow-lg">{feature}</div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}><Monitor className="w-8 h-8 text-white" /></div>
              <div className="absolute -bottom-4 -left-8 w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}><Database className="w-7 h-7 text-white" /></div>
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}><Server className="w-6 h-6 text-white" /></div>

              {/* Main Stack Visualization */}
              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div>
                  <span className="text-gray-400 text-sm ml-4">terminal</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-green-400 mb-2">$ {typedText}<span className="animate-pulse text-white">|</span></div>
                  <div className="text-gray-400 mb-3">Building application...</div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2"><span className="text-blue-400">Frontend</span><div className="flex-1 bg-gray-700 rounded-full h-2"><div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-full"></div></div><span className="text-green-400">✓</span></div>
                    <div className="flex items-center gap-2"><span className="text-purple-400">Backend</span><div className="flex-1 bg-gray-700 rounded-full h-2"><div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-full"></div></div><span className="text-green-400">✓</span></div>
                    <div className="flex items-center gap-2"><span className="text-yellow-400">Database</span><div className="flex-1 bg-gray-700 rounded-full h-2"><div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full w-full"></div></div><span className="text-green-400">✓</span></div>
                  </div>
                  <div className="text-green-400">✓ Build completed successfully!</div>
                  <div className="text-gray-500 mt-2">Deploy ready at localhost:3000</div>
                </div>
              </div>

              {/* Stack Layers Card */}
              <div className="absolute -bottom-8 -right-4 w-48 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 p-4">
                <div className="text-xs font-bold text-gray-500 mb-3">STACK LAYERS</div>
                <div className="space-y-2">
                  <div className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-xs font-semibold text-center">React Frontend</div>
                  <div className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg text-xs font-semibold text-center">Node.js API</div>
                  <div className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg text-xs font-semibold text-center">PostgreSQL</div>
                </div>
              </div>

              {/* Performance Card */}
              <div className="absolute top-8 -right-2 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"><Zap className="w-5 h-5 text-green-600" /></div>
                  <div><div className="text-xs text-gray-500">Build Time</div><div className="text-lg font-bold text-green-600">2.3s</div></div>
                </div>
              </div>

              {/* Tech Icons Card */}
              <div className="absolute bottom-16 -left-12 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                <div className="flex gap-2 text-2xl">
                  <span>⚛️</span><span>🟢</span><span>🐘</span><span>🐳</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Full Stack Services</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive development services covering every layer of your application</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} onMouseEnter={() => setHoveredService(index)} onMouseLeave={() => setHoveredService(null)} className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${hoveredService === index ? 'border-purple-200 -translate-y-2' : 'border-gray-100'}`}>
                <div className={`text-purple-600 mb-4 transition-transform duration-300 ${hoveredService === index ? 'scale-110' : ''}`}>{typeof service.icon === 'string' ? <span className="text-5xl">{service.icon}</span> : service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Full Stack Expertise</span></h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 text-white">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Our Tech Stack</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Modern technologies for building robust full stack applications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border border-gray-100 hover:border-purple-200">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h4>
                <p className="text-sm text-gray-500">{tech.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Development Process</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A streamlined approach to deliver complete applications</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-6xl font-bold opacity-30 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-purple-100 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2"><ChevronRight className="w-8 h-8 text-gray-300" /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Application Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Our Advantages</span></h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"><CheckCircle className="w-5 h-5 text-white" /></div>
                    <p className="text-lg text-gray-800 font-medium pt-1">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Applications We Build</span></h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-500">
                <div className="space-y-3">
                  {applicationTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
                      <span className="text-gray-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Application?</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">Let's create a powerful full stack solution that brings your vision to life</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="/contact"><button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">Get Free Consultation</button></a>
            <a href="/portfolio"><button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">View Our Work</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
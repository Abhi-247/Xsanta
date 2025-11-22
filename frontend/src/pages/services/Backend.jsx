import React, { useState, useEffect } from 'react';
import { Server, Zap, Shield, Users, CheckCircle, ArrowRight, ChevronRight, Star, Database, Lock, Cpu, Activity } from 'lucide-react';

export default function BackendServices() {
  const [, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [typedText, setTypedText] = useState('');
  const fullText = 'SELECT * FROM users';

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
    { icon: <Server className="w-12 h-12" />, title: "API Development", description: "Build robust RESTful and GraphQL APIs with comprehensive documentation and seamless integration capabilities." },
    { icon: <Database className="w-12 h-12" />, title: "Database Architecture", description: "Design and implement scalable database solutions with optimal performance and data integrity." },
    { icon: "☁️", title: "Cloud Infrastructure", description: "Deploy and manage cloud-based backends on AWS, Azure, Google Cloud with auto-scaling and high availability." },
    { icon: <Lock className="w-12 h-12" />, title: "Security & Authentication", description: "Implement enterprise-grade security with OAuth, JWT, encryption, and comprehensive access control." }
  ];

  const technologies = [
    { icon: "🟢", name: "Node.js", type: "Runtime" },
    { icon: "🐍", name: "Python", type: "Language" },
    { icon: "☕", name: "Java", type: "Language" },
    { icon: "🔷", name: "Go", type: "Language" },
    { icon: "🍃", name: "MongoDB", type: "Database" },
    { icon: "🐘", name: "PostgreSQL", type: "Database" },
    { icon: "🔴", name: "Redis", type: "Cache" },
    { icon: "☁️", name: "AWS", type: "Cloud" }
  ];

  const process = [
    { number: "01", title: "Requirements Analysis", description: "Deep dive into your business logic, data models, and technical requirements for optimal architecture." },
    { number: "02", title: "System Design", description: "Create scalable architecture with database schema, API endpoints, and infrastructure planning." },
    { number: "03", title: "Development & Testing", description: "Build backend services with comprehensive testing, documentation, and performance optimization." },
    { number: "04", title: "Deployment & Monitoring", description: "Launch with CI/CD pipelines and continuous monitoring for uptime and performance." }
  ];

  const features = [
    { icon: <Zap className="w-8 h-8" />, title: "High Performance", description: "Optimized code and caching for lightning-fast response times" },
    { icon: <Shield className="w-8 h-8" />, title: "Enterprise Security", description: "Bank-level security with encryption and compliance standards" },
    { icon: <Users className="w-8 h-8" />, title: "Scalable Architecture", description: "Built to handle growth from startup to enterprise scale" },
    { icon: <Star className="w-8 h-8" />, title: "24/7 Reliability", description: "Robust systems with automatic failover and disaster recovery" }
  ];

  const benefits = ["RESTful & GraphQL API design", "Microservices architecture", "Real-time data processing", "Third-party integrations", "Payment gateway setup", "Automated backup systems", "Load balancing & CDN", "Comprehensive API documentation"];
  const solutions = ["E-commerce Platforms", "SaaS Applications", "Mobile App Backends", "Enterprise Systems", "IoT & Real-time Apps", "Content Management Systems", "Financial Applications", "Social Media Platforms"];

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
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">Backend Development</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">Powerful, secure, and scalable backend solutions that form the foundation of exceptional digital experiences and drive business growth.</p>
              <a href="/contact">
                <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
                  Start Your Backend Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <div className="flex flex-wrap gap-4 mt-8">
                {["Scalable", "Secure", "High Performance"].map((feature, index) => (
                  <div key={index} className="bg-white px-6 py-3 rounded-full text-purple-600 font-semibold border-2 border-purple-200 shadow-lg">{feature}</div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}><Server className="w-8 h-8 text-white" /></div>
              <div className="absolute -bottom-4 -left-8 w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}><Database className="w-7 h-7 text-white" /></div>
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}><Shield className="w-6 h-6 text-white" /></div>

              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div>
                  <span className="text-gray-400 text-sm ml-4">terminal — bash</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-green-400 mb-2">$ node server.js</div>
                  <div className="text-gray-400 mb-2">Server running on port 3000...</div>
                  <div className="text-gray-400 mb-2">✓ Database connected</div>
                  <div className="text-gray-400 mb-2">✓ Redis cache initialized</div>
                  <div className="text-gray-400 mb-4">✓ API routes loaded</div>
                  <div className="text-green-400 mb-2">$ psql</div>
                  <div className="text-purple-400">{typedText}<span className="animate-pulse text-white">|</span></div>
                  <div className="mt-2 text-gray-500">
                    <div className="border-b border-gray-700 pb-1 mb-1"><span className="text-blue-400">id</span> | <span className="text-blue-400">name</span> | <span className="text-blue-400">email</span></div>
                    <div className="text-gray-400">1  | John | john@email.com</div>
                    <div className="text-gray-400">2  | Jane | jane@email.com</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-4 w-52 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="bg-green-500 px-3 py-2 flex items-center justify-between"><span className="text-white text-xs font-bold">200 OK</span><span className="text-green-100 text-xs">45ms</span></div>
                <div className="p-3 bg-gray-50 font-mono text-xs">
                  <div className="text-gray-600">{'{'}</div>
                  <div className="text-gray-600 ml-2">"status": <span className="text-green-600">"success"</span>,</div>
                  <div className="text-gray-600 ml-2">"data": <span className="text-purple-600">[...]</span>,</div>
                  <div className="text-gray-600 ml-2">"count": <span className="text-blue-600">247</span></div>
                  <div className="text-gray-600">{'}'}</div>
                </div>
              </div>

              <div className="absolute top-8 -right-2 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center"><Cpu className="w-5 h-5 text-purple-600" /></div>
                  <div><div className="text-xs text-gray-500">Uptime</div><div className="text-lg font-bold text-purple-600">99.99%</div></div>
                </div>
              </div>

              <div className="absolute bottom-20 -left-12 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-500" />
                  <div className="flex gap-1">{[40, 65, 45, 80, 55, 70, 90].map((h, i) => (<div key={i} className="w-1.5 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full" style={{ height: `${h * 0.3}px` }}></div>))}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Backend Services</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">End-to-end backend development services for modern applications</p>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Backend Solutions</span></h2></div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Technologies</span> We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Cutting-edge backend technologies for modern applications</p>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A systematic approach to building robust backend systems</p>
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

      {/* Benefits & Solutions Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Core Capabilities</span></h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Solutions We Build</span></h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-500">
                <div className="space-y-3">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
                      <span className="text-gray-700">{solution}</span>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Backend?</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">Let's create a powerful, scalable backend infrastructure that powers your success</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="/contact"><button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">Get Free Consultation</button></a>
            <a href="/portfolio"><button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">View Portfolio</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
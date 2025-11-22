import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Zap, ChevronRight, Check, ArrowRight, Layout, Palette } from 'lucide-react';

export default function Frontend() {
  const [, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [typedText, setTypedText] = useState('');
  const fullText = '<div className="app">';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: <Code className="w-12 h-12" />, title: "Custom Web Applications", description: "Build tailored web applications that perfectly match your business requirements with modern frameworks and best practices." },
    { icon: <Smartphone className="w-12 h-12" />, title: "Responsive Design", description: "Create websites that look stunning and function flawlessly across all devices and screen sizes." },
    { icon: "🎨", title: "UI/UX Implementation", description: "Transform designs into pixel-perfect, interactive user interfaces with smooth animations and transitions." },
    { icon: <Zap className="w-12 h-12" />, title: "Performance Optimization", description: "Optimize your frontend for lightning-fast loading times and superior user experience." }
  ];

  const technologies = [
    { icon: "⚛️", name: "React", type: "Framework" },
    { icon: "🟢", name: "Vue.js", type: "Framework" },
    { icon: "🔴", name: "Angular", type: "Framework" },
    { icon: "⚫", name: "Next.js", type: "Framework" },
    { icon: "🔷", name: "TypeScript", type: "Language" },
    { icon: "🎨", name: "Tailwind CSS", type: "Styling" },
    { icon: "💅", name: "SASS/SCSS", type: "Styling" },
    { icon: "📦", name: "Webpack", type: "Build Tool" }
  ];

  const process = [
    { number: "01", title: "Design Analysis", description: "We analyze your design requirements and create a detailed frontend development plan." },
    { number: "02", title: "Component Development", description: "Build reusable components using modern frameworks and best practices." },
    { number: "03", title: "Integration & Testing", description: "Integrate components and conduct thorough testing across different browsers and devices." },
    { number: "04", title: "Optimization & Launch", description: "Optimize performance and deploy your frontend application to production." }
  ];

  const benefits = [
    "Lightning-fast page load speeds",
    "SEO-optimized code structure",
    "Mobile-first responsive design",
    "Modern browser compatibility",
    "Accessible user interfaces",
    "Scalable component architecture"
  ];

  const expertise = [
    "React, Vue, Angular Development",
    "Responsive Web Design",
    "Progressive Web Apps (PWAs)",
    "Single Page Applications (SPAs)",
    "Component-Based Architecture",
    "Modern JavaScript (ES6+)",
    "CSS3 & SASS/SCSS",
    "Cross-Browser Compatibility"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Updated */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Frontend Development
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
                Create stunning, responsive, and high-performance user interfaces that captivate your audience and drive engagement with cutting-edge frontend technologies.
              </p>
              <a href="/contact">
                <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-4 mt-8">
                {["Modern UI/UX", "Responsive Design", "Lightning Fast"].map((feature, index) => (
                  <div key={index} className="bg-white px-6 py-3 rounded-full text-purple-600 font-semibold border-2 border-purple-200 shadow-lg">
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Code Editor Mockup */}
            <div className="relative hidden lg:block">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-8 w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <Layout className="w-7 h-7 text-white" />
              </div>
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <Palette className="w-6 h-6 text-white" />
              </div>

              {/* Main Code Editor */}
              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm ml-4">App.jsx</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-gray-500">1  <span className="text-pink-400">import</span> <span className="text-purple-300">React</span> <span className="text-pink-400">from</span> <span className="text-green-400">'react'</span>;</div>
                  <div className="text-gray-500">2  <span className="text-pink-400">import</span> {'{'} <span className="text-purple-300">useState</span> {'}'} <span className="text-pink-400">from</span> <span className="text-green-400">'react'</span>;</div>
                  <div className="text-gray-500">3</div>
                  <div className="text-gray-500">4  <span className="text-pink-400">export default function</span> <span className="text-yellow-300">App</span>() {'{'}</div>
                  <div className="text-gray-500">5    <span className="text-pink-400">return</span> (</div>
                  <div className="text-gray-500">6      <span className="text-blue-400">{typedText}</span><span className="animate-pulse text-white">|</span></div>
                  <div className="text-gray-500">7        <span className="text-blue-400">{'<h1>'}</span><span className="text-white">Hello World</span><span className="text-blue-400">{'</h1>'}</span></div>
                  <div className="text-gray-500">8      <span className="text-blue-400">{'</div>'}</span></div>
                  <div className="text-gray-500">9    );</div>
                  <div className="text-gray-500">10 {'}'}</div>
                </div>
              </div>

              {/* Browser Preview Card */}
              <div className="absolute -bottom-8 -right-4 w-48 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="bg-gray-100 px-3 py-2 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded text-xs px-2 py-1 text-gray-400">localhost:3000</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
                  <div className="w-full h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded mb-2"></div>
                  <div className="w-3/4 h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                  <div className="mt-3 w-16 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute top-8 -right-2 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Performance</div>
                    <div className="text-lg font-bold text-green-600">98/100</div>
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Frontend Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive frontend development services to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${
                  hoveredService === index ? 'border-purple-200 -translate-y-2' : 'border-gray-100'
                }`}
              >
                <div className={`text-purple-600 mb-4 transition-transform duration-300 ${
                  hoveredService === index ? 'scale-110' : ''
                }`}>
                  {typeof service.icon === 'string' ? (
                    <span className="text-5xl">{service.icon}</span>
                  ) : (
                    service.icon
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Technologies
              </span>{' '}
              We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest frontend technologies to build modern, scalable applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border border-gray-100 hover:border-purple-200"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {tech.name}
                </h4>
                <p className="text-sm text-gray-500">{tech.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Development Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to deliver exceptional frontend solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-6xl font-bold opacity-30 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Frontend Development
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge frontend solutions that drive engagement and conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-800 font-medium pt-1">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Expertise
              </h3>
              <div className="space-y-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Frontend?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's create a stunning frontend that engages your users and drives your business forward
          </p>
          <a href="/contact" className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
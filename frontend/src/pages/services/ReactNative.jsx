import React, { useState, useEffect } from 'react';
import { PenTool, Zap, Shield, Users, CheckCircle, ArrowRight, ChevronRight, Star, Smartphone, Code, Layout } from 'lucide-react';

export default function ReactNativeDevelopment() {
  const [, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: "📱",
      title: "Cross-Platform Apps",
      description: "Build powerful iOS and Android apps from a single codebase, reducing development time and costs significantly."
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Custom App Development",
      description: "Tailored React Native solutions designed to meet your unique business requirements and user needs."
    },
    {
      icon: "🔄",
      title: "App Migration & Upgrade",
      description: "Seamlessly migrate existing apps to React Native or upgrade your current React Native version."
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "API Integration",
      description: "Connect your app with third-party services, payment gateways, and backend systems efficiently."
    }
  ];

  const appTypes = [
    { icon: "🛒", name: "E-commerce Apps", type: "Shopping" },
    { icon: "💬", name: "Social Media", type: "Networking" },
    { icon: "🏥", name: "Healthcare Apps", type: "Medical" },
    { icon: "💰", name: "Fintech Apps", type: "Finance" },
    { icon: "🎓", name: "Education Apps", type: "Learning" },
    { icon: "🎮", name: "Gaming Apps", type: "Entertainment" },
    { icon: "📦", name: "On-Demand Apps", type: "Services" },
    { icon: "🏢", name: "Enterprise Apps", type: "Business" }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understand your vision, define requirements, and create a detailed project roadmap with wireframes."
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Design intuitive, beautiful interfaces with smooth animations and native-like user experience."
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Build robust, scalable apps with clean code, thorough testing, and quality assurance."
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "Launch on App Store and Google Play with ongoing maintenance and feature updates."
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Development",
      description: "Hot reloading and code reusability accelerate delivery"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Native Performance",
      description: "Near-native performance with smooth animations"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Experienced React Native developers at your service"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Cost Effective",
      description: "One codebase for both iOS and Android saves money"
    }
  ];

  const benefits = [
    "Single codebase for iOS & Android",
    "Native-like user experience",
    "Fast time-to-market",
    "Hot reload for quick updates",
    "Large community support",
    "Reusable components library",
    "Easy maintenance & updates",
    "Third-party plugin integration"
  ];

  const techStack = [
    "React Native & Expo",
    "Redux & Context API",
    "TypeScript",
    "Firebase & AWS",
    "REST & GraphQL APIs",
    "Push Notifications",
    "Payment Gateway Integration",
    "Analytics & Crash Reporting"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  React Native App Development
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
                Build powerful, cross-platform mobile apps with React Native. One codebase, two platforms, infinite possibilities for your business growth.
              </p>
              <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-4 mt-8">
                {["Cross-Platform", "Native Performance", "Fast Development"].map((feature, index) => (
                  <div key={index} className="bg-white px-6 py-3 rounded-full text-purple-600 font-semibold border-2 border-purple-200 shadow-lg">
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Mobile App Mockup */}
            <div className="relative hidden lg:block">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-8 w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <Layout className="w-7 h-7 text-white" />
              </div>
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <Smartphone className="w-6 h-6 text-white" />
              </div>

              {/* Main Phone Mockup */}
              <div className="relative mx-auto" style={{ width: '300px' }}>
                <div className="bg-gray-900 rounded-[3rem] shadow-2xl p-3 border-8 border-gray-800">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                  
                  {/* Screen */}
                  <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-inner h-[600px]">
                    {/* Status Bar */}
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 flex justify-between items-center text-white text-xs">
                      <span>9:41</span>
                      <div className="flex gap-1 items-center">
                        <div className="w-4 h-3 border border-white rounded-sm"></div>
                        <div className="w-4 h-3 border border-white rounded-sm"></div>
                        <div className="w-4 h-3 border border-white rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-6 text-white">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">My App</h2>
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="h-2 bg-white/40 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-white/40 rounded w-1/2"></div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
                      <div className="flex justify-around">
                        {['🏠', '🔍', '❤️', '👤'].map((icon, i) => (
                          <div key={i} className={`text-2xl ${i === 0 ? 'opacity-100' : 'opacity-40'}`}>
                            {icon}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side buttons */}
                <div className="absolute left-0 top-20 w-1 h-12 bg-gray-800 rounded-r-lg"></div>
                <div className="absolute left-0 top-36 w-1 h-16 bg-gray-800 rounded-r-lg"></div>
                <div className="absolute left-0 top-56 w-1 h-16 bg-gray-800 rounded-r-lg"></div>
                <div className="absolute right-0 top-32 w-1 h-20 bg-gray-800 rounded-l-lg"></div>
              </div>

              {/* React Native Logo Card */}
              <div className="absolute -bottom-8 -left-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">⚛️</div>
                  <div>
                    <div className="text-sm font-bold text-purple-600">React Native</div>
                    <div className="text-xs text-gray-500">Cross-Platform</div>
                  </div>
                </div>
              </div>

              {/* Performance Stats Card */}
              <div className="absolute top-8 -right-2 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Performance</div>
                    <div className="text-lg font-bold text-green-600">60 FPS</div>
                  </div>
                </div>
              </div>

              {/* Platform Badges */}
              <div className="absolute -bottom-4 -right-6 flex gap-2">
                <div className="bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-200 text-sm font-semibold text-gray-700">
                  🍎 iOS
                </div>
                <div className="bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-200 text-sm font-semibold text-gray-700">
                  🤖 Android
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Development Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive React Native solutions for all your mobile app needs
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

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                React Native
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Apps We Build
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From e-commerce to healthcare, we develop apps across all industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {appTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border border-gray-100 hover:border-purple-200"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {type.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {type.name}
                </h4>
                <p className="text-sm text-gray-500">{type.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Development Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to deliver exceptional mobile apps
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

      {/* Benefits & Tech Stack Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  What You Get
                </span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-800 font-medium pt-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Our Tech Stack
                </span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-500">
                <div className="space-y-3">
                  {techStack.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
                      <span className="text-gray-700">{tech}</span>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Dream App?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's create a powerful React Native app that delights users and drives business growth
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Get Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
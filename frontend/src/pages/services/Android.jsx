import React, { useState, useEffect } from 'react';
import { Smartphone, Zap, Shield, Users, CheckCircle, ArrowRight, ChevronRight, Star, Code, Layers } from 'lucide-react';

export default function Android() {
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
      icon: <Smartphone className="w-12 h-12" />,
      title: "Native Android Apps",
      description: "Build high-performance native Android applications using Kotlin and Java with optimal device integration."
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Cross-Platform Development",
      description: "Develop apps that work seamlessly across Android and iOS using Flutter and React Native frameworks."
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Create intuitive and visually stunning interfaces following Material Design guidelines and best practices."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "App Maintenance & Support",
      description: "Provide ongoing maintenance, updates, and technical support to keep your app running smoothly."
    }
  ];

  const technologies = [
    { icon: "🤖", name: "Kotlin", type: "Language" },
    { icon: "☕", name: "Java", type: "Language" },
    { icon: "⚛️", name: "React Native", type: "Framework" },
    { icon: "💙", name: "Flutter", type: "Framework" },
    { icon: "🎯", name: "Jetpack Compose", type: "UI Framework" },
    { icon: "🔥", name: "Firebase", type: "Backend" },
    { icon: "📊", name: "Room DB", type: "Database" },
    { icon: "🔗", name: "Retrofit", type: "Networking" }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We understand your requirements, target audience, and create a comprehensive development roadmap."
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Create wireframes and interactive prototypes following Material Design principles."
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Build your app with clean code, rigorous testing, and quality assurance at every stage."
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Deploy to Google Play Store and provide ongoing maintenance and feature updates."
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description: "Optimized apps with smooth animations and fast load times"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Industry-standard security practices and robust architecture"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric Design",
      description: "Intuitive interfaces that users love to interact with"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Play Store Ready",
      description: "Apps that meet all Google Play Store guidelines"
    }
  ];

  const benefits = [
    "Native Android performance and features",
    "Material Design 3 implementation",
    "Offline functionality support",
    "Push notifications integration",
    "In-app purchases & monetization",
    "Analytics and crash reporting",
    "Multi-language support",
    "API integration & backend connectivity"
  ];

  const appTypes = [
    "E-commerce & Shopping Apps",
    "Social Networking Apps",
    "On-Demand Service Apps",
    "Healthcare & Fitness Apps",
    "Educational & E-Learning Apps",
    "Entertainment & Media Apps",
    "Business & Productivity Apps",
    "Gaming & Entertainment Apps"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Android Development
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
              Build powerful, scalable, and user-friendly Android applications that reach millions of users worldwide with cutting-edge mobile technologies.
            </p>
            <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Floating Android Robot */}
          <div className="hidden lg:block absolute right-20 top-32 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="text-9xl opacity-20">🤖</div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="relative max-w-7xl mx-auto px-6 pb-12">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {["Native Performance", "Material Design", "Play Store Ready"].map((feature, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full text-purple-600 font-semibold border-2 border-purple-200 shadow-lg">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Android Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Android development services tailored to your business needs
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
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Android Development
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

      {/* Technologies Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Technologies
              </span>{' '}
              We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging the latest Android development tools and frameworks
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
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Development Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology to deliver exceptional Android applications
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

      {/* Benefits & App Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Key Features
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

            {/* App Types */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  App Types We Build
                </span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-500">
                <div className="space-y-3">
                  {appTypes.map((type, index) => (
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Android App?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's transform your idea into a powerful Android application that users will love
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Get Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
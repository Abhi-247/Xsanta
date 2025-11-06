import React, { useState, useEffect } from 'react';
import { PenTool, Zap, Shield, Users, CheckCircle, ArrowRight, ChevronRight, Star, Globe, Languages } from 'lucide-react';

export default function WebsiteTranslation() {
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
      icon: <Globe className="w-12 h-12" />,
      title: "Full Website Translation",
      description: "Complete website translation with cultural adaptation, maintaining your brand voice across all languages."
    },
    {
      icon: <Languages className="w-12 h-12" />,
      title: "Multilingual SEO",
      description: "SEO-optimized translations with localized keywords to rank in target markets and drive international traffic."
    },
    {
      icon: "🌍",
      title: "Localization Services",
      description: "Cultural adaptation beyond translation, ensuring content resonates with local audiences and customs."
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Content Transcreation",
      description: "Creative adaptation of marketing content to maintain impact and emotional connection across cultures."
    }
  ];

  const contentTypes = [
    { icon: "🏠", name: "Homepage", type: "Main Page" },
    { icon: "🛍️", name: "E-commerce", type: "Product Pages" },
    { icon: "📝", name: "Blog Posts", type: "Content" },
    { icon: "📄", name: "Legal Pages", type: "Compliance" },
    { icon: "❓", name: "FAQs", type: "Support" },
    { icon: "💼", name: "Service Pages", type: "Business" },
    { icon: "📧", name: "Forms & CTAs", type: "Conversion" },
    { icon: "📱", name: "App Interfaces", type: "Mobile" }
  ];

  const process = [
    {
      number: "01",
      title: "Content Analysis",
      description: "Review your website structure, content volume, and target languages to create a translation plan."
    },
    {
      number: "02",
      title: "Translation",
      description: "Expert native linguists translate content while preserving tone, style, and technical accuracy."
    },
    {
      number: "03",
      title: "Cultural Adaptation",
      description: "Localize content for cultural nuances, regional preferences, and market-specific requirements."
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Rigorous proofreading, editing, and testing to ensure flawless multilingual experience."
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Native Translators",
      description: "Professional linguists who are native speakers"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Guaranteed",
      description: "Multi-level review process ensures accuracy"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cultural Expertise",
      description: "Deep understanding of local markets and customs"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Localized keywords for international rankings"
    }
  ];

  const benefits = [
    "Native speaker translators",
    "Cultural localization",
    "SEO keyword research",
    "Brand voice consistency",
    "Technical terminology accuracy",
    "Quality assurance & proofreading",
    "Format preservation",
    "Ongoing support & updates"
  ];

  const languages = [
    "🇪🇸 Spanish",
    "🇫🇷 French",
    "🇩🇪 German",
    "🇮🇹 Italian",
    "🇵🇹 Portuguese",
    "🇨🇳 Chinese (Simplified)",
    "🇯🇵 Japanese",
    "🇰🇷 Korean",
    "🇦🇪 Arabic",
    "🇷🇺 Russian",
    "🇳🇱 Dutch",
    "🇸🇪 Swedish"
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
                Website Translation Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
              Expand your global reach with professional website translation services that maintain your brand voice while connecting with audiences worldwide.
            </p>
            <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
              Start Translation Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Floating Translation Icon */}
          <div className="hidden lg:block absolute right-20 top-32 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="text-9xl opacity-20">🌐</div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="relative max-w-7xl mx-auto px-6 pb-12">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {["Native Translators", "Cultural Adaptation", "SEO Optimized"].map((feature, index) => (
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Translation Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional translation solutions to help you reach global audiences
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
                Translation Services
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

      {/* Content Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Content Types
              </span>{' '}
              We Translate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From homepages to product catalogs, we translate every part of your website
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Translation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for accurate and culturally relevant translations
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

      {/* Benefits & Languages Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  What's Included
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

            {/* Languages */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Languages We Offer
                </span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-500">
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((language, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                      <span className="text-gray-700 font-medium">{language}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-gray-600">+ 50+ more languages available</p>
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
            Ready to Go Global?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's translate your website and connect with audiences around the world
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Get Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              View Languages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
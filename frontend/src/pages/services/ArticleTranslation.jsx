import React, { useState, useEffect } from 'react';
import { Globe, Languages, Zap, CheckCircle, ArrowRight, ChevronRight, FileText, Users, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArticleTranslationPage() {
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
      icon: <FileText className="w-12 h-12" />,
      title: "Document Translation",
      description: "Professional translation of articles, blog posts, technical documentation, and written content with precision and cultural sensitivity."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Localization Services",
      description: "Adapt your content for specific markets and cultures, ensuring relevance and engagement with local audiences."
    },
    {
      icon: "🎯",
      title: "Content Transcreation",
      description: "Creative translation that preserves the intent, style, and tone of your original content while resonating with target audiences."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Fast Turnaround",
      description: "Quick and efficient translation services without compromising quality, meeting your deadlines every time."
    }
  ];

  const languages = [
    { flag: "🇺🇸", name: "English", code: "EN" },
    { flag: "🇪🇸", name: "Spanish", code: "ES" },
    { flag: "🇫🇷", name: "French", code: "FR" },
    { flag: "🇩🇪", name: "German", code: "DE" },
    { flag: "🇨🇳", name: "Chinese", code: "ZH" },
    { flag: "🇯🇵", name: "Japanese", code: "JA" },
    { flag: "🇰🇷", name: "Korean", code: "KO" },
    { flag: "🇮🇳", name: "Hindi", code: "HI" }
  ];

  const process = [
    {
      number: "01",
      title: "Content Analysis",
      description: "We review your content to understand context, target audience, and specific translation requirements."
    },
    {
      number: "02",
      title: "Expert Translation",
      description: "Native-speaking translators work on your content, ensuring accuracy and cultural appropriateness."
    },
    {
      number: "03",
      title: "Quality Assurance",
      description: "Multiple rounds of proofreading and editing to ensure flawless translation and formatting."
    },
    {
      number: "04",
      title: "Delivery & Support",
      description: "Receive your translated content on time with ongoing support for any revisions needed."
    }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Native Speakers",
      description: "All translations done by native speakers with expertise in your industry"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Confidential & Secure",
      description: "Your content is protected with strict confidentiality agreements"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Round-the-clock service to meet urgent translation needs"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Guaranteed",
      description: "100% accuracy guarantee with unlimited revisions"
    }
  ];

  const benefits = [
    "Professional human translation",
    "Cultural adaptation and localization",
    "Industry-specific terminology",
    "SEO-optimized translated content",
    "Formatting preserved across languages",
    "Proofreading and editing included",
    "Multiple file format support",
    "Certified translations available"
  ];

  const contentTypes = [
    "Blog Posts & Articles",
    "Website Content",
    "Marketing Materials",
    "Technical Documentation",
    "Product Descriptions",
    "Press Releases",
    "Social Media Content",
    "E-books & White Papers"
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
                Article Translation
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
              Break language barriers and reach global audiences with professional, accurate, and culturally-adapted article translation services.
            </p>
            <Link to="/contact">
            <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
            
          </div>

          {/* Floating Globe Icon */}
          <div className="hidden lg:block absolute right-20 top-32 animate-bounce" style={{ animationDuration: '3s' }}>
            <Languages className="w-32 h-32 text-purple-300 opacity-40" />
          </div>
        </div>

        {/* Feature Pills */}
        <div className="relative max-w-7xl mx-auto px-6 pb-12">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {["100+ Languages", "Native Experts", "99% Accuracy"].map((feature, index) => (
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
              Comprehensive translation solutions tailored to your content needs
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

      {/* Languages Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Languages
              </span>{' '}
              We Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional translation in 100+ languages by native-speaking experts
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border border-gray-100 hover:border-purple-200"
              >
                <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">
                  {lang.flag}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {lang.name}
                </h4>
                <p className="text-sm text-gray-500">{lang.code}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">And 90+ more languages available!</p>
            <button className="text-purple-600 font-semibold hover:text-pink-600 transition-colors flex items-center gap-2 mx-auto">
              View All Languages
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
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

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Translation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology to deliver accurate and culturally-appropriate translations
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

      {/* Benefits & Content Types Section */}
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

            {/* Content Types */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Content We Translate
                </span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-500">
                <div className="space-y-3">
                  {contentTypes.map((type, index) => (
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

      {/* Pricing Preview */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Competitive rates with no hidden fees
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Standard", price: "$0.08", unit: "per word", features: ["48-hour delivery", "Professional quality", "1 revision round"] },
              { name: "Premium", price: "$0.12", unit: "per word", features: ["24-hour delivery", "Native experts", "2 revision rounds"], highlight: true },
              { name: "Urgent", price: "$0.18", unit: "per word", features: ["12-hour delivery", "Priority service", "Unlimited revisions"] }
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                  plan.highlight ? 'border-purple-500 -translate-y-2' : 'border-gray-100 hover:border-purple-200'
                }`}
              >
                {plan.highlight && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-bold py-2 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-600"> {plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-xl'
                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Go Global?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Get a free quote for your translation project and reach audiences worldwide
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            {/* Link for Consultation Page */}
            <Link to="/contact">
              <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                Get Free Consultation
              </button>
            </Link>

            {/* Link for Portfolio Page */}
            <Link to="/portfolio">
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { PenTool, Zap, Shield, Users, CheckCircle, ArrowRight, ChevronRight, Star, Globe, Target } from 'lucide-react';

export default function WebsiteContentWriting() {
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
      title: "Homepage & Landing Pages",
      description: "Compelling hero sections, value propositions, and landing pages that capture attention and drive conversions."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Service & Product Pages",
      description: "Persuasive content that showcases your offerings, highlights benefits, and motivates users to take action."
    },
    {
      icon: "📄",
      title: "About & Company Pages",
      description: "Authentic brand storytelling that builds trust, showcases values, and connects with your audience."
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Website Copy Refresh",
      description: "Revitalize existing website content with fresh copy that improves engagement and search rankings."
    }
  ];

  const contentTypes = [
    { icon: "🏠", name: "Homepage Copy", type: "Main" },
    { icon: "🎯", name: "Landing Pages", type: "Conversion" },
    { icon: "💼", name: "Service Pages", type: "Offerings" },
    { icon: "📦", name: "Product Pages", type: "E-commerce" },
    { icon: "ℹ️", name: "About Us", type: "Brand" },
    { icon: "📞", name: "Contact Pages", type: "Engagement" },
    { icon: "❓", name: "FAQ Sections", type: "Support" },
    { icon: "🏆", name: "Portfolio Pages", type: "Showcase" }
  ];

  const process = [
    {
      number: "01",
      title: "Brand Analysis",
      description: "Understand your brand voice, target audience, competitors, and unique value proposition."
    },
    {
      number: "02",
      title: "Content Strategy",
      description: "Create a strategic content plan with keyword research, user journey mapping, and messaging framework."
    },
    {
      number: "03",
      title: "Copywriting",
      description: "Craft persuasive, SEO-optimized content that engages visitors and drives desired actions."
    },
    {
      number: "04",
      title: "Review & Polish",
      description: "Refine content through multiple revisions, ensuring perfection before final delivery."
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Conversion Focused",
      description: "Copy designed to turn visitors into customers"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Content that ranks and drives organic traffic"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric",
      description: "Written for your specific audience needs"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Brand Aligned",
      description: "Consistent voice across all pages"
    }
  ];

  const benefits = [
    "Audience research & personas",
    "Keyword integration & SEO",
    "Compelling headlines & CTAs",
    "Value proposition clarity",
    "Brand voice consistency",
    "Mobile-optimized copy",
    "A/B testing recommendations",
    "Meta descriptions included"
  ];

  const industries = [
    "SaaS & Technology",
    "E-commerce & Retail",
    "Professional Services",
    "Healthcare & Medical",
    "Real Estate & Property",
    "Education & Training",
    "Finance & Insurance",
    "Hospitality & Tourism"
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
                Website Content Writing Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
              Transform your website into a powerful conversion machine with compelling copy that engages visitors, builds trust, and drives action.
            </p>
            <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Floating Website Icon */}
          <div className="hidden lg:block absolute right-20 top-32 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="text-9xl opacity-20">🌐</div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="relative max-w-7xl mx-auto px-6 pb-12">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {["SEO Optimized", "Conversion Focused", "Brand Aligned"].map((feature, index) => (
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Website Writing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete website content solutions from homepage to contact page
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
                Website Writing
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
                Website Pages
              </span>{' '}
              We Write
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From homepage to FAQ, we craft every page your website needs
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Writing Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for website content that converts
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

      {/* Benefits & Industries Section */}
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

            {/* Industries */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Industries We Serve
                </span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-500">
                <div className="space-y-3">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
                      <span className="text-gray-700">{industry}</span>
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
            Ready to Transform Your Website?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's create compelling website content that engages visitors and drives conversions
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Get Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              View Samples
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
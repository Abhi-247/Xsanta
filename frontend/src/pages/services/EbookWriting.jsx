import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, Award, Lightbulb, CheckCircle, ArrowRight, ChevronRight, Users, TrendingUp, Edit, Layout, Star, Download } from 'lucide-react';

export default function EbookWritingPage() {
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
      icon: <BookOpen className="w-12 h-12" />,
      title: "Lead Generation eBooks",
      description: "Strategic eBooks designed to capture leads, educate prospects, and position your brand as an industry authority."
    },
    {
      icon: "📚",
      title: "Educational eBooks",
      description: "Comprehensive guides, how-to manuals, and instructional content that provides real value to your audience."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Thought Leadership eBooks",
      description: "In-depth industry insights, trends analysis, and expert perspectives that establish your credibility."
    },
    {
      icon: "🎯",
      title: "Product/Service eBooks",
      description: "Detailed eBooks showcasing your offerings, use cases, and benefits with engaging storytelling."
    }
  ];

  const ebookTypes = [
    { icon: "💼", name: "Business", type: "Strategy & Growth" },
    { icon: "💻", name: "Technology", type: "Tech Guides" },
    { icon: "📈", name: "Marketing", type: "Best Practices" },
    { icon: "💰", name: "Finance", type: "Money Management" },
    { icon: "🏥", name: "Health", type: "Wellness & Fitness" },
    { icon: "🎓", name: "Education", type: "Learning Resources" },
    { icon: "🎨", name: "Creative", type: "Design & Arts" },
    { icon: "🔧", name: "How-To", type: "Practical Guides" }
  ];

  const process = [
    {
      number: "01",
      title: "Planning & Strategy",
      description: "Define goals, target audience, key messages, and create a comprehensive content outline and structure."
    },
    {
      number: "02",
      title: "Research & Writing",
      description: "Conduct thorough research and craft engaging, well-structured content with expert insights."
    },
    {
      number: "03",
      title: "Design & Formatting",
      description: "Professional design, typography, images, and layouts that enhance readability and engagement."
    },
    {
      number: "04",
      title: "Review & Delivery",
      description: "Client review, revisions, final editing, and delivery in multiple formats (PDF, ePub, MOBI)."
    }
  ];

  const features = [
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Expert Writers",
      description: "Professional writers with subject matter expertise"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Custom Design",
      description: "Branded, visually appealing eBook layouts"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Audience-Focused",
      description: "Content tailored to your target readers"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Lead Generation",
      description: "Optimized for conversion and engagement"
    }
  ];

  const benefits = [
    "Original, plagiarism-free content",
    "Professional copywriting & editing",
    "Custom cover design",
    "Interior layout & formatting",
    "Images, graphics & infographics",
    "Table of contents & index",
    "Multiple format delivery",
    "Unlimited revisions"
  ];

  const ebookElements = [
    { title: "Compelling Cover Design", desc: "Eye-catching first impression" },
    { title: "Executive Summary", desc: "Overview and key takeaways" },
    { title: "Structured Chapters", desc: "Logical content flow" },
    { title: "Visual Elements", desc: "Images, charts, and graphics" },
    { title: "Call-to-Actions", desc: "Strategic conversion points" },
    { title: "Author Bio", desc: "Credibility and authority" }
  ];

  const stats = [
    { number: "800+", label: "eBooks Written" },
    { number: "50K+", label: "Pages Authored" },
    { number: "250%", label: "Avg. Lead Increase" },
    { number: "4.9/5", label: "Client Rating" }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$1,500",
      pages: "20-30 pages",
      features: ["5,000-7,500 words", "Basic design", "Cover design", "PDF format", "2 revisions"],
      popular: false
    },
    {
      name: "Professional",
      price: "$3,000",
      pages: "40-60 pages",
      features: ["10,000-15,000 words", "Professional design", "Custom graphics", "Multi-format (PDF, ePub)", "3 revisions"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$5,000+",
      pages: "80+ pages",
      features: ["20,000+ words", "Premium design", "Custom infographics", "All formats", "Unlimited revisions", "Marketing copy"],
      popular: false
    }
  ];

  const useCases = [
    { icon: "🎯", title: "Lead Magnets", desc: "Capture email addresses and qualify prospects" },
    { icon: "📢", title: "Content Marketing", desc: "Establish authority and thought leadership" },
    { icon: "🎓", title: "Training Materials", desc: "Employee or customer education resources" },
    { icon: "💼", title: "Sales Enablement", desc: "Support sales teams with valuable content" }
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
                eBook Writing Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
              Professional eBook writing and design services that generate leads, educate audiences, and establish your brand as an industry authority.
            </p>
            <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
              Create Your eBook
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Floating Book Icon */}
          <div className="hidden lg:block absolute right-20 top-32 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="text-9xl opacity-20">📖</div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="relative max-w-7xl mx-auto px-6 pb-12">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {["Professional Writing", "Custom Design", "Lead Generation"].map((feature, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full text-purple-600 font-semibold border-2 border-purple-200 shadow-lg">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                  {stat.number}
                </div>
                <div className="text-xl text-purple-100">
                  {stat.label}
                </div>
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">eBook Writing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion - comprehensive eBook creation for every purpose
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

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                eBook Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic applications for your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 text-center">
                <div className="text-6xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* eBook Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                eBook Types
              </span>{' '}
              We Create
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert eBook writing across all topics and industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ebookTypes.map((type, index) => (
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

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                eBook Services
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Creation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From idea to published eBook - a seamless journey
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

      {/* Elements & Benefits */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Elements */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  eBook Components
                </span>
              </h2>
              <div className="space-y-4">
                {ebookElements.map((element, index) => (
                  <div key={index} className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-2">{element.title}</h3>
                    <p className="text-gray-600">{element.desc}</p>
                  </div>
                ))}
              </div>
            </div>

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
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12 rounded-2xl shadow-xl border-2 border-purple-200">
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic text-center">
              "XSANTA created an outstanding eBook that became our top lead generation tool. The quality of writing and design exceeded our expectations. We've seen a 300% increase in qualified leads!"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-2xl">
                📚
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Mark Thompson</h4>
                <p className="text-gray-600">Marketing Director, GrowthTech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Choose the package that fits your eBook needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                  plan.popular ? 'border-purple-500 -translate-y-2' : 'border-gray-100 hover:border-purple-200'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-bold py-2 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>
                <p className="text-purple-600 font-semibold mb-6">{plan.pages}</p>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                  plan.popular
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Create Your eBook?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's transform your expertise into a powerful lead generation tool that grows your business
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Order Your eBook
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
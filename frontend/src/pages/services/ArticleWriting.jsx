import React, { useState, useEffect } from 'react';
import { PenTool, Zap, Shield, Users, CheckCircle, ArrowRight, ChevronRight, Star, BookOpen, Target, TrendingUp } from 'lucide-react';

export default function ArticleWriting() {
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
      title: "Blog & Website Content",
      description: "Engaging blog posts and website content that drives traffic, boosts SEO, and converts readers into customers."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "SEO-Optimized Articles",
      description: "Strategic content crafted with keyword research and SEO best practices to rank higher in search results."
    },
    {
      icon: "📰",
      title: "Industry & Technical Writing",
      description: "Expert articles on specialized topics with deep research and accurate information for your niche audience."
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Content Strategy & Planning",
      description: "Comprehensive content calendars and strategic planning to maintain consistent, high-quality output."
    }
  ];

  const contentTypes = [
    { icon: "📝", name: "Blog Posts", type: "Content" },
    { icon: "📄", name: "White Papers", type: "Long-form" },
    { icon: "📊", name: "Case Studies", type: "Business" },
    { icon: "📰", name: "Press Releases", type: "PR" },
    { icon: "🎯", name: "Landing Pages", type: "Marketing" },
    { icon: "📚", name: "eBooks & Guides", type: "Resources" },
    { icon: "💼", name: "LinkedIn Articles", type: "Professional" },
    { icon: "✉️", name: "Email Newsletters", type: "Engagement" }
  ];

  const process = [
    {
      number: "01",
      title: "Research & Discovery",
      description: "Deep dive into your brand, audience, and industry to understand your unique voice and goals."
    },
    {
      number: "02",
      title: "Content Planning",
      description: "Develop strategic content outlines with keyword research and SEO optimization planning."
    },
    {
      number: "03",
      title: "Writing & Editing",
      description: "Craft compelling content with multiple revision rounds to ensure perfection."
    },
    {
      number: "04",
      title: "Delivery & Support",
      description: "Deliver polished articles with formatting, images, and ongoing content support."
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality or depth"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Original Content",
      description: "100% plagiarism-free, thoroughly researched articles"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Audience-Focused",
      description: "Content tailored to resonate with your target readers"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Strategic keywords and structure for search visibility"
    }
  ];

  const benefits = [
    "Comprehensive topic research",
    "SEO keyword optimization",
    "Engaging headlines & hooks",
    "Proper formatting & structure",
    "Fact-checking & citations",
    "Multiple revision rounds",
    "Royalty-free image suggestions",
    "Meta descriptions included"
  ];

  const industries = [
    "Technology & Software",
    "Healthcare & Wellness",
    "Finance & Business",
    "Education & E-Learning",
    "Real Estate & Property",
    "Travel & Hospitality",
    "Fashion & Lifestyle",
    "Food & Nutrition"
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
                  Article Writing Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
                Professional content that captivates readers, drives engagement, and elevates your brand with compelling storytelling and strategic messaging.
              </p>
              <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
                Start Writing Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-4 mt-8">
                {["SEO Optimized", "100% Original", "Expert Writers"].map((feature, index) => (
                  <div key={index} className="bg-white px-6 py-3 rounded-full text-purple-600 font-semibold border-2 border-purple-200 shadow-lg">
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Article Document Mockup */}
            <div className="relative hidden lg:block">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-8 w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <Star className="w-6 h-6 text-white" />
              </div>

              {/* Main Document Card */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Document Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-bold text-sm">Article.docx</div>
                      <div className="text-xs opacity-80">2,450 words</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 bg-green-500 rounded-full text-white text-xs font-semibold">
                      Published
                    </div>
                  </div>
                </div>

                {/* Document Content */}
                <div className="p-8 space-y-6">
                  {/* Title */}
                  <div>
                    <div className="h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded w-5/6 mb-2"></div>
                    <div className="h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded w-4/6"></div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">📅</span>
                      <span>Nov 22, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">👤</span>
                      <span>John Writer</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="text-purple-600">⏱️</span>
                      <span>8 min read</span>
                    </div>
                  </div>

                  {/* Paragraph Lines */}
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>

                  {/* Subheading */}
                  <div className="h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded w-3/5"></div>

                  {/* More Content Lines */}
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                  </div>

                  {/* Quote Box */}
                  <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
                    <div className="h-3 bg-purple-300 rounded w-4/5 mb-2"></div>
                    <div className="h-3 bg-purple-300 rounded w-3/5"></div>
                  </div>

                  {/* Final Lines */}
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap pt-4">
                    <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                      SEO
                    </div>
                    <div className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold">
                      Marketing
                    </div>
                    <div className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                      Content
                    </div>
                  </div>
                </div>

                {/* Document Footer */}
                <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span>4.9</span>
                    </div>
                    <div>•</div>
                    <div>1.2K views</div>
                    <div>•</div>
                    <div>45 shares</div>
                  </div>
                </div>
              </div>

              {/* SEO Score Card */}
              <div className="absolute -bottom-8 -right-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">SEO Score</div>
                    <div className="text-lg font-bold text-green-600">94/100</div>
                  </div>
                </div>
              </div>

              {/* Word Count Badge */}
              <div className="absolute top-8 -right-2 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl mb-1">📝</div>
                  <div className="text-xs text-gray-500">Words</div>
                  <div className="text-sm font-bold text-purple-600">2,450</div>
                </div>
              </div>

              {/* Readability Badge */}
              <div className="absolute bottom-32 -left-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-xl p-3 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👓</span>
                  <div>
                    <div className="text-xs opacity-90">Readability</div>
                    <div className="text-lg font-bold">Easy</div>
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Writing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive content writing solutions tailored to your business objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${hoveredService === index ? 'border-purple-200 -translate-y-2' : 'border-gray-100'
                  }`}
              >
                <div className={`text-purple-600 mb-4 transition-transform duration-300 ${hoveredService === index ? 'scale-110' : ''
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
                Writing Services
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
              We Create
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From blogs to white papers, we craft content that achieves your goals
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
              A structured approach to deliver exceptional content every time
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
            Ready to Elevate Your Content?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's create compelling articles that engage your audience and drive results
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
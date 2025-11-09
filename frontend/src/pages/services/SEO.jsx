import React, { useState, useEffect } from 'react';
import { FileText, TrendingUp, Search, Target, CheckCircle, ArrowRight, ChevronRight, Zap, Users, Award, BarChart } from 'lucide-react';

export default function SEOWritingPage() {
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
      title: "SEO Blog Writing",
      description: "Engaging, keyword-optimized blog posts that rank high on search engines and drive organic traffic to your website."
    },
    {
      icon: "🎯",
      title: "Website Content Writing",
      description: "Compelling website copy that converts visitors into customers while maintaining strong SEO performance."
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Keyword Research & Strategy",
      description: "In-depth keyword analysis to identify high-value search terms and develop winning content strategies."
    },
    {
      icon: "📄",
      title: "Product Descriptions",
      description: "SEO-friendly product descriptions that inform, persuade, and rank well in search results."
    }
  ];

  const contentTypes = [
    { icon: "📝", name: "Blog Posts", type: "Long-form" },
    { icon: "🌐", name: "Website Pages", type: "Landing Pages" },
    { icon: "📰", name: "Articles", type: "Editorial" },
    { icon: "🛍️", name: "Product Pages", type: "E-commerce" },
    { icon: "📱", name: "Social Media", type: "Captions" },
    { icon: "📧", name: "Email Content", type: "Newsletters" },
    { icon: "📑", name: "Case Studies", type: "Success Stories" },
    { icon: "🎓", name: "Guides", type: "How-to Content" }
  ];

  const process = [
    {
      number: "01",
      title: "Research & Planning",
      description: "We conduct thorough keyword research and competitor analysis to create a winning content strategy."
    },
    {
      number: "02",
      title: "Content Creation",
      description: "Expert writers craft engaging, SEO-optimized content that resonates with your target audience."
    },
    {
      number: "03",
      title: "Optimization",
      description: "Content is optimized with proper keywords, meta descriptions, headers, and internal linking."
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Thorough editing, fact-checking, and plagiarism scanning ensure top-quality deliverables."
    }
  ];

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Higher Rankings",
      description: "Proven strategies to boost your search engine rankings"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Targeted Keywords",
      description: "Strategic keyword placement for maximum visibility"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Engaging Content",
      description: "Content that captivates readers and reduces bounce rate"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Writers",
      description: "Professional writers with SEO expertise"
    }
  ];

  const benefits = [
    "Original, plagiarism-free content",
    "Strategic keyword optimization",
    "SEO-friendly meta descriptions",
    "Proper heading structure (H1-H6)",
    "Internal and external linking",
    "Mobile-optimized content",
    "Conversion-focused writing",
    "Fast turnaround times"
  ];

  const pricing = [
    {
      name: "Blog Post",
      price: "$100",
      unit: "per 1000 words",
      features: ["Keyword research", "SEO optimization", "1 revision", "Meta description"],
      popular: false
    },
    {
      name: "Website Content",
      price: "$150",
      unit: "per page",
      features: ["Keyword research", "SEO optimization", "2 revisions", "Meta tags included"],
      popular: true
    },
    {
      name: "Premium Package",
      price: "$500",
      unit: "per month",
      features: ["4 blog posts/month", "Keyword strategy", "Unlimited revisions", "Performance tracking"],
      popular: false
    }
  ];

  const stats = [
    { number: "300%", label: "Avg. Traffic Increase" },
    { number: "1000+", label: "Articles Written" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "Top 10", label: "Search Rankings" }
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
                SEO Writing Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
              Boost your online visibility with expertly crafted, SEO-optimized content that ranks high, engages readers, and drives conversions.
            </p>
            <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
              Get SEO Content
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Floating SEO Icon */}
          <div className="hidden lg:block absolute right-20 top-32 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="text-9xl opacity-20">📝</div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="relative max-w-7xl mx-auto px-6 pb-12">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {["SEO Optimized", "100% Original", "Fast Delivery"].map((feature, index) => (
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">SEO Writing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive content solutions optimized for search engines and human readers
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

      {/* Content Types Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Content Types
              </span>{' '}
              We Create
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional SEO content for every platform and purpose
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contentTypes.map((content, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border border-gray-100 hover:border-purple-200"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {content.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {content.name}
                </h4>
                <p className="text-sm text-gray-500">{content.type}</p>
              </div>
            ))}
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
                SEO Writing
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Writing Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology to deliver high-ranking, engaging content
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

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-xl border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SEO Best Practices</h3>
              <div className="space-y-4">
                {[
                  { icon: <Search className="w-6 h-6" />, text: "Comprehensive keyword research" },
                  { icon: <BarChart className="w-6 h-6" />, text: "Competitor analysis & insights" },
                  { icon: <TrendingUp className="w-6 h-6" />, text: "Search intent optimization" },
                  { icon: <Target className="w-6 h-6" />, text: "Strategic content planning" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg">
                    <div className="text-purple-600">{item.icon}</div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Transparent pricing for quality SEO content
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
            Ready to Boost Your Rankings?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's create SEO-optimized content that drives traffic, engagement, and conversions
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Order SEO Content
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Request Sample
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
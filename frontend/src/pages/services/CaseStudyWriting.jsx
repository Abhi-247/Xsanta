import React, { useState, useEffect } from 'react';
import { FileText, TrendingUp, Award, Target, CheckCircle, ArrowRight, ChevronRight, Lightbulb, Users, BarChart, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function CaseStudyWritingPage() {
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
      title: "Business Case Studies",
      description: "Compelling success stories that showcase your business impact, ROI, and client transformations with data-driven results."
    },
    {
      icon: "💼",
      title: "Technical Case Studies",
      description: "Detailed technical documentation of implementations, solutions, and innovations for B2B and enterprise clients."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Customer Success Stories",
      description: "Engaging narratives that highlight client journeys, challenges overcome, and measurable outcomes achieved."
    },
    {
      icon: "🎯",
      title: "Product Case Studies",
      description: "Product-focused case studies demonstrating real-world applications, use cases, and tangible benefits."
    }
  ];

  const industries = [
    { icon: "💻", name: "Technology", type: "SaaS & IT" },
    { icon: "🏥", name: "Healthcare", type: "Medical & Pharma" },
    { icon: "💰", name: "Finance", type: "Banking & Fintech" },
    { icon: "🛒", name: "E-commerce", type: "Retail & Online" },
    { icon: "🏢", name: "B2B Services", type: "Enterprise" },
    { icon: "🎓", name: "Education", type: "EdTech & Learning" },
    { icon: "🏗️", name: "Manufacturing", type: "Industrial" },
    { icon: "📱", name: "Mobile Apps", type: "Digital Products" }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Research",
      description: "We interview stakeholders, gather data, analyze results, and understand the complete project context."
    },
    {
      number: "02",
      title: "Storytelling Structure",
      description: "Create a compelling narrative framework using proven case study formats and persuasive techniques."
    },
    {
      number: "03",
      title: "Writing & Design",
      description: "Professional writers craft engaging content while designers create visual elements and infographics."
    },
    {
      number: "04",
      title: "Review & Finalize",
      description: "Client review, stakeholder approval, revisions, and final delivery in multiple formats."
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Focus on measurable outcomes and ROI"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Format",
      description: "Problem-Solution-Result framework"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Data Visualization",
      description: "Compelling charts and infographics"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Professional Design",
      description: "Branded, polished presentation"
    }
  ];

  const benefits = [
    "In-depth client interviews",
    "Data analysis & metrics showcase",
    "Compelling narrative structure",
    "Professional copywriting",
    "Custom graphics & charts",
    "Multiple format delivery (PDF, Web, PPT)",
    "SEO-optimized for digital",
    "Unlimited revisions"
  ];

  const caseStudyElements = [
    { title: "Executive Summary", desc: "Quick overview of the success story" },
    { title: "Client Background", desc: "Company context and industry" },
    { title: "Challenge/Problem", desc: "Pain points and obstacles faced" },
    { title: "Solution Approach", desc: "Strategy and implementation" },
    { title: "Results & Metrics", desc: "Quantifiable outcomes achieved" },
    { title: "Client Testimonial", desc: "Direct quotes and feedback" }
  ];

  const stats = [
    { number: "500+", label: "Case Studies Written" },
    { number: "95%", label: "Client Retention" },
    { number: "300%", label: "Avg. Lead Increase" },
    { number: "50+", label: "Industries Served" }
  ];

  const pricing = [
    {
      name: "Basic",
      price: "$500",
      unit: "per case study",
      features: ["1000-1500 words", "Basic structure", "1 round of revisions", "PDF delivery"],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,000",
      unit: "per case study",
      features: ["2000-2500 words", "Complete structure", "2 rounds of revisions", "PDF + Web version", "Basic graphics"],
      popular: true
    },
    {
      name: "Premium",
      price: "$2,000",
      unit: "per case study",
      features: ["3000+ words", "Full structure + design", "Unlimited revisions", "Multi-format delivery", "Custom infographics", "Video summary"],
      popular: false
    }
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
                Case Study Writing
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
              Transform your success stories into powerful marketing assets. Professional case studies that prove your value and convert prospects into clients.
            </p>
            <Link to="/contact">
            <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
              Get Your Case Study
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
          </div>

          {/* Floating Icon */}
          <div className="hidden lg:block absolute right-20 top-32 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="text-9xl opacity-20">📊</div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="relative max-w-7xl mx-auto px-6 pb-12">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {["Results-Focused", "Data-Driven", "Professional Design"].map((feature, index) => (
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Case Study Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional case study writing for every industry and business need
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

      {/* Industries Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Industries
              </span>{' '}
              We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert case study writing across diverse sectors and specializations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border border-gray-100 hover:border-purple-200"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {industry.name}
                </h4>
                <p className="text-sm text-gray-500">{industry.type}</p>
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
              Why Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Case Studies Work
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
              A structured approach to create compelling, results-driven case studies
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

      {/* Case Study Elements & Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Elements */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  What's Included
                </span>
              </h2>
              <div className="space-y-4">
                {caseStudyElements.map((element, index) => (
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
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-2 border-purple-200">
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic text-center">
              "The case study XSANTA created for us was instrumental in closing major deals. It showcased our results perfectly and became our top-performing sales asset. Highly recommend their services!"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-2xl">
                👔
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Sarah Johnson</h4>
                <p className="text-gray-600">VP of Marketing, TechCorp Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Choose the package that fits your needs and budget
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
            Ready to Showcase Your Success?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's create a compelling case study that proves your value and wins new clients
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Order Case Study
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
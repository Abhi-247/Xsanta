import React, { useState, useEffect } from 'react';
import { PenTool, Zap, Shield, Users, CheckCircle, ArrowRight, ChevronRight, Star, TrendingUp, Calendar, Eye, Heart, MessageCircle, Share2 } from 'lucide-react';

export default function BlogWriting() {
  const [, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [views, setViews] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = 'How to Boost Your SEO...';

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => { setViews(prev => prev < 15420 ? prev + 321 : prev); }, 200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) { setTypedText(fullText.slice(0, i + 1)); i++; }
      else { clearInterval(timer); }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: "✍️", title: "Regular Blog Posts", description: "Consistent, high-quality blog content that keeps your audience engaged and coming back for more." },
    { icon: <TrendingUp className="w-12 h-12" />, title: "SEO Blog Writing", description: "Search-optimized blog posts designed to rank higher and attract organic traffic to your website." },
    { icon: "🎯", title: "Niche Expert Blogs", description: "Specialized content written by subject matter experts who understand your industry inside out." },
    { icon: <Calendar className="w-12 h-12" />, title: "Blog Content Strategy", description: "Comprehensive editorial calendars and content strategies to build your authority and audience." }
  ];

  const blogTypes = [
    { icon: "📝", name: "How-to Guides", type: "Educational" },
    { icon: "💡", name: "Listicles", type: "Engaging" },
    { icon: "📊", name: "Data-Driven Posts", type: "Authority" },
    { icon: "🎯", name: "Product Reviews", type: "Conversion" },
    { icon: "📰", name: "News & Updates", type: "Timely" },
    { icon: "💬", name: "Opinion Pieces", type: "Thought Leadership" },
    { icon: "🔍", name: "Research Articles", type: "In-Depth" },
    { icon: "🎬", name: "Story-Driven Posts", type: "Narrative" }
  ];

  const process = [
    { number: "01", title: "Topic Research", description: "Identify trending topics and keywords that resonate with your audience and business goals." },
    { number: "02", title: "Content Creation", description: "Craft engaging, well-researched blog posts with compelling headlines and clear structure." },
    { number: "03", title: "SEO Optimization", description: "Optimize with strategic keywords, meta descriptions, and internal linking for maximum visibility." },
    { number: "04", title: "Publishing Support", description: "Deliver ready-to-publish content with formatting, images, and scheduling recommendations." }
  ];

  const features = [
    { icon: <Zap className="w-8 h-8" />, title: "Consistent Publishing", description: "Regular content delivery to maintain your blog schedule" },
    { icon: <Shield className="w-8 h-8" />, title: "Original Research", description: "Unique insights backed by data and expert knowledge" },
    { icon: <Users className="w-8 h-8" />, title: "Reader-Centric", description: "Content crafted to engage and provide value to readers" },
    { icon: <Star className="w-8 h-8" />, title: "Brand Voice", description: "Consistent tone that reflects your unique brand identity" }
  ];

  const benefits = ["Keyword research & SEO optimization", "Compelling headlines that drive clicks", "Well-structured, scannable content", "Internal & external linking strategy", "Image sourcing & alt text", "Meta descriptions & tags", "Plagiarism-free guarantee", "Unlimited revisions"];
  const blogGoals = ["Drive organic website traffic", "Build brand authority & trust", "Generate qualified leads", "Improve search rankings", "Engage & retain audience", "Support sales funnel", "Establish thought leadership", "Create shareable content"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Updated */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">Blog Writing Services</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">Transform your blog into a powerful marketing tool with engaging, SEO-optimized content that attracts readers and converts them into loyal customers.</p>
              <a href="/contact">
                <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
                  Start Your Blog Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <div className="flex flex-wrap gap-4 mt-8">
                {["SEO Optimized", "Consistent Quality", "Expert Writers"].map((feature, index) => (
                  <div key={index} className="bg-white px-6 py-3 rounded-full text-purple-600 font-semibold border-2 border-purple-200 shadow-lg">{feature}</div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              {/* Floating Icons */}
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}><PenTool className="w-7 h-7 text-white" /></div>
              <div className="absolute -bottom-4 -left-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}><TrendingUp className="w-6 h-6 text-white" /></div>
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}><span className="text-xl">📝</span></div>

              {/* Blog Post Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Featured Image */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-32 relative">
                  <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded text-xs font-bold text-purple-600">FEATURED</div>
                  <div className="absolute bottom-3 right-3 flex gap-1">
                    <div className="bg-white/20 px-2 py-1 rounded text-xs text-white">SEO</div>
                    <div className="bg-white/20 px-2 py-1 rounded text-xs text-white">Marketing</div>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                    <div>
                      <div className="text-xs font-bold text-gray-800">Sarah Writer</div>
                      <div className="text-xs text-gray-500">5 min read • Jan 15</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{typedText}<span className="animate-pulse">|</span></h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-gray-500">
                        <Eye className="w-4 h-4" />
                        <span className="text-xs">{views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1 text-red-500">
                        <Heart className="w-4 h-4 fill-red-500" />
                        <span className="text-xs">847</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs">56</span>
                      </div>
                    </div>
                    <Share2 className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Traffic Growth Card */}
              <div className="absolute -bottom-8 -right-4 w-44 bg-white rounded-xl shadow-2xl p-3 border border-gray-200">
                <div className="text-xs font-bold text-gray-500 mb-1">ORGANIC TRAFFIC</div>
                <div className="text-xl font-bold text-green-600">+247%</div>
                <div className="flex gap-1 mt-2">
                  {[30, 45, 35, 60, 50, 75, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-green-500 to-emerald-400 rounded-sm" style={{ height: `${h * 0.4}px` }}></div>
                  ))}
                </div>
              </div>

              {/* SEO Score Card */}
              <div className="absolute top-8 -right-2 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">SEO Score</div>
                    <div className="text-lg font-bold text-green-600">95/100</div>
                  </div>
                </div>
              </div>

              {/* Keywords Card */}
              <div className="absolute bottom-24 -left-10 bg-white rounded-xl shadow-xl p-2 border border-gray-100">
                <div className="flex gap-1 text-xs">
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded">SEO</span>
                  <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded">Blog</span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">Tips</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Blog Services</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Professional blog writing solutions to grow your online presence</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} onMouseEnter={() => setHoveredService(index)} onMouseLeave={() => setHoveredService(null)} className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${hoveredService === index ? 'border-purple-200 -translate-y-2' : 'border-gray-100'}`}>
                <div className={`text-purple-600 mb-4 transition-transform duration-300 ${hoveredService === index ? 'scale-110' : ''}`}>{typeof service.icon === 'string' ? <span className="text-5xl">{service.icon}</span> : service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Blog Writing</span></h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 text-white">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Blog Types</span> We Write</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From educational guides to engaging stories, we create diverse content formats</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {blogTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border border-gray-100 hover:border-purple-200">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{type.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{type.name}</h4>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Blog Process</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A proven workflow to deliver blog posts that perform</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-6xl font-bold opacity-30 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-purple-100 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2"><ChevronRight className="w-8 h-8 text-gray-300" /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Goals Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">What's Included</span></h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"><CheckCircle className="w-5 h-5 text-white" /></div>
                    <p className="text-lg text-gray-800 font-medium pt-1">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Blog Goals We Help Achieve</span></h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-500">
                <div className="space-y-3">
                  {blogGoals.map((goal, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
                      <span className="text-gray-700">{goal}</span>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your Blog Empire?</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">Let's create a content strategy that drives traffic, builds authority, and grows your business</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="/contact"><button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">Get Started Today</button></a>
            <a href="/portfolio"><button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">See Sample Blogs</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
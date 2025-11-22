import React, { useState, useEffect } from 'react';
import { PenTool, Zap, Shield, Users, CheckCircle, ArrowRight, ChevronRight, Star, Target, TrendingUp } from 'lucide-react';

export default function CasinoContentWriting() {
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
      icon: "🎰",
      title: "Casino Website Content",
      description: "Engaging website copy that showcases your casino games, promotions, and unique features to attract and retain players."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "SEO Casino Articles",
      description: "Strategic content optimized for casino-related keywords to rank higher and drive qualified traffic to your gaming platform."
    },
    {
      icon: "📝",
      title: "Game Descriptions & Reviews",
      description: "Compelling game descriptions, slot reviews, and table game guides that help players choose and enjoy your offerings."
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Casino Blog Writing",
      description: "Regular blog content covering gaming strategies, industry news, and promotional content to engage your audience."
    }
  ];

  const contentTypes = [
    { icon: "🎲", name: "Game Reviews", type: "Educational" },
    { icon: "📊", name: "Strategy Guides", type: "How-To" },
    { icon: "🏆", name: "Tournament Updates", type: "News" },
    { icon: "💰", name: "Bonus Promotions", type: "Marketing" },
    { icon: "📰", name: "Industry News", type: "Authority" },
    { icon: "🎯", name: "Landing Pages", type: "Conversion" },
    { icon: "📧", name: "Email Campaigns", type: "Engagement" },
    { icon: "📱", name: "App Descriptions", type: "Mobile" }
  ];

  const process = [
    {
      number: "01",
      title: "Casino Research",
      description: "Deep dive into your casino brand, target audience, game offerings, and compliance requirements."
    },
    {
      number: "02",
      title: "Content Strategy",
      description: "Develop keyword-optimized content plans that align with gaming regulations and player interests."
    },
    {
      number: "03",
      title: "Expert Writing",
      description: "Craft compelling, accurate content that highlights games, promotions, and responsible gaming."
    },
    {
      number: "04",
      title: "Compliance Review",
      description: "Ensure all content meets legal requirements and promotes responsible gambling practices."
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Gaming Expertise",
      description: "Writers with deep knowledge of casino games and industry"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Focus",
      description: "Content that meets legal and regulatory requirements"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Player-Centric",
      description: "Content designed to engage and convert players"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Strategic keywords for gaming industry visibility"
    }
  ];

  const benefits = [
    "Casino industry expertise",
    "Responsible gaming messaging",
    "Regulatory compliance review",
    "Game terminology accuracy",
    "Promotional content writing",
    "SEO keyword optimization",
    "Engaging player copy",
    "Multiple content formats"
  ];

  const casinoTopics = [
    "Slot machine reviews",
    "Table game strategies",
    "Live dealer guides",
    "Jackpot game features",
    "Mobile casino content",
    "Payment method guides",
    "Bonus terms & promotions",
    "Tournament announcements"
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
                  Casino Content Writing Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
                Professional gaming content that attracts players, builds trust, and drives engagement while maintaining compliance and promoting responsible gambling.
              </p>
              <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-4 mt-8">
                {["Casino Experts", "Compliance Ready", "Player Focused"].map((feature, index) => (
                  <div key={index} className="bg-white px-6 py-3 rounded-full text-purple-600 font-semibold border-2 border-purple-200 shadow-lg">
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Casino Gaming Mockup */}
            <div className="relative hidden lg:block">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-8 w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <Star className="w-7 h-7 text-white" />
              </div>
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <Target className="w-6 h-6 text-white" />
              </div>

              {/* Main Casino Interface Card */}
              <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl shadow-2xl overflow-hidden border-4 border-yellow-500">
                {/* Header */}
                <div className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 px-6 py-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🎰</span>
                      <span className="font-bold text-lg">Royal Casino</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                        💰 $1,000
                      </div>
                    </div>
                  </div>
                </div>

                {/* Game Grid */}
                <div className="p-6 space-y-4">
                  {/* Featured Banner */}
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-xs uppercase tracking-wide opacity-80 mb-1">Welcome Bonus</div>
                        <div className="text-3xl font-bold">200% Match</div>
                      </div>
                      <div className="text-5xl">🎁</div>
                    </div>
                    <div className="text-sm opacity-90">Up to $5,000 + 100 Free Spins</div>
                  </div>

                  {/* Game Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { emoji: '🎰', name: 'Mega Slots', status: 'Hot' },
                      { emoji: '🃏', name: 'Blackjack', status: 'New' },
                      { emoji: '🎲', name: 'Roulette', status: 'Live' },
                      { emoji: '🎯', name: 'Poker', status: 'VIP' },
                      { emoji: '🏆', name: 'Jackpot', status: '$2.5M' },
                      { emoji: '♠️', name: 'Baccarat', status: 'Hot' }
                    ].map((game, i) => (
                      <div key={i} className="bg-gradient-to-br from-purple-800 to-pink-800 rounded-xl p-3 text-center hover:scale-105 transition-transform cursor-pointer relative">
                        <div className="absolute top-1 right-1 bg-yellow-500 text-xs px-2 py-0.5 rounded-full text-gray-900 font-bold">
                          {game.status}
                        </div>
                        <div className="text-3xl mb-2">{game.emoji}</div>
                        <div className="text-white text-xs font-semibold">{game.name}</div>
                      </div>
                    ))}
                  </div>

                  {/* Stats Bar */}
                  <div className="flex gap-3">
                    <div className="flex-1 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-3 text-white text-center">
                      <div className="text-xs opacity-80">Winners</div>
                      <div className="text-xl font-bold">847</div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-3 text-white text-center">
                      <div className="text-xs opacity-80">Jackpots</div>
                      <div className="text-xl font-bold">$8.2M</div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-3 text-white text-center">
                      <div className="text-xs opacity-80">Online</div>
                      <div className="text-xl font-bold">2.4K</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO Stats Card */}
              <div className="absolute -bottom-8 -right-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">SEO Score</div>
                    <div className="text-lg font-bold text-green-600">92/100</div>
                  </div>
                </div>
              </div>

              {/* Content Badge */}
              <div className="absolute top-8 -right-2 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl mb-1">📝</div>
                  <div className="text-xs text-gray-500">Casino</div>
                  <div className="text-sm font-bold text-purple-600">Content</div>
                </div>
              </div>

              {/* Player Engagement Badge */}
              <div className="absolute bottom-24 -left-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-xl p-3 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="text-xs opacity-90">Engagement</div>
                    <div className="text-lg font-bold">High</div>
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Casino Writing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized content solutions for online casinos and gaming platforms
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
                Casino Writing
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
                Casino Content Types
              </span>{' '}
              We Create
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From game reviews to promotional content, we cover all casino writing needs
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
              A structured approach ensuring quality and compliance
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

      {/* Benefits & Topics Section */}
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

            {/* Casino Topics */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Popular Casino Topics
                </span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-500">
                <div className="space-y-3">
                  {casinoTopics.map((topic, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
                      <span className="text-gray-700">{topic}</span>
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
            Ready to Level Up Your Casino Content?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's create compelling casino content that engages players and drives conversions
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
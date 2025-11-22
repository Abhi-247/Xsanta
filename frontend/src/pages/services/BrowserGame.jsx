import React, { useState, useEffect } from 'react';
import { Gamepad2, Zap, Shield, Users, CheckCircle, ArrowRight, ChevronRight, Star, Trophy, Sparkles } from 'lucide-react';

export default function BrowserGame() {
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
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "HTML5 Game Development",
      description: "Create engaging browser-based games using HTML5 Canvas, WebGL, and modern JavaScript frameworks for cross-platform compatibility."
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Multiplayer Gaming",
      description: "Build real-time multiplayer experiences with WebSocket integration, matchmaking systems, and synchronized gameplay."
    },
    {
      icon: "🎮",
      title: "Game Design & Mechanics",
      description: "Craft compelling gameplay loops, progression systems, and intuitive controls that keep players engaged and coming back."
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Monetization Integration",
      description: "Implement in-game purchases, ads, premium features, and reward systems to maximize revenue potential."
    }
  ];

  const technologies = [
    { icon: "🎨", name: "Phaser.js", type: "Framework" },
    { icon: "⚡", name: "PixiJS", type: "Renderer" },
    { icon: "🎯", name: "Three.js", type: "3D Engine" },
    { icon: "🔷", name: "TypeScript", type: "Language" },
    { icon: "🔌", name: "WebSockets", type: "Real-time" },
    { icon: "🎵", name: "Web Audio", type: "Sound" },
    { icon: "📦", name: "WebGL", type: "Graphics" },
    { icon: "☁️", name: "Cloud Save", type: "Backend" }
  ];

  const process = [
    {
      number: "01",
      title: "Concept & Design",
      description: "Define game mechanics, story, art style, and create detailed game design documents with wireframes."
    },
    {
      number: "02",
      title: "Prototyping",
      description: "Build playable prototypes to test core mechanics and gather feedback for refinement."
    },
    {
      number: "03",
      title: "Development & Art",
      description: "Develop full game features with polished graphics, animations, sound effects, and music integration."
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Rigorous QA testing, optimization, and deployment across multiple platforms and browsers."
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description: "Smooth 60 FPS gameplay with optimized rendering and assets"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cross-Platform",
      description: "Play seamlessly on desktop, mobile, and tablet devices"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Features",
      description: "Leaderboards, achievements, and multiplayer capabilities"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Engaging UX",
      description: "Intuitive controls and addictive gameplay mechanics"
    }
  ];

  const benefits = [
    "Responsive touch & keyboard controls",
    "Progressive web app (PWA) support",
    "Offline gameplay capabilities",
    "Cloud save synchronization",
    "Analytics & player tracking",
    "Leaderboard & ranking systems",
    "In-game shop & inventory",
    "Achievement & reward systems"
  ];

  const gameTypes = [
    "Puzzle & Strategy Games",
    "Action & Arcade Games",
    "Casual & Hyper-Casual",
    "RPG & Adventure Games",
    "Multiplayer Battle Games",
    "Educational & Brain Games",
    "Card & Board Games",
    "Idle & Clicker Games"
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
                  Browser Game Development
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
                Create addictive, high-performance browser games that captivate players worldwide with stunning graphics and engaging gameplay mechanics.
              </p>
              <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
                Start Your Game Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-4 mt-8">
                {["HTML5 Powered", "Cross-Platform", "Multiplayer Ready"].map((feature, index) => (
                  <div key={index} className="bg-white px-6 py-3 rounded-full text-purple-600 font-semibold border-2 border-purple-200 shadow-lg">
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Game Interface Mockup */}
            <div className="relative hidden lg:block">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-8 w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <Sparkles className="w-6 h-6 text-white" />
              </div>

              {/* Main Game Window */}
              <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-800">
                {/* Game Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Gamepad2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-bold">Epic Quest</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* Game Canvas Area */}
                <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6" style={{ height: '400px' }}>
                  {/* Game Scene Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Stars */}
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-white rounded-full animate-pulse"
                        style={{
                          width: Math.random() * 3 + 1 + 'px',
                          height: Math.random() * 3 + 1 + 'px',
                          top: Math.random() * 100 + '%',
                          left: Math.random() * 100 + '%',
                          animationDelay: Math.random() * 2 + 's',
                          animationDuration: Math.random() * 3 + 2 + 's'
                        }}
                      />
                    ))}
                  </div>

                  {/* Game Elements */}
                  <div className="relative h-full flex items-center justify-center">
                    {/* Player Character */}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '1s' }}>
                        <span className="text-3xl">🦸</span>
                      </div>
                    </div>

                    {/* Platforms */}
                    <div className="absolute bottom-12 left-1/4 w-24 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg"></div>
                    <div className="absolute bottom-12 right-1/4 w-24 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg"></div>
                    
                    {/* Collectibles */}
                    <div className="absolute top-20 left-1/3 animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.3s' }}>
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                        <Star className="w-6 h-6 text-yellow-900 fill-yellow-900" />
                      </div>
                    </div>
                    <div className="absolute top-24 right-1/3 animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.6s' }}>
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                        <Star className="w-6 h-6 text-yellow-900 fill-yellow-900" />
                      </div>
                    </div>

                    {/* Enemy */}
                    <div className="absolute top-1/3 right-1/4 animate-pulse">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-2xl">👾</span>
                      </div>
                    </div>
                  </div>

                  {/* HUD Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-sm">❤️ ❤️ ❤️</span>
                      </div>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <div className="flex items-center gap-2 text-white text-sm font-bold">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span>250</span>
                      </div>
                    </div>
                  </div>

                  {/* Level indicator */}
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <div className="text-white text-sm font-bold">Level 3</div>
                  </div>
                </div>

                {/* Game Controls Info */}
                <div className="bg-gray-800 px-6 py-3 flex items-center justify-center gap-6 text-gray-400 text-xs">
                  <div className="flex items-center gap-2">
                    <kbd className="bg-gray-700 px-2 py-1 rounded">←</kbd>
                    <kbd className="bg-gray-700 px-2 py-1 rounded">→</kbd>
                    <span>Move</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <kbd className="bg-gray-700 px-2 py-1 rounded">Space</kbd>
                    <span>Jump</span>
                  </div>
                </div>
              </div>

              {/* FPS Counter Card */}
              <div className="absolute -bottom-8 -right-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Frame Rate</div>
                    <div className="text-lg font-bold text-green-600">60 FPS</div>
                  </div>
                </div>
              </div>

              {/* Players Online Badge */}
              <div className="absolute top-8 -right-2 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="text-xs text-gray-500">Players</div>
                    <div className="text-sm font-bold text-purple-600">12.5K</div>
                  </div>
                </div>
              </div>

              {/* HTML5 Badge */}
              <div className="absolute bottom-24 -left-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-xl p-3 text-white">
                <div className="text-center">
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-xs font-bold">HTML5</div>
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Game Development Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive game development solutions from concept to launch
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
                Game Development
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
                Game Technologies
              </span>{' '}
              We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge frameworks and tools for browser game development
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Game Development Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to successful launch and beyond
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

      {/* Benefits & Game Types Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Game Features
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

            {/* Game Types */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Game Types We Build
                </span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-500">
                <div className="space-y-3">
                  {gameTypes.map((type, index) => (
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
            Ready to Create Your Browser Game?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's bring your game idea to life with engaging gameplay and stunning visuals
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Get Free Game Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Play Demo Games
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
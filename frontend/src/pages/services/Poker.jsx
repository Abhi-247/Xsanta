import React, { useState, useEffect } from 'react';
import { Spade, Zap, Shield, Users, CheckCircle, ArrowRight, ChevronRight, Star, Trophy, Heart, Diamond, Club } from 'lucide-react';

export default function Poker() {
  const [, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => { setActiveCard(prev => (prev + 1) % 5); }, 1000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: <Spade className="w-12 h-12" />, title: "Custom Poker Platforms", description: "Build feature-rich poker platforms with Texas Hold'em, Omaha, and multiple game variants for engaging gameplay." },
    { icon: <Users className="w-12 h-12" />, title: "Multiplayer Systems", description: "Real-time multiplayer functionality with advanced matchmaking, tournament systems, and lobby management." },
    { icon: "💰", title: "Payment Integration", description: "Secure wallet systems, deposits, withdrawals, and in-game currency management with multiple payment gateways." },
    { icon: <Trophy className="w-12 h-12" />, title: "Tournament Management", description: "Complete tournament systems with sit-n-go, scheduled tournaments, leaderboards, and prize distribution." }
  ];

  const technologies = [
    { icon: "🃏", name: "WebSockets", type: "Real-time" },
    { icon: "⚛️", name: "React", type: "Frontend" },
    { icon: "🟢", name: "Node.js", type: "Backend" },
    { icon: "🔴", name: "Redis", type: "Cache" },
    { icon: "🍃", name: "MongoDB", type: "Database" },
    { icon: "🔐", name: "Blockchain", type: "Security" },
    { icon: "💳", name: "Payment APIs", type: "Integration" },
    { icon: "☁️", name: "AWS", type: "Cloud" }
  ];

  const process = [
    { number: "01", title: "Game Design", description: "Define game rules, variants, UI/UX design, and create comprehensive game flow documentation." },
    { number: "02", title: "Core Development", description: "Build poker game logic, hand rankings, betting systems, and real-time synchronization." },
    { number: "03", title: "Features & Integration", description: "Implement tournaments, chat, avatars, payments, and anti-cheat security measures." },
    { number: "04", title: "Testing & Launch", description: "Rigorous testing for fairness, security audits, and deployment with ongoing monitoring." }
  ];

  const features = [
    { icon: <Zap className="w-8 h-8" />, title: "Real-Time Gameplay", description: "Lightning-fast card dealing and smooth gameplay experience" },
    { icon: <Shield className="w-8 h-8" />, title: "Fair & Secure", description: "RNG certified algorithms and anti-cheating mechanisms" },
    { icon: <Users className="w-8 h-8" />, title: "Social Features", description: "Chat, friend lists, gifting, and social engagement tools" },
    { icon: <Star className="w-8 h-8" />, title: "Multi-Platform", description: "Play on web, iOS, and Android with synchronized accounts" }
  ];

  const benefits = ["Texas Hold'em & Omaha variants", "Multi-table functionality", "Private tables & clubs", "Customizable avatars & themes", "Live chat & emojis", "Hand history & statistics", "VIP & loyalty programs", "Admin dashboard & analytics"];
  const gameFeatures = ["Cash Games & Ring Games", "Sit & Go Tournaments", "Scheduled Tournaments", "Heads-Up Poker", "Fast-Fold Poker", "Practice Mode", "Daily Missions & Rewards", "Jackpot & Progressive Prizes"];

  const cards = [
    { suit: "♠", value: "A", color: "text-gray-900" },
    { suit: "♥", value: "K", color: "text-red-500" },
    { suit: "♦", value: "Q", color: "text-red-500" },
    { suit: "♣", value: "J", color: "text-gray-900" },
    { suit: "♠", value: "10", color: "text-gray-900" }
  ];

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
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">Poker Game Development</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">Create professional online poker platforms with real-time multiplayer, tournaments, secure payments, and engaging gameplay that keeps players coming back.</p>
              <a href="/contact">
                <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
                  Start Your Poker Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <div className="flex flex-wrap gap-4 mt-8">
                {["Real-Time Multiplayer", "Secure Payments", "Tournament Ready"].map((feature, index) => (
                  <div key={index} className="bg-white px-6 py-3 rounded-full text-purple-600 font-semibold border-2 border-purple-200 shadow-lg">{feature}</div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              {/* Floating Suit Icons */}
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}><Heart className="w-7 h-7 text-white fill-white" /></div>
              <div className="absolute -bottom-4 -left-8 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}><Spade className="w-6 h-6 text-white fill-white" /></div>
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-lg flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}><Diamond className="w-6 h-6 text-white fill-white" /></div>

              {/* Poker Table */}
              <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl shadow-2xl p-6 border-8 border-amber-900">
                {/* Table Felt */}
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-5 border-4 border-green-500/30">
                  {/* Community Cards */}
                  <div className="flex justify-center gap-2 mb-6">
                    {cards.map((card, i) => (
                      <div key={i} className={`w-12 h-16 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center transition-all duration-300 ${activeCard === i ? 'scale-110 -translate-y-2' : ''}`}>
                        <span className={`text-lg font-bold ${card.color}`}>{card.value}</span>
                        <span className={`text-xl ${card.color}`}>{card.suit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Pot */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-900/80 px-4 py-2 rounded-full">
                      <span className="text-yellow-400 font-bold">POT: $12,500</span>
                    </div>
                  </div>

                  {/* Player Positions */}
                  <div className="flex justify-between">
                    {[{ name: "Player 1", chips: "$5,200" }, { name: "You", chips: "$8,750", active: true }, { name: "Player 3", chips: "$3,100" }].map((player, i) => (
                      <div key={i} className={`text-center ${player.active ? 'scale-110' : ''}`}>
                        <div className={`w-10 h-10 rounded-full mx-auto mb-1 flex items-center justify-center text-white font-bold ${player.active ? 'bg-gradient-to-br from-purple-500 to-pink-500 ring-2 ring-yellow-400' : 'bg-gray-600'}`}>
                          {player.name[0]}
                        </div>
                        <div className="text-white text-xs">{player.name}</div>
                        <div className="text-yellow-400 text-xs font-bold">{player.chips}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hand Strength Card */}
              <div className="absolute -bottom-8 -right-4 w-44 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 p-3">
                <div className="text-xs font-bold text-gray-500 mb-2">YOUR HAND</div>
                <div className="flex gap-1 mb-2">
                  <div className="w-8 h-11 bg-white border-2 border-gray-200 rounded flex flex-col items-center justify-center">
                    <span className="text-xs font-bold">A</span>
                    <span className="text-red-500 text-sm">♥</span>
                  </div>
                  <div className="w-8 h-11 bg-white border-2 border-gray-200 rounded flex flex-col items-center justify-center">
                    <span className="text-xs font-bold">A</span>
                    <span className="text-xs">♠</span>
                  </div>
                </div>
                <div className="text-green-600 text-xs font-bold">Royal Flush!</div>
              </div>

              {/* Live Players Card */}
              <div className="absolute top-8 -right-2 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><Users className="w-4 h-4 text-green-600" /></div>
                  <div>
                    <div className="text-xs text-gray-500">Online</div>
                    <div className="text-sm font-bold text-green-600">2,847</div>
                  </div>
                </div>
              </div>

              {/* Tournament Badge */}
              <div className="absolute bottom-20 -left-10 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <div className="text-xs font-bold text-gray-700">$50K GTD</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Poker Development Services</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Complete poker platform development from concept to launch</p>
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
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Poker Platform</span></h2></div>
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

      {/* Technologies Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Technologies</span> We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Cutting-edge tech stack for reliable poker platforms</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border border-gray-100 hover:border-purple-200">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h4>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Development Process</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From concept to a fully functional poker platform</p>
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

      {/* Benefits & Game Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Platform Features</span></h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Game Modes</span></h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-500">
                <div className="space-y-3">
                  {gameFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Launch Your Poker Platform?</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">Let's build a world-class poker platform that engages players and drives revenue</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="/contact"><button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">Get Free Demo</button></a>
            <a href="/portfolio"><button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">View Live Platforms</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
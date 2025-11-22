import React, { useState, useEffect } from 'react';
import { Gamepad2, Trophy, Users, Zap, CheckCircle, ArrowRight, ChevronRight, Sparkles, Target, Star, Play, Volume2 } from 'lucide-react';

export default function MobileGameDevPage() {
  const [, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [score, setScore] = useState(0);
  const [activeChar, setActiveChar] = useState(0);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setScore(prev => prev < 12500 ? prev + 250 : prev);
      setActiveChar(prev => (prev + 1) % 3);
    }, 300);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: <Gamepad2 className="w-12 h-12" />, title: "Casual & Hyper-Casual Games", description: "Addictive, easy-to-play games with engaging mechanics designed for mass appeal and viral growth potential." },
    { icon: "🎮", title: "Action & Adventure Games", description: "Immersive gameplay experiences with stunning graphics, compelling storylines, and thrilling game mechanics." },
    { icon: "🧩", title: "Puzzle & Strategy Games", description: "Brain-teasing challenges and strategic gameplay that keep players engaged for hours with progressive difficulty." },
    { icon: <Trophy className="w-12 h-12" />, title: "Multiplayer & Social Games", description: "Connected gaming experiences with real-time multiplayer, leaderboards, and social features for player retention." }
  ];

  const gameGenres = [
    { icon: "🎯", name: "Casual", type: "Match-3, Runner" },
    { icon: "⚔️", name: "Action", type: "Combat, Arcade" },
    { icon: "🧠", name: "Puzzle", type: "Logic, Brain" },
    { icon: "🏎️", name: "Racing", type: "Cars, Bikes" },
    { icon: "🎲", name: "Board", type: "Card, Dice" },
    { icon: "🎪", name: "Adventure", type: "RPG, Quest" },
    { icon: "⚽", name: "Sports", type: "Soccer, Cricket" },
    { icon: "🎨", name: "Educational", type: "Kids, Learning" }
  ];

  const technologies = [
    { icon: "🎮", name: "Unity", type: "Engine" },
    { icon: "🔷", name: "Unreal Engine", type: "Engine" },
    { icon: "⚛️", name: "React Native", type: "Framework" },
    { icon: "💙", name: "Flutter", type: "Framework" },
    { icon: "☁️", name: "PlayFab", type: "Backend" },
    { icon: "🔥", name: "Firebase", type: "Backend" },
    { icon: "📊", name: "Analytics", type: "Tracking" },
    { icon: "💰", name: "AdMob", type: "Monetization" }
  ];

  const process = [
    { number: "01", title: "Concept & Design", description: "Brainstorm game mechanics, create concept art, design characters, and develop engaging gameplay loops." },
    { number: "02", title: "Prototyping", description: "Build playable prototypes to test core mechanics, gameplay balance, and player engagement before full development." },
    { number: "03", title: "Full Development", description: "Implement all features, levels, graphics, animations, sound effects, and monetization strategies." },
    { number: "04", title: "Testing & Launch", description: "Rigorous QA testing, beta releases, bug fixes, and successful launch on App Store and Google Play." }
  ];

  const features = [
    { icon: <Sparkles className="w-8 h-8" />, title: "Stunning Graphics", description: "Beautiful 2D/3D graphics optimized for mobile devices" },
    { icon: <Zap className="w-8 h-8" />, title: "Smooth Performance", description: "60fps gameplay on wide range of devices" },
    { icon: <Users className="w-8 h-8" />, title: "Multiplayer Ready", description: "Real-time multiplayer and social features" },
    { icon: <Target className="w-8 h-8" />, title: "Monetization", description: "IAP, ads, and reward systems integration" }
  ];

  const benefits = ["Cross-platform development (iOS & Android)", "Engaging gameplay mechanics", "Stunning 2D and 3D graphics", "In-app purchases integration", "Ad network implementation", "Social features & leaderboards", "Cloud save & sync", "Analytics & user tracking"];
  const gameFeatures = ["Level Design & Progression", "Character Development", "Achievement Systems", "Daily Rewards & Events", "Push Notifications", "Tutorial & Onboarding", "Sound Design & Music", "Localization Support"];

  const whyChoose = [
    { icon: "🎯", title: "Player-Focused Design", description: "We create games that players love with addictive mechanics and engaging content.", stat: "4.5+" },
    { icon: "📱", title: "Games Launched", description: "Successfully developed and launched mobile games across various genres.", stat: "50+" },
    { icon: "👥", title: "Million Downloads", description: "Our games have been downloaded and enjoyed by players worldwide.", stat: "10M+" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Updated */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '6s' }} />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">Mobile Game Development</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">Create captivating mobile games that players can't put down. From casual to hardcore, we build immersive gaming experiences for iOS and Android.</p>
              <a href="/contact">
                <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
                  Start Your Game Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <div className="flex flex-wrap gap-4 mt-8">
                {["Unity & Unreal", "Multiplayer Ready", "Monetization Built-in"].map((feature, index) => (
                  <div key={index} className="bg-white px-6 py-3 rounded-full text-purple-600 font-semibold border-2 border-purple-200 shadow-lg">{feature}</div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              {/* Floating Game Icons */}
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3s' }}><span className="text-2xl">⭐</span></div>
              <div className="absolute -bottom-4 -left-8 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}><span className="text-xl">💎</span></div>
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}><span className="text-xl">❤️</span></div>

              {/* Game Screen Mockup */}
              <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-800">
                {/* Game Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1,2,3].map(i => <span key={i} className="text-yellow-300 text-sm">⭐</span>)}
                    </div>
                    <span className="text-white text-sm font-bold">Level 42</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                      <span className="text-yellow-300">🪙</span>
                      <span className="text-white text-xs font-bold">{score.toLocaleString()}</span>
                    </div>
                    <Volume2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Game Scene */}
                <div className="bg-gradient-to-b from-sky-400 to-sky-200 p-4 relative h-48">
                  {/* Clouds */}
                  <div className="absolute top-4 left-4 text-3xl opacity-80">☁️</div>
                  <div className="absolute top-8 right-8 text-2xl opacity-60">☁️</div>
                  
                  {/* Platform */}
                  <div className="absolute bottom-8 left-0 right-0 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-t-lg"></div>
                  
                  {/* Characters */}
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-6">
                    {["🦊", "🐰", "🐻"].map((char, i) => (
                      <div key={i} className={`text-4xl transition-all duration-300 ${activeChar === i ? 'scale-125 -translate-y-2' : ''}`}>{char}</div>
                    ))}
                  </div>

                  {/* Collectibles */}
                  <div className="absolute top-12 left-1/4 text-2xl animate-pulse">💎</div>
                  <div className="absolute top-16 right-1/4 text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
                </div>

                {/* Game Controls */}
                <div className="bg-gray-800 px-4 py-3 flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center"><span className="text-white">◀</span></div>
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center"><span className="text-white">▶</span></div>
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">JUMP</span>
                  </div>
                </div>
              </div>

              {/* Downloads Card */}
              <div className="absolute -bottom-8 -right-4 w-40 bg-white rounded-xl shadow-2xl p-3 border border-gray-200">
                <div className="text-xs font-bold text-gray-500 mb-1">DOWNLOADS</div>
                <div className="text-2xl font-bold text-green-600">2.5M+</div>
                <div className="flex gap-0.5 mt-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>

              {/* Rating Card */}
              <div className="absolute top-8 -right-2 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><Play className="w-4 h-4 text-green-600 fill-green-600" /></div>
                  <div>
                    <div className="text-xs text-gray-500">Play Store</div>
                    <div className="text-sm font-bold text-gray-800">4.8 ★</div>
                  </div>
                </div>
              </div>

              {/* Genre Tags */}
              <div className="absolute bottom-20 -left-10 bg-white rounded-xl shadow-xl p-2 border border-gray-100">
                <div className="flex gap-1 text-lg">
                  <span>🎮</span><span>🏆</span><span>⚡</span><span>🎯</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Game Development Services</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">End-to-end mobile game development for every genre and platform</p>
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

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{item.icon}</div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">{item.stat}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-purple-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Genres Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Game Genres</span> We Create</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Expertise across all popular mobile game genres</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gameGenres.map((genre, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border border-gray-100 hover:border-purple-200">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{genre.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{genre.name}</h4>
                <p className="text-sm text-gray-500">{genre.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold mb-4">What Makes Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Games Great</span></h2></div>
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
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Technologies</span> We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Industry-leading game engines and development tools</p>
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Development Process</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From concept to launch - bringing your game vision to life</p>
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

      {/* Benefits & Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">What We Deliver</span></h2>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8"><span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Game Features</span></h2>
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

      {/* Testimonial Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12 rounded-2xl shadow-xl border-2 border-purple-200">
            <div className="flex gap-1 mb-6 justify-center">{[...Array(5)].map((_, i) => (<Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />))}</div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic text-center">"XSANTA transformed our game idea into reality. The attention to detail, smooth gameplay, and engaging mechanics exceeded our expectations. Our game hit 1 million downloads in just 3 months!"</p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-2xl">🎮</div>
              <div><h4 className="font-bold text-gray-900 text-lg">Michael Chen</h4><p className="text-gray-600">CEO, GameStudio Inc.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Create the Next Hit Game?</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">Let's build an engaging mobile game that players will love and can't stop playing</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="/contact"><button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">Start Your Game Project</button></a>
            <a href="/portfolio"><button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">View Our Games</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
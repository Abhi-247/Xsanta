import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';


export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2
  }));

  return (
    // <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300">
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-rose-100 to-amber-50">


      {/* Animated Stars Background */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: 0.6
          }}
        />
      ))}

      {/* Parallax Glow Effect */}
      <div
        className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-300"
        style={{
          left: `${mousePosition.x / 20}px`,
          top: `${mousePosition.y / 20}px`,
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">

        {/* Hero Section */}
        <div className={`text-center max-w-5xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          {/* Main Heading with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Innovating
            </span>
            <span className="text-gray-900"> Content & </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Automation
            </span>
            <span className="text-gray-900"> with AI</span>
          </h1>

          {/* Subheading */}
          <p className={`text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            XSANTA Innovation Pvt Ltd empowers businesses with cutting-edge{' '}
            <span className="font-semibold text-gray-900">Content Writing, AI Automation,</span> and{' '}
            <span className="font-semibold text-gray-900">IT Services.</span>
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 transform">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-white/20 animate-shimmer" />
              </div>
              <span className="relative flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
            </button>

            <button className="group relative px-8 py-4 bg-white/30 backdrop-blur-sm text-gray-900 font-semibold rounded-lg border-2 border-white/50 hover:bg-white/60 hover:border-white transition-all duration-500 hover:scale-110 transform shadow-lg hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                <Play className="w-5 h-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                Contact Us
              </span>
            </button>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Stat Card 1 */}
            <div className="group bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:bg-white/40 hover:border-white/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl transform hover:-rotate-2">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-125 transition-transform duration-500">
                500+
              </div>
              <div className="text-gray-700 font-medium">Projects Delivered</div>
            </div>

            {/* Stat Card 2 */}
            <div className="group bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:bg-white/40 hover:border-white/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl transform">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2 group-hover:scale-125 transition-transform duration-500">
                98%
              </div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
            </div>

            {/* Stat Card 3 */}
            <div className="group bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:bg-white/40 hover:border-white/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl transform hover:rotate-2">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-125 transition-transform duration-500">
                24/7
              </div>
              <div className="text-gray-700 font-medium">Support Available</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-10 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2 animate-bounce">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          width: 200%;
          height: 200%;
        }
      `}</style>
    </div>


    // services

  );

}
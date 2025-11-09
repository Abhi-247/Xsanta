import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function GlobalConnectHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const locations = [
    { x: 25, y: 35, delay: 0 },
    { x: 62, y: 28, delay: 0.2 },
    { x: 72, y: 52, delay: 0.4 },
    { x: 85, y: 58, delay: 0.6 }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-white overflow-hidden">
      {/* Floating background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse" 
           style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse" 
           style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-300 rounded-full opacity-10 blur-3xl animate-pulse" 
           style={{ animationDuration: '12s', animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16 items-center min-h-screen">
        {/* Content Section */}
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Let's work together anywhere around the world
          </h1>
          
          <Link to="/contact" className="group bg-white hover:bg-pink-50 text-blue-500 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 border-2 border-transparent hover:border-pink-200">
            Start a Conversation
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Map Section */}
        <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="relative w-full h-96 lg:h-[500px]">
            {/* World Map SVG */}
            <svg viewBox="0 0 1000 500" className="w-full h-full opacity-30">
              {/* Simplified world map paths */}
              <path d="M 100 150 Q 150 120, 250 140 L 300 160 L 350 150 L 400 170 L 420 160 L 450 180 L 500 170 L 550 190 L 580 180" 
                    stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: '4s' }} />
              <path d="M 200 250 Q 250 230, 350 250 L 450 240 L 550 260 L 600 250" 
                    stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: '5s' }} />
              <path d="M 150 200 L 200 190 L 250 210 L 300 200 L 350 220" 
                    stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: '6s' }} />
              
              {/* Continents simplified outlines */}
              <ellipse cx="250" cy="200" rx="80" ry="60" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
              <ellipse cx="650" cy="230" rx="100" ry="70" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
              <ellipse cx="850" cy="280" rx="60" ry="80" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
              <ellipse cx="450" cy="300" rx="90" ry="50" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
            </svg>

            {/* Location Pins */}
            {locations.map((loc, index) => (
              <div
                key={index}
                className="absolute animate-bounce"
                style={{
                  left: `${loc.x}%`,
                  top: `${loc.y}%`,
                  animationDelay: `${loc.delay}s`,
                  animationDuration: '2s'
                }}
              >
                <div className="relative">
                  {/* Ping effect */}
                  <span className="absolute inline-flex h-8 w-8 rounded-full bg-pink-400 opacity-75 animate-ping"></span>
                  {/* Pin */}
                  <svg 
                    className="relative w-8 h-8 text-pink-600 drop-shadow-lg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
              </div>
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path 
                d="M 250 175 Q 450 150, 620 140" 
                stroke="rgba(236, 72, 153, 0.3)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
              <path 
                d="M 620 140 L 720 260" 
                stroke="rgba(236, 72, 153, 0.3)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              <path 
                d="M 720 260 Q 900 250, 850 290" 
                stroke="rgba(236, 72, 153, 0.3)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-20 blur-xl"></div>
    </div>
  );
}
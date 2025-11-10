import React from 'react';

export default function ClientsSection() {
  const clientsRow1 = [
    { name: 'Backbase', logo: 'Backbase' },
    { name: 'Virgin Mobile', logo: 'Virgin mobile' },
    { name: 'CoreLogic', logo: 'CoreLogic®' },
    { name: 'Procountor', logo: 'procountor*' },
    { name: 'Ecoact', logo: 'ecoact' },
  ];

  const clientsRow2 = [
    { name: 'CFC', logo: 'cfc' },
    { name: 'Retail Insight', logo: 'Retail Insight' },
    { name: 'A1', logo: 'A1' },
    { name: 'Sportii', logo: 'SPORTII' },
    { name: 'Backbase', logo: 'Backbase' },
  ];

  // Duplicate arrays to create seamless loop
  const duplicatedRow1 = [...clientsRow1, ...clientsRow1, ...clientsRow1];
  const duplicatedRow2 = [...clientsRow2, ...clientsRow2, ...clientsRow2];

  return (
    <div className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
          Who we've{' '}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            helped
          </span>
        </h2>
      </div>

      <div className="space-y-8">
        {/* First Row - Scrolling Right */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex animate-scroll-right">
            {duplicatedRow1.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4"
                style={{ minWidth: '280px' }}
              >
                <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-white border-2 border-purple-200 rounded-2xl px-8 py-6 shadow-lg hover:shadow-2xl hover:border-purple-400 transition-all duration-300 cursor-pointer group">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent tracking-tight text-center transition-all duration-300">
                    {client.logo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Left */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex animate-scroll-left">
            {duplicatedRow2.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4"
                style={{ minWidth: '280px' }}
              >
                <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-white border-2 border-purple-200 rounded-2xl px-8 py-6 shadow-lg hover:shadow-2xl hover:border-purple-400 transition-all duration-300 cursor-pointer group">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent tracking-tight text-center transition-all duration-300">
                    {client.logo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
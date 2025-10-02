import React from 'react';

const Process = () => {
  const processSteps = [
    { number: "01", title: "Discovery", description: "Understanding your vision and requirements" },
    { number: "02", title: "Strategy", description: "Crafting the perfect solution roadmap" },
    { number: "03", title: "Development", description: "Building with precision and innovation" },
    { number: "04", title: "Launch", description: "Delivering excellence and ongoing support" }
  ];

  return (
    <div className="bg-white px-6 pb-7 py-7">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-center text-5xl md:text-6xl font-bold mb-12">
          Our{' '}
          <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent">
            Process
          </span>
        </h1>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Card */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 text-center hover:-translate-y-2 h-full">
                {/* Number */}
                <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent mb-5 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-500 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-14 -right-4 xl:-right-6 text-3xl text-purple-400 opacity-60 z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
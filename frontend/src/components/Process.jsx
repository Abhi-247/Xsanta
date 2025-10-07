import React from 'react';

const Process = () => {
  const processSteps = [
  { 
    number: "1", 
    title: "Project Initiation", 
    items: [
      "Requirement gathering & analysis",
      "Client onboarding & kickoff call",
      "Project scope definition",
      "Signing agreements & contracts"
    ]
  },
  { 
    number: "2", 
    title: "Planning & Setup", 
    items: [
      "Team allocation & role assignment",
      "Setting up communication channels",
      "Defining workflows & reporting standards",
      "Infrastructure & security setup"
    ]
  },
  { 
    number: "3", 
    title: "Execution & Collaboration", 
    items: [
      "Agile sprint planning & development",
      "Regular status updates & demos",
      "Knowledge transfer & training sessions",
      "Client feedback & iteration"
    ]
  },
  { 
    number: "4", 
    title: "Delivery & Support", 
    items: [
      "Final testing & QA",
      "Deployment & go-live",
      "Post-launch support",
      "Continuous improvement & optimization"
    ]
  }
];


  return (
    <div className="bg-gradient-to-br from-gray-50 to-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-center text-5xl md:text-6xl font-bold mb-20">
          Our{' '}
          <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent">
            Process
          </span>
        </h1>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-purple-300 to-purple-200 hidden lg:block"></div>

          {/* Process Steps */}
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left Side - Phase Circle */}
                  <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start order-2'}`}>
                    <div className="relative group">
                      {/* Outer Circle with Animation */}
                      <div className="w-64 h-64 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-xl flex items-center justify-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border-4 border-purple-100 group-hover:border-purple-300">
                        {/* Inner Content */}
                        <div className="text-center">
                          <div className="text-sm font-semibold text-purple-600 mb-2 tracking-wider">Phase</div>
                          <div className="text-7xl font-extrabold bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent">
                            {step.number}
                          </div>
                        </div>
                      </div>
                      
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 rounded-full bg-purple-400 opacity-0 group-hover:opacity-20 animate-ping"></div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className={`${index % 2 === 0 ? '' : 'order-1'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        {step.title}
                      </h3>
                      <ul className="space-y-3">
                        {step.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 group">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                            <span className="text-gray-700 text-lg leading-relaxed group-hover:text-purple-600 transition-colors duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Dot on Timeline */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${index === 2 ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 'bg-white'}`}></div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <div className="flex items-start gap-6">
                    {/* Phase Circle - Smaller */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-lg flex items-center justify-center border-4 border-purple-100">
                        <div className="text-center">
                          <div className="text-xs font-semibold text-purple-600 mb-1">Phase</div>
                          <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent">
                            {step.number}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {step.title}
                        </h3>
                        <ul className="space-y-2">
                          {step.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line for Mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="ml-16 my-8 w-0.5 h-12 bg-gradient-to-b from-purple-200 to-purple-300"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
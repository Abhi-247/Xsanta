import React from 'react';
import { ArrowRight, Pen, Bot, Code, CheckCircle } from 'lucide-react';

export default function Services() {
  return (
    <div className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-purple-100/50 to-white overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">Core Offerings</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to drive your business forward with innovation and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Content Writing Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-purple-100 hover:border-purple-300 animate-slideUp">
            <div className="mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Pen className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-purple-600 mb-4 group-hover:text-purple-700 transition-colors duration-300">
              Content Writing
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Professional blogs, SEO content, and compelling copywriting that drives engagement and conversions.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700 group/item hover:text-purple-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                <span>SEO-Optimized Blogs</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700 group/item hover:text-purple-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                <span>Copywriting</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700 group/item hover:text-purple-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                <span>Content Strategy</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700 group/item hover:text-purple-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                <span>Social Media Content</span>
              </li>
            </ul>
            
            <button className="group/btn flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition-all duration-300">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* AI Automation Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-purple-100 hover:border-purple-300 animate-slideUp animation-delay-200">
            <div className="mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Bot className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
              AI Automation
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Streamline workflows with intelligent chatbots, automated processes, and custom AI tools.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700 group/item hover:text-purple-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                <span>Custom Chatbots</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700 group/item hover:text-purple-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                <span>Workflow Automation</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700 group/item hover:text-purple-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                <span>AI Tools Development</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700 group/item hover:text-purple-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                <span>Process Optimization</span>
              </li>
            </ul>
            
            <button className="group/btn flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition-all duration-300">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* IT Services Card */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-purple-100 hover:border-purple-300 animate-slideUp animation-delay-400">
            <div className="mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <Code className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
              IT Services
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Comprehensive development, consulting, and cloud solutions to power your digital transformation.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700 group/item hover:text-purple-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                <span>Web Development</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700 group/item hover:text-purple-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                <span>Cloud Solutions</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700 group/item hover:text-purple-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                <span>IT Consulting</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700 group/item hover:text-purple-600 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-purple-500 group-hover/item:scale-125 transition-transform duration-300" />
                <span>System Integration</span>
              </li>
            </ul>
            
            <button className="group/btn flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition-all duration-300">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
}
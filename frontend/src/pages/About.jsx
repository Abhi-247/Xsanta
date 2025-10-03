import React from 'react';
import { Target, Eye, Award, Users, Zap, Heart, TrendingUp, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push boundaries with cutting-edge technology solutions"
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our primary measure of achievement"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve extraordinary results"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Countries Served" }
  ];

  const timeline = [
    { year: "2018", title: "Company Founded", description: "Started our journey with a vision to transform businesses" },
    { year: "2020", title: "Global Expansion", description: "Extended services to international markets" },
    { year: "2022", title: "AI Integration", description: "Pioneered AI-powered solutions for our clients" },
    { year: "2024", title: "Industry Leader", description: "Recognized as a leading IT services provider" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                XSANTA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses worldwide with innovative IT solutions, AI automation, and exceptional digital services since 2018.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To deliver transformative technology solutions that drive business growth, enhance operational efficiency, and create lasting value for our clients across the globe.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the world's most trusted partner in digital transformation, setting new standards in innovation, quality, and customer satisfaction in the IT services industry.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-purple-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Core{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do and shape our company culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Journey */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Milestones that shaped our path to becoming an industry leader
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-300 to-pink-300"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    {index % 2 === 0 && (
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="flex-1">
                    {index % 2 !== 0 && (
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              XSANTA
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2">
            <Zap className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rapid Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We stay ahead Of technology trends to deliver cutting-edge solutions that give you a competitive advantage.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200 hover:-translate-y-2">
            <TrendingUp className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Proven Results
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our track record speaks for itself with hundreds of successful projects and satisfied clients worldwide.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2">
            <Globe className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Global Expertise
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our diverse team bring international perspectives and experience to solve complex business challenges.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
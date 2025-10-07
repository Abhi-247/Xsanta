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

  

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-22">
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
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To revolutionize the gaming industry by creating immersive, innovative, and technically superior gaming experiences that bring joy and excitement to players worldwide. We strive to transform creative visions into reality through cutting-edge technology and exceptional craftsmanship.</p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the global leader in game development and software engineering, recognized for our innovation, quality, and ability to deliver extraordinary digital experiences that shape the future of interactive entertainment and technology. </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 py-10">
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
      <div className="max-w-7xl mx-auto px-6 py-10">
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



      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-6 py-10">
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

      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Work <span className="text-purple-600">Together?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Let's collaborate to bring your vision to life. Whether it's a game, web application, or mobile app, we're here to make it extraordinary.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start a Project
            </button>
            <button className="px-8 py-4 bg-gray-100 text-gray-800 rounded-full font-semibold text-lg shadow hover:shadow-md hover:scale-105 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
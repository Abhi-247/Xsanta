import React, { useState } from 'react';
import CrickStock11 from "../assets/crickstock.jpeg"
import Xegality from "../assets/xegality.jpeg"
import myfirstfoot from "../assets/my-foot-first.jpeg"
import FinWave from "../assets/finwave.jpeg"
import Alexch from "../assets/gamedev.jpeg"
import makemytrip from "../assets/make-my-trip.jpeg"


export default function XSantaPortfolio() {
  const [filter, setFilter] = useState('All');

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '25+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '99%', label: 'Client Satisfaction' }
  ];

  const filters = [
    { name: 'All', count: 6 },
    { name: 'Game Development', count: 2 },
    { name: 'Web Development', count: 2 },
    { name: 'Mobile Development', count: 1 },
    { name: 'UI/UX Design', count: 1 }
  ];

  const projects = [
    {
      id: 1,
      name: 'CrickStock11',
      category: 'Betting Platform',
      image: CrickStock11,
      tags: ['Unity', 'C#', 'Firebase', 'AWS'],
      ratings: { '2M+': '2M+', '4.9': '4.9', '5000k': '5000k' },
      type: 'Game Development'
    },
    {
      id: 2,
      name: 'Xegality',
      category: 'Legal Law Firm',
      image: Xegality,
      tags: ['React', 'Node.js', 'MongoDB', 'D3.js'],
      ratings: { '50K': '50K', '89.5%': '89.5%', '92%': '92%' },
      type: 'Web Development'
    },
    {
      id: 3,
      name: 'My Foot First',
      category: 'Website Development',
      image: myfirstfoot,
      tags: ['React Native', 'Python', 'React Flow', 'Apple Health'],
      ratings: { '100K': '100K', '4M': '4M', '4.9': '4.9' },
      type: 'Web Development'
    },
    {
      id: 4,
      name: 'FinWave',
      category: 'Fintech',
      image: FinWave,
      tags: ['React', 'Node.js', 'MongoDB'],
      ratings: { '33M': '33M', '50K': '50K', '250K': '250K' },
      type: 'Mobile Development'
    },
    {
      id: 5,
      name: 'Alexch',
      category: 'Game Development',
      image: Alexch,
      tags: ['Unreal Engine', 'C++', 'On-Line SDK', 'Steamkit'],
      ratings: { '30K': '30K', '4.9': '4.9', '2.9': '2.9' },
      type: 'Game Development'
    },
    {
      id: 6,
      name: 'Make My Trip',
      category: 'Travel',
      image: makemytrip,
      tags: ['React.js', 'Generative AI', 'React.js', 'MongoDB'],
      ratings: { '6M': '6M', '304.6M': '304.6M', '4.6': '4.6' },
      type: 'UI/UX Design'
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.type === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-16 left-8 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-8 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-20" />

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-16 md:pb-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our innovative projects that have transformed businesses and delighted users worldwide. Each project represents our commitment to excellence and cutting-edge technology.
            </p>
          </div>
        </div>
      </div>


      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((f) => (
            <button
              key={f.name}
              onClick={() => setFilter(f.name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === f.name
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg hover:shadow-xl'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-200 hover:shadow-md'
                }`}
            >
              {f.name} ({f.count})
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div
                className="h-64 relative overflow-hidden"
                style={{
                  background: typeof project.image === 'string' && project.image.startsWith('linear-gradient')
                    ? project.image
                    : `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all"></div>
              </div>


              {/* Project Info */}
              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.name}</h3>

                {/* Ratings */}
                <div className="flex gap-2 mb-4">
                  {Object.entries(project.ratings).map(([key, value]) => (
                    <span
                      key={key}
                      className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium"
                    >
                      {value}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Technologies Used</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105">
                  Get Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      {/* CTA Section */}
<div className="bg-white py-10 overflow-hidden">

  <div className="relative max-w-4xl mx-auto px-6 text-center">
    <p className="text-xl md:text-2xl text-gray-700 mb-8">
      Let's bring your vision to life with our expertise and innovative approach.
    </p>
    <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
      Start Your Project
    </button>
  </div>
</div>



    </div>
  );
}
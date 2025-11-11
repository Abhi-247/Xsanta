import React, { useState } from 'react';
import { Code, Smartphone, Gamepad2, FileText, Globe2, TrendingUp, Server, ShoppingCart, Layers, Apple, MonitorPlay, Spade, Dice1, Chrome, PenTool, BookOpen, FileEdit, ShoppingBag, Sprout, Heart, Car, Dumbbell, Film, Megaphone } from 'lucide-react';

export default function ExploreServices() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      category: "Development",
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: "Frontend Development", icon: <MonitorPlay className="w-5 h-5" />, path: "/services/frontend" },
        { name: "Backend Development", icon: <Server className="w-5 h-5" />, path: "/services/backend" },
        { name: "Full Stack Development", icon: <Layers className="w-5 h-5" />, path: "/services/fullstack" },
        { name: "E-commerce Development", icon: <ShoppingCart className="w-5 h-5" />, path: "/services/ecommerce" }
      ]
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      items: [
        { name: "iOS Development", icon: <Apple className="w-5 h-5" />, path: "/services/ios" },
        { name: "Android Development", icon: <Smartphone className="w-5 h-5" />, path: "/services/android" },
        { name: "React Native", icon: <Layers className="w-5 h-5" />, path: "/services/react-native" },
        { name: "Flutter Development", icon: <Smartphone className="w-5 h-5" />, path: "/services/flutter" }
      ]
    },
    {
      category: "Game Development",
      icon: <Gamepad2 className="w-6 h-6" />,
      items: [
        { name: "Poker Game Development", icon: <Spade className="w-5 h-5" />, path: "/services/poker" },
        { name: "Casino Game Development", icon: <Dice1 className="w-5 h-5" />, path: "/services/casino" },
        { name: "Mobile Game Development", icon: <Smartphone className="w-5 h-5" />, path: "/services/mobile-games" },
        { name: "Browser Game Development", icon: <Chrome className="w-5 h-5" />, path: "/services/browser-games" }
      ]
    },
    {
      category: "Content Writing Solutions",
      icon: <FileText className="w-6 h-6" />,
      items: [
        { name: "Blog Writing", icon: <PenTool className="w-5 h-5" />, path: "/services/blog-writing" },
        { name: "Article Writing", icon: <BookOpen className="w-5 h-5" />, path: "/services/article-writing" },
        { name: "Website Content", icon: <Globe2 className="w-5 h-5" />, path: "/services/website-content" },
        { name: "Product Description", icon: <ShoppingBag className="w-5 h-5" />, path: "/services/product-description" }
      ]
    },
    {
      category: "Translation Solutions",
      icon: <Globe2 className="w-6 h-6" />,
      items: [
        { name: "Article Translation", icon: <FileText className="w-5 h-5" />, path: "/services/article-translation" },
        { name: "Document Translation", icon: <FileEdit className="w-5 h-5" />, path: "/services/document-translation" },
        { name: "Website Translation", icon: <Globe2 className="w-5 h-5" />, path: "/services/website-translation" },
        { name: "Book Translation", icon: <BookOpen className="w-5 h-5" />, path: "/services/book-translation" }
      ]
    },
    {
      category: "Industry Solutions",
      icon: <TrendingUp className="w-6 h-6" />,
      items: [
        { name: "Marketing", icon: <Megaphone className="w-5 h-5" />, path: "/industries/marketing" },
        { name: "Health & Beauty", icon: <Heart className="w-5 h-5" />, path: "/industries/health-beauty" },
        { name: "Sports & Fitness", icon: <Dumbbell className="w-5 h-5" />, path: "/industries/sports-fitness" },
        { name: "Entertainment", icon: <Film className="w-5 h-5" />, path: "/industries/entertainment" },
        { name: "Agriculture", icon: <Sprout className="w-5 h-5" />, path: "/industries/agriculture" },
        { name: "Automotive", icon: <Car className="w-5 h-5" />, path: "/industries/automotive" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden py-20 px-6">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Explore Our Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of digital solutions designed to transform your business
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  {category.category}
                </h2>
              </div>

              {/* Service Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((service, serviceIndex) => (
                  <a
                    key={serviceIndex}
                    href={service.path}
                    onMouseEnter={() => setHoveredCard(`${categoryIndex}-${serviceIndex}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`
                      bg-white p-6 rounded-2xl shadow-lg cursor-pointer block
                      transition-all duration-300 border border-gray-100
                      ${hoveredCard === `${categoryIndex}-${serviceIndex}` 
                        ? 'border-purple-300 -translate-y-2 shadow-2xl' 
                        : 'hover:border-purple-200'}
                    `}
                  >
                    <div className={`
                      w-14 h-14 rounded-xl mb-4 flex items-center justify-center
                      transition-all duration-300
                      ${hoveredCard === `${categoryIndex}-${serviceIndex}`
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white scale-110'
                        : 'bg-purple-100 text-purple-600'}
                    `}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Click to learn more about this service
                    </p>
                    
                    {/* Arrow indicator on hover */}
                    <div className={`
                      mt-4 flex items-center gap-2 text-purple-600 font-semibold text-sm
                      transition-all duration-300
                      ${hoveredCard === `${categoryIndex}-${serviceIndex}` 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-2'}
                    `}>
                      Learn More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            We offer custom solutions tailored to your specific needs
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Contact Us for Custom Solutions
          </a>
        </div>
      </div>
    </div>
  );
}
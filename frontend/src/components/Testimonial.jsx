import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      rating: 5,
      quote: "Outstanding IT services and support. XSANTA's cloud solutions scaled perfectly with our rapid business growth. Highly recommended!",
      name: "Emily Rodriguez",
      position: "Founder at Growth Ventures",
      avatar: "ER"
    },
    {
      rating: 5,
      quote: "Their AI automation tools transformed our workflow efficiency. The team's expertise and dedication exceeded our expectations.",
      name: "Michael Chen",
      position: "CTO at TechFlow",
      avatar: "MC"
    },
    {
      rating: 5,
      quote: "Exceptional content writing services that drove our engagement rates up by 300%. Professional, creative, and results-driven!",
      name: "Sarah Johnson",
      position: "Marketing Director at BrandCo",
      avatar: "SJ"
    },
    {
      rating: 5,
      quote: "The best development partner we've worked with. Fast turnaround, innovative solutions, and excellent communication throughout.",
      name: "David Park",
      position: "CEO at StartupHub",
      avatar: "DP"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-20" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real experiences from businesses that have accelerated their growth with XSANTA.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-purple-50 border border-purple-100 z-10 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-purple-50 border border-purple-100 z-10 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-purple-600 group-hover:text-purple-700" />
          </button>

          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-purple-100 animate-slideUp">
            <div className="text-center">
              {/* Avatar */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl font-bold mb-6 shadow-lg animate-scaleIn">
                {testimonials[activeIndex].avatar}
              </div>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-starPop"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-600 italic mb-8 leading-relaxed transition-all duration-500">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="transition-all duration-500">
                <p className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-1">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-gray-500">
                  {testimonials[activeIndex].position}
                </p>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-500'
                    : 'w-3 bg-gray-300 hover:bg-purple-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
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
          animation: slideUp 0.6s ease-out;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
        @keyframes starPop {
          0% { opacity: 0; transform: scale(0) rotate(-180deg); }
          50% { transform: scale(1.2) rotate(10deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .animate-starPop {
          animation: starPop 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
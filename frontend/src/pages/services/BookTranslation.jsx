import React, { useState, useEffect } from 'react';
import { BookOpen, Globe, Award, Users, CheckCircle, ArrowRight, ChevronRight, Star, Heart, Clock, Shield } from 'lucide-react';

export default function BookTranslationPage() {
  const [, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Fiction Translation",
      description: "Preserve the narrative voice, character development, and emotional depth of novels, short stories, and creative fiction across languages."
    },
    {
      icon: "📚",
      title: "Non-Fiction Translation",
      description: "Accurate translation of biographies, memoirs, self-help books, and educational content with subject matter expertise."
    },
    {
      icon: "🎓",
      title: "Academic & Technical Books",
      description: "Specialized translation of textbooks, research publications, and technical manuals with field-specific terminology."
    },
    {
      icon: "👶",
      title: "Children's Books",
      description: "Age-appropriate translation that captures the magic, rhythm, and educational value of children's literature."
    }
  ];

  const bookGenres = [
    { icon: "📖", name: "Fiction", types: "Novels, Short Stories" },
    { icon: "🔍", name: "Mystery & Thriller", types: "Crime, Suspense" },
    { icon: "❤️", name: "Romance", types: "Contemporary, Historical" },
    { icon: "🚀", name: "Sci-Fi & Fantasy", types: "Space, Magic, Adventure" },
    { icon: "📚", name: "Non-Fiction", types: "Biography, History" },
    { icon: "💼", name: "Business", types: "Management, Finance" },
    { icon: "🧒", name: "Children's", types: "Picture Books, YA" },
    { icon: "🎨", name: "Poetry & Arts", types: "Verse, Literature" }
  ];

  const process = [
    {
      number: "01",
      title: "Manuscript Review",
      description: "We analyze your book's genre, style, and target audience to assign the perfect translator with relevant expertise."
    },
    {
      number: "02",
      title: "Literary Translation",
      description: "Expert translators work meticulously to preserve your voice, style, and cultural nuances while adapting for the target language."
    },
    {
      number: "03",
      title: "Editorial Review",
      description: "Professional editors review the translation for consistency, flow, and cultural appropriateness throughout the entire manuscript."
    },
    {
      number: "04",
      title: "Final Delivery",
      description: "Receive your professionally translated book in your preferred format, ready for publishing in new markets."
    }
  ];

  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Literary Excellence",
      description: "Translators with degrees in literature and years of publishing experience"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Voice Preservation",
      description: "Maintain your unique writing style and authorial voice across languages"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cultural Adaptation",
      description: "Sensitive localization that resonates with target culture readers"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Confidentiality",
      description: "NDA protection for unpublished manuscripts and intellectual property"
    }
  ];

  const benefits = [
    "Professional literary translators",
    "Genre-specific expertise",
    "Style guide adherence",
    "Glossary creation for series",
    "Cultural sensitivity review",
    "Multiple revision rounds",
    "Publishing-ready formatting",
    "ISBNs and metadata translation"
  ];

  const whyChoose = [
    {
      title: "Published Author Network",
      description: "Our translators have published works in multiple languages and understand the publishing industry.",
      stat: "500+"
    },
    {
      title: "Languages Available",
      description: "We translate books into and from over 100 languages worldwide, connecting authors with global readers.",
      stat: "100+"
    },
    {
      title: "Books Translated",
      description: "We've helped authors reach international audiences with thousands of professionally translated books.",
      stat: "2,000+"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Book Translation
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
              Share your story with the world. Professional book translation services that preserve your voice, style, and message across languages and cultures.
            </p>
            <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 shadow-xl hover:scale-105">
              Get Translation Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Floating Book Icon */}
          <div className="hidden lg:block absolute right-20 top-32 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="text-9xl opacity-20">📚</div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="relative max-w-7xl mx-auto px-6 pb-12">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {["Literary Experts", "All Genres", "Confidential"].map((feature, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full text-purple-600 font-semibold border-2 border-purple-200 shadow-lg">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Book Translation Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized translation services for every type of book and manuscript
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${
                  hoveredService === index ? 'border-purple-200 -translate-y-2' : 'border-gray-100'
                }`}
              >
                <div className={`text-purple-600 mb-4 transition-transform duration-300 ${
                  hoveredService === index ? 'scale-110' : ''
                }`}>
                  {typeof service.icon === 'string' ? (
                    <span className="text-5xl">{service.icon}</span>
                  ) : (
                    service.icon
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-purple-100 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Genres Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Genres
              </span>{' '}
              We Translate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across all book genres and literary forms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bookGenres.map((genre, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border border-gray-100 hover:border-purple-200"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {genre.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {genre.name}
                </h4>
                <p className="text-sm text-gray-500">{genre.types}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Authors{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Trust Us
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Translation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From manuscript to published translation - a seamless journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-6xl font-bold opacity-30 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  What's Included
                </span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-800 font-medium pt-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-xl border-2 border-purple-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "The translation of my novel was exceptional. The translator captured the essence of my characters and the emotional depth of the story perfectly. My book is now a bestseller in three countries!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-xl">
                  ✍️
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Emma Richardson</h4>
                  <p className="text-sm text-gray-600">Award-winning Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Competitive rates based on word count and complexity
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Fiction", price: "$0.10", unit: "per word", features: ["Literary translation", "Style preservation", "2 revision rounds"], popular: false },
              { name: "Non-Fiction", price: "$0.12", unit: "per word", features: ["Subject expertise", "Research verification", "3 revision rounds"], popular: true },
              { name: "Technical", price: "$0.15", unit: "per word", features: ["Specialist translators", "Terminology glossary", "Unlimited revisions"], popular: false }
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                  plan.popular ? 'border-purple-500 -translate-y-2' : 'border-gray-100 hover:border-purple-200'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-bold py-2 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-600"> {plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-xl'
                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                }`}>
                  Get Quote
                </button>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mt-8">
            * Volume discounts available for books over 100,000 words
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Share Your Story Globally?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's bring your book to readers around the world with professional translation services
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              Get Free Sample Translation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
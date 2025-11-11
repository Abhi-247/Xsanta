import React, { useState, useEffect } from 'react';
import { FileText, Globe, Award, Clock, CheckCircle, ArrowRight, ChevronRight, Shield, Zap, Users, Download, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function DocumentTranslationPage() {
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
      icon: <FileText className="w-12 h-12" />,
      title: "Legal Document Translation",
      description: "Certified translation of contracts, agreements, certificates, and legal documents with guaranteed accuracy and legal compliance."
    },
    {
      icon: "💼",
      title: "Business Document Translation",
      description: "Professional translation of reports, proposals, presentations, and corporate communications for international business."
    },
    {
      icon: "🎓",
      title: "Academic Document Translation",
      description: "Expert translation of diplomas, transcripts, research papers, and academic credentials with certification options."
    },
    {
      icon: "🏥",
      title: "Medical Document Translation",
      description: "Specialized translation of medical records, reports, prescriptions, and healthcare documents by certified medical translators."
    }
  ];

  const documentTypes = [
    { icon: "📄", name: "Contracts", category: "Legal" },
    { icon: "📜", name: "Certificates", category: "Official" },
    { icon: "📊", name: "Reports", category: "Business" },
    { icon: "📋", name: "Presentations", category: "Corporate" },
    { icon: "🎓", name: "Diplomas", category: "Academic" },
    { icon: "💳", name: "IDs & Passports", category: "Personal" },
    { icon: "🏥", name: "Medical Records", category: "Healthcare" },
    { icon: "📑", name: "Manuals", category: "Technical" }
  ];

  const process = [
    {
      number: "01",
      title: "Document Upload",
      description: "Securely upload your documents through our encrypted platform or email them directly to our team."
    },
    {
      number: "02",
      title: "Expert Translation",
      description: "Certified translators with subject expertise translate your documents with precision and accuracy."
    },
    {
      number: "03",
      title: "Quality Review",
      description: "Independent proofreaders verify accuracy, formatting, and compliance with certification standards."
    },
    {
      number: "04",
      title: "Certified Delivery",
      description: "Receive your translated documents with official certification, notarization if needed, and secure delivery."
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Translation",
      description: "Official certification accepted by governments, courts, and institutions worldwide"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Turnaround",
      description: "24-hour express service available for urgent document translation needs"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Confidential",
      description: "Bank-level encryption and strict NDAs to protect your sensitive documents"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Translators",
      description: "Native speakers with professional certifications and industry experience"
    }
  ];

  const benefits = [
    "Certified and notarized translations",
    "Accepted by all government agencies",
    "Same-day service available",
    "Accurate formatting preservation",
    "Subject matter expertise",
    "Apostille services available",
    "Free revision guarantee",
    "Secure document handling"
  ];

  const industries = [
    { name: "Legal & Immigration", icon: "⚖️" },
    { name: "Healthcare & Medical", icon: "🏥" },
    { name: "Education & Academic", icon: "🎓" },
    { name: "Business & Finance", icon: "💼" },
    { name: "Government & Official", icon: "🏛️" },
    { name: "Technical & Engineering", icon: "⚙️" }
  ];

  const fileFormats = [
    "PDF", "Word (DOC/DOCX)", "Excel (XLS/XLSX)",
    "PowerPoint (PPT/PPTX)", "Images (JPG/PNG)", "Scanned Documents"
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
                Document Translation
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
              Professional, certified document translation services for legal, business, academic, and personal documents. Fast, accurate, and officially recognized worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:scale-105">
                  <Upload className="w-5 h-5" />
                  Upload Document
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link to="/contact">
                <button className="bg-white border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300">
                  Get Instant Quote
                </button>
              </Link>

            </div>
          </div>

          {/* Floating Document Icon */}
          <div className="hidden lg:block absolute right-20 top-32 animate-bounce" style={{ animationDuration: '3s' }}>
            <FileText className="w-32 h-32 text-purple-300 opacity-40" />
          </div>
        </div>

        {/* Feature Pills */}
        <div className="relative max-w-7xl mx-auto px-6 pb-12">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {["Certified Translation", "24-Hour Service", "100% Secure"].map((feature, index) => (
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
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Translation Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized document translation services for every industry and purpose
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border ${hoveredService === index ? 'border-purple-200 -translate-y-2' : 'border-gray-100'
                  }`}
              >
                <div className={`text-purple-600 mb-4 transition-transform duration-300 ${hoveredService === index ? 'scale-110' : ''
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

      {/* Document Types Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Documents
              </span>{' '}
              We Translate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From legal contracts to medical records, we translate all document types
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {documentTypes.map((doc, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center group border border-gray-100 hover:border-purple-200"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {doc.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {doc.name}
                </h4>
                <p className="text-sm text-gray-500">{doc.category}</p>
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
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Services
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
              Simple, secure, and efficient document translation in 4 easy steps
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

      {/* Industries & File Formats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Industries */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Industries
                </span>{' '}
                We Serve
              </h2>
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
                    <div className="text-4xl">{industry.icon}</div>
                    <p className="text-lg text-gray-800 font-semibold">
                      {industry.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits & File Formats */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Key Benefits
                </span>
              </h2>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-800 font-medium pt-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Supported File Formats</h3>
                <div className="flex flex-wrap gap-2">
                  {fileFormats.map((format, index) => (
                    <span key={index} className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-purple-600 border border-purple-200">
                      {format}
                    </span>
                  ))}
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
            Simple <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Clear, competitive pricing based on document type and urgency
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Standard", time: "3-5 Days", price: "$25", unit: "per page", features: ["Certified translation", "Quality guarantee", "Email delivery"], popular: false },
              { name: "Express", time: "24 Hours", price: "$40", unit: "per page", features: ["Priority service", "Certified translation", "Rush delivery"], popular: true },
              { name: "Urgent", time: "Same Day", price: "$60", unit: "per page", features: ["Immediate service", "Certified translation", "Instant delivery"], popular: false }
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${plan.popular ? 'border-purple-500 -translate-y-2' : 'border-gray-100 hover:border-purple-200'
                  }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-bold py-2 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-purple-600 font-semibold mb-4">{plan.time}</p>
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
                <button className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-xl'
                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                  }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mt-8">
            * Notarization and apostille services available for additional fee
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Need Your Documents Translated?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Get certified, accurate translations delivered fast. Upload your document now for an instant quote
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
              <Upload className="w-5 h-5" />
              Upload Document Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
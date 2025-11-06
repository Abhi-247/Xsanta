import React, { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle, XCircle, AlertTriangle, FileText, Mail, Clock } from 'lucide-react';

export default function RefundPolicyPage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 200) {
          setActiveSection(section.getAttribute('data-section'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'overview', title: 'Overview', icon: <FileText className="w-5 h-5" /> },
    { id: 'eligibility', title: 'Eligibility for Refund', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'process', title: 'Refund Process', icon: <RefreshCw className="w-5 h-5" /> },
    { id: 'cancellations', title: 'Cancellations', icon: <XCircle className="w-5 h-5" /> },
    { id: 'digital', title: 'Digital Products', icon: <AlertTriangle className="w-5 h-5" /> },
  ];

  const scrollToSection = (id) => {
    const element = document.querySelector(`[data-section="${id}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Refund Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Last Updated: November 6, 2025
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your satisfaction is our priority. This policy outlines how XSANTA handles refunds and cancellations.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sticky Navigation */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {section.icon}
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>

              {/* Quick Contact Card */}
              <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200">
                <h4 className="font-bold text-gray-900 mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Contact us for refund inquiries
                </p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300">
                  Contact Support
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              
              {/* Overview Section */}
              <section data-section="overview" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FileText className="w-8 h-8 text-purple-600" />
                    Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At XSANTA, providing quality IT and software services is our commitment. This Refund Policy outlines the terms under which refunds and cancellations are handled by our company.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions or need further clarification about our Refund Policy, please do not hesitate to contact us.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This Refund Policy applies only to our online and offline services and is valid for clients who engage with XSANTA. This policy does not apply to services rendered by third parties or partners.
                  </p>
                </div>
              </section>

              {/* Eligibility Section */}
              <section data-section="eligibility" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                    Eligibility for Refund
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We stand behind our services and products. However, if you are not satisfied with our services, here are the conditions under which a refund may be granted:
                  </p>

                  <div className="space-y-4 mb-6">
                    {[
                      {
                        title: 'Service Quality Issues',
                        desc: 'Problems that are directly attributable to our actions and not resolved within a reasonable time frame.'
                      },
                      {
                        title: 'Non-Delivery of Services',
                        desc: 'Non-delivery of services due to factors within our control.'
                      },
                      {
                        title: 'Major Discrepancies',
                        desc: 'Significant differences in the services delivered from their description.'
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-600">
                        <h3 className="font-bold text-purple-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border-2 border-pink-200">
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Time Frame</h3>
                        <p className="text-gray-700">
                          Refund requests must be submitted within <strong>30 days</strong> of service delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Process Section */}
              <section data-section="process" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <RefreshCw className="w-8 h-8 text-purple-600" />
                    Process for Requesting a Refund
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    To request a refund, please follow these steps:
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        step: '01',
                        title: 'Contact Us',
                        desc: 'Reach out to us with your order number, details of the service provided, and reasons for the refund request.'
                      },
                      {
                        step: '02',
                        title: 'Review Process',
                        desc: 'We will review your request thoroughly and investigate the matter.'
                      },
                      {
                        step: '03',
                        title: 'Decision & Response',
                        desc: 'We will inform you of our decision within 30 days of receiving your request.'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Cancellations Section */}
              <section data-section="cancellations" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <XCircle className="w-8 h-8 text-purple-600" />
                    Cancellations
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you wish to cancel your service order, please contact us as soon as possible.
                  </p>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-yellow-900 mb-2">Important Notice</h3>
                        <p className="text-gray-700">
                          Cancellation requests may be subject to fees or charges depending on the stage of service completion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Digital Products Section */}
              <section data-section="digital" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-purple-600" />
                    No Refunds for Digital Products
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Due to the digital nature of certain services, we do not offer refunds for such products once the order is confirmed and the product is sent.
                  </p>
                  
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="font-bold text-purple-900 mb-3">Digital Products Include:</h3>
                    <ul className="space-y-2">
                      {[
                        'Software licenses and downloads',
                        'Digital assets and source code',
                        'API access and integrations',
                        'Online training and courses'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Changes to Policy */}
              <section className="mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Our Refund Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify this refund policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Contact Us</h2>
                  </div>
                  <p className="text-purple-100 mb-6 text-lg">
                    If you have any questions or concerns about our Refund Policy, or would like to request a refund, please don't hesitate to contact us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Email Support
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                      Live Chat
                    </button>
                  </div>
                </div>
              </section>

              {/* Summary Card */}
              <section>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Summary</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: <Clock className="w-6 h-6" />, title: '30 Days', desc: 'Refund request window' },
                      { icon: <RefreshCw className="w-6 h-6" />, title: '30 Days', desc: 'Response time frame' },
                      { icon: <XCircle className="w-6 h-6" />, title: 'Cancellations', desc: 'May incur fees' },
                      { icon: <AlertTriangle className="w-6 h-6" />, title: 'Digital Products', desc: 'Non-refundable' }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl shadow">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-purple-600">{item.icon}</div>
                          <h4 className="font-bold text-gray-900">{item.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
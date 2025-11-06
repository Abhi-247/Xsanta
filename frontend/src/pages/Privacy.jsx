import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, FileText, AlertCircle, CheckCircle, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
    { id: 'overview', title: 'Overview', icon: <Eye className="w-5 h-5" /> },
    { id: 'consent', title: 'Consent', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'information', title: 'Information We Collect', icon: <FileText className="w-5 h-5" /> },
    { id: 'usage', title: 'How We Use Your Information', icon: <Lock className="w-5 h-5" /> },
    { id: 'cookies', title: 'Cookies & Web Beacons', icon: <AlertCircle className="w-5 h-5" /> },
    { id: 'rights', title: 'Your Rights', icon: <Shield className="w-5 h-5" /> },
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Last Updated: November 6, 2025
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your privacy is important to us. This policy outlines how XSANTA collects, uses, and protects your personal information.
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
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              
              {/* Overview Section */}
              <section data-section="overview" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Eye className="w-8 h-8 text-purple-600" />
                    Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At XSANTA, accessible from our official website, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by XSANTA and how we use it.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have additional questions or require more information about our Privacy Policy, please do not hesitate to contact us.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This Privacy Policy applies only to our online activities and is valid for visitors to our website with regard to the information that they shared and/or collect in XSANTA. This policy is not applicable to any information collected offline or via channels other than this website.
                  </p>
                </div>
              </section>

              {/* Consent Section */}
              <section data-section="consent" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                    Consent
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                  </p>
                </div>
              </section>

              {/* Information We Collect */}
              <section data-section="information" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FileText className="w-8 h-8 text-purple-600" />
                    Information We Collect
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                  </p>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section data-section="usage" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Lock className="w-8 h-8 text-purple-600" />
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use the information we collect in various ways, including to:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Provide, operate, and maintain our website',
                      'Improve, personalize, and expand our website',
                      'Understand and analyze how you use our website',
                      'Develop new products, services, features, and functionality',
                      'Communicate with you for customer service and updates',
                      'Send you emails for marketing and promotional purposes',
                      'Find and prevent fraud'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Log Files</h3>
                  <p className="text-gray-700 leading-relaxed">
                    XSANTA adheres to a standard protocol of using log files. These files log visitors when they visit our website. This is a common practice among hosting companies and forms part of their analytics services. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamps, referring/exit pages, and possibly the number of clicks. This information is not linked to any personally identifiable information. The purpose is to analyze trends, administer the site, track users' movements on the website, and gather demographic information.
                  </p>
                </div>
              </section>

              {/* Cookies & Web Beacons */}
              <section data-section="cookies" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <AlertCircle className="w-8 h-8 text-purple-600" />
                    Cookies and Web Beacons
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Like many websites, XSANTA uses 'cookies'. These cookies are used to store information including visitors' preferences and the pages on the website that they accessed or visited. This information helps to optimize the user experience by customizing our web page content based on visitors' browser type and/or other information.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Advertising Partners Privacy Policies</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You can consult the list of Privacy Policies for each of the advertising partners of XSANTA.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements and links that appear on XSANTA, sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                  </p>
                  <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Note:</strong> XSANTA has no access to or control over these cookies used by third-party advertisers.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Third Party Privacy Policies</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    XSANTA's Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions on how to opt-out of certain options.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You can choose to disable cookies through your individual browser options. Detailed information about cookie management with specific web browsers can be found on the browsers' respective websites.
                  </p>
                </div>
              </section>

              {/* Your Rights */}
              <section data-section="rights" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-purple-600" />
                    Your Rights
                  </h2>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">CCPA Privacy Rights (Do Not Sell My Personal Information)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Under the CCPA, among other rights, California consumers have the right to:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Request that a business that collects a consumer\'s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.',
                      'Request that a business delete any personal data about the consumer that a business has collected.',
                      'Request that a business that sells a consumer\'s personal data not sell the consumer\'s personal data.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">GDPR Data Protection Rights</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We aim to ensure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      { title: 'The right to access', desc: 'You have the right to request copies of your personal data. We may charge a small fee for this service.' },
                      { title: 'The right to rectification', desc: 'You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.' },
                      { title: 'The right to erasure', desc: 'You have the right to request that we erase your personal data, under certain conditions.' },
                      { title: 'The right to restrict processing', desc: 'You have the right to request that we restrict the processing of your personal data, under certain conditions.' },
                      { title: 'The right to object to processing', desc: 'You have the right to object to our processing of your personal data, under certain conditions.' },
                      { title: 'The right to data portability', desc: 'You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.' }
                    ].map((item, index) => (
                      <li key={index} className="bg-purple-50 p-4 rounded-lg">
                        <strong className="text-purple-900">{item.title}</strong>
                        <p className="text-gray-700 mt-1">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Children's Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Protecting children while they use the internet is another priority for us. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Have Questions?</h2>
                  </div>
                  <p className="text-purple-100 mb-6 text-lg">
                    If you have any questions about this Privacy Policy or would like to exercise your rights, please don't hesitate to contact us.
                  </p>
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Contact Us
                  </button>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
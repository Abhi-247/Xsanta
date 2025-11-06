import React, { useState, useEffect } from 'react';
import { FileText, Scale, Link2, MessageSquare, Shield, AlertTriangle, CheckCircle, Mail } from 'lucide-react';

export default function TermsConditionsPage() {
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
    { id: 'introduction', title: 'Introduction', icon: <FileText className="w-5 h-5" /> },
    { id: 'license', title: 'License', icon: <Scale className="w-5 h-5" /> },
    { id: 'comments', title: 'User Comments', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'hyperlinking', title: 'Hyperlinking', icon: <Link2 className="w-5 h-5" /> },
    { id: 'content', title: 'Content Liability', icon: <Shield className="w-5 h-5" /> },
    { id: 'disclaimer', title: 'Disclaimer', icon: <AlertTriangle className="w-5 h-5" /> },
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
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Terms and Conditions
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Last Updated: November 6, 2025
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to XSANTA! Please read these terms and conditions carefully before using our services.
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

              {/* Important Notice */}
              <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200">
                <AlertTriangle className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Important</h4>
                <p className="text-sm text-gray-600">
                  By using our website, you agree to these terms and conditions.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction Section */}
              <section data-section="introduction" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FileText className="w-8 h-8 text-purple-600" />
                    Introduction
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to XSANTA! These terms and conditions outline the rules and regulations for the use of XSANTA's Website.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By accessing our website, you agree to these terms and conditions. If you do not agree to all of the terms and conditions stated on this page, please do not continue to use XSANTA's website.
                  </p>

                  <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600 my-6">
                    <h3 className="font-bold text-purple-900 mb-3">Terminology</h3>
                    <p className="text-gray-700 mb-4">
                      The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice, and all Agreements:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span><strong>"Client", "You", and "Your"</strong> refers to you, the person logging onto this website and complying with the Company's terms and conditions.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span><strong>"The Company", "Ourselves", "We", "Our", and "Us"</strong> refers to XSANTA.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span><strong>"Party", "Parties", or "Us"</strong> refers to both the Client and ourselves.</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services.
                  </p>
                </div>
              </section>

              {/* License Section */}
              <section data-section="license" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Scale className="w-8 h-8 text-purple-600" />
                    License
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Unless specified otherwise, XSANTA and/or its licensors own the intellectual property rights for all material on XSANTA's Website. All intellectual property rights are reserved. You may access content from XSANTA for your personal use, subject to restrictions set in these terms and conditions.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">You must not:</h3>
                  <div className="space-y-3">
                    {[
                      'Republish material from XSANTA\'s Website',
                      'Sell, rent, or sub-license material from XSANTA\'s Website',
                      'Reproduce, duplicate, or copy material from XSANTA\'s Website',
                      'Redistribute content from XSANTA\'s Website'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mt-6">
                    This Agreement shall begin on the date hereof.
                  </p>
                </div>
              </section>

              {/* Comments Section */}
              <section data-section="comments" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <MessageSquare className="w-8 h-8 text-purple-600" />
                    User Comments
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas. XSANTA does not filter, edit, publish, or review Comments prior to their presence on the website.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Comments do not reflect the views and opinions of XSANTA, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts them. To the extent permitted by applicable laws, XSANTA shall not be liable for the Comments or any liability, damages, or expenses caused as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                  </p>

                  <div className="bg-purple-50 p-6 rounded-xl mb-6">
                    <h3 className="font-bold text-purple-900 mb-4">XSANTA reserves the right to:</h3>
                    <p className="text-gray-700">
                      Monitor all Comments and to remove any which can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">You warrant and represent that:</h3>
                  <ul className="space-y-3">
                    {[
                      'You are entitled to post the Comments on our website and have all necessary licenses and consents to do so',
                      'The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party',
                      'The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material which is an invasion of privacy',
                      'The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-700 leading-relaxed mt-6">
                    You hereby grant XSANTA a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media.
                  </p>
                </div>
              </section>

              {/* Hyperlinking Section */}
              <section data-section="hyperlinking" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Link2 className="w-8 h-8 text-purple-600" />
                    Hyperlinking to our Content
                  </h2>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Organizations that may link without prior approval:</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      'Government agencies',
                      'Search engines',
                      'News organizations',
                      'Online directory distributors',
                      'System-wide Accredited Businesses'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    These organizations may link to our home page, publications, or other Website information so long as the link: (a) is not deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products/services; and (c) fits within the context of the linking party's site.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">We may consider link requests from:</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Consumer and/or business information sources',
                      'Dot.com community sites',
                      'Associations or groups representing charities',
                      'Online directory distributors',
                      'Internet portals',
                      'Accounting, law, and consulting firms',
                      'Educational institutions and trade associations'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
                    <h4 className="font-bold text-yellow-900 mb-2">Important Notice</h4>
                    <p className="text-gray-700">
                      No use of XSANTA's logo or other artwork will be allowed for linking absent a trademark license agreement.
                    </p>
                  </div>
                </div>
              </section>

              {/* iFrames & Content Liability */}
              <section data-section="content" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-purple-600" />
                    Content Liability & iFrames
                  </h2>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">iFrames</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">Content Liability</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims arising on your Website.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">Reservation of Rights</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We reserve the right to request that you remove all links or any particular link to our Website. You agree to immediately remove all links to our Website upon request.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We also reserve the right to amend these terms and conditions and our linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                  </p>
                </div>
              </section>

              {/* Disclaimer Section */}
              <section data-section="disclaimer" className="mb-12 scroll-mt-24">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-purple-600" />
                    Disclaimer
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">Nothing in this disclaimer will:</h3>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Limit or exclude our or your liability for death or personal injury',
                      'Limit or exclude our or your liability for fraud or fraudulent misrepresentation',
                      'Limit any of our or your liabilities in any way that is not permitted under applicable law',
                      'Exclude any of our or your liabilities that may not be excluded under applicable law'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                    <p className="text-gray-700 leading-relaxed">
                      The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mt-6">
                    As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                  </p>
                </div>
              </section>

              {/* Removal of Links */}
              <section className="mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Removal of Links from Our Website</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to do so or to respond to you directly.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Questions About Terms?</h2>
                  </div>
                  <p className="text-purple-100 mb-6 text-lg">
                    If you have any questions or concerns about these Terms and Conditions, please don't hesitate to contact us.
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
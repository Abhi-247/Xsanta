import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoXsanta from '../assets/logoXsanta.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    "Article Writing",
    "Blog Writing",
    "Case Study Writing",
    "Product Descriptions",
    "SEO Writing",
    "Ebook Writing",
    "Proofreading",
    "Newsletter Writing"
  ];

  const industries = [
    "Agriculture",
    "Health & Beauty",
    "Automotive",
    "Sports & Fitness",
    "Realestate & Construction",
    "Entertainment & Gaming",
    "Marketing & Advertising"
  ];

  const company = [
    'About Us',
    'Our Team',
    'Case Studies',
    'Careers',
    'Blog',
    'Contact'
  ];

  const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Refund Policy', path: '/refund' },
  { name: 'Terms and Conditions', path: '/terms' },
];

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 relative overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <img
                src={logoXsanta}
                alt="Xsanta Logo"
                className="w-12 h-12 object-contain rounded-lg bg-white/10 p-1"
              />
              XSANTA
            </div>
            <p className="text-purple-200 leading-relaxed mt-4 mb-6">
              Empowering businesses with cutting-edge Content Writing, AI Automation, and IT Services for the digital age.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-200 hover:text-pink-300 transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-200 hover:text-pink-300 transition-colors duration-300">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-200 hover:text-pink-300 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-pink-400 mt-1" />
                <a href="mailto:hello@xsanta.com" className="text-purple-200 hover:text-pink-300">
                  hello@xsanta.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-pink-400 mt-1" />
                <a href="tel:+15551234567" className="text-purple-200 hover:text-pink-300">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-1" />
                <span className="text-purple-200">
                  123 Innovation Drive <br /> Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-purple-200 text-sm">
            © 2024 XSANTA Innovation Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-purple-200 hover:text-pink-300 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
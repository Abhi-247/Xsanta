import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoXsanta from '../assets/logoXsanta.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'Article Writing', path: '/services/article-writing' },
    { name: 'Blog Writing', path: '/services/blog-writing' },
    { name: 'Case Study Writing', path: '/services/casestudy-writing' },
    { name: 'Product Descriptions', path: '/services/product-description' },
    { name: 'SEO Writing', path: '/services/seo' },
    { name: 'Ebook Writing', path: '/services/ebook-writing' },
    { name: 'Proofreading', path: '/services/proofreading' },
    { name: 'Newsletter Writing', path: '/services/newsletter-writing' },

  ];

  const industries = [
    { name: 'Agriculture', path: '/industries/agriculture' },
    { name: 'Health & Beauty', path: '/industries/health-beauty' },
    { name: 'Automotive', path: '/industries/automotive' },
    { name: 'Sports & Fitness', path: '/industries/sports-fitness' },
    { name: 'Realestate & Construction', path: '/industries/realestate-construction' },
    { name: 'Entertainment & Gaming', path: '/industries/entertainment' },
    { name: 'Marketing & Advertising', path: '/industries/marketing' }

  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about' },
    { name: 'Case Studies', path: '/about' },
    { name: 'Careers', path: '/contact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }

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
            <Link to='/'>
            <div className="flex items-center gap-2 text-2xl font-bold text-white">
              <img
                src={logoXsanta}
                alt="Xsanta Logo"
                className="w-12 h-12 object-contain rounded-lg bg-white/10 p-1"
              />
              XSANTA
            </div>
            </Link>
            <p className="text-purple-200 leading-relaxed mt-4 mb-6">
              Empowering businesses with cutting-edge Content Writing, AI Automation, and IT Services for the digital age.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((link, index) => (
                <Link key={index}
                  to={link.path} className="text-purple-200 hover:text-pink-300 transition-colors duration-300  flex"
                >
                  {link.name}

                </Link>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map((link, index) => (
                <Link key={index}
                  to={link.path} className="text-purple-200 hover:text-pink-300 transition-colors duration-300 flex"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-purple-200 hover:text-pink-300 transition-colors flex duration-300"
                >
                  {link.name}

                </Link>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-pink-400 mt-1" />
                <a href="mailto:xsantainnovation@gmail.com" className="text-purple-200 hover:text-pink-300">
                  xsantainnovation@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-pink-400 mt-1" />
                <a href="tel:+15551234567" className="text-purple-200 hover:text-pink-300">
                  +91 9462650270
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-8 h-7 text-pink-400 mt-1" />
                <span className="text-purple-200">
                  Sansthan Path
                  Jhalana Gram, Malviya Nagar
                  <br /> Jaipur, Rajasthan 30201
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
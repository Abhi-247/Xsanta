import { useState, useEffect } from "react";
import { 
  ChevronDown, Menu, X, Home, User, Briefcase, Image, Mail, Info, 
  Zap, Shield, Award, ShoppingCart, Apple, Smartphone, Globe, 
  FileText, File, Book, Activity, Car, Building, Heart, Film
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavItems = [
    { name: 'home', label: 'Home', icon: Home, path: '/' },
    { name: 'about', label: 'About', icon: User, path: '/about' },
    {
      name: 'services',
      label: 'Services',
      icon: Briefcase,
      path: '/services',
      dropdown: [
        {
          name: 'development',
          label: 'Development',
          icon: Shield,
          children: [
            { name: 'frontend', label: 'Frontend Development', icon: Globe, path: '/services/frontend' },
            { name: 'backend', label: 'Backend Development', icon: FileText, path: '/services/backend' },
            { name: 'fullstack', label: 'Full Stack Development', icon: Award, path: '/services/fullstack' },
            { name: 'ecommerce', label: 'E-commerce Development', icon: ShoppingCart, path: '/services/ecommerce' }
          ]
        },
        {
          name: 'mobile-dev',
          label: 'Mobile Development',
          icon: Zap,
          children: [
            { name: 'ios', label: 'iOS Development', icon: Apple, path: '/services/ios' },
            { name: 'android', label: 'Android Development', icon: Smartphone, path: '/services/android' },
            { name: 'react-native', label: 'React Native', icon: Globe, path: '/services/react-native' },
            { name: 'flutter', label: 'Flutter Development', icon: File, path: '/services/flutter' }
          ]
        },
        {
          name: 'game-dev',
          label: 'Game Development',
          icon: Award,
          children: [
            { name: 'poker', label: 'Poker Game Development', icon: Zap, path: '/services/poker' },
            { name: 'casino', label: 'Casino Game Development', icon: Award, path: '/services/casino' },
            { name: 'mobile-game', label: 'Mobile Game Development', icon: Smartphone, path: '/services/mobile-game' },
            { name: 'browser-game', label: 'Browser Game Development', icon: Globe, path: '/services/browser-game' }
          ]
        },
        {
          name: 'content',
          label: 'Content Writing Solutions',
          icon: FileText,
          children: [
            { name: 'blog', label: 'Blog Writing', icon: FileText, path: '/services/blog-writing' },
            { name: 'article', label: 'Article Writing', icon: File, path: '/services/article-writing' },
            { name: 'website-content', label: 'Website Content', icon: Globe, path: '/services/website-content' },
            { name: 'product-description', label: 'Product Description', icon: ShoppingCart, path: '/services/product-description' }
          ]
        },
        {
          name: 'translation',
          label: 'Translation Solutions',
          icon: Book,
          children: [
            { name: 'article-translation', label: 'Article Translation', icon: FileText, path: '/services/article-translation' },
            { name: 'doc-translation', label: 'Document Translation', icon: File, path: '/services/doc-translation' },
            { name: 'website-translation', label: 'Website Translation', icon: Globe, path: '/services/website-translation' },
            { name: 'book-translation', label: 'Book Translation', icon: Book, path: '/services/book-translation' }
          ]
        },
        {
          name: 'industries',
          label: 'Industry Solutions',
          icon: Activity,
          children: [
            { name: 'marketing', label: 'Marketing', icon: Zap, path: '/industries/marketing' },
            { name: 'health-beauty', label: 'Health & Beauty', icon: Heart, path: '/industries/health-beauty' },
            { name: 'sports-fitness', label: 'Sports & Fitness', icon: Activity, path: '/industries/sports-fitness' },
            { name: 'entertainment', label: 'Entertainment', icon: Film, path: '/industries/entertainment' }
          ]
        }
      ]
    },
    { name: 'portfolio', label: 'Portfolio', icon: Image, path: '/portfolio' },
    { name: 'blog', label: 'Blog', icon: Info, path: '/blog' },
    { name: 'contact', label: 'Contact', icon: Mail, path: '/contact' }
  ];

  const navLinkClass = (linkName, isDropdown = false) =>
    `group relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center gap-2 ${activeLink === linkName
      ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg shadow-violet-300/50"
      : "text-violet-700 hover:text-white hover:bg-gradient-to-r hover:from-violet-400 hover:to-pink-400 hover:shadow-lg hover:shadow-violet-200/50"
    } ${isDropdown ? 'w-full justify-start' : ''}`;

  const handleLinkClick = (linkName, path) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
    setHoveredDropdown(null);
    
    // For demo purposes, we're using console.log
    // In a real app with React Router, you'd use: navigate(path)
    console.log(`Navigating to: ${path}`);
    
    // Simulate navigation by updating URL without reload
    if (path) {
      window.history.pushState({}, '', path);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 transition-all duration-500 border-b border-violet-100/50 ${isScrolled ? 'shadow-2xl shadow-violet-100/30' : 'shadow-lg'
      }`}>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-pink-500 to-violet-700 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center"
          onClick={() => handleLinkClick('home', '/')}>
              <img
                src="/src/assets/logoXsanta.png"
                alt="Xsanta Logo"
                className="w-12 h-12 object-contain rounded-lg bg-white/10 p-1"
              />
              XSANTA
            </div>
          

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setHoveredDropdown(item.name)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <div
                  className={navLinkClass(item.name)}
                  onClick={() => handleLinkClick(item.name, item.path)}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="relative z-10">{item.label}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${hoveredDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                  )}

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-300/20 to-pink-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 translate-x-[-200%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  </div>
                </div>

                {/* Mega Dropdown Menu */}
                {item.dropdown && hoveredDropdown === item.name && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-7xl bg-white/98 backdrop-blur-lg rounded-xl shadow-2xl border border-violet-100 overflow-hidden">
                    <div className="p-6">
                      <div className="flex gap-6 justify-between">
                        {item.dropdown.map((category) => (
                          <div key={category.name} className="flex-1 min-w-0">
                            <h3 className="text-gray-900 font-bold text-sm mb-3 flex items-center gap-2">
                              <category.icon className="w-4 h-4 text-violet-600" />
                              {category.label}
                            </h3>
                            <div className="space-y-2">
                              {category.children.map((child) => (
                                <div
                                  key={child.name}
                                  className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-violet-50 transition-all duration-300 cursor-pointer"
                                  onClick={() => handleLinkClick(child.name, child.path)}
                                >
                                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <child.icon className="w-3.5 h-3.5 text-white" />
                                  </div>
                                  <div className="text-gray-700 font-medium text-xs whitespace-nowrap group-hover:text-violet-600 transition-colors overflow-hidden text-ellipsis">
                                    {child.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={() => handleLinkClick('contact', '/contact')}
              className="px-6 py-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-violet-600 hover:to-pink-600"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-violet-700 hover:bg-violet-100 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border border-violet-100 rounded-b-xl shadow-xl">
            <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
              {mainNavItems.map((item) => (
                <div key={item.name}>
                  <div
                    className={navLinkClass(item.name, true)}
                    onClick={() => handleLinkClick(item.name, item.path)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.dropdown && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.dropdown.map((category) => (
                        <div key={category.name} className="space-y-1">
                          <div className="text-xs font-semibold text-gray-500 px-3 py-1 flex items-center gap-2">
                            <category.icon className="w-3 h-3" />
                            {category.label}
                          </div>
                          {category.children.map((child) => (
                            <div
                              key={child.name}
                              className={`${navLinkClass(child.name, true)} text-xs ml-2`}
                              onClick={() => handleLinkClick(child.name, child.path)}
                            >
                              <child.icon className="w-3 h-3" />
                              <span>{child.label}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-violet-100">
                <button 
                  onClick={() => handleLinkClick('contact', '/contact')}
                  className="w-full px-4 py-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Top decoration */}
        <div className="absolute -top-px left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-pink-400 opacity-30 animate-pulse"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-bounce opacity-30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${2 + (i % 3) * 2}px`,
              backgroundColor: i % 2 === 0 ? '#a855f7' : '#ec4899',
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + i * 0.2}s`
            }}
          />
        ))}
      </div>
    </nav>
  );
}
import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Search } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Game Development', 'AI & Technology', 'Web Development', 'Mobile Apps', 'Business'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Game Development with Unreal Engine 5',
      excerpt: 'Explore how Unreal Engine 5 is revolutionizing the gaming industry with cutting-edge graphics and innovative features that are changing the way we create games.',
      category: 'Game Development',
      author: 'Rajesh Kumar',
      date: 'Oct 1, 2025',
      readTime: '8 min read',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      featured: true
    },
    {
      id: 2,
      title: 'AI-Powered Automation: Transforming Business Operations',
      excerpt: 'Discover how artificial intelligence is reshaping business processes and driving efficiency across industries with smart automation solutions.',
      category: 'AI & Technology',
      author: 'Priya Sharma',
      date: 'Sep 28, 2025',
      readTime: '6 min read',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      featured: true
    },
    {
      id: 3,
      title: 'Building Scalable Web Applications with React & Node.js',
      excerpt: 'Learn the best practices for creating high-performance web applications that scale seamlessly as your business grows.',
      category: 'Web Development',
      author: 'Amit Patel',
      date: 'Sep 25, 2025',
      readTime: '10 min read',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      featured: false
    },
    {
      id: 4,
      title: 'Mobile-First Design: Why It Matters in 2025',
      excerpt: 'Understanding the importance of mobile-first approach in modern app development and how it impacts user engagement.',
      category: 'Mobile Apps',
      author: 'Sneha Reddy',
      date: 'Sep 22, 2025',
      readTime: '7 min read',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      featured: false
    },
    {
      id: 5,
      title: 'Blockchain Gaming: The Next Revolution',
      excerpt: 'How blockchain technology is creating new opportunities in gaming with NFTs, play-to-earn models, and decentralized gaming ecosystems.',
      category: 'Game Development',
      author: 'Vikram Singh',
      date: 'Sep 20, 2025',
      readTime: '9 min read',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      featured: false
    },
    {
      id: 6,
      title: 'Digital Transformation: A Complete Guide for Businesses',
      excerpt: 'Navigate the digital transformation journey with our comprehensive guide covering strategy, implementation, and best practices.',
      category: 'Business',
      author: 'Anjali Verma',
      date: 'Sep 18, 2025',
      readTime: '12 min read',
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      featured: false
    },
    {
      id: 7,
      title: 'Optimizing Database Performance for Enterprise Applications',
      excerpt: 'Essential techniques and strategies to improve database performance and ensure your enterprise applications run smoothly.',
      category: 'Web Development',
      author: 'Rahul Mehra',
      date: 'Sep 15, 2025',
      readTime: '8 min read',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      featured: false
    },
    {
      id: 8,
      title: 'The Rise of Cross-Platform Mobile Development',
      excerpt: 'Comparing React Native and Flutter for building efficient cross-platform mobile applications in 2025.',
      category: 'Mobile Apps',
      author: 'Neha Kapoor',
      date: 'Sep 12, 2025',
      readTime: '6 min read',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Insights, tutorials, and thought leadership on technology, development, and innovation from the XSanta team.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-200 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {selectedCategory === 'All' && !searchQuery && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 group cursor-pointer"
              >
                <div 
                  className="h-64 relative overflow-hidden"
                  style={{ background: post.image }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-purple-600">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <button className="mt-6 flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Posts Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2 group cursor-pointer"
            >
              <div 
                className="h-48 relative overflow-hidden"
                style={{ background: post.image }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-purple-600">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <button className="flex items-center gap-1 text-purple-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No articles found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      {/* <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get the latest articles, insights, and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}

    </div>
  );
}
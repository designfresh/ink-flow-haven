
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedPost from '@/components/FeaturedPost';
import BlogCard from '@/components/BlogCard';
import { getFeaturedPost, getRecentPosts, getAllTags } from '@/data/blogPosts';

const Index = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(5).filter(post => !post.featured);
  const allTags = getAllTags();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Welcome to Ink Flow Haven
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of thoughts, stories, and ideas about writing, blogging, and content creation.
            </p>
          </section>
          
          {/* Featured Post Section */}
          {featuredPost && (
            <section className="mb-16">
              <div className="flex justify-between items-baseline mb-6">
                <h2 className="font-serif text-2xl font-semibold">Featured Article</h2>
                <Link to="/blog" className="text-gray-600 hover:text-black hover:underline transition-colors">
                  View all articles →
                </Link>
              </div>
              <FeaturedPost post={featuredPost} />
            </section>
          )}
          
          {/* Recent Posts Section */}
          <section className="mb-16">
            <div className="flex justify-between items-baseline mb-6">
              <h2 className="font-serif text-2xl font-semibold">Recent Articles</h2>
              <Link to="/blog" className="text-gray-600 hover:text-black hover:underline transition-colors">
                View all articles →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
          
          {/* Newsletter Section */}
          <section className="bg-gray-50 rounded-xl p-8 text-center mb-16">
            <h2 className="font-serif text-2xl font-semibold mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get notified about new articles and updates. No spam, just valuable content.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 mb-2 sm:mb-0"
              />
              <button className="px-6 py-3 bg-gray-900 text-white rounded-r hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </section>
          
          {/* Topics Section */}
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-6">Explore Topics</h2>
            
            <div className="flex flex-wrap gap-3">
              {allTags.map(tag => (
                <Link 
                  key={tag} 
                  to={`/blog?tag=${tag}`}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

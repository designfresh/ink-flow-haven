
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { blogPosts, getAllTags, getPostsByTag } from '@/data/blogPosts';

const Blog = () => {
  const location = useLocation();
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const allTags = getAllTags();
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tagParam = searchParams.get('tag');
    
    if (tagParam) {
      setActiveTag(tagParam);
      setFilteredPosts(getPostsByTag(tagParam));
    } else {
      setActiveTag(null);
      setFilteredPosts(blogPosts);
    }
  }, [location.search]);
  
  const handleTagClick = (tag: string) => {
    if (activeTag === tag) {
      setActiveTag(null);
      setFilteredPosts(blogPosts);
    } else {
      setActiveTag(tag);
      setFilteredPosts(getPostsByTag(tag));
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="mb-12 text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">All Articles</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our collection of articles about writing, blogging, and content creation.
            </p>
          </div>
          
          {/* Tags filter */}
          <div className="mb-10">
            <h2 className="font-serif text-xl font-semibold mb-4">Filter by Topic</h2>
            <div className="flex flex-wrap gap-3">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeTag === tag 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
              {activeTag && (
                <button
                  onClick={() => {
                    setActiveTag(null);
                    setFilteredPosts(blogPosts);
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
          
          {/* Blog posts grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="font-serif text-xl mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">
                There are no articles with the selected filter.
              </p>
              <button
                onClick={() => {
                  setActiveTag(null);
                  setFilteredPosts(blogPosts);
                }}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;

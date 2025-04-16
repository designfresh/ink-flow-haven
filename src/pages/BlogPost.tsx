
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogContent from '@/components/BlogContent';
import BlogCard from '@/components/BlogCard';
import { getPostById, getRecentPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = id ? getPostById(id) : undefined;
  const relatedPosts = getRecentPosts(3).filter(p => p.id !== id);
  
  useEffect(() => {
    if (!post) {
      navigate('/404');
    }
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 border-b border-gray-200 mb-8">
          <div className="container mx-auto px-4 sm:px-6 py-12">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
            </Link>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-4xl">
              {post.title}
            </h1>
            
            {post.subtitle && (
              <h2 className="font-serif text-xl sm:text-2xl text-gray-700 mb-6 max-w-3xl">
                {post.subtitle}
              </h2>
            )}
            
            <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4 gap-y-2">
              <div className="flex items-center">
                {post.author.avatar && (
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                <span className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  {post.author.name}
                </span>
              </div>
              
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </span>
              
              <span className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="container mx-auto px-4 sm:px-6 mb-10">
          <div className="max-w-4xl mx-auto">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
        
        {/* Post Content */}
        <div className="container mx-auto px-4 sm:px-6 mb-16">
          <div className="max-w-3xl mx-auto">
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <Link 
                    key={tag} 
                    to={`/blog?tag=${tag}`}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
            
            {/* Post Content */}
            <BlogContent content={post.content} />
            
            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                {post.author.avatar && (
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-lg">{post.author.name}</h3>
                  <p className="text-gray-600 text-sm">Contributing Writer</p>
                </div>
              </div>
              <p className="text-gray-700">
                A passionate writer and content creator with expertise in digital marketing and content strategy.
              </p>
            </div>
          </div>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="font-serif text-2xl font-semibold mb-8 text-center">You might also enjoy</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedPosts.map(relatedPost => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;

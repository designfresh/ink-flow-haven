
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import type { BlogPost } from '@/data/blogPosts';

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <article className="relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md lg:grid lg:grid-cols-2 animate-fade-up">
      <div className="relative lg:h-full">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-80 lg:h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 lg:hidden"></div>
      </div>
      
      <div className="p-6 lg:p-8 flex flex-col justify-center">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <span className="px-2.5 py-0.5 bg-gray-100 text-gray-800 rounded-full font-medium text-xs">
            Featured
          </span>
          <span>•</span>
          <span className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {post.readTime}
          </span>
        </div>
        
        <Link to={`/blog/${post.id}`}>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-3 hover:text-gray-700 transition-colors">
            {post.title}
          </h2>
        </Link>
        
        {post.subtitle && (
          <h3 className="font-serif text-xl text-gray-700 mb-3">
            {post.subtitle}
          </h3>
        )}
        
        <p className="text-gray-600 mb-6">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            {post.author.avatar && (
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-10 h-10 rounded-full mr-3"
              />
            )}
            <div>
              <span className="block font-medium text-gray-900">{post.author.name}</span>
              <span className="block text-sm text-gray-500">{post.date}</span>
            </div>
          </div>
          
          <Link 
            to={`/blog/${post.id}`} 
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;

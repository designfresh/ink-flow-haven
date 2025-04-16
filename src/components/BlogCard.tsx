
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import type { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-up">
      <Link to={`/blog/${post.id}`}>
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
        />
      </Link>
      
      <div className="p-5">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
          <span className="flex items-center">
            <User className="mr-1 h-4 w-4" />
            {post.author.name}
          </span>
          <span>•</span>
          <span className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {post.readTime}
          </span>
        </div>
        
        <Link to={`/blog/${post.id}`} className="inline-block mb-2">
          <h2 className="font-serif text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {post.tags?.slice(0, 2).map(tag => (
              <span 
                key={tag} 
                className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <Link 
            to={`/blog/${post.id}`} 
            className="text-sm font-medium text-gray-700 hover:text-black hover:underline transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;

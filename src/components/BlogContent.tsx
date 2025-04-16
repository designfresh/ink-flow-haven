
import React from 'react';

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <div 
      className="blog-content prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-a:text-blue-600"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogContent;

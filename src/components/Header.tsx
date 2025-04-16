
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto py-4 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-4 sm:mb-0">
          <Link to="/" className="font-serif text-2xl font-bold tracking-tight hover:text-gray-700 transition-colors">
            Ink Flow Haven
          </Link>
          <p className="text-sm text-gray-500 mt-1">Thoughts, stories, and ideas</p>
        </div>
        
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-black transition-colors">Home</Link>
          <Link to="/blog" className="text-gray-700 hover:text-black transition-colors">Articles</Link>
          <Link to="/about" className="text-gray-700 hover:text-black transition-colors">About</Link>
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Ink Flow Haven</h3>
            <p className="text-gray-600 mb-4">A place for thoughts, stories, and ideas.</p>
            <p className="text-gray-500 text-sm">© {currentYear} Ink Flow Haven. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Home</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-black transition-colors">Articles</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-600 mb-4">Sign up for our newsletter to receive the latest articles and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button className="px-4 py-2 bg-gray-800 text-white rounded-r hover:bg-gray-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

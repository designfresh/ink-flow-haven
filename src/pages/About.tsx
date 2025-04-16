
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">About Ink Flow Haven</h1>
            
            <img 
              src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80" 
              alt="Serene landscape with trees and mountains" 
              className="w-full h-auto rounded-xl shadow-md mb-10"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Welcome to Ink Flow Haven, a digital sanctuary where words meet wisdom, and stories find their home. 
                Founded in 2025, our blog is dedicated to the craft of writing, the art of blogging, and the 
                science of content creation.
              </p>
              
              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
              
              <p>
                At Ink Flow Haven, we believe in the transformative power of words. Our mission is to provide writers, 
                bloggers, and content creators with the insights, tools, and inspiration they need to tell their stories 
                effectively and authentically.
              </p>
              
              <p>
                We strive to create a space where creativity flows freely, where ideas are exchanged openly, 
                and where the craft of writing is celebrated in all its forms.
              </p>
              
              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">What We Cover</h2>
              
              <p>Our content spans a wide range of topics, including but not limited to:</p>
              
              <ul>
                <li>Writing techniques and best practices</li>
                <li>Content strategy and planning</li>
                <li>Blogging platforms and tools</li>
                <li>SEO and digital marketing for writers</li>
                <li>The psychology of engaging content</li>
                <li>Personal experiences and case studies</li>
              </ul>
              
              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Meet the Team</h2>
              
              <p>
                Ink Flow Haven is brought to you by a team of passionate writers, editors, and content strategists who 
                have spent years navigating the ever-evolving landscape of digital content.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Alex Johnson" 
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h3 className="font-semibold text-xl mb-2">Alex Johnson</h3>
                  <p className="text-gray-600 text-sm mb-3">Founder & Lead Editor</p>
                  <p>
                    With over a decade of experience in content creation and digital publishing, Alex founded 
                    Ink Flow Haven to share his passion for storytelling and help others find their voice.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Sarah Williams" 
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h3 className="font-semibold text-xl mb-2">Sarah Williams</h3>
                  <p className="text-gray-600 text-sm mb-3">Content Strategist</p>
                  <p>
                    Sarah brings her expertise in SEO and content strategy to help writers not just create 
                    beautiful content, but content that reaches and resonates with the right audience.
                  </p>
                </div>
              </div>
              
              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Connect With Us</h2>
              
              <p>
                We love hearing from our readers! Whether you have a question, suggestion, or just want to say hello, 
                don't hesitate to reach out through our contact form or social media channels.
              </p>
              
              <p>
                You can also subscribe to our newsletter to receive our latest articles and updates directly in your inbox.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

import React from 'react';
import { ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">AI-powered</span>
                <br />
                <span className="text-gray-900">web and mobile</span>
                <br />
                <span className="text-gradient">in 12 weeks</span>
              </h1>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                  </div>
                  <span className="font-semibold">n8n</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Start Discovery
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Portfolio Showcase</span>
              </button>
            </div>

            {/* Contact Options */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-semibold">T</span>
                </div>
                <span className="text-gray-600 text-sm">Telegram</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm font-semibold">W</span>
                </div>
                <span className="text-gray-600 text-sm">WhatsApp</span>
              </div>
            </div>

            {/* Technologies */}
            <div className="pt-8">
              <p className="text-gray-500 text-sm mb-4">We use only modern technologies ASD ASD</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-blue-600 font-mono text-sm">#react</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-blue-500 font-mono text-sm">#mysql</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-green-600 font-mono text-sm">#mongodb</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-green-500 font-mono text-sm">#nginx</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-red-600 font-mono text-sm">#redis</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-blue-700 font-mono text-sm">#typescript</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-yellow-600 font-mono text-sm">#javascript</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-96 h-96 relative">
              <img 
                src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
                alt="3D Abstract Illustration" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';

const CaseStudies = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
        </div>

        {/* Dios Case Study */}
        <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Dios
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                A comprehensive digital platform that revolutionizes how businesses manage their operations. 
                Built with cutting-edge technology and AI-powered features to deliver exceptional user experience.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold mb-1">$2,500</div>
                  <div className="text-blue-100 text-sm">Project Budget</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">12w</div>
                  <div className="text-blue-100 text-sm">Development Time</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  Node.js
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  AI Integration
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <img 
                  src="/images/dios-dashboard.png" 
                  alt="Dios Dashboard" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
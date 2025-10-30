import React from 'react';

const Services = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Web Development */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Web Development
              </h3>
              <div className="flex space-x-2 mb-6">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  Frontend
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  Backend
                </span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  Full Stack
                </span>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/web-development-illustration.png" 
                alt="Web Development Illustration" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Mobile Development */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                MOBILE DEVELOPMENT
              </h3>
              <div className="flex justify-center space-x-2 mb-6">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  iOS
                </span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  Android
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 mt-16 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Get the same high-quality service for a smaller task
          </h3>
          <button className="btn-primary mt-6">
            Start Small Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
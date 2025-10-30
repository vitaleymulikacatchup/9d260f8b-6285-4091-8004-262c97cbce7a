import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-gray-600">Reviews from Clutch</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Testimonial placeholders - would be populated with real data */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Exceptional work quality and professional approach. The team delivered exactly what we needed on time and within budget."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">Client Name</div>
                  <div className="text-sm text-gray-500">Company Position</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
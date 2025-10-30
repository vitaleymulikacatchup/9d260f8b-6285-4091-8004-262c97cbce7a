import React from 'react';
import { X } from 'lucide-react';

const CookieConsent = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          This site uses cookies
        </h3>
        
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          We and selected third parties use cookies (or similar technologies) for 
          technical purposes, to enhance and analyze site usage, to support our 
          marketing efforts, and for other purposes described below.
        </p>
        
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          By clicking "Accept all", you agree to the storing of cookies on your 
          device for these purposes.
        </p>
        
        <div className="flex space-x-3">
          <button 
            onClick={onClose}
            className="btn-outline flex-1"
          >
            Deny
          </button>
          <button 
            onClick={onClose}
            className="btn-secondary flex-1"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-brand-100 py-12 border-t border-brand-800" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-serif text-2xl font-bold text-white mb-4">Castaway Frames</h3>
          <p className="text-brand-200 max-w-sm mb-6">
            The unsung heroes of outdoor comfort. We build the skeletons so your beautiful covers can come to life. Engineered for longevity, designed for your style.
          </p>
          <div className="flex space-x-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 bg-brand-800 rounded-full flex items-center justify-center text-xs hover:bg-brand-700 cursor-pointer">IG</div>
             <div className="w-8 h-8 bg-brand-800 rounded-full flex items-center justify-center text-xs hover:bg-brand-700 cursor-pointer">FB</div>
             <div className="w-8 h-8 bg-brand-800 rounded-full flex items-center justify-center text-xs hover:bg-brand-700 cursor-pointer">PT</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Shop Frames</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Sofa Structures</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dining Bases</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Lounger Rails</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Hardscaping</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Measurement Guide</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Installation Help</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Frame Warranty</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-brand-800 text-center text-xs text-brand-400">
        &copy; {new Date().getFullYear()} Castaway Frames. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
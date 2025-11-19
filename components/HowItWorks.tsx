import React from 'react';
import { ClipboardCheck, Armchair, Hammer } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="frame-guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Simple Process</h2>
          <h3 className="text-3xl font-serif font-bold text-gray-900">Give Your Covers a Home</h3>
          <p className="mt-4 text-lg text-gray-600">
            Most companies sell you the frame and force you to buy their cushions. We do the opposite. 
            You bring the style, we provide the strength.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 mx-auto w-2/3 h-0.5 bg-gray-100 z-0" />

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-brand-100 bg-white">
              <ClipboardCheck size={40} className="text-brand-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">1. Measure Your Cover</h4>
            <p className="text-gray-600 leading-relaxed">
              Check your existing cushions or slings. Our frames are built to industry-standard sizing (22", 24", 25").
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-brand-100 bg-white">
              <Armchair size={40} className="text-brand-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">2. Select Your Foundation</h4>
            <p className="text-gray-600 leading-relaxed">
              Choose from our marine-grade aluminum, teak, or steel frames. Filter by "Sofa", "Dining", or "Chaise".
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-brand-100 bg-white">
              <Hammer size={40} className="text-brand-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">3. DIY Assembly</h4>
            <p className="text-gray-600 leading-relaxed">
              Our frames ship flat-packed. Assembling and attaching your existing fabric takes less than 30 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
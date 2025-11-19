import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenMeasure: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenMeasure }) => {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transform scale-105 transition-transform duration-[20s] hover:scale-100"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=80")',
        }}
      >
         <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl bg-white/80 backdrop-blur-md p-8 md:p-12 shadow-2xl border-l-4 border-brand-500">
          <h2 className="text-brand-700 font-semibold tracking-wide uppercase text-sm mb-3">
            The Perfect Fit
          </h2>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            You have the cover. <br/>We have the <span className="text-brand-600 italic">frame</span>.
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Don't let your beautiful custom slings and cushions sit on the ground. Discover our premium, marine-grade furniture frames designed to fit your existing covers perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#collections" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-none text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-lg hover:shadow-xl">
              Find Your Frame
            </a>
            <button 
              onClick={onOpenMeasure}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-600 text-base font-medium rounded-none text-brand-700 bg-transparent hover:bg-brand-50 transition-colors"
            >
              Measure Your Sling <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
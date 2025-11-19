import React from 'react';
import { X, Ruler, Info } from 'lucide-react';

interface MeasurementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MeasurementModal: React.FC<MeasurementModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-brand-600 p-6 flex justify-between items-center">
          <div className="flex items-center gap-3 text-white">
            <Ruler size={24} />
            <h2 className="text-2xl font-serif font-bold">Fit Guarantee Guide</h2>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          <div className="bg-brand-50 p-4 rounded-lg border border-brand-100 flex gap-3 items-start">
            <Info className="text-brand-600 flex-shrink-0 mt-1" size={20} />
            <p className="text-brand-800 text-sm">
              Our frames are designed to fit standard US industry replacement cushion and sling sizes. 
              Follow these steps to ensure your existing covers will fit our frames perfectly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cushions Section */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg border-b pb-2 text-gray-900">1. Measuring for Cushions</h3>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center relative border border-gray-200">
                <div className="w-32 h-32 bg-white border-2 border-gray-400 rounded shadow-sm relative">
                   <div className="absolute -top-6 left-0 right-0 text-center text-xs font-mono text-brand-600">Width (Seam to Seam)</div>
                   <div className="absolute -left-8 top-0 bottom-0 flex items-center text-xs font-mono text-brand-600 rotate-180" style={{writingMode: 'vertical-rl'}}>Depth</div>
                   <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-red-400"></div>
                   <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-red-400"></div>
                </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                <li>Measure <strong>Width</strong> from side seam to side seam.</li>
                <li>Measure <strong>Depth</strong> from front seam to back seam.</li>
                <li>Measure <strong>Thickness</strong> at the thickest point.</li>
                <li>Common Sizes: 22"x24", 24"x24", 25"x25".</li>
              </ul>
            </div>

            {/* Slings Section */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg border-b pb-2 text-gray-900">2. Measuring for Slings</h3>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center relative border border-gray-200">
                 <div className="h-40 w-2 bg-gray-800 absolute left-1/4 rounded"></div>
                 <div className="h-40 w-2 bg-gray-800 absolute right-1/4 rounded"></div>
                 <div className="absolute top-1/2 left-1/4 right-1/4 border-t-2 border-red-500 border-dashed flex items-center justify-center">
                    <span className="bg-white px-1 text-xs font-bold text-red-600 -mt-3">Rail Width</span>
                 </div>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                <li><strong>Crucial:</strong> Measure the width between the sling rails (the metal grooves).</li>
                <li>Do NOT measure the old fabric (it stretches).</li>
                <li>Measure the length of the rail track itself.</li>
                <li>Our 'Standard' frames fit 21.5" rail width.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
          <button 
            onClick={onClose}
            className="w-full md:w-auto px-8 py-3 bg-brand-600 text-white font-medium rounded hover:bg-brand-700 transition-colors"
          >
            I've Got My Measurements
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeasurementModal;
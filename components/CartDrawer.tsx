import React from 'react';
import { X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 max-w-md w-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-serif font-bold text-gray-900 flex items-center gap-2">
              Your Cart <ShoppingBag size={20} className="text-brand-600" />
            </h2>
            <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                <ShoppingBag size={48} className="text-gray-200" />
                <p className="text-lg">Your cart is empty.</p>
                <button onClick={onClose} className="text-brand-600 font-medium hover:underline">
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 line-clamp-1">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">${item.price.toLocaleString()}</span>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${subtotal.toLocaleString()}</p>
              </div>
              <p className="text-xs text-gray-500 text-center">Shipping and taxes calculated at checkout.</p>
              <button className="w-full flex items-center justify-center px-6 py-4 border border-transparent rounded-none shadow-sm text-base font-medium text-white bg-brand-700 hover:bg-brand-800 transition-colors">
                Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

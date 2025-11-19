import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const Header: React.FC = () => {
  const { cartCount, setIsCartOpen } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
        : 'bg-white/10 backdrop-blur-sm py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
            Castaway Frames
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {['Collections', 'Frame Guide', 'Materials', 'About Us'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-sm font-medium hover:text-brand-300 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className={`p-2 rounded-full hover:bg-white/20 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            <Search size={20} />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className={`relative p-2 rounded-full hover:bg-white/20 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-600 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t border-gray-100">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {['Collections', 'Frame Guide', 'Materials', 'About Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-lg font-medium text-gray-900 hover:text-brand-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
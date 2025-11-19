import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import AIStylist from './components/AIStylist';
import Footer from './components/Footer';
import MeasurementModal from './components/MeasurementModal';
import HowItWorks from './components/HowItWorks';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem, Category } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMeasureModalOpen, setIsMeasureModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      <main>
        <Hero onOpenMeasure={() => setIsMeasureModalOpen(true)} />
        
        <HowItWorks />

        {/* Filter / Collections Bar */}
        <section className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 shadow-sm" id="collections">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
            <div className="flex space-x-2 md:justify-center min-w-max">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as Category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-brand-700 text-white shadow-md'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-end mb-8">
             <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900">
                  {CATEGORIES.find(c => c.id === activeCategory)?.label}
                </h2>
                <p className="text-gray-500 mt-2">
                  {filteredProducts.length} products found
                </p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </section>

        {/* Feature / Trust Section */}
        <section className="bg-brand-50 py-20 border-y border-brand-100" id="materials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-2xl text-brand-600">🛡️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">5-Year Warranty</h3>
                <p className="text-gray-600 leading-relaxed">Every piece is built to withstand the elements. We stand by our craftsmanship.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-2xl text-brand-600">🌧️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Weather Resistant</h3>
                <p className="text-gray-600 leading-relaxed">From scorching sun to heavy rain, our materials are engineered for the outdoors.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-2xl text-brand-600">🚚</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Free White Glove Delivery</h3>
                <p className="text-gray-600 leading-relaxed">We don't just drop a box. We set up your oasis and take away the packaging.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onRemove={removeFromCart} 
      />

      <MeasurementModal 
        isOpen={isMeasureModalOpen} 
        onClose={() => setIsMeasureModalOpen(false)} 
      />

      <AIStylist />
    </div>
  );
};

export default App;
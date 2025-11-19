import React from 'react';
import { Plus, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Badge */}
      {!product.inStock && (
        <div className="absolute top-4 left-4 z-10 bg-gray-900 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
          Sold Out
        </div>
      )}
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <button
          onClick={() => product.inStock && onAddToCart(product)}
          disabled={!product.inStock}
          className={`absolute bottom-4 right-4 p-3 bg-white shadow-lg text-brand-900 rounded-full transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 disabled:bg-gray-200 disabled:text-gray-400`}
          aria-label="Add to Cart"
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-serif font-semibold text-gray-900 line-clamp-1 group-hover:text-brand-700 transition-colors">
            {product.name}
          </h3>
        </div>
        
        <div className="flex items-center space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toLocaleString()}
          </span>
          <span className="text-xs font-medium text-brand-600 uppercase tracking-wide">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

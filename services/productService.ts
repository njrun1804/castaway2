import { PRODUCTS } from '../constants';
import { Product, Category } from '../types';

export const getProducts = (): Product[] => {
  return PRODUCTS;
};

export const getProductsByCategory = (category: Category): Product[] => {
  if (category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find(p => p.id === id);
};

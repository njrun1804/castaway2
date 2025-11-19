export interface Product {
  id: string;
  name: string;
  category: 'sofas' | 'dining' | 'loungers' | 'accessories';
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isError?: boolean;
}

export type Category = 'all' | 'sofas' | 'dining' | 'loungers' | 'accessories';

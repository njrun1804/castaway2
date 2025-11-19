import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface ShopContextType {
    cartItems: CartItem[];
    isCartOpen: boolean;
    isMeasureModalOpen: boolean;
    cartCount: number;
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    setIsCartOpen: (isOpen: boolean) => void;
    setIsMeasureModalOpen: (isOpen: boolean) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMeasureModalOpen, setIsMeasureModalOpen] = useState(false);

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

    return (
        <ShopContext.Provider value={{
            cartItems,
            isCartOpen,
            isMeasureModalOpen,
            cartCount,
            addToCart,
            removeFromCart,
            setIsCartOpen,
            setIsMeasureModalOpen
        }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => {
    const context = useContext(ShopContext);
    if (context === undefined) {
        throw new Error('useShop must be used within a ShopProvider');
    }
    return context;
};

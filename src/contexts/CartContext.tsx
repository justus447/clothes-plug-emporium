import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, Product } from '@/types/product';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; size: string; color: string } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, size, color } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id && 
                item.selectedSize === size && 
                item.selectedColor === color
      );

      let newItems: CartItem[];
      if (existingItemIndex >= 0) {
        newItems = [...state.items];
        newItems[existingItemIndex].quantity += 1;
      } else {
        newItems = [...state.items, {
          product,
          quantity: 1,
          selectedSize: size,
          selectedColor: color
        }];
      }

      const total = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => 
        `${item.product.id}-${item.selectedSize}-${item.selectedColor}` !== action.payload
      );
      const total = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: id });
      }

      const newItems = state.items.map(item => {
        if (`${item.product.id}-${item.selectedSize}-${item.selectedColor}` === id) {
          return { ...item, quantity };
        }
        return item;
      });

      const total = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addItem: (product: Product, size: string, color: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product: Product, size: string, color: string) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, size, color } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
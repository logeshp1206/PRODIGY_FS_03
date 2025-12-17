import { create } from 'zustand';
import { Product } from './mockData';

interface CartItem extends Product {
  quantity: number;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface StoreState {
  cart: CartItem[];
  user: User | null;
  isCartOpen: boolean;
  isAuthOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  toggleAuth: () => void;
  login: (name: string, email: string) => void;
  logout: () => void;
  total: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  user: null,
  isCartOpen: false,
  isAuthOpen: false,

  addToCart: (product) => set((state) => {
    const existing = state.cart.find((item) => item.id === product.id);
    if (existing) {
      return {
        cart: state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        isCartOpen: true,
      };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }], isCartOpen: true };
  }),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== productId),
  })),

  updateQuantity: (productId, quantity) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
    ).filter(item => item.quantity > 0),
  })),

  clearCart: () => set({ cart: [] }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  toggleAuth: () => set((state) => ({ isAuthOpen: !state.isAuthOpen })),

  login: (name, email) => set({ user: { id: '1', name, email }, isAuthOpen: false }),
  logout: () => set({ user: null }),

  total: () => {
    const { cart } = get();
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
}));

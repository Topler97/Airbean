
import { create } from 'zustand';


const useStore = create((set) => ({ 



// THE CART
  cart: [],

  showCart: false,

  addToCart: (product) => set((state) => { 

    const existingProductIndex = state.cart.findIndex((p) => p.id === product.id); 

    if (existingProductIndex !== -1) { 
      let newCart = [...state.cart]; 
      newCart[existingProductIndex].quantity += 1; 
      return { cart: newCart };
    } else {
        
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }
  
    }),
  
    
    updateProductQuantity: (productId, quantity) => set((state) => ({
      cart: state.cart.map((product) =>
        product.id === productId ? { ...product, quantity: quantity } : product
      ),
    })),
    
  
    removeFromCart: (productId) => set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  
  
    setShowCart: (show) => set(() => ({ showCart: show })), 
  
  

    user: null,
    setUser: (user) => set(() => ({ user })),
 
  
  




// ORDERSTATUS
orders: [],
orderDetails: null,


sendOrder: () => set((state) => {
  const ordernumber = Math.floor(Math.random() * 1000);
  const eta = Math.floor(Math.random() * 20) + 10;

  const newOrder = {
    ordernumber,
    eta,
    items: [...state.cart],
    total: state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    orderDate: new Date().toISOString().split('T')[0],
  };

  return {
    cart: [], 
    orders: [...state.orders, newOrder], 
    orderDetails: newOrder 
  };

}),



}));

export default useStore;  
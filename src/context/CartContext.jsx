import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const reduceQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1) }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };
  const addQuantity = (productId) =>{
    setCart((prev)=>
      prev.map((i)=> i.id == productId ?{...i, quantity: i.quantity + 1}: i)
    )
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const orderViaWhatsapp = (item)=>{
  if(!item) {
    const orderDetails = cart.map((item, index) => `${index + 1}. ${item.name} ${item.quantity}`).join('%0A');
    const message = `Hello, I would like to order the following items: %0A ${orderDetails}`;
    const whatsappUrl = `https://wa.me/254788883643?text=${message}`;
    window.open(whatsappUrl,'_blank');
    localStorage.removeItem("cart");
    setCart([]);
    return;
  }
  const orderDetails = `1. ${item.name} 1 pcs`;
  const message = `Hello, I would like to order the following item: %0A ${orderDetails} %0A Be blessed.`;
  const whatsappUrl = `https://wa.me/254788883643?text=${message}`;
  window.open(whatsappUrl,'_blank');
  localStorage.removeItem("cart");
  setCart([]);
  return;
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, itemCount, reduceQuantity, addQuantity, orderViaWhatsapp, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

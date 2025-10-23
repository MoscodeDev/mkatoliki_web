import React from "react";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash } from "@deemlol/next-icons";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, reduceQuantity, addQuantity, orderViaWhatsapp, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen">
      <div
        className={`${
          cart.length
            ? "grid grid-cols-1 min-[415px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-x-hidden"
            : "flex flex-col items-center justify-center h-full w-full"
        }`}
      >
        {!cart.length ? (
          <div className="bg-gray-100 p-6 rounded-2xl shadow-sm text-center mt-10">
            <p className="text-2xl font-semibold mb-2 text-gray-500">🛒 Your Cart is Empty</p>
            <p className="text-sm text-gray-500">Add some items to see them here.</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          cart.map((product) => (
            <div
              key={product.id}
              className="border rounded-2xl p-4 relative h-fit bg-white shadow-sm"
            >
              <div
                className="absolute top-5 right-6 cursor-pointer"
                onClick={() => removeFromCart(product.id)}
              >
                <Trash size={24} color="red" />
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover rounded-2xl mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-700"> Ksh. {product.price}</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-700">Quantity: {product.quantity}</p>
                  <p className="text-gray-700">
                    Total: Ksh. 
                    {parseFloat(product.price) * product.quantity}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span
                    onClick={() => addQuantity(product.id)}
                    className="cursor-pointer"
                  >
                    <Plus size={26} color="blue" />
                  </span>
                  <span
                    onClick={() => reduceQuantity(product.id)}
                    className="cursor-pointer"
                  >
                    <Minus size={26} color="red" />
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full p-4 flex justify-center bg-white/80 backdrop-blur-xl border-t">
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-xl w-full max-w-md hover:bg-green-600 transition"
            onClick={() => orderViaWhatsapp()}
          >
            Order via WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

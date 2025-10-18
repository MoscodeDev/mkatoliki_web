import React, { useState } from "react";
import { ShoppingCart } from "@deemlol/next-icons";
import { Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="w-full bg-transparent backdrop-blur-2xl text-black py-4 shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
    {/* Logo */}
    <h1
      onClick={() => navigate("/")}
      className="text-2xl font-bold cursor-pointer hover:text-blue-200 transition"
    >
      Mkatoliki Store
    </h1>

    {/* Desktop Nav */}
    <nav className="hidden md:flex items-center gap-8">
      <button
        onClick={() => navigate("/")}
        className="hover:text-blue-200 transition text-lg"
      >
        Home
      </button>
      <button
        onClick={() => navigate("/about")}
        className="hover:text-blue-200 transition text-lg"
      >
        About
      </button>
      <button
        onClick={() => navigate("/cart")}
        className="relative flex items-center gap-1 hover:text-blue-200 transition text-lg"
      >
        <ShoppingCart size={24} />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {itemCount}
          </span>
        )}
      </button>
    </nav>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-white/10 transition"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>


      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-black/80 text-white transition-all">
          <button
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
            className="hover:text-blue-300"
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/about");
              setMenuOpen(false);
            }}
            className="hover:text-blue-300"
          >
            About
          </button>
          <button
            onClick={() => {
              navigate("/cart");
              setMenuOpen(false);
            }}
            className="relative flex items-center gap-1 hover:text-blue-300"
          >
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
            Cart
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

import { ShoppingCart } from "@deemlol/next-icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";
import products from "../data/products.js";
import { TbFilterEdit } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { addToCart, itemCount, orderViaWhatsapp } = useCart();
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleFilter = () => {
    if (search.trim() !== "") {
      setFilteredProducts(
        products.filter(
          (obj) =>
            obj.name.toLowerCase().includes(search.toLowerCase().trim()) ||
            obj.category.toLowerCase().includes(search.toLowerCase().trim())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  };
  const handleNav = ()=>{
    setShowFilters(!showFilters);
  }

  const handleCategory = (e)=>{
    if(e === 'all') {
      setFilteredProducts(products);
      return;
    }
    setFilteredProducts(products.filter(obj => obj.category.toLowerCase().includes(e)));
  }

  const category = ['all', ...new Set(products.map((arr) => arr.category.toLowerCase().trim()))];
  console.log(category);
  useEffect(() => {
    handleFilter();
  }, [search]);

  return (
    <div className=" pt-3">
      <div className="flex px-4 items-center justify-between max-sm:p-1 max-sm:gap-2">
        <div>
          <TbFilterEdit className="size-6 md:hidden" 
          onClick={handleNav}
          />
          <div className={`flex  max-md:underline max-md:rounded max-md:gap-3 max-md:flex-col max-md:absolute max-md:backdrop-blur-3xl max-md:p-5 z-50 ${!showFilters?'-left-60':"-left-3"}
          md:w-full md:gap-3 md:flex-wrap
          `}>
            {category.map((y) => (
              <span className="md:border md:border-gray-300 md:px-2 md:rounded-3xl hover:bg-gray-100 cursor-pointer md:text-center transition-colors"
              onClick={()=> handleCategory(y)}>{y}</span>
            ))}
          </div>
        </div>

        <div className="relative sm:w-60">
          <input
            className="border-2 rounded-2xl w-full pl-3 pr-6"
            value={search}
            onChange={handleSearch}
          />
          <IoIosSearch className="absolute right-3 top-1/2 text-black transform -translate-y-1/2" />
        </div>
      </div>
      <div className="grid grid-cols-1 min-[415px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-x-hidden">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-2xl p-4 m-4">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full aspect-2/2 object-cover rounded-2xl mb-4"
            />
            <div className="flex justify-between">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">Ksh. {product.price}</p>
            </div>
            <div className="flex justify-between max-[270px]:flex-col max-[270px]:gap-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded max-[270px]:w-full cursor-pointer"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded ml-2 max-[270px]:ml-0 max-[270px]:w-full cursor-pointer"
                onClick={() => orderViaWhatsapp(product)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
        <div
          className="fixed bottom-10 right-9 bg-blue-900 p-4 rounded-full animate-pulse cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <div className="relative">
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </div>
          <ShoppingCart size={36} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Home;

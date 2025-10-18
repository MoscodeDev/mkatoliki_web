import { ShoppingCart } from "@deemlol/next-icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "./context/CartContext";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10",
    image:
      "https://jpabmkenwadudyxmsvan.supabase.co/storage/v1/object/public/products/ditachableMagneticCross.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$20",
    image:
      "https://jpabmkenwadudyxmsvan.supabase.co/storage/v1/object/public/products/ditachableMagneticCross.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30",
    image:
      "https://jpabmkenwadudyxmsvan.supabase.co/storage/v1/object/public/products/ditachableMagneticCross.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$40",
    image:
      "https://jpabmkenwadudyxmsvan.supabase.co/storage/v1/object/public/products/ditachableMagneticCross.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: "$50",
    image:
      "https://jpabmkenwadudyxmsvan.supabase.co/storage/v1/object/public/products/ditachableMagneticCross.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: "$60",
    image:
      "https://jpabmkenwadudyxmsvan.supabase.co/storage/v1/object/public/products/ditachableMagneticCross.jpg",
  },
  {
    id: 7,
    name: "Product 7",
    price: "$70",
    image:
      "https://jpabmkenwadudyxmsvan.supabase.co/storage/v1/object/public/products/ditachableMagneticCross.jpg",
  },
  {
    id: 8,
    name: "Product 8",
    price: "$80",
    image:
      "https://jpabmkenwadudyxmsvan.supabase.co/storage/v1/object/public/products/ditachableMagneticCross.jpg",
  },
];

const Home = () => {
  const navigate =useNavigate();
  const { addToCart, itemCount,orderViaWhatsapp } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };
  
  return (
    <div className="grid grid-cols-1 min-[415px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-x-hidden">
      {products.map((product) => (
        <div key={product.id} className="border rounded-2xl p-4 m-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-2/2 object-cover rounded-2xl mb-4"
          />
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.price}</p>
          </div>
          <div className="flex justify-between max-[270px]:flex-col max-[270px]:gap-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded max-[270px]:w-full cursor-pointer"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded ml-2 max-[270px]:ml-0 max-[270px]:w-full cursor-pointer"
            onClick={()=> orderViaWhatsapp(product)}>
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
  );
}

export default Home;

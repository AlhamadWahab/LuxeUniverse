import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard.jsx";
const Shop = () => {
  const products = useSelector((state) => state.product);
  return (
    <>
      <div className="bg-white mt-2 px-4 md:py-16 lg:px-24">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;

import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function FilterData() {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <>
      <div className="bg-white mt-2 px-4 md:py-16 lg:px-24">
        {filterProducts.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
              {filterProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex justify-center">
            <img
              src="https://www.vhv.rs/dpng/d/521-5212497_empty-cart-hd-png-download.png"
              alt="No Item in Your Cart"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default FilterData;

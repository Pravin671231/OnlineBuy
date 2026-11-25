import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";
import { useProduct } from "../hooks/productHook";

const HomePage = () => {
  const { data, isError, isLoading } = useProduct();

  return (
    <div className=" mx-auto px-2 py-10">
      {/* Featured Products Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-secondary">
            Featured Products
          </h1>
          <p className="text-gray-500 mt-2">
            Discover our latest and popular products.
          </p>
        </div>

        <Link to="/shop" className="text-accent font-semibold hover:underline">
          View All
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

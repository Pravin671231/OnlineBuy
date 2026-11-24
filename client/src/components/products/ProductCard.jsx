
import React from "react";
import { FaCartShopping, FaHeart, FaStar } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <div className="group border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300">

      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
          alt="Product"
          className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Discount Badge */}
        <span className="absolute top-3 left-3 bg-accent text-white text-xs px-3 py-1 rounded-full">
          20% OFF
        </span>

        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 bg-white p-2 rounded-full text-gray-500 hover:text-red-500 shadow"
        >
          <FaHeart />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">

        <h2 className="text-lg font-semibold text-gray-800">
          Nike Running Shoes
        </h2>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          Comfortable and stylish running shoes for everyday use.
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3 text-yellow-500">
          <FaStar />
          <span className="text-sm text-gray-600">4.5 (120 reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-3">
          <span className="text-xl font-bold text-secondary">
            $80
          </span>

          <span className="text-sm text-gray-400 line-through">
            $100
          </span>
        </div>

        {/* Add to Cart */}
        <button className="w-full mt-4 bg-secondary text-white py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-accent transition">
          <FaCartShopping />
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;

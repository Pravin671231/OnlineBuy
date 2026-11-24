import React from "react";
import { FaStar, FaPlus } from "react-icons/fa";

const CategoryCard = () => {
  return (
    <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
      {/* Product Image */}
      <div className="bg-slate-50 p-3">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
          //   alt={product.name}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <FaStar className="text-orange-400" />
          <span className="font-semibold">4.5 </span>
          <span className="text-gray-500">(120 reviews)</span>
        </div>

        {/* Title */}
        <h2 className="font-bold text-lg text-gray-800 mt-2">
          Nike Running Shoes
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          Comfortable and stylish running shoes for everyday use.
        </p>

        {/* Price and Cart */}
        <div className="flex justify-between items-center border-t mt-4 pt-4">
          <h3 className="text-xl font-bold text-slate-900">
            $ 80
          </h3>

          <button
            // onClick={() => onAddToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold hover:bg-blue-700 transition"
          >
            <FaPlus />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

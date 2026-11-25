
import React from "react";
import {
  FaCartShopping,
  FaHeart,
  FaStar,
} from "react-icons/fa6";

const ProductCard = ({ product = {} }) => {
  const {
    id,
    title,
    images = [],
    thumbnail,
    description,
    rating = 0,
    price = 0,
    discountPercentage = 0,
    reviews = [],
  } = product;

  const discountPrice = (
    price - (price * discountPercentage) / 100
  ).toFixed(2);

  const productImage = images?.[0] || thumbnail;

  const reviewCount = reviews?.length || 0;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-slate-50">

        <img
          src={productImage || "/placeholder.png"}
          alt={title || "Product"}
          loading="lazy"
          className="h-40 w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105 sm:h-48 lg:h-52"
        />

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <span className="absolute left-2 top-2 rounded-full bg-accent px-2.5 py-1 text-[9px] font-bold text-white sm:text-[10px]">
            {Math.round(discountPercentage)}% OFF
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm transition hover:text-red-500"
        >
          <FaHeart size={13} />
        </button>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">

        {/* Product Title */}
        <h3 className="line-clamp-1 text-xs font-bold text-slate-900 transition-colors group-hover:text-primary sm:text-sm">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-1.5 line-clamp-2 min-h-[30px] text-[10px] leading-relaxed text-slate-500 sm:text-xs">
          {description}
        </p>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex items-center gap-1 text-amber-400">
            <FaStar size={11} />
            <span className="text-[10px] font-semibold text-slate-700">
              {Number(rating).toFixed(1)}
            </span>
          </div>

          <span className="text-[9px] text-slate-400 sm:text-[10px]">
            ({reviewCount} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-base font-bold text-slate-900 sm:text-lg">
            ${discountPrice}
          </span>

          {discountPercentage > 0 && (
            <span className="text-[10px] text-slate-400 line-through sm:text-xs">
              ${Number(price).toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 mt-4 text-[10px] font-semibold text-white transition hover:bg-accent sm:text-xs"
        >
          <FaCartShopping size={13} />
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;

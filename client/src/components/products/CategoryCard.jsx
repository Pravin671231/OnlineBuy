
import React from "react";
import {
  FaSpa,
  FaSprayCan,
  FaCouch,
  FaShoppingBasket,
  FaHome,
  FaUtensils,
  FaLaptop,
  FaTshirt,
  FaShoePrints,
  FaClock,
  FaMobileAlt,
  FaMotorcycle,
  FaHeartbeat,
  FaMobile,
  FaFutbol,
  FaGlasses,
  FaTabletAlt,
  FaCar,
  FaShoppingBag,
  FaGem,
  FaStar,
  FaBoxOpen,
} from "react-icons/fa";

const categoryIcons = {
  beauty: FaSpa,
  fragrances: FaSprayCan,
  furniture: FaCouch,
  groceries: FaShoppingBasket,
  "home-decoration": FaHome,
  "kitchen-accessories": FaUtensils,
  laptops: FaLaptop,
  "mens-shirts": FaTshirt,
  "mens-shoes": FaShoePrints,
  "mens-watches": FaClock,
  "mobile-accessories": FaMobileAlt,
  motorcycle: FaMotorcycle,
  "skin-care": FaHeartbeat,
  smartphones: FaMobile,
  "sports-accessories": FaFutbol,
  sunglasses: FaGlasses,
  tablets: FaTabletAlt,
  tops: FaTshirt,
  vehicle: FaCar,
  "womens-bags": FaShoppingBag,
  "womens-dresses": FaTshirt,
  "womens-jewellery": FaGem,
  "womens-shoes": FaShoePrints,
  "womens-watches": FaClock,
};

const CategoryCard = ({ category = {}, itemCount }) => {
  const { name, slug } = category;

  const Icon = categoryIcons[slug] || FaBoxOpen;

  return (
    <div className="group flex min-h-[115px] cursor-pointer flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">

      {/* Category Icon */}
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon size={19} />
      </div>

      {/* Category Name */}
      <h3 className="text-center text-xs font-semibold text-slate-800 transition-colors group-hover:text-primary">
        {name}
      </h3>

      {/* Optional Item Count */}
      {itemCount !== undefined && (
        <span className="mt-1 text-[10px] text-slate-400">
          {itemCount} items
        </span>
      )}
    </div>
  );
};

export default CategoryCard;

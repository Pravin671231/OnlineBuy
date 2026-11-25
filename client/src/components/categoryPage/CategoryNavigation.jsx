
import React from "react";
import { FaStar } from "react-icons/fa6";

const CategoryNavigation = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="w-full overflow-x-auto bg-slate-50 px-3 py-2 scrollbar-hide sm:px-4">

      <div className="flex w-max items-center gap-1.5 ">

        {/* All Categories */}
        <button
          type="button"
          onClick={() => onCategoryChange("all")}
          className={`shrink-0 rounded-full border px-3 py-1 text-[10px] font-medium transition ${
            selectedCategory === "all"
              ? "border-primary bg-primary text-white"
              : "border-slate-200 bg-white text-slate-600"
          }`}
        >
          All Categories
        </button>

        {/* Categories */}
        {categories.map((category) => {
          const isActive = selectedCategory === category.slug;

          return (
            <button
              key={category.slug}
              type="button"
              onClick={() => onCategoryChange(category.slug)}
              className={`flex shrink-0 items-center gap-1 rounded-full border px-3 py-1 text-[10px] font-medium transition ${
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-slate-200 bg-white text-slate-600"
              }`}
            >
              {isActive && <FaStar size={9} />}
              {category.name}
            </button>
          );
        })}

      </div>
    </div>
  );
};

export default CategoryNavigation;

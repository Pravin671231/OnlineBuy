import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../products/CategoryCard";
import { useCategories } from "../../hooks/productHook";
import { FaArrowRight } from "react-icons/fa";

const CategorySection = () => {
  const {
    categories = [],
    categoriesError,
    categoriesLoading,
  } = useCategories();

  if (categoriesLoading) {
    return (
      <section className="bg-slate-50 px-4 py-7">
        <p className="text-sm text-slate-500">Loading categories...</p>
      </section>
    );
  }

  if (categoriesError) {
    return (
      <section className="bg-slate-50 px-4 py-7">
        <p className="text-sm text-red-500">Failed to load categories.</p>
      </section>
    );
  }

  // Display maximum 6 categories
  const displayedCategories = categories.slice(0, 6);

  return (
    <section className="w-full bg-slate-50 px-4 py-7">
      {/* Header */}
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <span className="text-[9px] font-bold tracking-[1px] text-primary">
            DEPARTMENT CATALOG
          </span>

          <h2 className="mt-1 text-lg font-bold text-slate-900">
            Shop by Category
          </h2>

          <p className="text-xs text-slate-500">
            Explore items across our curated departments with verified
            specifications.
          </p>
        </div>
        {categories.length > 6 && (
          <div className="mt-5 flex justify-center sm:justify-end">
            <Link
              to="/categories"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-primary transition hover:border-primary hover:bg-blue-50"
            >
              View All ({categories.length})
              <FaArrowRight size={11} />
            </Link>
          </div>
        )}
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {displayedCategories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>

      {/* View All */}
    </section>
  );
};

export default CategorySection;

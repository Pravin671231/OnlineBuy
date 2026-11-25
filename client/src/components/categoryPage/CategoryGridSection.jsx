
import React from "react";
import ProductCard from "../products/ProductCard";

const CategoryGridSection = ({
  products = [],
  loading,
  error,
}) => {

  // Loading State
  if (loading) {
    return (
      <section className="w-full bg-slate-50 px-3 py-4 sm:px-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse overflow-hidden rounded-lg border border-slate-200 bg-white"
            >
              <div className="h-40 bg-slate-200" />

              <div className="space-y-3 p-3">
                <div className="h-3 w-1/3 rounded bg-slate-200" />
                <div className="h-3 w-3/4 rounded bg-slate-200" />
                <div className="h-3 w-full rounded bg-slate-200" />
                <div className="h-6 w-1/2 rounded bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <section className="w-full bg-slate-50 px-3 py-10 text-center sm:px-4">
        <p className="text-sm font-medium text-red-500">
          Failed to load products.
        </p>
      </section>
    );
  }

  // Empty State
  if (!products.length) {
    return (
      <section className="w-full bg-slate-50 px-3 py-12 text-center sm:px-4">
        <div className="rounded-lg border border-slate-200 bg-white py-10">
          <p className="text-sm font-semibold text-slate-700">
            No products found
          </p>

          <p className="mt-1 text-xs text-slate-400">
            There are currently no products available in this category.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-slate-50 px-3 py-4 sm:px-4">

      {/* Product Count */}
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[10px] text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-700">
            {products.length}
          </span>{" "}
          products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
};

export default CategoryGridSection;

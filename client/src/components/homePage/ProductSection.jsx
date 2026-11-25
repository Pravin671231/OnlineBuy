import React from "react";
import { useProduct } from "../../hooks/productHook";
import ProductCard from "../products/ProductCard";

const ProductSection = () => {
  const { data = [], isError, isLoading } = useProduct();

  return (
    <section className="mt-7 w-full bg-slate-50 px-4 py-7">
      {/* Header */}
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <span className="text-[9px] font-bold tracking-[1px] text-primary">
            HANDPICKED COLLECTION
          </span>

          <h2 className="mt-1 text-[17px] font-bold text-slate-900">
            Featured Products
          </h2>

          <p className="text-[11px] text-slate-500">
            Discover our latest and popular products.
          </p>
        </div>

        {/* <Link
            to="/shop"
            className="flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-medium text-primary transition hover:border-primary hover:bg-blue-50"
          >
            View All
            <FaArrowRight size={10} />
          </Link> */}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="py-10 text-center text-sm text-slate-500">
          Loading featured products...
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="py-10 text-center text-sm text-red-500">
          Failed to load products. Please try again.
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !isError && data.length === 0 && (
        <div className="py-10 text-center text-sm text-slate-500">
          No products available.
        </div>
      )}

      {/* Product Grid */}
      {!isLoading && !isError && data.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductSection;

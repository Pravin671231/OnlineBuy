
import React from "react";
import { FaMobileAlt, FaCheckCircle } from "react-icons/fa";

const CategoryMainSection = ({
  title = "Smartphones",
  description = "Explore the latest flagship mobile devices, high-performance cameras, and top-tier smartphones from industry-leading brands.",
  itemCount = 8,
}) => {
  return (
    <section className="w-full bg-slate-50 px-4 py-5">
      <div className="rounded-lg border border-slate-200 bg-white px-5 py-5 sm:px-6">
        
        {/* Featured Badge */}
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-1">
          <FaMobileAlt className="text-[9px] text-primary" />
          <span className="text-[8px] font-bold tracking-[0.5px] text-primary">
            FEATURED COLLECTION
          </span>
        </div>

        {/* Category Title */}
        <h1 className="text-lg font-bold leading-tight text-slate-900">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-1 max-w-xl text-[11px] leading-relaxed text-slate-500">
          {description}
        </p>

        {/* Item Count */}
        <div className="mt-2 flex items-center gap-1.5">
          <FaCheckCircle className="text-[10px] text-primary" />
          <p className="text-[10px] text-slate-500">
            <span className="font-semibold text-slate-700">
              Showing {itemCount} items
            </span>{" "}
            in {title}
          </p>
        </div>

      </div>
    </section>
  );
};

export default CategoryMainSection;

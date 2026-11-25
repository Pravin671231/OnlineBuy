
import { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaBolt,
  FaStar,
  FaLock,
} from "react-icons/fa";

import { useProduct } from "../../hooks/productHook";

export default function HomeMainSection() {
  const { data: products = [], isLoading, isError } = useProduct();

  const [productList, setProductList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Get maximum 6 random products
  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      const shuffled = [...products].sort(() => Math.random() - 0.5);
      setProductList(shuffled.slice(0, 6));
      setCurrentIndex(0);
    } else {
      setProductList([]);
      setCurrentIndex(0);
    }
  }, [products]);

  const currentProduct = productList[currentIndex];

  // Automatic carousel scrolling
  useEffect(() => {
    if (isPaused || productList.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, productList.length]);

 
  // Empty products
  if (!currentProduct) {
    return (
      <section className="flex min-h-[350px] items-center justify-center bg-[#f5f8fc] px-4">
        <p className="text-sm text-slate-500">No products available.</p>
      </section>
    );
  }

  return (
    <section className="mt-3 w-full overflow-hidden bg-background">

      {/* HERO SECTION */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">

        {/* LEFT CONTENT */}
        <div className="w-full text-center lg:text-left">

          {/* TOP BADGE */}
          <div className="mb-4 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 text-[10px] text-blue-700 sm:text-xs lg:justify-start">
            <FaCheckCircle className="shrink-0 text-blue-600" />
            Curated Premium Selection • Fast Delivery
          </div>

          {/* HEADING */}
          <h1 className="mx-auto max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl md:text-4xl lg:mx-0 lg:text-4xl xl:text-5xl">
            Discover Quality Essentials Curated for Modern Living
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7 lg:mx-0">
            Explore premium electronics, beauty, lifestyle, and home goods
            sourced directly from verified manufacturers. Designed for quality,
            convenience, and dependable everyday luxury.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 min-[420px]:flex-row min-[420px]:items-center lg:justify-start">

            <button
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-blue-700 sm:text-sm"
            >
              Browse Categories
              <span>↓</span>
            </button>

            <div className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-[11px] font-medium text-slate-700 sm:text-xs">
              <span className="h-2 w-2 shrink-0 rounded-full bg-green-500" />
              In Stock & Ready to Ship
            </div>
          </div>

          {/* STATS */}
          <div className="mx-auto mt-8 grid max-w-lg grid-cols-3 border-t border-slate-200 pt-5 text-center lg:mx-0 lg:text-left">

            <div className="min-w-0 border-r border-slate-200 px-1">
              <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                {products.length}+
              </h3>
              <p className="mt-1 text-[9px] text-slate-500 sm:text-xs">
                Available Products
              </p>
            </div>

            <div className="min-w-0 border-r border-slate-200 px-1">
              <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                4.8<span className="text-amber-500">★</span>
              </h3>
              <p className="mt-1 text-[9px] text-slate-500 sm:text-xs">
                Average Rating
              </p>
            </div>

            <div className="min-w-0 px-1">
              <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                6
              </h3>
              <p className="mt-1 text-[9px] text-slate-500 sm:text-xs">
                Prime Categories
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT PRODUCT CAROUSEL */}
        <div
          id="products"
          className="relative mx-auto w-full  pt-5 sm:pt-6 lg:pt-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >

          {/* TOP LABEL */}
          <div className="absolute left-2 top-0 z-10 flex items-center gap-2 lg:-top-5 lg:left-0">
            <span className="flex items-center gap-1 text-[10px] font-semibold text-blue-700 sm:text-xs">
              <FaBolt />
              Fast Shipping
            </span>
          </div>

          {/* PRODUCT CARD */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

            {/* PRODUCT BADGES */}
            <div className="flex items-center justify-between px-3 pt-3 sm:px-4 sm:pt-4">
              <span className="rounded border border-blue-200 bg-blue-50 px-2 py-1 text-[9px] font-semibold text-blue-600 sm:text-[10px]">
                Featured Product
              </span>

              <span className="flex items-center gap-1 rounded bg-slate-50 px-2 py-1 text-[10px] font-bold text-slate-700 sm:text-xs">
                <FaStar className="text-amber-500" />
                {currentProduct.rating ?? "4.8"}
              </span>
            </div>

            {/* PRODUCT IMAGE */}
            <div className="relative mx-3 mt-3 flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-slate-100 to-blue-50 sm:mx-4 sm:mt-4 sm:h-60 md:h-72 lg:h-64">

              <img
                key={currentProduct.id || currentProduct._id || currentIndex}
                src={currentProduct.image || currentProduct.thumbnail}
                alt={currentProduct.name || currentProduct.title}
                className="h-full w-full animate-[fadeIn_0.6s_ease-in-out] object-contain p-2"
              />

            </div>

            {/* PRODUCT DETAILS */}
            <div className="p-4 sm:p-5">

              <p className="truncate text-[9px] font-semibold tracking-widest text-slate-500 sm:text-[10px]">
                {currentProduct.category || "PREMIUM COLLECTION"}
              </p>

              <div className="mt-2 flex flex-col gap-2 min-[420px]:flex-row min-[420px]:items-start min-[420px]:justify-between">

                <h2 className="line-clamp-2 min-w-0 text-sm font-bold text-slate-950 sm:text-base">
                  {currentProduct.name || currentProduct.title}
                </h2>

                <span className="shrink-0 text-base font-bold text-blue-600 sm:text-lg">
                  {currentProduct.price != null
                    ? `$${Number(currentProduct.price).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}`
                    : "Price unavailable"}
                </span>

              </div>

              {/* STOCK AND BRAND */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">

                <span className={`flex items-center gap-1 text-[10px] sm:text-xs ${
                  currentProduct.stock === false || currentProduct.stock === 0
                    ? "text-red-500"
                    : "text-green-600"
                }`}>
                  <span className={`h-2 w-2 rounded-full ${
                    currentProduct.stock === false || currentProduct.stock === 0
                      ? "bg-red-500"
                      : "bg-green-500"
                  }`} />

                  {currentProduct.stock === false || currentProduct.stock === 0
                    ? "Out of Stock"
                    : "In Stock"}
                </span>

                <span className="max-w-[55%] truncate text-[10px] text-slate-400 sm:text-xs">
                  {currentProduct.brand || "Premium Collection"}
                </span>

              </div>

              {/* SECURE CHECKOUT */}
              <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-slate-100 bg-slate-50 py-2 text-[10px] text-slate-600 sm:mt-5 sm:text-xs">
                <FaLock className="text-green-600" />
                Secure Checkout
              </div>

              {/* CAROUSEL INDICATORS */}
              {productList.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-2">
                  {productList.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Show product ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? "w-6 bg-blue-600"
                          : "w-2 bg-slate-300 hover:bg-blue-400"
                      }`}
                    />
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

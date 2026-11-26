
import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { useFavorites } from "../hooks/useFavorites";
import ProductCard from "../components/products/ProductCard";

const FavoritePage = () => {
  const { favorites, countItems } = useFavorites();

  return (
    <section className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <FaHeart className="text-2xl text-red-500" />

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
            My Favorites
          </h1>
        </div>

        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          You have{" "}
          <span className="font-bold text-red-600">
            {countItems} distinct products
          </span>{" "}
          saved in your wishlist.
        </p>
      </div>

      {/* Favorite Products */}
      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (

        /* Empty Wishlist */
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 text-center">

          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <FaHeart className="text-4xl text-red-400" />
          </div>

          <h2 className="text-xl font-bold text-slate-900">
            Your wishlist is empty!
          </h2>

          <p className="mt-2 max-w-sm text-sm text-slate-500">
            You haven't added any products to your favorites yet.
            Explore products and save your favorites here.
          </p>

          <Link
            to="/"
            className="mt-6 flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
          >
            <FaShoppingBag />
            Continue Shopping
          </Link>

        </div>
      )}
    </section>
  );
};

export default FavoritePage;

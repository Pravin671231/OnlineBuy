import { useState } from "react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/cartHook";
import { useFavorites } from "../../hooks/useFavorites";

const Header = () => {
  const [search, setSearch] = useState("");

  const { cartItems = [] } = useCart();

  // Favorites Hook
  const { countItems: totalFavorites } = useFavorites();

  const totalItems = cartItems.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0,
  );

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      console.log("Search product:", search);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-secondary font-bold text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="shrink-0 text-2xl font-extrabold">
          Online<span className="text-accent">Buy</span>
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mx-auto flex max-w-xl flex-1">
          <div className="flex w-full overflow-hidden rounded-full bg-white">
            <input
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full min-w-0 px-4 py-2.5 text-sm font-normal text-gray-800 outline-none sm:px-5"
            />

            <button
              type="submit"
              className="flex items-center justify-center bg-accent px-4 text-white transition hover:opacity-90 sm:px-5"
              aria-label="Search"
            >
              <FiSearch size={20} />
            </button>
          </div>
        </form>

        {/* Cart, Wishlist & Account */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-2 transition hover:text-accent"
          >
            <div className="relative">
              <FaCartShopping className="text-xl sm:text-2xl" />

              {totalItems > 0 && (
                <span className="absolute -right-2.5 -top-2.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] text-white ring-2 ring-secondary">
                  {totalItems > 10 ? "10+" : totalItems}
                </span>
              )}
            </div>

            <span className="hidden text-sm sm:block">Cart</span>
          </Link>

          {/* Wishlist */}
          <Link
            to="/favorite"
            className="flex items-center gap-2 transition hover:text-accent"
          >
            <div className="relative">
              <FaHeart className="text-xl sm:text-2xl" />

              {totalFavorites > 0 && (
                <span className="absolute -right-2.5 -top-2.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] text-white ring-2 ring-secondary">
                  {totalFavorites > 10 ? "10+" : totalFavorites}
                </span>
              )}
            </div>

            <span className="hidden text-sm sm:block">Wishlist</span>
          </Link>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-white/20 sm:block" />

          {/* Account */}
          <Link
            to="/profile"
            className="flex items-center gap-2 transition hover:text-accent"
          >
            <FaRegUserCircle className="text-xl sm:text-2xl" />
            <span className="hidden text-sm sm:block">Account</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

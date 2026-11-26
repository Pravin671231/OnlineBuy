import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/cartHook";
import CartItem from "./CartItem";
import {  FaStore, FaShoppingCart, FaRegSave } from "react-icons/fa";

export default function CartItemsSection() {
  const {
    cartItems,
    handleDecreaseToCart,
    handleIncreseToCart,
    handleRemoveToCart,
  } = useCart();

  const navigate=useNavigate()

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <FaRegSave className="text-blue-600" />
          Cart Notice
        </h2>

        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
          Saved for Later / Empty State
        </span>
      </div>

      {cartItems.length === 0 ? (
        /* EMPTY CART */
        <div className="mt-4 flex min-h-[330px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-8 text-center">
          {/* Cart Icon */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
            <FaShoppingCart className="text-3xl text-blue-600" />
          </div>

          <h3 className="mt-5 text-2xl font-bold text-slate-950">
            Your cart is empty
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
            Looks like you haven't added any products to your bag yet. Explore
            our curated gadgets, scents, and accessories!
          </p>

          <button
            onClick={()=>navigate("/")}
            className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <FaStore />
            Start Shopping
          </button>
        </div>
      ) : (
        /* CART PRODUCTS */
        <>
          <div className="mt-4 hidden grid-cols-[minmax(0,1fr)_100px_120px_100px_40px] gap-3 border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-700 md:grid">
            <span>Product Details</span>
            <span className="text-center">Price</span>
            <span className="text-center">Quantity</span>
            <span className="text-right">Subtotal</span>
            <span />
          </div>

          <div>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncreaseQuantity={handleIncreseToCart}
                onDecreaseQuantity={handleDecreaseToCart}
                onRemove={handleRemoveToCart}
              />
            ))}
          </div>

          {/* Bottom Actions */}
          {/* <div className="mt-4 flex flex-col justify-between gap-3 border-t border-slate-200 bg-slate-50 px-5 py-5 sm:flex-row sm:items-center">
            <button
              onClick={onClearCart}
              className="flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-red-300 hover:text-red-600"
            >
              <FaTrash className="text-xs" />
              Clear Cart
            </button>

            <button
              onClick={onContinueShopping}
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              <FaStore />
              Continue Shopping
            </button>
          </div> */}
        </>
      )}
    </section>
  );
}

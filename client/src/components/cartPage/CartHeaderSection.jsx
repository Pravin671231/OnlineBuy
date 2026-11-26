
import { FaArrowLeft, FaBookmark, FaAward } from "react-icons/fa";

export default function CartHeaderSection({ itemCount }) {
  return (
    <section>

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
            Shopping Cart
          </h1>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            You have{" "}
            <span className="font-bold text-blue-600">
              {itemCount} distinct products
            </span>{" "}
            ready for checkout
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold shadow-sm">
            <FaBookmark className="text-blue-600" />
            Items Saved for Later
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold shadow-sm">
            <FaAward className="text-orange-500" />
            Best Price Guarantee
          </div>
        </div>
      </div>
    </section>
  );
}

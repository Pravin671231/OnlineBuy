
export default function OrderSummary({
  subtotal,
  shipping,
  tax,
  total,
}) {
  const formatPrice = (price) =>
    `$${Number(price).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  return (
    <div className="rounded-xl border border-slate-200 bg-white">

      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-950">
          Order Summary
        </h2>

        <div className="mt-6 space-y-4">

          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-semibold text-slate-900">
              {formatPrice(subtotal)}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Shipping</span>
            <span className="font-semibold text-green-600">
              {shipping === 0 ? "Free" : formatPrice(shipping)}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Estimated Tax (7%)</span>
            <span className="font-semibold text-slate-900">
              {formatPrice(tax)}
            </span>
          </div>

        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-5">
        <span className="text-lg font-bold text-slate-900">
          Total Amount
        </span>

        <span className="text-2xl font-extrabold text-blue-600">
          {formatPrice(total)}
        </span>
      </div>

      <div className="p-6">
        <button className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
}

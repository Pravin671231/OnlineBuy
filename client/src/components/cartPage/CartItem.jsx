
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

export default function CartItem({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemove,
}) {
  const formatPrice = (price) =>
    `$${Number(price).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

// console.log("images url",item.images[0]);


  return (
    <article className="grid grid-cols-1 gap-4 border-b border-slate-200 px-5 py-6 last:border-0 md:grid-cols-[minmax(0,1fr)_100px_120px_100px_40px] md:items-center md:gap-3 md:px-6">

      {/* Product information */}
      <div className="flex min-w-0 items-center gap-4">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
          <img
            src={item.images[0]}
            alt={item.name}
            className="h-full w-full object-contain p-1"
          />
        </div>

        <div className="min-w-0">
          <span className="inline-block rounded border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
            {item.category}
          </span>

          <h3 className="mt-1 truncate text-base font-bold text-slate-900">
            {item.title}
          </h3>

          

          <p className="mt-2 text-sm font-semibold text-slate-900 md:hidden">
            {formatPrice(item.price)}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="hidden text-center text-sm font-medium text-slate-900 md:block">
        {formatPrice(item.discountPrice)}
      </div>

      {/* Quantity */}
      <div className="flex items-center justify-between md:justify-center">
        <span className="text-sm text-slate-500 md:hidden">Quantity</span>

        <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2">
          <button
            disabled={item.quantity <= 1}
            onClick={() =>
              onDecreaseQuantity(item.id)
            }
            className="text-xs text-slate-500 hover:text-blue-600 disabled:opacity-30"
            aria-label="Decrease quantity"
          >
            <FaMinus />
          </button>

          <span className="min-w-4 text-center text-sm font-semibold">
            {item.quantity}
          </span>

          <button
            onClick={() =>
              onIncreaseQuantity(item.id)
            }
            className="text-xs text-slate-500 hover:text-blue-600"
            aria-label="Increase quantity"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex items-center justify-between md:justify-end">
        <span className="text-sm text-slate-500 md:hidden">Subtotal</span>
        <span className="text-base font-bold text-slate-950">
          {formatPrice(item.discountPrice * item.quantity)}
        </span>
      </div>

      {/* Remove */}
      <div className="flex justify-end">
        <button
          onClick={() => onRemove(item.id)}
          aria-label={`Remove ${item.name}`}
          className="rounded-lg border border-red-200 bg-red-50 p-2.5 text-red-500 hover:bg-red-100"
        >
          <FaTrash className="text-xs" />
        </button>
      </div>

    </article>
  );
}

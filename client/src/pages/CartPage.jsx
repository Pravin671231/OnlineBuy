
import CartHeaderSection from "../components/cartPage/CartHeaderSection";
import CartItemsSection from "../components/cartPage/CartItemsSection";
import OrderSummary from "../components/cartPage/OrderSummary";
import { useCart } from "../hooks/cartHook";

const CardPage = () => {
  const { cartItems,totalCartAmount } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity),
    0
  );

  const shipping = subtotal === 0 || subtotal >= 50 ? 0 : 10;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  return (
    <main className="">
      <div className="">

        <CartHeaderSection />

        <div className="mt-6 grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1.8fr)_minmax(300px,1fr)] lg:gap-6">

          {/* Cart Items */}
          <div className="min-w-0 w-full">
            <CartItemsSection />
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="min-w-0 w-full lg:sticky lg:top-5">
              <OrderSummary
                subtotal={totalCartAmount}
                shipping={shipping}
                tax={tax}
                total={total}
              />
            </div>
          )}

        </div>
      </div>
    </main>
  );
};

export default CardPage;

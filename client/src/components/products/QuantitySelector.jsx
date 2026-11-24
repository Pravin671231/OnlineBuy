
import React, { useState } from "react";
import QuantitySelector from "../components/products/QuantitySelector";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log("Added quantity:", quantity);
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        iPhone 15 Pro Max
      </h1>

      <h2 className="text-xl font-bold text-blue-600 mb-4">
        $1,199
      </h2>

      {/* Quantity Selector */}
      <div className="mb-5">
        <p className="font-semibold mb-2">Quantity</p>

        <QuantitySelector
          min={1}
          max={10}
          initialQuantity={1}
          onChange={setQuantity}
        />
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Add to Cart
      </button>

    </div>
  );
};

export default ProductDetails;

import React from "react";
import CategorySection from "../components/homePage/CategorySection";
import HomeMainSection from "../components/homePage/HomeMainSection";
import ProductSection from "../components/homePage/ProductSection";

const HomePage = () => {
  return (
    <div className="">
      {/* main section */}
      <HomeMainSection />
      {/* Categories */}
      <CategorySection />

      {/* Featured Products Section */}
      <ProductSection />
    </div>
  );
};

export default HomePage;

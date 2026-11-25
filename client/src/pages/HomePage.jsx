import React from "react";
import CategorySection from "../components/homePage/CategorySection";
import ProductSection from "./ProductSection";
import HomeMainSection from "../components/homePage/HomeMainSection";

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

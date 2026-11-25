
import React, { useState } from "react";

import CategoryMainSection from "../components/categoryPage/CategoryMainSection";
import CategoryGridSection from "../components/categoryPage/CategoryGridSection";
import CategoryNavigation from "../components/categoryPage/CategoryNavigation";

import {
  useCategories,
  useCategoryName,
  useProduct,
} from "../hooks/productHook";

const CategoryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Fetch all products
  const {
    data = [],
    loading: productsLoading,
    error: productsError,
  } = useProduct();

  // Fetch categories
  const {
    categories = [],
    categoriesError,
    categoriesLoading,
  } = useCategories();

  // Fetch selected category products
  const {
    selectedCategory = [],
    selectedCategoryLoading,
    selecetedCategoryError,
  } = useCategoryName(
    activeCategory === "all" ? null : activeCategory
  );

  // Get selected category details
  const currentCategory = categories.find(
    (category) => category.slug === activeCategory
  );

  // Display products
  const displayedProducts =
    activeCategory === "all" ? data : selectedCategory;

  // Handle products array
  const productList = Array.isArray(displayedProducts)
    ? displayedProducts
    : displayedProducts?.products || [];

  // Product count
  const itemCount = productList.length;

  // Loading and error states
  // const isLoading =
  //   activeCategory === "all"
  //     ? productsLoading
  //     : selectedCategoryLoading;

  // const hasError =
  //   activeCategory === "all"
  //     ? productsError
  //     : selecetedCategoryError;

  // Dynamic header details
  const categoryTitle =
    activeCategory === "all"
      ? "All Categories"
      : currentCategory?.name || "Products";

  const categoryDescription =
    activeCategory === "all"
      ? "Explore our complete collection of quality products across all departments."
      : currentCategory?.description ||
        `Explore our latest ${currentCategory?.name || "category"} collection and discover quality products.`;

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Category Header */}
      <CategoryMainSection
        title={categoryTitle}
        description={categoryDescription}
        itemCount={itemCount}
      />

      {/* Category Navigation */}
      <CategoryNavigation
        categories={categories}
        selectedCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Category Products */}
      <CategoryGridSection
        products={productList}
        loading={categoriesLoading}
        error={categoriesError}
      />

    </main>
  );
};

export default CategoryPage;

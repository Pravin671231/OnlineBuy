import api from "./api";

export const getAllProducts = async () => {
  const res = await api.get("/products");
  return res.data.products;
};

export const getByIdProduct = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

export const getAllCategories = async () => {
  const res = await api.get("/products/categories");
  return res.data;
};

export const getByNameCategory = async (categoryName) => {
  const res = await api.get(`/products/category/${categoryName}`);
  return res.data.products;
};



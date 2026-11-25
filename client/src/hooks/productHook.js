import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductById,
  fetchProducts,
} from "../features/products/productThunk";

export const useProduct = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return { data, isLoading, isError };
};

export const useProductById = (id) => {
  const dispatch = useDispatch();

  const { selecedProductLoading, selecedProduct, selecedProductError } =
    useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch,id]);
  return { selecedProduct, selecedProductError, selecedProductLoading };
};

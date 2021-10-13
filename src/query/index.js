import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS, GET_CATEGORIES, GET_CURRENCY } from "./queries";

export const useQueryGetCategories = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  const categories = data ? data.categories : null;
  return { loading, error, categories };
};

export const useQueryGetAllProducts = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  const products = data ? data.category.products : null;
  return { loading, error, products };
};

export const useQueryGetCurrency = () => {
  const { loading, error, data } = useQuery(GET_CURRENCY);
  const currency = data ? data.currencies : null;
  return { loading, error, currency };
};
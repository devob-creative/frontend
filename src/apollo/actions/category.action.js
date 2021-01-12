import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../queries/category.query";

export const useCategories = (options) => useQuery(GET_CATEGORIES, options);

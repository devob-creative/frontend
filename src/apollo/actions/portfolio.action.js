import { useQuery } from "@apollo/client";
import { GET_PORTFOLIOS } from "../queries/portfolio.query";

export const usePortfolios = (options) => useQuery(GET_PORTFOLIOS, options);

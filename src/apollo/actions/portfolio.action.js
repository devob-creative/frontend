import { useQuery } from "@apollo/client";
import { GET_PORTFOLIOS, GET_PORTFOLIO } from "../queries/portfolio.query";

export const usePortfolios = (options) => useQuery(GET_PORTFOLIOS, options);
export const usePortfolio = (options) => useQuery(GET_PORTFOLIO, options);

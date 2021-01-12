import { gql } from "@apollo/client";

const PORTFOLIO_FRAGMENT = gql`
  fragment PortfolioFragment on Portfolio {
    id
    title
    slug
    image {
      id
      url
    }
    cover {
      url
    }
    categories {
      name
      slug
    }
    created_at
  }
`;

export const GET_PORTFOLIOS = gql`
  query($where: JSON) {
    portfolios(sort: "created_at:desc", where: $where) {
      ...PortfolioFragment
    }
  }
  ${PORTFOLIO_FRAGMENT}
`;

export const GET_PORTFOLIO = gql`
  query($slug: String!) {
    portfolioBySlug(slug: $slug) {
      ...PortfolioFragment
      description
      keywords
      content
      colors {
        background
        text
      }
    }
  }
  ${PORTFOLIO_FRAGMENT}
`;

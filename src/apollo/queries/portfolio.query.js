import { gql } from "@apollo/client";

export const GET_PORTFOLIOS = gql`
  query {
    portfolios {
      id
      title
      description
      keywords
      slug
      content
      image {
        url
      }
      cover {
        url
      }
      colors {
        background
        text
      }
      created_at
    }
  }
`;

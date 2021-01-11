import { gql } from "@apollo/client";

export const GET_PORTFOLIOS = gql`
  query {
    portfolios {
      id
      title
      description
      keywords
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

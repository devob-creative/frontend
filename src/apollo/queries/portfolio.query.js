import { gql } from "@apollo/client";

export const GET_PORTFOLIOS = gql`
  query {
    portfolios(sort: "created_at:desc") {
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

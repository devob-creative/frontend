import { gql } from "@apollo/client";

export const GET_PORTFOLIOS = gql`
  query($where: JSON) {
    portfolios(sort: "created_at:desc", where: $where) {
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
      categories {
        name
        slug
      }
      colors {
        background
        text
      }
      created_at
    }
  }
`;

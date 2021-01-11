import { gql } from "@apollo/client";

export const GET_SLIDES = gql`
  query {
    slides {
      title
      action
      redirect
      image {
        url
      }
    }
  }
`;

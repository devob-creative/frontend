import { gql } from "@apollo/client";

export const GET_MODALS = gql`
  query {
    modals @client {
      extra
    }
  }
`;

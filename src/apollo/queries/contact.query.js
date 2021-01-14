import { gql } from "@apollo/client";

export const NEW_MESSAGE = gql`
  mutation(
    $fullname: String!
    $company: String!
    $phone: String!
    $email: String!
    $content: String!
  ) {
    createMessage(
      input: {
        data: {
          fullname: $fullname
          company: $company
          phone: $phone
          email: $email
          content: $content
        }
      }
    ) {
      message {
        id
      }
    }
  }
`;

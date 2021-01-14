import withApollo from "next-with-apollo";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { modalsVar } from "../apollo/cache/modal.cache";
import { API_URI } from "../constants";

export default withApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      headers,
      credentials: "same-origin",
      uri: `${API_URI}/graphql`,
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              modals: {
                read() {
                  return modalsVar();
                },
              },
            },
          },
        },
      }).restore(initialState || {}),
      typeDefs: gql`
        extend type Query {
          modals: Json
        }
      `,
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);

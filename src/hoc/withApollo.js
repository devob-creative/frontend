import withApollo from "next-with-apollo";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { API_URI } from "../constants";

export default withApollo(
  ({ initialState }) => {
    const isBrowser = typeof window !== undefined;
    return new ApolloClient({
      ssrMode: !isBrowser,
      uri: `${API_URI}/graphql`,
      cache: new InMemoryCache().restore(initialState || {}),
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

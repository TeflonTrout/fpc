import { ApolloClient, InMemoryCache } from "@apollo/client";

const withApollo = new ApolloClient({
  uri: "https://api.start.gg/gql/alpha",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_SMASH_GG_API_KEY}`,
  },
});

export default withApollo;

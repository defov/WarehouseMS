import { ApolloClient, InMemoryCache } from "@apollo/client"

export const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL as any,
  cache: new InMemoryCache(),
})

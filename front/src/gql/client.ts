import { ApolloClient, InMemoryCache } from '@apollo/client/core'

export const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

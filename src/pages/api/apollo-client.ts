import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

export default client

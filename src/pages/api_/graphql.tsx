import { ApolloServer, gql } from 'apollo-server-micro'
import { searchCharacter } from './SearchCharacters'

const typeDefs = gql`
  type NameObject {
    name: String
    id: String
  }

  type Episode {
    name: String
    air_date: String
    id: String
    episode: String
  }

  type Character {
    id: String
    name: String
    image: String
    location: NameObject
    origin: NameObject
    episode: [Episode]
  }

  type Result {
    results: [Character]
  }

  type Query {
    characters(name: String): [Result!]!
  }
`

const resolvers = {
  Query: {
    characters: (_, { query }) => searchCharacter(query)
  }
}
export const graphqlClient = new ApolloServer({ typeDefs, resolvers })

export default (req, res) => {
  graphqlClient.createHandler({
    path: '/api/graphql'
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false
  }
}

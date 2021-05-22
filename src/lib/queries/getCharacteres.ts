import gql from 'graphql-tag'

const GET_CHARACTERES = gql`
  query GetTrip($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`

export default GET_CHARACTERES

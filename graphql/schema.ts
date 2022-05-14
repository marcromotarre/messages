import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Counter {
    id: Int
    count: Int
  }

  type Query {
    counters: [Counter]!
  }
`
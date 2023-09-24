// id: ID!  -> ! means id can not be null ,
// platform: [String!]! -> mean platform is not null and also it's element string is also not null.

export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }
  type Query {
    games: [Game]
    reviews: [Review]
    authors: [Author]
  }
`

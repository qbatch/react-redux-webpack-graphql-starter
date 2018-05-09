const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    author: String
  }

  type Location {
    long: String
    lat: String
  }

  type User {
    name: String
    age: String
    books: [Book]
    location: Location
  }

  type Query {
    getBookById(id: ID!): Book
    getUserById(id: ID!): User
    getSomeUsers(first: ID!, offset: ID!): [User]
    books: [Book]
    users: [User]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

module.exports = typeDefs;
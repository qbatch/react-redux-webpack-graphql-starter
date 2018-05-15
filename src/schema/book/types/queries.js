import { gql } from 'apollo-server';

const typeDef = gql`
  extend type Query {
    getBookById(id: ID!): Book
    getBooks: [Book]
  }
`;

export default typeDef;
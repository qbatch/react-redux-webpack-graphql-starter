import { gql } from 'apollo-server';

const typeDef = gql`
  extend type Query {
    getBookById(id: ID!): Book
    books: [Book]
  }
`;

export default typeDef;
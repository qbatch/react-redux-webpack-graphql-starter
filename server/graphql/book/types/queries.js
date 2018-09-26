import { gql } from 'apollo-server-express';

const Queries = gql`
  extend type Query {
    getBookById(id: ID!): Book
    getBooks: [Book]
  }
`;

export default Queries;

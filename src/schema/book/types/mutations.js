import { gql } from 'apollo-server';

const typeDef = gql`
  extend type Mutation {
    addBook(title: String, author: String): Book
  }
`;

export default typeDef;
import { gql } from 'apollo-server-express';

const Mutations = gql`
  extend type Mutation {
    addBook(title: String, author: String): Book
  }
`;

export default Mutations;

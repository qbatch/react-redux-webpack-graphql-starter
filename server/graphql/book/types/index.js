import { gql } from 'apollo-server-express';
import Queries from './queries';
import Mutations from './mutations';

const Book = gql`
  type Book {
    id: ID
    title: String
    author: String
  }
`;

export default [Book, Queries, Mutations];

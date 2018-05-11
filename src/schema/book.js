import { gql } from 'apollo-server';
import Author from './author';

const Book = gql`
  type Book {
    title: String
    author: Author
  }

  type Query {
    getBookById(id: ID!): Book
    getUserById(id: ID!): User
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

export default () => [Book, Author];

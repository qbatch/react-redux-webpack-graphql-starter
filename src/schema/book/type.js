import { gql } from 'apollo-server';

const typeDef = gql`
  type Book {
    id: ID
    title: String
    author: String
  }
`;

export default typeDef;

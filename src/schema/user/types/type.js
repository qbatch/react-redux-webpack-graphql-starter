import { gql } from 'apollo-server';

const typeDef = gql`
  type User {
    name: String
    userName: String
    email: String!
    password: String!
    token: String
    age: String
    books: [Book]
    location: Location
  }
`;

export default typeDef;

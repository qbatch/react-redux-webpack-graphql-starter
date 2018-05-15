import { gql } from 'apollo-server';

const typeDef = gql`
  extend type Query {
    getUserById(id: ID!): User
    getSomeUsers(first: ID!, offset: ID!): [User]
    getUsers: [User]
  }
`;

export default typeDef;

import { gql } from 'apollo-server';

const typeDef = gql`
  extend type Query {
    getUserById(id: ID!): User
    getSomeUsers(first: ID!, offset: ID!): [User]
    users: [User]
  }
`;

export default typeDef;

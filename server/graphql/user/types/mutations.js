import { gql } from 'apollo-server-express';

const Mutations = gql`
  extend type Mutation {
    registerUser(userName: String, email: String, password: String): Response
    loginUser(email: String, password: String, token: String): Response
  }
`;

export default Mutations;

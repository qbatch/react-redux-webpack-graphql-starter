import { gql } from 'apollo-server-express';

const Mutations = gql`
  extend type Mutation {
    fetchUser(id: String): Response
  }
`;

export default Mutations;

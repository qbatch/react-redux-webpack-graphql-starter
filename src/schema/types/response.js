import { gql } from 'apollo-server';

const typeDef = gql`
  type Response {
    user: User
    status: Boolean
    msg: String
  }
`;

export default typeDef;
import { gql } from 'apollo-server-express';

const response = gql`
  type Data {
    user: User
    book: Book
  }

  type Response {
    data: Data
    status: Boolean
    msg: String
  }
`;

export default response;

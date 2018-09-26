import { gql } from 'apollo-server';

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

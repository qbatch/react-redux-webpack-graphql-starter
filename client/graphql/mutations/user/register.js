import gql from 'graphql-tag';

const USER_REGISTER = gql`
  mutation registerUser($userName: String!, $email: String!, $password: String!) {
    registerUser(userName: $userName, email: $email, password: $password) {
      status
      msg
      user {
        email
        userName
        token
      }
    }
  }
`;

export default USER_REGISTER;

import gql from 'graphql-tag';

const USER_LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      status
      msg
      data {
        user {
          email
          userName
        }
      }
    }
  }
`;

export default USER_LOGIN;

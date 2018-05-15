import { users } from '../../../utils/dummyData';

  const getUsers = (parent, args) => {
    return users;
  }

  const getUserById = (parent, args) => {
    const index = users.findIndex(user => user.id === args.id );
    return users[index];
  }

  export default { getUsers, getUserById };

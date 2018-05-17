import { users } from '../../../utils/dummyData';
import User from '../../../models/users';

const getUsers = async (parent, args) => {
  const users = await User.find({});
  if(users) {
    return users;
  }
}

const getUserById = (parent, args) => {
  const index = users.findIndex(user => user.id === args.id );
  return users[index];
}

export default { getUsers, getUserById };

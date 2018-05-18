import { users } from '../../../utils/dummyData';
import User from '../../../models/users';

const getUsers = async (parent, args) => {
  const users = await User.find({}).skip(parseInt(args.first)).limit(parseInt(args.offset));
  return users;
}

const getUserById = (parent, args) => {
  const index = users.findIndex(user => user.id === args.id );
  return users[index];
}

const getUsersCount = (parent, args) => {
  return {count: User.find({}).count()};
}

export default { getUsers, getUserById, getUsersCount };

import User from '../../../models/users';

const getUsers = async (parent, args) => {
  const users_ = await User.find({}).skip(parseInt(args.first)).limit(parseInt(args.offset));
  return users_;
};

const getUserById = (parent, args) => {
  const user_ = User.findOne({ _id: args.id });
  return user_;
};

const getUsersCount = (parent, args) => {
  return { count: User.find({}).count() };
};

const getUserByUserName = (parent, args) => {
  const user_ = User.findOne({ userName: args.userName });
  return user_;
};

export default {
  getUsers,
  getUserById,
  getUsersCount,
  getUserByUserName
};

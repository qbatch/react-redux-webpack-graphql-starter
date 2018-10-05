import User from '../../../models/users';

const getUserById = (parent, args) => {
  const user = User.findOne({ _id: args.id });
  return user;
};

export default {
  getUserById
};

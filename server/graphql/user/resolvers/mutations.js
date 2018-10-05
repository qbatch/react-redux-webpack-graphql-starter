import User from '../../../models/users';

const fetchUser = async (parent, args) => User.findOne({
  _id: args.id
}).then((user) => {
  if (user) {
    return { status: true, data: { user }, msg: 'loggedin successfully !' };
  }

  return { status: false, data: { user: args }, msg: 'User Not Found' };
}).catch((err) => {
  throw err;
});

export default { fetchUser };

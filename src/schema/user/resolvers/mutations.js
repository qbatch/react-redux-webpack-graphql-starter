import jwt  from 'jsonwebtoken';
import Users from '../../../models/users';
import { SECRET_KEY } from '../../../config/constants';

const registerUser = async (parent, args) => {
  try {
    const token = jwt.sign({ email: args.email, password: args.password }, SECRET_KEY, { expiresIn: '1h' });
    args.token = token;

    const user = await Users.create(args);
    if(user) {
      return { status: true, user: user, msg: 'user registereg successfully!' };
    }
    return { status: false, user: user, msg: 'user not registered!' };
  } catch (error) {
    return { status: false, user: args, msg: error.message };
  }
}

const loginUser = async (parent, args) => {
  try {
    if(args.token) {
      const token = jwt.verify(args.token, SECRET_KEY);
      if(token.exp > 0) {
        const user = await Users.findOne({ email: token.email, password: token.password });
        if(user) {
          if(user.email === args.email && user.password === args.password) {
            return { status: true, user: user, msg: 'user logged in successfully!' };
          }
        }
      } else {
        const user = await User.findOne({email: token.email, password: token.password});
        if(user) {
          if(user.email === args.email && user.password === args.password) {
            const updatedUser = await Users.findOneAndUpdate({ _id: user._id }, token, { new: true });
            if(updatedUser) {
              return { status: true, user: updatedUser, msg: 'user logged in successfully!' };
            }
          }
        }
      }
    }
    return { status: false, user: args, msg: 'User is not authorized' };
  } catch (error) {
    return { status: false, user: args, msg: error.message };
  }
}

export default { loginUser, registerUser };

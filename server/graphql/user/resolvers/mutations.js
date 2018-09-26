import jwt from 'jsonwebtoken';
import User from '../../../models/users';
import { SECRET_KEY } from '../../../../config/constants';

const registerUser = async (parent, args) => {
  try {
    const token = jwt.sign({ email: args.email, password: args.password }, SECRET_KEY, { expiresIn: '1h' });
    args.token = token;

    const user = await User.create(args);
    if (user) {
      return { status: true, data: { user }, msg: 'user registered successfully!' };
    }
    return { status: false, data: { user }, msg: 'user not registered!' };
  } catch (error) {
    return { status: false, data: { user: args }, msg: error.message };
  }
};

const loginUser = async (parent, args) => {
  try {
    const user = await User.findOne({ email: args.email, password: args.password });
    if (user) {
      jwt.verify(user.token, SECRET_KEY);
      return { status: true, data: { user }, msg: 'loggedin successfully !' };
    }

    return { status: false, data: { user: args }, msg: 'Please enter corrent email password' };
  } catch (error) {
    const token = jwt.sign({ email: args.email, password: args.password }, SECRET_KEY, { expiresIn: '1h' });
    const user = await User.findOneAndUpdate({ email: args.email }, { token }, { new: true });
    if (user) {
      return { status: true, data: { user }, msg: 'loggedin successfully !' };
    }

    return { status: false, data: { user: args }, msg: error.message };
  }
};

export default { loginUser, registerUser };

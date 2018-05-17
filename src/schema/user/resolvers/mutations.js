import jwt  from 'jsonwebtoken';
import User from '../../../models/users';
import { SECRET_KEY } from '../../../config/constants';

const registerUser = async (parent, args) => {
  console.log(args);
  try {
    const token = jwt.sign({ email: args.email, password: args.password }, SECRET_KEY, { expiresIn: '1h' });
    args.token = token;

    const user = await User.create(args);
    if(user) {
      return {status: true, user: user, msg: 'user registered successfully!'};
    }
    return {status: false, user: user, msg: 'user not registered!'};
  } catch (error) {
    return {status: false, user: args, msg: error.message};
  }
}

const loginUser = async (parent, args) => {
  try {
    const user = await User.findOne({email: args.email, password: args.password});
    if(user) {
      jwt.verify(user.token, config.SECRET_KEY);
      return {status: true, user: updatedUser, msg: 'loggedin successfully !'};
    } else {
      return {status: false, user: args, msg: 'Please enter corrent email password'};      
    }
  } catch (error) {
    const token = jwt.sign({ email: args.email, password: args.password }, SECRET_KEY, { expiresIn: '1h' });
    const updatedUser = await User.findOneAndUpdate({email: args.email}, {token: token}, {new: true});
    if(updatedUser) {
      return {status: true, user: updatedUser, msg: 'loggedin successfully !'};
    }
  }
}

export default { loginUser, registerUser };

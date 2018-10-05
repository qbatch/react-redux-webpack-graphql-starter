import jwt from 'jsonwebtoken';
import { Strategy as PassportLocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';

import User from '../models/users';
import { SECRET_KEY } from '../../config/constants';

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  return User.findOne({
    email: email.trim()
  }).then((user) => {
    if (!user) {
      const error = new Error('Incorrect email or password!');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    return bcrypt.compare(password.trim(), user.password, (passwordErr, isMatch) => {
      if (!isMatch) {
        const error = new Error('Incorrect email or password!');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      let token;
      console.log('\n\n');
      try {
        console.log('In Try Block');
        jwt.verify(user.token, SECRET_KEY);
        console.log('Token Verified');
        ({ token } = user);
      } catch (error) {
        console.log('In Catch Block');
        token = jwt.sign({ email: email.trim(), password: password.trim() }, SECRET_KEY, { expiresIn: '1h' });
        console.log('Token Created');
        User.findOneAndUpdate({ email: email.trim() }, { token }, (err) => {
          if (err) { return done(error); }
          console.log('User Updated');
        });
      }

      console.log('\n\n', 'Token', token);
      const data = {
        id: user.id
      };

      return done(null, token, data);
    });
  }).catch(err => done(err));
});

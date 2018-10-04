import jwt from 'jsonwebtoken';
import { Strategy as PassportLocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';

import User from '../models/users';
import config from '../../config/index.json';

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

      const payload = {
        sub: user.id
      };

      // create a token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        id: user.id
      };

      return done(null, token, data);
    });
  }).catch(err => done(err));
});

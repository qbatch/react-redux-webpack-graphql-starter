import { Strategy as PassportLocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';

import User from '../models/users';

const saltRounds = 10;

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const { userName } = req.body;
  const passwordTrimmed = password.trim();

  bcrypt.hash(passwordTrimmed, saltRounds, (passwordErr, hash) => {
    if (passwordErr) {
      return done(passwordErr);
    }

    // Store hash in your password DB.
    User.create({
      userName: userName.trim(),
      password: hash,
      email: email.trim()
    }).then(() => done(null)).catch(insertionErr => done(insertionErr));
  });
});

import express from 'express';
import passport from 'passport';

const router = new express.Router();

router.post('/signup', (req, res, next) => {
  return passport.authenticate('local-signup', (err) => {
    if (err) {
      if (err.code === 11000 && err.errmsg.includes('email')) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: 'This email is already taken!'
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form!'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.'
    });
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  try {
    return passport.authenticate('local-login', (err, token, userData) => {
      if (err) {
        if (err.name === 'IncorrectCredentialsError') {
          return res.status(400).json({
            success: false,
            message: err.message
          });
        }

        return res.status(400).json({
          success: false,
          message: 'Could not process the form!'
        });
      }

      const data = {
        success: true,
        message: 'You have successfully logged in.',
        token,
        id: userData.id
      };

      return res.json(data);
    })(req, res, next);
  } catch (e) {
    throw e;
  }
});

module.exports = router;

import express from 'express';
import path from 'path';
import webpack from 'webpack';
import passport from 'passport';
import webpackHotMiddleWare from 'webpack-hot-middleware';
import webpackDevMiddleWare from 'webpack-dev-middleware';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';

import webpackConfig from '../webpack.config.babel';
import Schema from './graphql';
import localLoginStrategy from './passport/local-login';
import localSignUpStrategy from './passport/local-signup';
import authRoutes from './routes/auth';

import '../config/database';

const app = express();
const indexPath = path.join(__dirname, '../dist', 'index.html');

const server = new ApolloServer(Schema);
server.applyMiddleware({ app });

const compiler = webpack(webpackConfig);

app.use(express.static('./dist'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

// load passport strategies
passport.use('local-login', localLoginStrategy);
passport.use('local-signup', localSignUpStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');

app.use('/api', authCheckMiddleware);

console.log('\n\nHi,\nIm\nServer\n\n');

// Routes
app.use('/auth', authRoutes);

app.use(webpackDevMiddleWare(compiler, {
  noInfo: true,
  writeToDisk: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleWare(compiler));

app.get('*', (_, res) => { res.sendFile(indexPath); });

app.listen({ port: '4000' }, () => {
  console.log('🚀 Server ready at http://localhost:4000');
});

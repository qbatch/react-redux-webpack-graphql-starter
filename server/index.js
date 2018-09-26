import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackHotMiddleWare from 'webpack-hot-middleware';
import webpackDevMiddleWare from 'webpack-dev-middleware';
import { ApolloServer } from 'apollo-server-express';

import webpackConfig from '../webpack.config.babel';
import Schema from './graphql';
import '../config/database';

const app = express();
const indexPath = path.join(__dirname, '../dist', 'index.html');

const server = new ApolloServer(Schema);
server.applyMiddleware({ app });

const compiler = webpack(webpackConfig);

app.use(express.static('./dist'));

app.use(webpackDevMiddleWare(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.path,
}));

app.use(webpackHotMiddleWare(compiler));

app.get('*', (_, res) => { res.sendFile(indexPath); });

app.listen({ port: '4000' }, () =>
  console.log('🚀 Server ready at http://localhost:4000')
)

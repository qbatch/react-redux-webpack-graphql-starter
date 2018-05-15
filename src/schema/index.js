import { merge } from 'lodash';
import typeDefs from '../schema/schema';
import userResolvers from './user/resolvers';
import bookResolvers from './book/resolvers';

const resolvers = {};

module.exports = { typeDefs, resolvers: merge(resolvers, userResolvers, bookResolvers) };

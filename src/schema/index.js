import { gql } from 'apollo-server';
import { merge } from 'lodash';
import jwt  from 'jsonwebtoken';
import config from '../../config';
import typeDefs from '../schema/schema';
import User from '../../models/user_model';
import userResolvers from './user/resolvers';
import bookResolvers from './book/resolvers';
import { users, location, books } from './dummyData';
import { makeExecutableSchema } from 'graphql-tools';

const resolvers = {};

module.exports = { typeDefs, resolvers: merge(resolvers, userResolvers, bookResolvers)};

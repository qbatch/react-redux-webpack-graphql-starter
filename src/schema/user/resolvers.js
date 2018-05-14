import { gql } from 'apollo-server';
import { Merge } from 'lodash';
import jwt  from 'jsonwebtoken';
import config from '../../../config';
import User from '../../../models/user_model';
import userQueryResolver from './resolvers/query-resolver';
import userMutationResolver from './resolvers/mutation-resolver';

const resolvers = {
  Query: {
    getUserById: (parent, args) => {
      return userQueryResolver.getUserById(parent, args);
    },
    getSomeUsers: (parent, args) => {
      // const users = users.find({}).skip(args.first).limit(args.offset);
    },
    users: () => {
      return userQueryResolver.getUsers();
    }
  },
  Mutation: {
    registerUser: (parent, args) => {
      return userMutationResolver.registerUser(parent, args);
    },
    loginUser: async (parent, args) => {
      return userMutationResolver.login(parent, args);
    }, 
  },
};

module.exports = resolvers;

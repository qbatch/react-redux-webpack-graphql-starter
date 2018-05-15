import userQueryResolver from './query';
import userMutationResolver from './mutation';

const resolvers = {
  Query: userQueryResolver,
  Mutation: userMutationResolver
}

export default resolvers;

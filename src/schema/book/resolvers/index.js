import bookQueryResolver from './query';
import bookMutationResolver from './mutation';

const resolvers = {
  Query: bookQueryResolver,
  Mutation: bookMutationResolver
}

export default resolvers;

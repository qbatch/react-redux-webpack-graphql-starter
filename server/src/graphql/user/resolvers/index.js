import Query from './queries';
import Mutation from './mutations';
import Relations from './relations';

const resolvers = { Query, Mutation, ...Relations };

export default resolvers;

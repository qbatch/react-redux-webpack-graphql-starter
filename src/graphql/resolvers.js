import { merge } from 'lodash';

import userResolvers from './user/resolvers';
import bookResolvers from './book/resolvers';

const resolvers = merge(userResolvers, bookResolvers);

export default resolvers;

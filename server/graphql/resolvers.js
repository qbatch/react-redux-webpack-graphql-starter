import { merge } from 'lodash';

import userResolvers from './user/resolvers';
import bookResolvers from './book/resolvers';
import productsResolvers from './products/resolvers';

const resolvers = merge(userResolvers, bookResolvers, productsResolvers);

export default resolvers;

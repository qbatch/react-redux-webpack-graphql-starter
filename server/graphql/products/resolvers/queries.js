import Products from '../../../models/products';

const getProducts = (parent, args) => {
  // const skip = args.skip || 0;
  const limit = args.limit || 2;

  const products = Products.findOne({ companyId: '29NTshEFnQXS6jWXP' }, null, { skip: 0, limit: 2 });
  return products;
}

export default { getProducts };

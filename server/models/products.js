import mongoose from 'mongoose';

const Products = new mongoose.Schema({
  _id: { type: String },
  title: { type: String },
  sellerSku: { type: String },
  asin: { type: String },
  condition: { type: String },
  listPrice: { type: Number },
  fulfilmentType: { type: String }
});

export default mongoose.model('products', Products);

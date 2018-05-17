import mongoose from 'mongoose';

const Books = new mongoose.Schema({
  title: { type: String },
  author: { type: String},
});

export default mongoose.model('books', Books);

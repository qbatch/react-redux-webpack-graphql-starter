import mongoose from 'mongoose';

const Books = new mongoose.Schema({
  userId: { type: String },
  title: { type: String },
  author: { type: String }
});

export default mongoose.model('books', Books);

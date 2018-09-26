import mongoose from 'mongoose';

const Users = new mongoose.Schema({
  userName: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String }
});

export default mongoose.model('users', Users);

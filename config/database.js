import mongoose from 'mongoose';
import { MONGO_URL } from './constants';

mongoose.connect(MONGO_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to ' + MONGO_URL);
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close( () => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

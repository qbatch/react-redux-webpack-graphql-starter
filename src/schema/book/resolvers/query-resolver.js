import jwt  from 'jsonwebtoken';
import  User from '../../../../models/user_model';
import config from '../../../../config';
import { books } from '../../dummyData';

const getBooks = () => {
  return books;
}

const getBookById = () => {
  const index = books.findIndex(book => book.id === args.id);
  return books[index];
}

export default {getBookById, getBooks};


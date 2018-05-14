import jwt  from 'jsonwebtoken';
import  User from '../../../../models/user_model';
import config from '../../../../config';
import { users } from '../../dummyData';

const addBook = () => {
  const {title, author} = args;
  books.push({id: '4', title, author});
  return books[books.length-1];
}

export default {addBook};


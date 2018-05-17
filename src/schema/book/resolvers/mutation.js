import { books } from '../../../utils/dummyData';

const addBook = (parent, args) => {
  const {title, author} = args;
  books.push({id: '4', title, author});
  return books[books.length-1];
}

export default { addBook };


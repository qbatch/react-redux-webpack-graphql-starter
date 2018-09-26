import { books } from '../../../utils/dummyData';

const getBooks = () => {
  return books;
}

const getBookById = (parent, args) => {
  const index = books.findIndex(book => book.id === args.id);
  return books[index];
}

export default { getBookById, getBooks };

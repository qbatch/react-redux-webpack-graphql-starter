import Book from '../../../models/books';

const addBook = async (parent, args) => {
  const book = await Book.create(args);
  if (book) {
    return book;
  }
};

export default { addBook };

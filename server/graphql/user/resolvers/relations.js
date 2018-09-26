import Books from '../../../models/books';

const relation = {
  User: {
    books: (user) => {
      return Books.find({ userId: user._id });
    }
  }
};

export default relation;

import Book from './book';

const Author = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    books: [Book]
  }
`;

// we export Author and all types it depends on
// in order to make sure we don't forget to include
// a dependency and we wrap it in a function
// to avoid strings deduplication
export default () => [Author, Book];

const books = [
  {
    id: "1",
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: "2",
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const location = {
  long: "21",
  lat: "18"
}

const users = [
  {
    id: "3",
    name: 'Amir mughal',
    age: '21',
    books: books,
    location: location
  },
  {
    id: "5",
    name: 'Amir mughal',
    age: '21',
    books: books,
    location: location
  },
  {
    id: "9",
    name: 'Amir mughal',
    age: '21',
    books: books,
    location: location
  },
  {
    id: "1",
    name: 'Amir mughal',
    age: '21',
    books: books,
    location: location
  }
]

module.exports = { location, books, users };
const movies = [
  'Matrix',
  'Blade Runner',
  'The Lord of the Rings',
  'Avatar',
  'Brokeback Mountain',
  'Inglorious Bastards',
  'The Hateful 8',
];

// Your code below
function printMoviesWithIndex(m) {
  // implement the function body
  m.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie}`);
  });
}

printMoviesWithIndex(movies);

export default printMoviesWithIndex;

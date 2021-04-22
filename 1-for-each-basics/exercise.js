const movies = [
  'Matrix',
  'Blade Runner',
  'The Lord of the Rings',
  'Avatar',
  'Brokeback Mountain',
  'Inglorious Bastards',
  'The Hateful 8',
];

function printMovies(movies) {
  movies.forEach((movie) => console.log(movie));
}

printMovies(movies);

export default printMovies;

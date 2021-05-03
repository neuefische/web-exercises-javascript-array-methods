const tvShows = [
  {
    title: 'True Detective',
    publishingYear: 2014,
    rating: 9,
    watched: false,
  },
  {
    title: 'The Boys',
    publishingYear: 2019,
    rating: 8.7,
    watched: true,
  },
  {
    title: 'Game of Thrones',
    publishingYear: 2011,
    rating: 9.3,
    watched: true,
  },
  {
    title: 'Mr. Robot',
    publishingYear: 2015,
    rating: 8.5,
    watched: false,
  },
  {
    title: 'Chernobyl',
    publishingYear: 2019,
    rating: 9.4,
    watched: true,
  },
  {
    title: 'Money Heist',
    publishingYear: 2017,
    rating: 8.3,
    watched: true,
  },
  {
    title: 'Dark',
    publishingYear: 2017,
    rating: 8.8,
    watched: false,
  },
];

// Your code below

const showTitles = tvShows.map((show) => show.title);

const tvShowsReduced = tvShows.map((show) => ({
  title: show.title,
  rating: show.rating,
}));

const showTitlesRated = tvShows.map((show) =>
  show.rating >= 9 ? show.title.toUpperCase() : show.title.toLowerCase()
);
1;

console.table(showTitles);
console.table(tvShowsReduced);
console.table(showTitlesRated);

export { showTitles, tvShowsReduced, showTitlesRated };

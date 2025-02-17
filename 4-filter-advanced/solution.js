export const tvShows = [
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

export function printWatchedTvShows(tvShows) {
  const watchedTvShows = tvShows.filter((show) => show.watched);
  console.table(watchedTvShows);
}

export function printTvShowsWithHighestRating(tvShows) {
  const watchedTvShows = tvShows.filter((show) => show.rating >= 9);
  console.table(watchedTvShows);
}

export function printTvShowsFirstPublishedBeforeYear(tvShows, year) {
  const shows = tvShows.filter((show) => show.publishingYear < year);
  console.table(shows);
}

printWatchedTvShows(tvShows);
printTvShowsWithHighestRating(tvShows);
printTvShowsFirstPublishedBeforeYear(tvShows, 2015);

import { jest } from '@jest/globals';

import {
  tvShows,
  printWatchedTvShows,
  printTvShowsWithHighestRating,
  printTvShowsFirstPublishedBeforeYear,
} from './4-filter-advanced/exercise';

describe('4-filter-advanced', () => {
  it('should print an array that only includes watched TV shows', () => {
    const watchedTvShows = [
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
    ];
    const spy = jest.spyOn(console, 'table');
    printWatchedTvShows(tvShows);
    expect(spy).toHaveBeenCalledWith(watchedTvShows);
  });

  it('should print an array of tv show with highest rating (greater or equal to 9)', () => {
    const highRatedShows = [
      {
        title: 'True Detective',
        publishingYear: 2014,
        rating: 9,
        watched: false,
      },
      {
        title: 'Game of Thrones',
        publishingYear: 2011,
        rating: 9.3,
        watched: true,
      },
      {
        title: 'Chernobyl',
        publishingYear: 2019,
        rating: 9.4,
        watched: true,
      },
    ];
    const spy = jest.spyOn(console, 'table');
    printTvShowsWithHighestRating(tvShows);
    expect(spy).toHaveBeenCalledWith(highRatedShows);
  });

  it('should print an array of TV shows first published before 2015', () => {
    const publishedBefore2015 = [
      {
        title: 'True Detective',
        publishingYear: 2014,
        rating: 9,
        watched: false,
      },
      {
        title: 'Game of Thrones',
        publishingYear: 2011,
        rating: 9.3,
        watched: true,
      },
    ];
    const spy = jest.spyOn(console, 'table');
    printTvShowsFirstPublishedBeforeYear(tvShows, 2015);
    expect(spy).toHaveBeenCalledWith(publishedBefore2015);
  });
});

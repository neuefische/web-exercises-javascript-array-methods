import { jest } from '@jest/globals';
import printMovies from './1-for-each-basics/exercise';
import printMoviesWithIndex from './2-for-each-advanced/exercise';
import printFilteredGrades from './3-filter-basics/exercise';
import {
  tvShows,
  printWatchedTvShows,
  printTvShowsWithHighestRating,
  printTvShowsFirstPublishedBeforeYear,
} from './4-filter-advanced/exercise';

describe('1-for-each-basics', () => {
  it('should output a list of movies', () => {
    const testMovies = [
      'Harry Potter I',
      'Harry Potter II',
      'Harry Potter III',
    ];
    const spy = jest.spyOn(console, 'log');
    printMovies(testMovies);

    expect(spy).toHaveBeenCalledTimes(testMovies.length);
  });
});

describe('2-for-each-advanced', () => {
  it('should output a list of movies preceded by their index', () => {
    const testMovies = [
      'Harry Potter I',
      'Harry Potter II',
      'Harry Potter III',
    ];
    const spy = jest.spyOn(console, 'log');
    printMoviesWithIndex(testMovies);

    expect(spy).toHaveBeenLastCalledWith(
      expect.stringMatching(/3\..*Harry Potter III/)
    );
  });
});

describe('3-filter-basics', () => {
  it('should print two arrays', () => {
    const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 3, 2.4, 4.1, 6];

    const spy = jest.spyOn(console, 'table');
    printFilteredGrades(grades);

    expect(spy).toHaveBeenCalledTimes(2);
  });
  it('should print one array that only includes grades lower than 3', () => {
    const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 3, 2.4, 4.1, 6];
    const higherGrades = [1, 1.3, 1.7, 2.1, 2.4];

    const spy = jest.spyOn(console, 'table');
    printFilteredGrades(grades);

    expect(spy).toHaveBeenCalledWith(higherGrades);
  });

  it('should print one array that includes only the grades greater or equal than three ', () => {
    const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 3, 2.4, 4.1, 6];
    const lowerGrades = [5, 3.7, 3, 4.1, 6];

    const spy = jest.spyOn(console, 'table');
    printFilteredGrades(grades);

    expect(spy).toHaveBeenCalledWith(lowerGrades);
  });
});

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

import { jest } from '@jest/globals';
import printMovies from './1-for-each-basics/exercise';
import printMoviesWithIndex from './2-for-each-advanced/exercise';
import printFilteredGrades from './3-filter-basics/exercise';

describe('1-for-each-basics', () => {
  it('should output a list of movies', () => {
    const testMovies = [
      'Harry Potter I',
      'Harry Potter II',
      'Harry Potter III',
    ];
    const log = jest.spyOn(console, 'log');
    printMovies(testMovies);
    expect(log).toHaveBeenCalledTimes(testMovies.length);
  });
});

describe('2-for-each-advanced', () => {
  it('should output a list of movies preceded by their index', () => {
    const testMovies = [
      'Harry Potter I',
      'Harry Potter II',
      'Harry Potter III',
    ];
    const log = jest.spyOn(console, 'log');
    printMoviesWithIndex(testMovies);

    expect(log).toHaveBeenLastCalledWith(
      expect.stringMatching(/3\..*Harry Potter III/)
    );
  });
});

describe.only('3-filter-basics', () => {
  it('should print two arrays', () => {
    const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 3, 2.4, 4.1, 6];

    const spy = jest.spyOn(console, 'table');
    printFilteredGrades(grades);
    expect(spy).toHaveBeenCalledTimes(2);
  });
  it('should print one array that only includes grades lower than 3 ', () => {
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

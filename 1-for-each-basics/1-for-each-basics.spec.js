import { jest } from '@jest/globals';
import printMovies from './exercise';

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

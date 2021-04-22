import { jest } from '@jest/globals';
import printMoviesWithIndex from './exercise';

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
